import type { SVGProps } from 'react'

export default function FileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M26.75 13.6875C26.75 14.8906 27.6094 15.75 28.8125 15.75H40.5V43.9375C40.5 45.1406 39.5547 46 38.4375 46H9.5625C8.35938 46 7.5 45.1406 7.5 43.9375V4.0625C7.5 2.94531 8.35938 2 9.5625 2H26.75V13.6875ZM40.5 12.4844V13H29.5V2H30.0156C30.5312 2 31.0469 2.25781 31.4766 2.60156L39.8984 11.0234C40.2422 11.4531 40.5 11.9688 40.5 12.4844Z" fill="currentColor"/>
    </svg>
  )
}
