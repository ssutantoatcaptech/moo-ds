import type { SVGProps } from 'react'

export default function AdjustIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M2 24C2 11.9355 11.8468 2 24 2C36.0645 2 46 11.9355 46 24C46 36.1532 36.0645 46 24 46C11.8468 46 2 36.1532 2 24ZM24 40.3226C32.9597 40.3226 40.3226 33.0484 40.3226 24C40.3226 15.0403 32.9597 7.67742 24 7.67742V40.3226Z" fill="currentColor"/>
    </svg>
  )
}
