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
      <path
        d="M265 308h-41l-35 9 5 43 57 5 33-16-19-41z"
        fill={props.rootcolor}
        className=""
      />
      <defs>
        <linearGradient id="MoustacheA" x1={0.5} y1={0} x2={0.5} y2={1}>
          <stop offset={0} stopColor={props.gradientcolor} />
          <stop offset={1} stopColor={props.rootcolor} />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          x={113.5}
          y={247}
          width={22.5}
          height={38.5}
          id="MoustacheB"
        >
          <path fill="url(#MoustacheA)" d="M0 0H22.5V38.5H0z" />
        </pattern>
      </defs>
      <path
        d="M113.5 285.5l5.357-35.461s2.93-3.039 8.572-3.039c5.787 0 8.571 3.039 8.571 3.039V285.5h-22.5z"
        fill="url(#MoustacheB)"
        className=""
      />
      <defs>
        <linearGradient id="MoustacheC" x1={0.5} y1={0} x2={0.5} y2={1}>
          <stop offset={0} stopColor={props.gradientcolor} />
          <stop offset={1} stopColor={props.rootcolor} />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          x={360.5}
          y={248}
          width={20.5}
          height={38}
          patternTransform="scale(-1 1) rotate(.497 .015 -85246.317)"
          id="MoustacheD"
        >
          <path fill="url(#MoustacheC)" d="M0 0H20.5V38H0z" />
        </pattern>
      </defs>
      <path
        d="M381.164 285.91l-5.184-34.956s-2.695-2.977-7.835-2.932c-5.273.046-7.783 3.067-7.783 3.067l.303 34.999 20.499-.178z"
        fill="url(#MoustacheD)"
        className=""
      />
      <g>
        <path
          d="M383.06 298.857c1.98 15.399 3.967 30.797 5.933 46.198.379 2.965.964 5.942.959 8.913-.07 38.268-29.432 68.419-66.603 68.109-53.145-.443-106.297-.082-159.447-.137-30.003-.032-58.35-25.933-62.086-55.575-1.568-12.442 1.461-24.121 3.167-36.067 1.456-10.202 3.323-20.344 5.104-31.317 1.015-5.199 1.934-9.594 3.325-13.989 7.765-.324 15.057-.646 22.435-.567 2.164 17.058 9.338 23.393 26.134 23.409 23.308.022 46.616.046 69.932.432-.502 8.349 3.834 14.601 10.779 15.894 7.016 1.307 13.567-2.779 15.592-9.974.569-2.021.442-4.237 1.107-6.359 23.944.005 47.413-.022 70.882.021 8.306.016 16.25-1.628 21.669-8.196 3.481-4.219 5.4-9.726 8.49-14.658 7.156.002 13.841.006 20.659.395.745 4.745 1.357 9.106 1.969 13.468zm-161.059 35.949c-4.999-3.771-10.123-7.388-14.944-11.374-2.558-2.114-5.146-3.752-7.915-1.392-2.533 2.16-2.169 5.54.072 7.587 4.954 4.526 9.936 9.277 15.671 12.63 7.765 4.541 16.696 5.523 25.622 4.446 3.342-.404 6.934-2.002 6.125-6.336-.664-3.551-3.855-3.732-7.105-3.845-5.594-.194-11.167-.995-17.526-1.716z"
          fill={props.rootcolor}
          className=""
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
