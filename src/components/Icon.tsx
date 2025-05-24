import React from "react";
type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  dining: (props: IconProps) => (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          d="M1.64288 28.5713H31.3572"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M31 21H2C2 12.7152 8.49256 6 16.5008 6C24.509 6 31 12.7152 31 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M17 2V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  ),
};
