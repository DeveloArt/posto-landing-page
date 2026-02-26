import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", filled = false }) => {
  switch (name) {
    case 'favorite':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case 'star':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    case 'bolt':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M11 21h-1l1-7H7l5-11h1l-1 7h4l-5 11z" />
        </svg>
      );
    case 'verified':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-2.52-2.9L12 3 9.23 1.8 6.71 4.7l-3.61.81.34 3.68L1 12l2.44 2.79-.34 3.7 3.61.82L9.23 22.2 12 21l2.77 1.2 2.52-2.9 3.61-.81-.34-3.68L23 12zm-10 5l-4-4 1.41-1.41L13 14.17l6.59-6.59L21 9l-8 8z" />
        </svg>
      );
    case 'attach_money':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M12 3c-3.31 0-6 1.79-6 4 0 1.66 1.55 3.05 3.78 3.7L12 11.9V16c-1.66 0-3-.9-3-2H7c0 2.21 2.24 4 5 4s5-1.79 5-4c0-1.66-1.55-3.05-3.78-3.7L12 8.1V5c1.66 0 3 .9 3 2h2c0-2.21-2.24-4-5-4z" />
        </svg>
      );
    case 'timer':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth={filled ? 2.4 : 1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="13" r="7" />
          <path d="M12 10v4l2 2" />
          <path d="M9 3h6" />
        </svg>
      );
    case 'monitoring':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth={filled ? 2.4 : 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19h16" />
          <path d="M7 15l3-7 4 9 3-6" />
        </svg>
      );
    case 'water_drop':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />
        </svg>
      );
    case 'scale':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth={filled ? 2.4 : 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 16v4H8v-4" />
          <path d="M12 12v8" />
          <path d="M8 8h8" />
          <rect x="4" y="4" width="16" height="8" rx="1" />
        </svg>
      );
    case 'metabolism':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth={filled ? 2.4 : 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v4" />
          <path d="m4.93 10.93 2.83 2.83" />
          <path d="M2 18h2" />
          <path d="M20 18h2" />
          <path d="m19.07 10.93-2.83 2.83" />
          <path d="M22 22H2" />
          <path d="m16 6-4 4" />
          <path d="M12 12v4" />
          <circle cx="12" cy="18" r="4" />
        </svg>
      );
    case 'restaurant_menu':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M8.1 13.34L2 21h3.66l4.24-5.52z" />
          <path d="M14.88 3.29a3 3 0 0 1 4.24 0l1.59 1.59a3 3 0 0 1 0 4.24L12 18.83l-4.24-4.24z" />
        </svg>
      );
    case 'ios':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
      );
    case 'android':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
      );
    case 'check-circle':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};