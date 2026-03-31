import type { SVGProps } from 'react'

export default function BanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M24 2C36.0645 2 46 11.9355 46 24C46 36.1532 36.0645 46 24 46C11.8468 46 2 36.1532 2 24C2 11.9355 11.8468 2 24 2ZM35.5323 12.4677C29.6774 6.70161 20.8065 6.25806 14.5968 10.6935L37.3064 33.4032C41.7419 27.1935 41.2984 18.3226 35.5323 12.4677ZM12.379 35.621C18.2339 41.3871 27.1048 41.8306 33.3145 37.3952L10.6048 14.6855C6.16935 20.8952 6.6129 29.7661 12.379 35.621Z" fill="currentColor"/>
    </svg>
  )
}
