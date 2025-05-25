import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={495.87}
      xmlns="http://www.w3.org/2000/svg"
      height={685}
      viewBox="0 0 495.87 685"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient id="a" x1={0.5} y1={0} x2={0.5} y2={1}>
          <stop offset={0} stopColor={props.rootcolor} />
          <stop offset={1} stopColor={props.gradientcolor} />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          x={117}
          y={198}
          width={27}
          height={51}
          id="b"
        >
          <path fill="url(#a)" d="M0 0H27V51H0z" />
        </pattern>
      </defs>
      <path
        d="M117 198l.964 49.98 21.215 1.02 2.892-3.06L144 198h-27z"
        fill="url(#b)"
        className=""
      />
      <defs>
        <linearGradient id="c" x1={0.5} y1={0} x2={0.5} y2={1}>
          <stop offset={0} stopColor={props.rootcolor} />
          <stop offset={1} stopColor={props.gradientcolor} />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          x={353}
          y={200}
          width={27}
          height={51}
          patternTransform="matrix(-1 0 0 1 733 0)"
          id="d"
        >
          <path fill="url(#c)" d="M0 0H27V51H0z" />
        </pattern>
      </defs>
      <path
        d="M380 200l-.964 49.98-21.215 1.02-2.892-3.06L353 200h27z"
        fill="url(#d)"
        className=""
      />
      <g>
        <path
          d="M352.498 199.996c-4.665-5.923-8.156-12.553-13.216-17.616-9.271-9.274-21.101-12.41-34.24-12.313-38.829.286-77.662.21-116.492.059-21.402-.082-36.062 9.665-45.042 29.531-8.91.321-17.195.321-25.493.003-.025-.74-.038-1.163-.051-1.586-.319-12.773-.853-25.547-.881-38.321-.019-8.763 1.83-17.06 7.518-24.271 8.074-10.236 23.441-15.506 35.84-11.39 4.398 1.46 6.784 1.334 9.536-3.225 8.973-14.866 31.163-19.204 45.821-9.146 3.774 2.59 5.901 2.092 8.918-.827 11.538-11.166 26.821-13.212 40.88-5.493 2.704 1.485 5.182 3.683 7.207 6.032 2.715 3.152 4.864 3.288 8.378.928 11.812-7.935 27.468-8.024 37.916-.16 3.657 2.753 6.786 6.382 9.574 10.053 1.935 2.549 3.488 3.212 6.594 2.24 17.063-5.337 34.949 2.607 41.708 18.84 1.869 4.49 2.725 9.656 2.888 14.551.404 12.088-.051 24.203.231 36.297.111 4.758-1.713 6.063-6.146 5.89-6.984-.273-13.987-.075-21.448-.076z"
          fill={props.rootcolor}
          className=""
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
