import type { SVGProps } from 'react'

export default function SquareFullIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M46 46H2V2H46V46Z" fill="currentColor"/>
    </svg>
  )
}
