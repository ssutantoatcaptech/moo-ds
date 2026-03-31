import type { SVGProps } from 'react'

export default function StickyNoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M32.6429 30.2857C31.2679 30.2857 30.2857 31.3661 30.2857 32.6429V46H4.35714C2.98214 46 2 45.0179 2 43.6429V4.35714C2 3.08036 2.98214 2 4.35714 2H43.6429C44.9196 2 46 3.08036 46 4.35714V30.2857H32.6429ZM45.3125 35.6875L35.6875 45.3125C35.1964 45.8036 34.6071 46 34.0179 46H33.4286V33.4286H46V34.1161C46 34.7054 45.7054 35.2946 45.3125 35.6875Z" fill="currentColor"/>
    </svg>
  )
}
