import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.336 15.13a.98.98 0 00-1.672 0l-1.903 3.112c-1.307 2.139.232 4.883 2.739 4.883 2.506 0 4.046-2.744 2.738-4.883l-1.902-3.113z"
        fill={props.rootcolor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.74 20.751a1 1 0 011.226.707 7.139 7.139 0 008.743 5.048 1 1 0 01.518 1.932 9.139 9.139 0 01-11.193-6.462 1 1 0 01.707-1.225zM23 0a6 6 0 00-6 6v5a6 6 0 0012 0V6a6 6 0 00-6-6zm-1.924 6.5c0 1.225-.895 2.245-2.076 2.459V10.5a2.5 2.5 0 005 0v-3a2.5 2.5 0 00-3.331-2.359c.258.392.407.858.407 1.359zM6 0a6 6 0 016 6v5a6 6 0 01-12 0V6a6 6 0 016-6zm1.076 6.5c0 1.225-.895 2.245-2.076 2.459V10.5a2.5 2.5 0 005 0v-3a2.5 2.5 0 00-3.331-2.359c.258.392.407.858.407 1.359z"
        fill={props.rootcolor}
      />
    </svg>
  );
}

export default SvgComponent;
