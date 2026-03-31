import type { SVGProps } from 'react'

export default function MapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M2 13.4386C2 12.4455 2.61111 11.5289 3.52778 11.1469L14.2222 6.86914V36.2025L3.60417 41.015C2.84028 41.3969 2 40.7858 2 39.8691V13.4386ZM16.6667 36.2025V6.86914L31.3333 11.758V41.0914L16.6667 36.2025ZM44.3194 7.02192C45.0833 6.63997 46 7.25109 46 8.16775V34.5983C46 35.5914 45.3125 36.508 44.3958 36.89L33.7778 41.0914V11.758L44.3194 7.02192Z" fill="currentColor"/>
    </svg>
  )
}
