import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={51}
      height={23}
      viewBox="0 0 51 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 0h14.93A5.57 5.57 0 0124 5.57v2.563a4.006 4.006 0 013 0V5.57A5.57 5.57 0 0132.57 0H47.5a3.5 3.5 0 110 7H47v7a9 9 0 01-9 9h-2a9 9 0 01-9-9v-3.52l-.25-.2a2 2 0 00-2.5 0l-.25.2V14a9 9 0 01-9 9h-2a9 9 0 01-9-9V7h-.5a3.5 3.5 0 110-7zM29 10.013V14a7 7 0 007 7h2a7 7 0 007-7V5.57A3.57 3.57 0 0041.43 2h-8.86A3.57 3.57 0 0029 5.57V10.013zM9.57 2h8.86A3.57 3.57 0 0122 5.57V14a7 7 0 01-7 7h-2a7 7 0 01-7-7V5.57A3.57 3.57 0 019.57 2zM9 12.001a1 1 0 00-1 1v1a5 5 0 005 5h1a1 1 0 100-2h-1a3 3 0 01-3-3v-1a1 1 0 00-1-1zm-4-8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm42.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={props.rootcolor}
      />
    </svg>
  );
}

export default SvgComponent;
