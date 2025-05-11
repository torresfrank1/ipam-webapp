# IPAM (IP Address Management) Web App

A lightweight, self-deployable web-based IPAM system built with HTML/CSS/JS and powered by Supabase.

---

## 🚀 Features
- Store and manage Subnets and IP addresses
- Group by Location and VLAN
- Add/edit/delete subnets and IPs inline
- Authentication via Supabase Auth
- User role support (Admin, Viewer, etc.)
- Export-ready backend

---

## 📦 Requirements
- A free [Supabase](https://supabase.com) account
- A web server (or run locally via Live Server/VSCode)
- Modern browser with JavaScript enabled

---

## 🔧 Installation

### 1. Clone or Download the Repo
```bash
git clone https://github.com/your-username/ipam-app.git
cd ipam-app
```

### 2. Setup Supabase Project
- Create a project at [supabase.com](https://supabase.com)
- Navigate to **Project Settings → API**
- Copy your **Project URL** and **Anon Key**

### 3. Run the Install Wizard
- Open `/public/install.html` in a browser
- Paste your Supabase URL and Anon Key
- The wizard will help you generate `src/db.js`
- Follow instructions to run `setup/schema.sql` in Supabase's SQL Editor

### 4. Launch the App
Open `/public/index.html` in your browser.

---

## 👥 User Management
- Add users through **Supabase → Authentication → Users**
- Admin users should be assigned `role_id = 1` in your internal user table (if used)
- The system currently supports basic user role segregation

---

## 📁 Project Structure
```
ipam-app/
├── public/             # Frontend pages (index, install, login)
├── src/                # JavaScript modules (auth, db, app logic)
├── setup/schema.sql    # Supabase table definitions
├── install/            # Optional JS installers/tools
└── README.md
```

---

## 🛡️ Security Notes
- Make sure to protect your Supabase keys appropriately
- Configure Row-Level Security (RLS) in Supabase if needed

---

## 📄 License
MIT
