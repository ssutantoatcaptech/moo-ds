import type { SVGProps } from 'react'

export default function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M24 24C17.8984 24 13 19.1016 13 13C13 6.98438 17.8984 2 24 2C30.0156 2 35 6.98438 35 13C35 19.1016 30.0156 24 24 24ZM31.6484 26.75C38.0078 26.75 43.25 31.9922 43.25 38.3516V41.875C43.25 44.1953 41.3594 46 39.125 46H8.875C6.55469 46 4.75 44.1953 4.75 41.875V38.3516C4.75 31.9922 9.90625 26.75 16.2656 26.75H17.7266C19.6172 27.6953 21.7656 28.125 24 28.125C26.2344 28.125 28.2969 27.6953 30.1875 26.75H31.6484Z" fill="currentColor"/>
    </svg>
  )
}
