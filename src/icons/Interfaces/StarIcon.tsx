import type { SVGProps } from 'react'

export default function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M21.6548 4.37628C22.6422 2.40136 25.44 2.48365 26.3452 4.37628L31.7763 15.3206L43.7904 17.0487C45.9298 17.3778 46.7527 20.0111 45.1893 21.5745L36.549 30.0502L38.6062 41.9821C38.9353 44.1216 36.6313 45.7673 34.7386 44.7799L24.0411 39.102L13.2614 44.7799C11.3687 45.7673 9.06466 44.1216 9.39382 41.9821L11.451 30.0502L2.81075 21.5745C1.24727 20.0111 2.07015 17.3778 4.20965 17.0487L16.306 15.3206L21.6548 4.37628Z" fill="currentColor"/>
    </svg>
  )
}
