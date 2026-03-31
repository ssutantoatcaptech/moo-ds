import type { SVGProps } from 'react'

export default function PlugIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M35 4.75V13H29.5V4.75C29.5 3.28906 30.7031 2 32.25 2C33.7109 2 35 3.28906 35 4.75ZM39.125 15.75C39.8125 15.75 40.5 16.4375 40.5 17.125V19.875C40.5 20.6484 39.8125 21.25 39.125 21.25H37.75V24C37.6641 30.7031 32.9375 36.2031 26.75 37.4922V46H21.25V37.4922C14.9766 36.2031 10.25 30.7031 10.25 24V21.25H8.875C8.10156 21.25 7.5 20.6484 7.5 19.875V17.125C7.5 16.4375 8.10156 15.75 8.875 15.75H39.125ZM18.5 4.75V13H13V4.75C13 3.28906 14.2031 2 15.75 2C17.2109 2 18.5 3.28906 18.5 4.75Z" fill="currentColor"/>
    </svg>
  )
}
