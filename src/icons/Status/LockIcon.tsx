import type { SVGProps } from 'react'

export default function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M39.125 21.25C41.3594 21.25 43.25 23.1406 43.25 25.375V41.875C43.25 44.1953 41.3594 46 39.125 46H8.875C6.55469 46 4.75 44.1953 4.75 41.875V25.375C4.75 23.1406 6.55469 21.25 8.875 21.25H10.9375V15.0625C10.9375 7.92969 16.7812 2 24 2C31.1328 2 37.0625 7.92969 37.0625 15.0625V21.25H39.125ZM30.1875 21.25V15.0625C30.1875 11.7109 27.3516 8.875 24 8.875C20.5625 8.875 17.8125 11.7109 17.8125 15.0625V21.25H30.1875Z" fill="currentColor"/>
    </svg>
  )
}
