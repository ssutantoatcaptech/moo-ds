import type { SVGProps } from 'react'

export default function ExclamationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M30.875 39.125C30.875 42.9922 27.7812 46 24 46C20.1328 46 17.125 42.9922 17.125 39.125C17.125 35.3438 20.1328 32.25 24 32.25C27.7812 32.25 30.875 35.3438 30.875 39.125ZM17.8984 4.23438C17.8125 3.03125 18.7578 2 19.9609 2H27.9531C29.1562 2 30.1016 3.03125 30.0156 4.23438L28.8984 27.6094C28.8125 28.6406 27.8672 29.5 26.8359 29.5H21.0781C20.0469 29.5 19.1016 28.6406 19.0156 27.6094L17.8984 4.23438Z" fill="currentColor"/>
    </svg>
  )
}
