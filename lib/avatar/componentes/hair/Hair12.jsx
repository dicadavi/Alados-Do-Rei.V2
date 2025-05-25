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
      <rect width={495} height={684} ry={0} rx={0} className="" />
      <defs>
        <linearGradient id="a" x1={0.5} y1={0} x2={0.5} y2={1}>
          <stop offset={0} stopColor={props.rootcolor} />
          <stop offset={1} stopColor={props.gradientcolor} />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          x={353}
          y={193}
          width={27}
          height={66}
          id="b"
        >
          <path fill="url(#a)" d="M0 0H27V66H0z" />
        </pattern>
      </defs>
      <path
        d="M380 210.311v43.82L356.375 259l-1.515-7.639-1.86-51.869L379.036 193l.964 17.311z"
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
          x={116}
          y={196}
          width={28}
          height={59}
          id="d"
        >
          <path fill="url(#c)" d="M0 0H28V59H0z" />
        </pattern>
      </defs>
      <path
        d="M117 200l-1 50.5 24.5 4.5 1.571-7.06L144 200l-27-4v4z"
        fill="url(#d)"
        className=""
      />
      <g>
        <path
          d="M352.913 200.177c-8.028-16.448-20.506-26.556-38.568-29.385-2.12-.332-4.31-.288-6.468-.289-39.602-.015-79.205.127-118.807-.066-21.426-.105-35.919 9.8-45.105 29.387-7.025.223-13.351-.033-19.65.268-4.618.221-7.036-1.11-6.327-6.079-.328-5.906-.911-11.812-.939-17.72-.11-23.495-.112-46.99-.03-70.485.083-23.876 22.818-40.315 45.275-32.608 3.686 1.265 6.789 4.146 10.382 5.8 1.555.716 4.255 1.012 5.443.143 14.669-10.726 28.657-10.736 43.718-.045 1.222.867 4.348.713 5.515-.258 12.52-10.408 30.393-9.882 42.889.107 2.13 1.703 3.456 1.465 5.595-.04 14.855-10.446 28.367-10.428 43.399.067 2.198 1.534 3.433 1.516 5.559-.135 10.422-8.091 22.142-10.274 34.226-4.906 13.46 5.979 20.882 16.764 20.944 31.806.121 29.326-.048 58.655.121 87.981.026 4.677-1.234 6.612-6.178 6.377-6.813-.325-13.657-.007-20.994.08z"
          fill={props.rootcolor}
          className=""
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
