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
          x={354}
          y={210}
          width={27}
          height={38}
          patternTransform="matrix(-1 0 0 1 735 0)"
          id="b"
        >
          <path fill="url(#a)" d="M0 0H27V38H0z" />
        </pattern>
      </defs>
      <path
        d="M380.5 219l.5 24.5-2 4-2 .5h-21.5l-.5-3.5-1-34.5h20.5l6 9z"
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
          x={116.5}
          y={210}
          width={27}
          height={38}
          id="d"
        >
          <path fill="url(#c)" d="M0 0H27V38H0z" />
        </pattern>
      </defs>
      <path
        d="M117 219l-.5 24.5 2 4 2 .5H142l.5-3.5 1-34.5H123l-6 9z"
        fill="url(#d)"
        className=""
      />
      <g>
        <path
          d="M355.134 210.93c-15.595-3.305-31.108-7.085-46.804-9.812-28.979-5.035-58.259-6.522-87.629-5.246-26.256 1.14-51.791 6.616-77.707 14.075-8.344 2.628-15.945 5.104-23.837 7.65-.882.552-1.475 1.033-2.132 1.466-.064-.049-.198-.141-.198-.141-3.212.829-6.427 1.642-9.634 2.489-6.463 1.708-11.934-1.769-11.711-8.35.417-12.263.138-24.806 2.685-36.689 6.033-28.148 23.32-47.741 50.018-58.506 22.562-9.097 44.932-7.468 66.652 3.168 3.432 1.681 5.822 1.628 8.957-.784 22.359-17.206 47.844-24.58 75.812-22.091 23.545 2.094 44.213 11.619 62.141 27.065 20.315 17.503 31.632 39.883 35.772 66.093 1.166 7.377 1.825 14.836 2.639 22.266.669 6.113-2.975 9.427-9.06 8.135-3.405-.723-6.733-1.812-10.719-3.022-2.193-.805-3.762-1.323-5.62-2.051-6.734-2.044-13.179-3.879-19.625-5.715z"
          fill={props.rootcolor}
          className=""
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
