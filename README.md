# MBAConnectIndia

> **Academic counselling and admissions guidance platform**

MBAConnectIndia is a completed, production-ready website developed for **MBAConnectIndia**, an academic counselling business focused on helping students make informed higher-education and admissions decisions.

The platform provides a modern, responsive experience covering admissions guidance for management, engineering, medical, and international education pathways.

---

## 📌 Project Status

**Status: COMPLETED — PRODUCTION READY**

The website has been completed according to the agreed development scope and is ready for production use and client handover.

The repository may still use the development name `gradselected`, but the **official customer-facing business/product name is MBAConnectIndia**.

Any new feature, redesign, content change, maintenance request, integration, or additional development after completion should be treated as separate work unless otherwise agreed in writing.

---

## 🎯 Project Purpose

The purpose of MBAConnectIndia is to provide students with a clear and accessible platform for exploring higher-education opportunities and connecting with academic counsellors.

The website is structured around three major admission journeys:

- **MBA & B-School Admissions**
- **Engineering & Medical Admissions**
- **Foreign University Admissions**

The website combines informational content, admission-related data, student-focused sections, and direct counselling/contact actions into a single platform.

---

## ✨ Completed Features

### 🎓 MBA & B-School Admissions

A dedicated section for students exploring MBA programs, business schools, and management admissions in India.

### 🏥 Engineering & Medical Admissions

A dedicated admission journey for students considering engineering and medical education and related colleges.

### 🌎 Foreign University Admissions

A dedicated section for students interested in studying abroad and exploring international university opportunities.

### 🏫 College & University Information

Structured admission and institution information is used to support students during their college-selection journey.

### 👨‍🏫 Academic Counselling

The website provides clear calls-to-action for students who want to speak with an advisor or seek personalised guidance.

### 📱 Responsive Website

The completed interface is designed for:

- Desktop
- Laptop
- Tablet
- Mobile devices

### 🎨 Modern User Interface

The website uses a consistent visual system with reusable components, responsive layouts, icons, imagery, cards, buttons, and admission-focused content sections.

### 📊 Admission Data

The project includes structured JSON data for admission-related information.

The data workflow supports synchronisation from publicly accessible Google Sheets.

### 📈 Analytics

Vercel Analytics is integrated for website analytics and usage insights.

---

## 🛠️ Technology Stack

| Technology           | Purpose                               |
| -------------------- | ------------------------------------- |
| **Next.js**          | Web application framework             |
| **React**            | User interface                        |
| **TypeScript**       | Type-safe development                 |
| **Tailwind CSS**     | Styling and responsive design         |
| **shadcn/ui**        | Reusable UI components                |
| **Lucide React**     | Interface icons                       |
| **Vercel Analytics** | Website analytics                     |
| **Google Sheets**    | Managed admission/college data source |
| **JSON**             | Application data storage              |

---

## 📁 Project Structure

```text
gradselected/
├── app/                    # Next.js application routes and pages
├── components/             # Reusable UI components
├── data/                   # Admission and college JSON data
├── lib/                    # Shared utilities and application logic
├── public/                 # Images and static assets
├── scripts/                # Data synchronisation scripts
├── components.json         # UI component configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 🚀 Local Setup

Although the project is completed, the following instructions allow the owner or future developer to run the source code locally.

### Prerequisites

Install:

- Node.js
- npm / pnpm / yarn
- Git

### Clone the repository

```bash
git clone https://github.com/Aman35256/gradselected.git
cd gradselected
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The website will normally be available at:

```text
http://localhost:3000
```

---

## 📦 Available Scripts

| Command            | Purpose                                             |
| ------------------ | --------------------------------------------------- |
| `npm run dev`      | Starts the development server                       |
| `npm run build`    | Creates the production build                        |
| `npm run start`    | Starts the production server                        |
| `npm run sync`     | Synchronises admission data                         |
| `npm run prebuild` | Runs data synchronisation before a production build |

### Production build

```bash
npm run build
npm run start
```

---

## 🔄 Data Synchronisation

The project contains a data synchronisation workflow in:

```text
scripts/sync-sheets.mjs
```

The script retrieves CSV data from publicly accessible Google Sheets and generates application JSON data.

The project currently contains data categories such as:

```text
data/
├── colleges.json
├── engineering.json
└── foreign.json
```

To manually refresh the data:

```bash
npm run sync
```

### Important

The Google Sheet used as the source must remain publicly accessible for the synchronisation process to continue working.

If the sheet URL, structure, column names, or permissions are changed, the synchronisation script may require modification.

---

