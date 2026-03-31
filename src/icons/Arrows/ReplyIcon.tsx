import type { SVGProps } from 'react'

export default function ReplyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M2.70864 18.2929L17.8263 5.23677C19.1147 4.12012 21.2621 5.06498 21.2621 6.86878V13.7404C35.0054 13.8263 46 16.6609 46 29.717C46 34.9566 42.5642 40.1963 38.7848 42.9449C37.6681 43.8039 35.9502 42.6872 36.3797 41.3129C40.245 28.858 34.5759 25.594 21.2621 25.4222V32.8951C21.2621 34.6989 19.1147 35.6438 17.8263 34.5272L2.70864 21.471C1.76379 20.6121 1.76379 19.1518 2.70864 18.2929Z" fill="currentColor"/>
    </svg>
  )
}
