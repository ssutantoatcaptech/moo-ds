import type { SVGProps } from 'react'

export default function WindowRestoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M46 6.125V30.875C46 33.1953 44.1094 35 41.875 35H37.75V17.125C37.75 13.3438 34.6562 10.25 30.875 10.25H13V6.125C13 3.89062 14.8047 2 17.125 2H41.875C44.1094 2 46 3.89062 46 6.125ZM35 17.125V41.875C35 44.1953 33.1094 46 30.875 46H6.125C3.80469 46 2 44.1953 2 41.875V17.125C2 14.8906 3.80469 13 6.125 13H30.875C33.1094 13 35 14.8906 35 17.125ZM29.1562 19.5312C29.1562 19.0156 28.6406 18.5 28.125 18.5H8.53125C7.92969 18.5 7.5 19.0156 7.5 19.5312V24H29.1562V19.5312Z" fill="currentColor"/>
    </svg>
  )
}
