import * as React from "react"

const Arrow = (props) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Arrow
