import type { SVGProps } from 'react'

export default function CircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M24 2C36.1532 2 46 11.8468 46 24C46 36.1532 36.1532 46 24 46C11.8468 46 2 36.1532 2 24C2 11.8468 11.8468 2 24 2Z" fill="currentColor"/>
    </svg>
  )
}
