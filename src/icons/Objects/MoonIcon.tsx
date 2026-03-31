import type { SVGProps } from 'react'

export default function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M26.3359 46C14.1328 46 4.33594 36.2031 4.33594 24C4.33594 11.8828 14.1328 2 26.3359 2C27.7109 2.08594 29 2.17188 30.2891 2.42969C31.2344 2.60156 31.4922 3.80469 30.6328 4.32031C25.2188 7.41406 21.9531 13.0859 21.9531 19.2734C21.9531 30.1016 31.75 38.2656 42.4062 36.2031C43.3516 36.0312 44.0391 37.1484 43.4375 37.9219C39.3125 42.9922 33.125 46 26.3359 46Z" fill="currentColor"/>
    </svg>
  )
}
