import type { SVGProps } from 'react'

export default function SortIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M10.8891 27.494H37.1842C39.5043 27.494 40.7196 30.3666 39.0624 32.0239L25.9149 45.1714C24.81 46.2762 23.1528 46.2762 22.1584 45.1714L9.01092 32.0239C7.24318 30.3666 8.4585 27.494 10.8891 27.494ZM39.0624 15.8933C40.7196 17.661 39.5043 20.4231 37.1842 20.4231H10.8891C8.4585 20.4231 7.24318 17.661 9.01092 15.8933L22.1584 2.74576C23.1528 1.75141 24.81 1.75141 25.9149 2.74576L39.0624 15.8933Z" fill="currentColor"/>
    </svg>
  )
}
