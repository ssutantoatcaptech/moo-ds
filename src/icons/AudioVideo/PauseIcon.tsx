import type { SVGProps } from 'react'

export default function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M16.1429 46H6.71429C4.0625 46 2 43.9375 2 41.2857V6.71429C2 4.16071 4.0625 2 6.71429 2H16.1429C18.6964 2 20.8571 4.16071 20.8571 6.71429V41.2857C20.8571 43.9375 18.6964 46 16.1429 46ZM46 41.2857C46 43.9375 43.8393 46 41.2857 46H31.8571C29.2054 46 27.1429 43.9375 27.1429 41.2857V6.71429C27.1429 4.16071 29.2054 2 31.8571 2H41.2857C43.8393 2 46 4.16071 46 6.71429V41.2857Z" fill="currentColor"/>
    </svg>
  )
}
