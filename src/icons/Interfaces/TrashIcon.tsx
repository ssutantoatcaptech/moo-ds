import type { SVGProps } from 'react'

export default function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M41.875 4.75C42.5625 4.75 43.25 5.4375 43.25 6.125V8.875C43.25 9.64844 42.5625 10.25 41.875 10.25H6.125C5.35156 10.25 4.75 9.64844 4.75 8.875V6.125C4.75 5.4375 5.35156 4.75 6.125 4.75H16.4375L17.2109 3.20312C17.5547 2.51562 18.2422 2 19.0156 2H28.8984C29.6719 2 30.3594 2.51562 30.7031 3.20312L31.5625 4.75H41.875ZM9.30469 42.1328L7.5 13H40.5L38.6094 42.1328C38.5234 44.3672 36.7188 46 34.4844 46H13.4297C11.1953 46 9.39062 44.3672 9.30469 42.1328Z" fill="currentColor"/>
    </svg>
  )
}
