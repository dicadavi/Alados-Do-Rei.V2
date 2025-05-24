import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={495.87}
      xmlns="http://www.w3.org/2000/svg"
      height={690}
      viewBox="0 0 495.87 690"
      fill="none"
      {...props}
    >
      <g xmlSpace="preserve" fill="#000">
        <rect width={495} height={684} ry={0} fill="none" rx={0} className="" />

        <path
          d="M256.277 326.462c-5.915 3.371-11.147 2.8-15.907-1.49-4.797-4.323-6.184-9.486-3.148-15.84 3.169-6.633 7.244-12.832 11.455-20.143 6.471 8.36 11.835 15.533 13.848 24.469 1.233 5.473-1.731 9.558-6.248 13.004z"
          fill={props.rootColor}
          className=""
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
