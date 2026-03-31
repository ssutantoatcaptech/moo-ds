import type { SVGProps } from 'react'

export default function CircleOutlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M24 2C36.1532 2 46 11.8468 46 24C46 36.1532 36.1532 46 24 46C11.8468 46 2 36.1532 2 24C2 11.8468 11.8468 2 24 2ZM24 41.7419C33.7581 41.7419 41.7419 33.8468 41.7419 24C41.7419 14.2419 33.7581 6.25806 24 6.25806C14.1532 6.25806 6.25806 14.2419 6.25806 24C6.25806 33.8468 14.1532 41.7419 24 41.7419Z" fill="currentColor"/>
    </svg>
  )
}
