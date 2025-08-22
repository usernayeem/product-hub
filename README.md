# ProductHub

A modern full-stack e-commerce platform built with Next.js 15, featuring product management, user authentication, and a responsive design with dark mode support.

**Live Demo**: [https://product-hub.vercel.app/](https://product-hub.vercel.app/)

## 🚀 Features

- **Product Management**: Browse, view details, and add new products
- **Authentication**: Secure user registration and login with NextAuth.js
- **Dark Mode**: Seamless light/dark theme switching
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean interface built with TailwindCSS
- **Database Integration**: MongoDB for data persistence
- **API Routes**: RESTful endpoints for products and authentication
- **Turbopack**: Fast builds and development with Next.js Turbopack

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.5.0 (App Router), TailwindCSS 4
- **Backend**: Next.js API Routes, NextAuth.js 4.24.11
- **Database**: MongoDB 6.18.0
- **Authentication**: bcryptjs 3.0.2 for password hashing
- **Build Tool**: Turbopack (Next.js)
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18 above
- npm, yarn, pnpm, or bun
- MongoDB Atlas account
- Git

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/usernayeem/product-hub.git
cd my-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

**Generate NEXTAUTH_SECRET:**

```bash
openssl rand -base64 32
```

### 4. Database Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add your IP address to the whitelist
5. Update `MONGODB_URI` in `.env.local`

### 5. Run Development Server

```bash
npm run dev
# Uses Turbopack for fast development builds
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
# Uses Turbopack for optimized production builds
npm run start
```

### 7. Linting

```bash
npm run lint
# Run ESLint to check code quality
```

## 🗺️ Route Summary

### Public Routes

| Route            | Description                                       |
| ---------------- | ------------------------------------------------- |
| `/`              | Home page with hero section and featured products |
| `/products`      | Product listing page                              |
| `/products/[id]` | Individual product details page                   |
| `/auth/signin`   | User login page                                   |
| `/auth/signup`   | User registration page                            |

### Protected Routes

| Route                    | Description          | Access                   |
| ------------------------ | -------------------- | ------------------------ |
| `/dashboard/add-product` | Add new product form | Authenticated users only |

### API Endpoints

#### Products

| Method | Endpoint                   | Description                    |
| ------ | -------------------------- | ------------------------------ |
| `GET`  | `/api/products`            | Get all products               |
| `GET`  | `/api/products/[id]`       | Get single product             |
| `POST` | `/api/products/add`        | Create new product (protected) |
| `GET`  | `/api/products/highlights` | Get 4 newest products          |

#### Authentication

| Method     | Endpoint                  | Description       |
| ---------- | ------------------------- | ----------------- |
| `POST`     | `/api/auth/register`      | User registration |
| `GET/POST` | `/api/auth/[...nextauth]` | NextAuth handlers |

## 🏗️ Project Structure

```
my-app/
├── src/
│   ├── app/
│   │   ├── api/                  # API routes
│   │   │   ├── auth/            # Authentication endpoints
│   │   │   └── products/        # Product endpoints
│   │   ├── auth/                # Authentication pages
│   │   ├── dashboard/           # Protected dashboard pages
│   │   ├── products/            # Product pages
│   │   ├── layout.js            # Root layout
│   │   └── page.js              # Home page
│   ├── components/              # Reusable components
│   │   ├── AuthProvider.jsx     # Session provider
│   │   ├── Footer.jsx           # Footer component
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── ProductHighlights.jsx # Featured products
│   │   ├── ProtectedRoute.jsx   # Route protection
│   │   └── [other components]
│   └── lib/                     # Utility functions
│       ├── auth.js              # NextAuth configuration
│       ├── mongodb.js           # Database connection
│       └── users.js             # User management
├── .env.local                   # Environment variables
├── package.json                 # Dependencies and scripts
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # TailwindCSS configuration
└── README.md                    # Project documentation
```
