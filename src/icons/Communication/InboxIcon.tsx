import type { SVGProps } from 'react'

export default function InboxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M45.3125 23.084C45.7708 23.6951 46 24.3826 46 25.1465V35.0007C46 37.0632 44.3194 38.6673 42.3333 38.6673H5.66667C3.60417 38.6673 2 37.0632 2 35.0007V25.1465C2 24.3826 2.15278 23.6951 2.61111 23.084L10.6319 11.0145C11.3194 10.0215 12.4653 9.33398 13.6875 9.33398H34.2361C35.4583 9.33398 36.6042 10.0215 37.2917 11.0145L45.3125 23.084ZM14.375 14.2229L7.80556 24.0007H17.2778L19.7222 28.8895H28.2778L30.7222 24.0007H40.1181L33.5486 14.2229H14.375Z" fill="currentColor"/>
    </svg>
  )
}