# 🌐 Production Deployment

The application is designed to run as a standard Next.js production application and can be deployed using a compatible hosting provider such as Vercel.

A typical production deployment involves:

```bash
npm install
npm run build
npm run start
```

For a managed deployment, connect the GitHub repository to the hosting provider and configure the production domain and any required environment variables.

---

## 🔐 Security & Credentials

**Never commit private credentials or API keys to this repository.**

Production configuration should use environment variables where applicable.

Before modifying or deploying the project:

- Do not commit `.env` files containing secrets.
- Do not hard-code API keys.
- Review access permissions for external services.
- Keep third-party credentials under the business owner's control.
- Review any publicly accessible data sources before changing their permissions.

If credentials are required for future services, they should be configured by the website owner or authorised administrator through the relevant service.

---

# 🤝 Client Handover

This project is intended to be handed over to **MBAConnectIndia** as a completed website.

The handover may include, depending on the agreed arrangement:

- Website source code
- GitHub repository
- Production deployment
- Website assets contained in the repository
- Application configuration
- Data synchronisation scripts
- Documentation contained in this repository

### Ownership

Ownership and intellectual-property rights should be determined by the separate written agreement between the developer and MBAConnectIndia.

This README documents the technical project and **does not itself constitute an ownership-transfer agreement**.

Where an ownership-transfer agreement applies, that agreement takes precedence over this README regarding ownership, intellectual property, payment, liability, maintenance, and other contractual matters.

---

# 🧾 Third-Party Services

The website uses or may depend on third-party services and technologies.

Examples include:

- Next.js ecosystem
- Vercel / Vercel Analytics
- Google Sheets
- External image/media assets where applicable
- npm packages and open-source dependencies

Third-party services remain subject to their respective terms, licenses, availability, and policies.

The transfer of website source code does not automatically transfer ownership of third-party accounts, subscriptions, domains, hosting accounts, API keys, or external services.

Those accounts should be transferred or controlled separately where applicable.

---

# 🔧 Maintenance & Future Changes

The website is considered complete as delivered.

The following are examples of work that may constitute **additional development** after completion:

- New website sections
- New admission categories
- Major design changes
- New integrations
- Backend development
- Database implementation
- Admin dashboards
- Authentication systems
- New APIs
- New forms or workflows
- Significant content restructuring
- New third-party services
- Performance optimisation beyond the completed scope
- Ongoing maintenance or support

Any such work should be agreed separately between the parties.

---

# 🧪 Final Production Checklist

Before final handover, the following should be verified:

- [ ] Production website is accessible
- [ ] Domain is configured correctly
- [ ] All major pages load correctly
- [ ] MBA section works correctly
- [ ] Engineering & Medical section works correctly
- [ ] Foreign admissions section works correctly
- [ ] Advisor/contact buttons work correctly
- [ ] Forms and external links work correctly
- [ ] Mobile responsiveness has been checked
- [ ] Images and assets load correctly
- [ ] Admission data is available
- [ ] Data synchronisation works where required
- [ ] Analytics is configured
- [ ] Production build completes successfully
- [ ] No private credentials are committed to GitHub
- [ ] Client has received the required project access/details

---

# 📋 Repository Information

**Business / Product:** MBAConnectIndia

**Repository:** `gradselected`

**Repository Owner:** Aman35256

**Project Type:** Academic Counselling & Admissions Website

**Project Status:** Completed / Production Ready

**Primary Framework:** Next.js

---

# ⚖️ Legal & Licensing Note

This repository's final license and ownership terms should be kept consistent with the written agreement governing the project.

If the source code is transferred exclusively to MBAConnectIndia, the repository's `LICENSE` file and GitHub repository settings should be reviewed and updated accordingly.

Third-party libraries and dependencies remain subject to their individual licenses. Ownership of the custom website implementation does not necessarily transfer rights to third-party software, services, trademarks, or externally hosted content.

For legal interpretation, use the signed agreement between the relevant parties rather than this technical README.

---

# 👨‍💻 Developer Handover Note

The website has been delivered as a completed project for MBAConnectIndia.

The source code is structured to allow the business owner or a future developer to:

1. Clone the repository.
2. Install the dependencies.
3. Run the project locally.
4. Build a production version.
5. Deploy the application.
6. Update admission data through the configured data workflow.
7. Continue development independently if required.

---

## 📞 Business Identity

**MBAConnectIndia**

Academic counselling and admissions guidance for students pursuing opportunities in India and abroad.

> **Helping students make better education decisions.**

---

© MBAConnectIndia. Project documentation prepared for the completed website handover.
