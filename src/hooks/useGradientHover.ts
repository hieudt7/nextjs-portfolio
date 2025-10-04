import { useEffect, useRef } from 'react';

interface GradientHoverOptions {
  gradientColor?: string;
  activeColor?: string;
}

/**
 * Hook để tạo hiệu ứng gradient hover slide từ trên xuống dưới
 * Giống như website geroldlight.themejunction.net
 */
export const useGradientHover = (options: GradientHoverOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const isActiveRef = useRef(false);

  const {
    gradientColor = 'linear-gradient(135deg, #8750f7 0%, #2a1454 100%)',
    activeColor = 'rgba(135, 80, 247, 0.1)'
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    const gradient = gradientRef.current;

    if (!container || !gradient) return;

    // Function để cập nhật vị trí gradient cho item được chỉ định
    const updateGradientPosition = (item: HTMLElement) => {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      
      const relativeTop = itemRect.top - containerRect.top;
      const itemHeight = itemRect.height;
      
      gradient.style.opacity = '1';
      gradient.style.visibility = 'visible';
      gradient.style.top = `${relativeTop}px`;
      gradient.style.height = `${itemHeight}px`;
      gradient.style.width = '100%';
      gradient.style.left = '0px';
    };

    // Function để set active item
    const setActiveItem = (activeItem: HTMLElement) => {
      // Xóa active class khỏi tất cả items
      const allItems = container.querySelectorAll('li[data-index]');
      allItems.forEach(item => item.classList.remove('active'));
      
      // Thêm active class vào item được chọn
      activeItem.classList.add('active');
      
      // Cập nhật vị trí gradient
      updateGradientPosition(activeItem);
    };

    // Khởi tạo với item đầu tiên active
    const firstItem = container.querySelector('li[data-index="0"]') as HTMLElement;
    if (firstItem) {
      setActiveItem(firstItem);
    }

    const handleItemMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const item = target.closest('li[data-index]') as HTMLElement;
      
      if (!item) return;

      isActiveRef.current = true;
      setActiveItem(item);
    };

    // Không có handleItemMouseLeave vì overlay luôn luôn hiển thị

    // Sử dụng event delegation để handle hover cho tất cả items
    container.addEventListener('mouseenter', handleItemMouseEnter, true);

    return () => {
      container.removeEventListener('mouseenter', handleItemMouseEnter, true);
    };
  }, [gradientColor, activeColor]);

  return { containerRef, gradientRef };
};
