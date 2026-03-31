import type { SVGProps } from 'react'

export default function ChartAreaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M44.9688 35C45.4844 35 46 35.5156 46 36.0312V39.4688C46 40.0703 45.4844 40.5 44.9688 40.5H3.03125C2.42969 40.5 2 40.0703 2 39.4688V8.53125C2 8.01562 2.42969 7.5 3.03125 7.5H6.46875C6.98438 7.5 7.5 8.01562 7.5 8.53125V35H44.9688ZM33.9688 15.75C34.4844 15.4062 35.1719 15.5781 35.5156 16.1797L43.25 32.25H10.25V23.3125L17.6406 10.9375C18.0703 10.25 18.9297 10.25 19.3594 10.8516L26.75 20.5625L33.9688 15.75Z" fill="currentColor"/>
    </svg>
  )
}
