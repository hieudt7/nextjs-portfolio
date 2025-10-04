import React from 'react';
import { cn } from '@/libs/utils';

export interface IconProps {
  /**
   * Tên icon (không bao gồm prefix)
   * Ví dụ: 'user', 'heart', 'star'
   */
  name: string;
  
  /**
   * Style của icon
   * @default 'rr' (regular rounded)
   */
  variant?: 'rr' | 'rs' | 'br' | 'bs' | 'sr' | 'ss' | 'tr' | 'ts' | 'brands';
  
  /**
   * Kích thước của icon
   * @default 'base'
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  
  /**
   * Màu sắc của icon
   */
  color?: string;
  
  /**
   * CSS classes bổ sung
   */
  className?: string;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Accessibility label
   */
  'aria-label'?: string;
}

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm', 
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
};

/**
 * Component Icon sử dụng Flaticon UIcons
 * 
 * @example
 * ```tsx
 * <Icon name="user" />
 * <Icon name="heart" variant="sr" size="2xl" color="text-red-500" />
 * <Icon name="facebook" variant="brands" size="lg" onClick={() => console.log('clicked')} />
 * ```
 */
const Icon: React.FC<IconProps> = ({
  name,
  variant = 'rr',
  size = 'base',
  color,
  className,
  onClick,
  'aria-label': ariaLabel,
  ...props
}) => {
  const iconClass = `fi fi-${variant}-${name}`;
  const sizeClass = sizeClasses[size];
  
  return (
    <i
      className={cn(
        iconClass,
        sizeClass,
        color,
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      aria-label={ariaLabel}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      {...props}
    />
  );
};

export default Icon;

// Export một số icon thường dùng để tiện sử dụng
export const CommonIcons = {
  User: (props: Omit<IconProps, 'name'>) => <Icon name="user" {...props} />,
  Home: (props: Omit<IconProps, 'name'>) => <Icon name="home" {...props} />,
  Heart: (props: Omit<IconProps, 'name'>) => <Icon name="heart" {...props} />,
  Star: (props: Omit<IconProps, 'name'>) => <Icon name="star" {...props} />,
  Search: (props: Omit<IconProps, 'name'>) => <Icon name="search" {...props} />,
  Settings: (props: Omit<IconProps, 'name'>) => <Icon name="settings" {...props} />,
  Mail: (props: Omit<IconProps, 'name'>) => <Icon name="envelope" {...props} />,
  Phone: (props: Omit<IconProps, 'name'>) => <Icon name="phone-call" {...props} />,
  Menu: (props: Omit<IconProps, 'name'>) => <Icon name="menu" {...props} />,
  Close: (props: Omit<IconProps, 'name'>) => <Icon name="cross" {...props} />,
  Check: (props: Omit<IconProps, 'name'>) => <Icon name="check" {...props} />,
  Plus: (props: Omit<IconProps, 'name'>) => <Icon name="plus" {...props} />,
  Edit: (props: Omit<IconProps, 'name'>) => <Icon name="edit" {...props} />,
  Delete: (props: Omit<IconProps, 'name'>) => <Icon name="trash" {...props} />,
} as const;
