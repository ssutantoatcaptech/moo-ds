import type { SVGProps } from 'react'

export default function VideoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M27.6667 9.33398C29.6528 9.33398 31.3333 11.0145 31.3333 13.0007V35.077C31.3333 37.0632 29.6528 38.6673 27.6667 38.6673H5.59028C3.60417 38.6673 2 37.0632 2 35.077V13.0007C2 11.0145 3.60417 9.33398 5.59028 9.33398H27.6667ZM42.1042 12.2368C43.7083 11.1673 46 12.3132 46 14.2229V33.8548C46 35.7645 43.7083 36.9104 42.1042 35.8409L33.7778 30.0354V18.0423L42.1042 12.2368Z" fill="currentColor"/>
    </svg>
  )
}
