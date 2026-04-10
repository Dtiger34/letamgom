# Liên Tâm Gốm - Frontend

Frontend Application for Liên Tâm Gốm - Vietnamese Ceramic Ecommerce Platform

## 📋 Features

- 🏠 Landing Page with featured products
- 📦 Product Listing with filtering and sorting
- 🔍 Product Detail Pages
- 🛒 Shopping Cart Management
- 💳 Checkout & Payment Processing
- ✅ Order Confirmation
- 📞 Contact Form
- 👤 User Authentication (Login/Register)
- 👨‍💼 Admin Dashboard
  - Dashboard with statistics
  - Order Management
  - Product Management
  - User Management

## 🛠️ Tech Stack

- **React 19** - UI Library
- **React Router v6** - Client-side routing
- **Vite** - Build tool
- **CSS3** - Styling (Responsive Design)
- **Context API** - State Management

## 📦 Installation

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Steps

1. **Install dependencies**
```bash
cd frontend
npm install
```

2. **Create .env file**
```bash
cp .env.example .env
# Update VITE_API_URL to match your backend URL
```

3. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🚀 Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx                    # Landing page
│   ├── About.jsx                   # About page
│   ├── public/
│   │   ├── product/
│   │   │   ├── Products.jsx        # Product listing
│   │   │   └── ProductDetail.jsx   # Product detail
│   │   ├── cart/
│   │   │   ├── Cart.jsx            # Shopping cart
│   │   │   ├── Checkout.jsx        # Checkout form
│   │   │   └── ThankYou.jsx        # Order confirmation
│   │   ├── contact/
│   │   │   └── Contact.jsx         # Contact page
│   │   └── auth/
│   │       ├── Login.jsx           # Login page
│   │       └── Regist.jsx          # Registration page
│   └── admin/
│       ├── AdminLayout.jsx         # Admin dashboard layout
│       ├── Dashboard.jsx           # Dashboard home
│       ├── OrderManagement.jsx     # Order management
│       ├── ProductManagement.jsx   # Product management
│       └── UserManagement.jsx      # User management
├── components/
│   ├── Header.jsx                  # Navigation header
│   ├── Footer.jsx                  # Footer
│   └── ...                         # Other components
├── service/
│   ├── config.js                   # API configuration
│   ├── productAPI.js               # Product endpoints
│   ├── authAPI.js                  # Auth endpoints
│   ├── orderAPI.js                 # Order endpoints
│   ├── userAPI.js                  # User endpoints
│   └── contactAPI.js               # Contact endpoints
├── context/
│   └── CartContext.jsx             # Cart state management
└── App.jsx                         # Main app component
```

## 🔌 API Integration

The frontend connects to a Node.js/Express backend. Configure the API URL in `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### Available Endpoints

- **Products**: `/products`, `/products/:id`
- **Auth**: `/auth/login`, `/auth/register`
- **Orders**: `/orders`, `/orders/:id`
- **Users**: `/users`, `/users/:id`
- **Contact**: `/contact`

## 🎨 Design System

### Colors
- Primary: `#8B6F47` (Brown)
- Secondary: `#C4A76B` (Beige)
- Dark: `#3d3d3d`
- Light: `#f5f5f5`

### Typography
- Headline Font: Segoe UI
- Body Font: Segoe UI

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔐 Authentication

- JWT token-based authentication
- Tokens stored in localStorage
- Admin role verification for protected routes

## 🚦 Available Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📝 Notes

- All prices are in Vietnamese Dong (VND)
- Times are in Vietnamese locale
- Admin access requires role='admin'
- Each ceramic product is handmade and unique

## 🤝 Contributing

For development changes, follow the existing code style and component structure.

## 📄 License

© 2024 Liên Tâm Gốm. All rights reserved.
