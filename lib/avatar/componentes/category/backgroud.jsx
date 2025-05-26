import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={37}
      height={31}
      viewBox="0 0 37 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0a5 5 0 00-3 9v13a5 5 0 107 7h19a5 5 0 107-7V9a5 5 0 10-7-7H9a4.993 4.993 0 00-4-2zM2 5a3 3 0 015.6-1.5 1 1 0 00.865.5h20.07a1 1 0 00.866-.5A3 3 0 1133.5 7.6a1 1 0 00-.5.866v14.07a1 1 0 00.5.866A3 3 0 1129.4 27.5a1 1 0 00-.866-.5H8.465a1 1 0 00-.866.5A3 3 0 113.5 23.4a1 1 0 00.5-.866V8.465a1 1 0 00-.5-.866C2.602 7.08 2 6.11 2 5zm7 1a3 3 0 00-3 3v13a3 3 0 003 3h19a3 3 0 003-3V9a3 3 0 00-3-3H9zM8 9a1 1 0 011-1h12.586L8 21.586V9zm1.414 14l15-15H28a1 1 0 01.937.65L14.586 23H9.414zm8 0H28a1 1 0 001-1V11.414L17.414 23z"
        fill={props.rootcolor}
      />
    </svg>
  );
}

export default SvgComponent;
