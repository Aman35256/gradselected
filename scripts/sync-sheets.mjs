/**
 * sync-sheets.mjs
 *
 * Fetches data from the public Google Sheet (CSV export) and writes it to
 * data/colleges.json so the Next.js site can consume it at build time.
 *
 * Usage:
 *   node scripts/sync-sheets.mjs          (fetch live data)
 *   npm run sync                           (same, via package.json script)
 *
 * The sheet must be publicly shared ("Anyone with the link can view").
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ─── Sheet configuration ──────────────────────────────────────────────────────
const SHEET_ID = '1IWmOWe1UujJe6SwuV0AO_wD67eTKVSpei9ZYG2I2_YU'
const TABS = [
  { name: 'colleges', gid: '650330242' },
  { name: 'foreign', gid: '1166061734' },
]

// ─────────────────────────────────────────────────────────────────────────────

function csvToJson(csvText) {
  const lines = csvText.trim().split('\n').filter(Boolean)
  if (lines.length < 2) return []

  const headers = parseCSVLine(lines[0])

  return lines.slice(1).map((line) => {
    const values = parseCSVLine(line)
    const obj = {}
    headers.forEach((header, i) => {
      // Normalize header to camelCase key
      const key = header
        .trim()
        .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, (c) => c.toLowerCase())
      obj[key] = (values[i] ?? '').trim()
    })
    return obj
  })
}

function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }
  result.push(current)
  return result
}

async function syncTab({ name, gid }) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`
  console.log(`[sync] Fetching "${name}" from Google Sheets…`)

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch sheet tab "${name}": HTTP ${response.status}`)
  }

  const csvText = await response.text()
  const json = csvToJson(csvText)

  const outDir = path.join(ROOT, 'data')
  fs.mkdirSync(outDir, { recursive: true })

  const outPath = path.join(outDir, `${name}.json`)
  fs.writeFileSync(outPath, JSON.stringify(json, null, 2), 'utf-8')
  console.log(`[sync] ✓ Wrote ${json.length} rows → data/${name}.json`)

  return { name, count: json.length }
}

async function main() {
  console.log('[sync] Starting Google Sheets sync…\n')
  const results = []

  for (const tab of TABS) {
    try {
      const result = await syncTab(tab)
      results.push(result)
    } catch (err) {
      console.error(`[sync] ✗ Error syncing "${tab.name}":`, err.message)
      process.exit(1)
    }
  }

  console.log('\n[sync] All done!')
  results.forEach(({ name, count }) => console.log(`  • data/${name}.json — ${count} records`))
}

main()
