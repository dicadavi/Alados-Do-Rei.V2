import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={495.87}
      xmlns="http://www.w3.org/2000/svg"
      height={685}
      viewBox="0 0 495.87 685"
      fill={props.rootcolor}
      {...props}
    >
      <g xmlSpace="preserve" fill={props.rootcolor}>
        <rect width={495} height={684} ry={0} fill="none" rx={0} className="" />
        <path
          d="M30 685H1.019V1.083H495.87V685c-11.289 0-22.578 0-33.87-.002L30 685z"
          fill={props.rootcolor}
          className=""
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
