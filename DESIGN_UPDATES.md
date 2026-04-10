# Design Updates - Liên Tâm Gốm Frontend

## 📋 Tóm Tắt Thay Đổi

Frontend của letamgom đã được redesign theo layout và style từ **Ceramic Studio Template** (Cửa hàng đồ gốm.tempiweb).

## 🎨 Design Reference
- **Nguồn**: `Cửa hàng đồ gốm.tempiweb`
- **Platform**: Tempi Web Builder
- **Style**: Minimal, Clean, Modern

## 📝 Thay Đổi Chi Tiết

### 1. **Typography**
- **Heading Font**: Arimo (500 weight)
  - h1: 72px (desktop), 32px (mobile)
  - h2: 48px (desktop), 28px (mobile)
  - h3-h6: Scale down tương ứng
- **Body Font**: Quicksand (400 weight)
- **Google Fonts Integration**: index.html

### 2. **Color Palette**
```css
--color-black: rgba(0, 0, 0, 1)
--color-dark: rgba(0, 0, 0, 0.32)
--color-medium: rgba(0, 0, 0, 0.47)
--color-darker: rgba(0, 0, 0, 0.67)
--color-light: rgba(240, 239, 233, 1)
--color-accent: rgba(137, 107, 0, 1)
```

### 3. **Homepage (Home.jsx)**

#### Hero Section
- Full viewport height background image
- Centered content with text overlay
- "LIÊN TÂM GỐM" main heading
- "Hoa sen từ trầm tích, chạm đến lòng người" subtitle
- "Khám Phá Bộ Sưu Tập" CTA button (Black)
- 30% dark overlay on background

#### Collection Section
- "BỘ SƯU TẬP" title (48px)
- Products grid (4 columns desktop, 2 mobile)
- Product cards with image, name, code, price
- Action buttons: "Thêm vào giỏ" (primary), "Xem chi tiết" (secondary)

#### About Snippet
- Introduction text section
- "Tìm hiểu thêm →" link

#### CTA Final
- Dark gradient background
- "Bắt Đầu Hành Trình" section
- Two action buttons

### 4. **Header (Header.jsx)**
- Clean white background with bottom border
- Logo: "LIÊN TÂM GỐM" text (no image)
- Navigation: Trang Chủ, Giới Thiệu, Sản Phẩm, Liên Hệ
- Cart icon with count badge
- Login link
- Mobile hamburger menu

### 5. **Footer (Footer.jsx)**
- Light gray background (#f0f0f0)
- Dark text (#333)
- Simple layout with company info, links, contact
- Social links with border style

### 6. **Products Page (Products.jsx)**
- Simple layout with sidebar filters
- Product list with image, name, code, price
- Sort and filter controls
- Responsive design

### 7. **Global Styles (App.css)**
- Removed gradient backgrounds
- Cleaner color palette
- Google Fonts integration
- Modern, minimal aesthetic

## 🔄 Migration Checklist

- [x] Update typography (Arimo + Quicksand)
- [x] Update color palette
- [x] Redesign HomePage layout
- [x] Update Header component
- [x] Update Footer styling
- [x] Update Products page design
- [x] Update CSS for Products grid
- [x] Add Google Fonts import
- [x] Mobile responsive adjustments
- [x] Remove old gradient backgrounds
- [x] Implement new button styles

## 📱 Responsive Breakpoints

- **Desktop**: 1232px max-width
- **Tablet**: 1024px - 768px
- **Mobile**: < 768px

## 🎯 Key Design Elements

1. **Spacing**: 16px base unit, 60px sections
2. **Border Radius**: Mostly 2px (minimal)
3. **Box Shadows**: Subtle (0 2px 8px rgba(0,0,0,0.05))
4. **Transitions**: 0.3s ease for interactions
5. **Font Sizes**:
   - Desktop H1: 72px
   - Desktop H2: 48px
   - Desktop P: 16px (Quicksand)
   - Mobile H1: 32px
   - Mobile H2: 28px

## 📸 Layout Structure

```
Header (70px sticky)
├── Logo
├── Nav Menu
└── Actions (Cart, Login)

Main Content
├── Hero Section (100vh)
├── Collection Section
│   └── Products Grid (4 cols)
├── About Snippet
└── CTA Section

Footer
├── Company Info
├── Links
└── Contact Info
```

## 🔧 Configuration

- Max container width: 1232px
- Padding: 0 16px
- Gap: 2rem (sections), 24px (grid)
- Header height: 70px (desktop), 60px (mobile)

## 📝 Notes

- All product images use background fit: cover
- Hover states on products show subtle lift effect
- Mobile menu collapses into hamburger
- Forms use clean minimal style
- All text colors use CSS variables for consistency
- Buttons have no text-transform, uses natural case

## 🚀 Next Steps

1. Test all pages on mobile devices
2. Optimize images for web
3. Add loading states
4. Implement animations
5. Test accessibility (WCAG)
6. Performance optimization
