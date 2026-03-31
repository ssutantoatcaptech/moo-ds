import type { SVGProps } from 'react'

export default function TvIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M42.7 6.40039C44.4875 6.40039 46 7.91289 46 9.70039V31.7004C46 33.5566 44.4875 35.0004 42.7 35.0004H26.2V37.2004H38.3C38.85 37.2004 39.4 37.7504 39.4 38.3004V40.5004C39.4 41.1191 38.85 41.6004 38.3 41.6004H9.7C9.08125 41.6004 8.6 41.1191 8.6 40.5004V38.3004C8.6 37.7504 9.08125 37.2004 9.7 37.2004H21.8V35.0004H5.3C3.44375 35.0004 2 33.5566 2 31.7004V9.70039C2 7.91289 3.44375 6.40039 5.3 6.40039H42.7ZM41.6 30.6004V10.8004H6.4V30.6004H41.6Z" fill="currentColor"/>
    </svg>
  )
}
