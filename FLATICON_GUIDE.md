# Hướng dẫn sử dụng Flaticon UIcons

## Tổng quan
Flaticon UIcons là một bộ icon miễn phí với hơn 13,000 icon đẹp mắt, được tối ưu cho web development.

## Cài đặt
```bash
npm install @flaticon/flaticon-uicons
```

## Cấu hình CSS
Đã được cấu hình trong `src/styles/global.scss`:
```scss
@import '~@flaticon/flaticon-uicons/css/regular/rounded';
```

## Cách sử dụng cơ bản

### 1. Cú pháp HTML
```html
<i class="fi fi-rr-icon-name"></i>
```

### 2. Với React/TypeScript
```tsx
// Component đơn giản
<i className="fi fi-rr-user"></i>

// Với Tailwind CSS
<i className="fi fi-rr-heart text-2xl text-red-500"></i>

// Với hover effects
<i className="fi fi-rr-star text-3xl text-yellow-500 hover:text-yellow-700 transition-colors cursor-pointer"></i>
```

## Các style có sẵn

| Prefix | Mô tả | Ví dụ |
|--------|-------|-------|
| `fi-rr-` | Regular Rounded | `fi-rr-user` |
| `fi-rs-` | Regular Straight | `fi-rs-user` |
| `fi-br-` | Bold Rounded | `fi-br-user` |
| `fi-bs-` | Bold Straight | `fi-bs-user` |
| `fi-sr-` | Solid Rounded | `fi-sr-user` |
| `fi-ss-` | Solid Straight | `fi-ss-user` |
| `fi-tr-` | Thin Rounded | `fi-tr-user` |
| `fi-ts-` | Thin Straight | `fi-ts-user` |
| `fi-brands-` | Brand icons | `fi-brands-facebook` |

## Danh sách icon phổ biến

### Navigation & UI
- `fi-rr-home` - Home
- `fi-rr-user` - User
- `fi-rr-settings` - Settings
- `fi-rr-menu` - Menu
- `fi-rr-search` - Search
- `fi-rr-arrow-left` - Arrow Left
- `fi-rr-arrow-right` - Arrow Right
- `fi-rr-arrow-up` - Arrow Up
- `fi-rr-arrow-down` - Arrow Down

### Communication
- `fi-rr-envelope` - Mail
- `fi-rr-phone-call` - Phone
- `fi-rr-comment` - Comment
- `fi-rr-chat` - Chat
- `fi-rr-video-camera` - Video Call

### Social & Media
- `fi-rr-heart` - Heart/Like
- `fi-rr-star` - Star
- `fi-rr-share` - Share
- `fi-rr-bookmark` - Bookmark
- `fi-rr-thumbs-up` - Thumbs Up

### Actions
- `fi-rr-plus` - Add/Plus
- `fi-rr-minus` - Minus
- `fi-rr-edit` - Edit
- `fi-rr-trash` - Delete
- `fi-rr-check` - Check
- `fi-rr-cross` - Close

## Ví dụ thực tế trong dự án

### Button với icon
```tsx
const IconButton = ({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
  >
    <i className={`fi ${icon}`}></i>
    {label}
  </button>
);

// Sử dụng
<IconButton icon="fi-rr-heart" label="Like" onClick={() => console.log('Liked!')} />
```

### Navigation menu
```tsx
const navigationItems = [
  { icon: 'fi-rr-home', label: 'Home', href: '/' },
  { icon: 'fi-rr-user', label: 'Profile', href: '/profile' },
  { icon: 'fi-rr-settings', label: 'Settings', href: '/settings' },
];

const Navigation = () => (
  <nav className="flex gap-4">
    {navigationItems.map((item) => (
      <a key={item.href} href={item.href} className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
        <i className={`fi ${item.icon}`}></i>
        {item.label}
      </a>
    ))}
  </nav>
);
```

### Card với icon
```tsx
const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <i className={`fi ${icon} text-4xl text-blue-600 mb-4`}></i>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
```

## Tùy chỉnh kích thước và màu sắc

### Với Tailwind CSS
```tsx
// Kích thước
<i className="fi fi-rr-user text-sm"></i>    // Small
<i className="fi fi-rr-user text-lg"></i>    // Large
<i className="fi fi-rr-user text-2xl"></i>   // Extra Large
<i className="fi fi-rr-user text-4xl"></i>   // 4X Large

// Màu sắc
<i className="fi fi-rr-heart text-red-500"></i>
<i className="fi fi-rr-star text-yellow-500"></i>
<i className="fi fi-rr-user text-blue-600"></i>
```

### Với CSS tùy chỉnh
```css
.custom-icon {
  font-size: 24px;
  color: #3b82f6;
}

.custom-icon:hover {
  color: #1d4ed8;
  transform: scale(1.1);
}
```

## Lưu ý quan trọng

1. **Performance**: Chỉ import CSS style mà bạn thực sự sử dụng
2. **Accessibility**: Luôn thêm `aria-label` hoặc text mô tả cho screen readers
3. **Responsive**: Sử dụng responsive classes của Tailwind để điều chỉnh kích thước
4. **Consistency**: Chọn một style nhất quán trong toàn bộ dự án

## Tìm icon
- Truy cập [Flaticon.com](https://www.flaticon.com/uicons) để xem tất cả icon có sẵn
- Copy tên icon và thay thế vào cú pháp `fi-rr-[icon-name]`

## Demo
Xem file `src/components/FlaticonDemo.tsx` để xem ví dụ trực quan về cách sử dụng.
