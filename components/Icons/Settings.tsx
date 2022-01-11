import React from 'react';
import { Icon } from '../../types/Icon';

export default function Settings({ size, color }: Icon) {
  return (
    <svg
      width={size * 1.08}
      height={size}
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5669 19.5H10.5669M4.06689 5.5H8.40023H4.06689ZM23.5669 5.5H12.7336H23.5669ZM4.06689 12.5H17.0669H4.06689ZM23.5669 12.5H21.4002H23.5669ZM4.06689 19.5H6.23356H4.06689Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.5669 7.5C11.7636 7.5 12.7336 6.60457 12.7336 5.5C12.7336 4.39543 11.7636 3.5 10.5669 3.5C9.37032 3.5 8.40027 4.39543 8.40027 5.5C8.40027 6.60457 9.37032 7.5 10.5669 7.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19.2336 14.5C20.4302 14.5 21.4002 13.6046 21.4002 12.5C21.4002 11.3954 20.4302 10.5 19.2336 10.5C18.0369 10.5 17.0669 11.3954 17.0669 12.5C17.0669 13.6046 18.0369 14.5 19.2336 14.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.40019 21.5C9.5968 21.5 10.5669 20.6046 10.5669 19.5C10.5669 18.3954 9.5968 17.5 8.40019 17.5C7.20357 17.5 6.23352 18.3954 6.23352 19.5C6.23352 20.6046 7.20357 21.5 8.40019 21.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
