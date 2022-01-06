import React from 'react';
import { Icon } from '../../types/Icon';

export default function Finance({ size, color }: Icon) {
  return (
    <svg
      width={size * 1.04}
      height={size}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.76426 17.5526L0.816895 21.2663V10.6053H4.76426V17.5526ZM11.3432 15.2284L9.27742 13.5358L7.39584 15.2032V5.55263H11.3432V15.2284ZM17.9222 13.1316L13.9748 16.9211V0.5H17.9222V13.1316ZM21.6195 12.8916L19.2379 10.6053H25.8169V16.9211L23.4616 14.66L13.9748 23.6916L9.409 19.8768L4.43532 24.5H0.816895L9.33005 16.4916L13.9748 20.2558"
        fill={color}
      />
    </svg>
  );
}
