import type { SVGProps } from 'react'

export default function SuitcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M13 43.25V8.875C13 6.64062 14.8047 4.75 17.125 4.75H30.875C33.1094 4.75 35 6.64062 35 8.875V43.25H13ZM18.5 10.25V13H29.5V10.25H18.5ZM46 17.125V39.125C46 41.4453 44.1094 43.25 41.875 43.25H37.75V13H41.875C44.1094 13 46 14.8906 46 17.125ZM10.25 43.25H6.125C3.80469 43.25 2 41.4453 2 39.125V17.125C2 14.8906 3.80469 13 6.125 13H10.25V43.25Z" fill="currentColor"/>
    </svg>
  )
}
