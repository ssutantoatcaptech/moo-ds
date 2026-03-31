import type { SVGProps } from 'react'

export default function FileOutlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M39.2109 10.4219C39.9844 11.1953 40.5 12.3125 40.5 13.3438V41.875C40.5 44.1953 38.6094 46 36.375 46H11.625C9.30469 46 7.5 44.1953 7.5 41.875V6.125C7.5 3.89062 9.30469 2 11.625 2H29.1562C30.1875 2 31.3047 2.42969 32.0781 3.20312L39.2109 10.4219ZM36.0312 13L29.5 6.46875V13H36.0312ZM11.625 41.875H36.375V17.125H27.4375C26.2344 17.125 25.375 16.2656 25.375 15.0625V6.125H11.625V41.875Z" fill="currentColor"/>
    </svg>
  )
}
