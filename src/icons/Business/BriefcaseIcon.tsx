import type { SVGProps } from 'react'

export default function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M29.5 30.875V26.75H46V39.125C46 41.3594 44.0234 43.25 41.875 43.25H6.125C3.89062 43.25 2 41.3594 2 39.125V26.75H18.5V30.875C18.5 31.6484 19.1016 32.25 19.875 32.25H28.125C28.8125 32.25 29.5 31.6484 29.5 30.875ZM41.875 13C44.0234 13 46 14.9766 46 17.125V24H2V17.125C2 14.9766 3.89062 13 6.125 13H13V8.875C13 6.72656 14.8906 4.75 17.125 4.75H30.875C33.0234 4.75 35 6.72656 35 8.875V13H41.875ZM29.5 13V10.25H18.5V13H29.5Z" fill="currentColor"/>
    </svg>
  )
}
