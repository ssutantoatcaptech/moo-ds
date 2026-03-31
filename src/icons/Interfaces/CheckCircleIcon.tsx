import type { SVGProps } from 'react'

export default function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M46 24C46 36.1532 36.0645 46 24 46C11.8468 46 2 36.1532 2 24C2 11.9355 11.8468 2 24 2C36.0645 2 46 11.9355 46 24ZM21.4274 35.7097L37.75 19.3871C38.2823 18.8548 38.2823 17.879 37.75 17.3468L35.7097 15.3952C35.1774 14.7742 34.2903 14.7742 33.7581 15.3952L20.4516 28.7016L14.1532 22.4919C13.621 21.871 12.7339 21.871 12.2016 22.4919L10.1613 24.4435C9.62903 24.9758 9.62903 25.9516 10.1613 26.4839L19.3871 35.7097C19.9194 36.2419 20.8952 36.2419 21.4274 35.7097Z" fill="currentColor"/>
    </svg>
  )
}
