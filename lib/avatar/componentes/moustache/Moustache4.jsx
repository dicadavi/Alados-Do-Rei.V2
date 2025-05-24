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
        <linearGradient id="MoustacheA" x1={0.5} y1={0} x2={0.5} y2={1}>
          <stop offset={0} stopColor={props.gradientColor} />
          <stop offset={1} stopColor={props.rootColor} />
        </linearGradient>
        <pattern
          patternUnits="userSpaceOnUse"
          x={117}
          y={254}
          width={14}
          height={108}
          id="MoustacheB"
        >
          <path fill="url(#MoustacheA)" d="M0 0H14V108H0z" />
        </pattern>
      </defs>
      <path
        d="M119 362l-2-10.496.5-24.307 1.5-66.844s.006-6.077 4-6.077c.626 0 4.5-1.105 6 1.105 1.711 2.521 2 4.972 2 4.972l-1 100.209L119 362zm4-107.724"
        fill="url(#MoustacheB)"
        className=""
      />
      <g>
        <defs>
          <linearGradient id="MoustacheC" x1={0.5} y1={0} x2={0.5} y2={1}>
            <stop offset={0} stopColor={props.gradientColor} />
            <stop offset={1} stopColor={props.rootColor} />
          </linearGradient>
          <pattern
            patternUnits="userSpaceOnUse"
            x={367}
            y={258.5}
            width={12.5}
            height={101}
            patternTransform="matrix(-1 0 0 1 746.5 0)"
            id="MoustacheD"
          >
            <path fill="url(#MoustacheC)" d="M0 0H12.5V101H0z" />
          </pattern>
        </defs>
        <path
          d="M377.714 359.5l1.786-9.816-.446-22.731-1.34-62.512s-.005-5.683-3.571-5.683c-.559 0-4.018-1.033-5.357 1.034-1.528 2.357-1.786 4.649-1.786 4.649l.893 93.714 9.821 1.345zM374.143 258.758"
          fill="url(#MoustacheD)"
          className=""
        />
      </g>
      <g>
        <path
          d="M291.071 403.17c-28.676-.023-56.854-.088-85.492-.134-13.581-.337-26.746-.132-39.813-1.167-26.777-2.121-44.914-23.701-47.244-49.59-.088-.979 1.613-2.851 2.715-3.059 2.577-.486 5.297-.213 8.426-.256 4.168 11.774 10.318 21.72 21.478 27.875 9.03 4.98 18.397 7.304 28.696 4.259 12.897-3.813 25.729-8.026 38.848-10.872 29.009-6.292 57.517-3.11 85.521 6.179 6.453 2.141 12.985 4.215 19.633 5.565 16.496 3.351 37.747-10.345 43.225-28.193.439-1.43.861-2.865 1.529-4.565 11.39-.085 11.853.432 8.703 11.419-6.183 21.57-19.559 36.117-41.992 40.583-8.379 1.669-17.167 1.374-25.778 1.746-5.977.258-11.971.125-18.455.21z"
          fill={props.rootColor}
          className=""
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
