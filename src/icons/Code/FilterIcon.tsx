import type { SVGProps } from 'react'

export default function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M43.8805 2C45.7698 2 46.7144 4.23283 45.3404 5.521L29.5388 21.4084V43.9085C29.5388 45.626 27.6495 46.5707 26.2755 45.626L19.4052 40.8169C18.8041 40.4733 18.5465 39.7863 18.5465 39.0993V21.4084L2.65902 5.521C1.28497 4.23283 2.22963 2 4.11895 2H43.8805Z" fill="currentColor"/>
    </svg>
  )
}
