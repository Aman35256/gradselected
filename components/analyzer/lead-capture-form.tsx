'use client'

import { useState } from 'react'
import { CheckCircle2, Phone, Send } from 'lucide-react'

export function LeadCaptureForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [contactMethod, setContactMethod] = useState<'Call' | 'WhatsApp' | 'Email'>('WhatsApp')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and phone number.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-secondary/50 p-5 text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-primary text-primary-foreground mb-3">
          <CheckCircle2 className="size-6" />
        </div>
        <h4 className="text-base font-bold text-ink">Thank you, {name}!</h4>
        <p className="mt-1 text-xs text-muted-foreground max-w-sm mx-auto">
          An MBAConnectIndia senior counsellor will reach out via {contactMethod} to review your profile and share tailored strategy recommendations.
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            <Phone className="size-3.5" /> Call Advisor Directly (+91 98765 43210)
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-background p-4 sm:p-5 space-y-3.5">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-primary">Optional Consultation</p>
        <h4 className="text-base font-bold text-ink">Get My Detailed Assessment</h4>
        <p className="text-xs text-muted-foreground">
          Request a 1-on-1 profile strategy consultation with an expert mentor.
        </p>
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="leadName" className="block text-[0.72rem] font-bold uppercase text-ink mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="leadName"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="leadPhone" className="block text-[0.72rem] font-bold uppercase text-ink mb-1">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="leadPhone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="leadEmail" className="block text-[0.72rem] font-bold uppercase text-ink mb-1">
            Email Address
          </label>
          <input
            id="leadEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. rahul@example.com"
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="leadContactPref" className="block text-[0.72rem] font-bold uppercase text-ink mb-1">
            Preferred Contact
          </label>
          <select
            id="leadContactPref"
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value as any)}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-ink focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="WhatsApp">WhatsApp</option>
            <option value="Call">Direct Phone Call</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90"
      >
        <Send className="size-3.5" /> Request Detailed Profile Review
      </button>
    </form>
  )
}
