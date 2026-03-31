import type { SVGProps } from 'react'

export default function GenderlessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M24 11.7778C17.125 11.7778 11.7778 17.2778 11.7778 24C11.7778 30.875 17.125 36.2222 24 36.2222C30.7222 36.2222 36.2222 30.875 36.2222 24C36.2222 17.2778 30.7222 11.7778 24 11.7778ZM24 2C36.0694 2 46 11.9306 46 24C46 36.2222 36.0694 46 24 46C11.7778 46 2 36.2222 2 24C2 11.9306 11.7778 2 24 2Z" fill="currentColor"/>
    </svg>
  )
}
