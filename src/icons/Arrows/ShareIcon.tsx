import type { SVGProps } from 'react'

export default function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M45.29 18.2803C46.2367 19.1409 46.2367 20.604 45.29 21.4647L30.1428 34.5463C28.8518 35.6651 26.7863 34.7184 26.7863 32.9111V25.4236C13.3604 25.5957 7.6802 28.8661 11.5531 41.3453C11.9834 42.7224 10.2621 43.8412 9.14328 42.9805C5.35648 40.2265 2 34.9766 2 29.7268C2 16.6451 12.9301 13.805 26.7863 13.7189V6.83385C26.7863 5.02652 28.8518 4.07982 30.1428 5.19864L45.29 18.2803Z" fill="currentColor"/>
    </svg>
  )
}
