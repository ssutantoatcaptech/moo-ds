import type { SVGProps } from 'react'

export default function BoxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M45.7422 17.8984C45.8281 18.0703 45.8281 18.3281 45.8281 18.5H25.375V2H37.4922C39.2969 2 40.8438 3.20312 41.3594 4.83594L45.7422 17.8984ZM22.625 2V18.5H2.08594C2.08594 18.3281 2.08594 18.0703 2.17188 17.8984L6.55469 4.83594C7.07031 3.20312 8.61719 2 10.4219 2H22.625ZM2 21.25H46V41.875C46 44.1953 44.1094 46 41.875 46H6.125C3.80469 46 2 44.1953 2 41.875V21.25Z" fill="currentColor"/>
    </svg>
  )
}
