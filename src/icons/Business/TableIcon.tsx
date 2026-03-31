import type { SVGProps } from 'react'

export default function TableIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M41.875 4.75C44.1094 4.75 46 6.64062 46 8.875V39.125C46 41.4453 44.1094 43.25 41.875 43.25H6.125C3.80469 43.25 2 41.4453 2 39.125V8.875C2 6.64062 3.80469 4.75 6.125 4.75H41.875ZM21.25 37.75V29.5H7.5V37.75H21.25ZM21.25 24V15.75H7.5V24H21.25ZM40.5 37.75V29.5H26.75V37.75H40.5ZM40.5 24V15.75H26.75V24H40.5Z" fill="currentColor"/>
    </svg>
  )
}
