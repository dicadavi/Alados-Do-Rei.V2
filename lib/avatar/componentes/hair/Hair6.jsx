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
          <stop offset={0} stopColor="#4b4b4b" />
          <stop offset={1} stopColor="#ffe2d6" />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          x={353}
          y={201.5}
          width={29}
          height={48.5}
          id="b"
        >
          <path fill="url(#a)" d="M0 0H29V48.5H0z" />
        </pattern>
      </defs>
      <path
        d="M353.5 201.5h28l.5 6.5-1 38-5 3-20 1-3-4 .5-44.5z"
        fill="url(#b)"
        className=""
      />
      <defs>
        <linearGradient id="c" x1={0.5} y1={0} x2={0.5} y2={1}>
          <stop offset={0} stopColor="#4b4b4b" />
          <stop offset={1} stopColor="#ffe2d6" />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          x={115.5}
          y={200.5}
          width={27.5}
          height={48}
          id="d"
        >
          <path fill="url(#c)" d="M0 0H27.5V48H0z" />
        </pattern>
      </defs>
      <path
        d="M117 200.5l26 2.5-1.5 44.5-3.5 1-19.5-1.5-3-2.5 1.5-44z"
        fill="url(#d)"
        className=""
      />
      <g>
        <path
          d="M353.672 204.5c-5.796-15.023-15.2-26.133-29.428-31.25-5.248-1.887-11.016-2.765-16.553-2.796-40.244-.228-80.492.137-120.735-.228-21.24-.193-37.549 15.199-43.959 34.036-1.842-.258-3.257-.623-4.675-.636-7.005-.067-14.011-.041-21.016-.048-1.704-22.054 3.584-41.277 18.938-56.316 10.588-10.37 23.147-15.154 37.199-15.166 50.82-.047 101.642-.217 152.461.053 32.38.171 55.832 26.507 56.091 62.182.023 3.106-.023 6.213-.469 9.733-9.573.421-18.714.428-27.854.436z"
          fill="#3e3e3e"
          className=""
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
