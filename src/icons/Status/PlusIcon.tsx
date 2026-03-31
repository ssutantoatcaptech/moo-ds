import type { SVGProps } from 'react'

export default function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M42.8571 19.2857C44.5268 19.2857 46 20.7589 46 22.4286V25.5714C46 27.3393 44.5268 28.7143 42.8571 28.7143H28.7143V42.8571C28.7143 44.625 27.2411 46 25.5714 46H22.4286C20.6607 46 19.2857 44.625 19.2857 42.8571V28.7143H5.14286C3.375 28.7143 2 27.3393 2 25.5714V22.4286C2 20.7589 3.375 19.2857 5.14286 19.2857H19.2857V5.14286C19.2857 3.47321 20.6607 2 22.4286 2H25.5714C27.2411 2 28.7143 3.47321 28.7143 5.14286V19.2857H42.8571Z" fill="currentColor"/>
    </svg>
  )
}
