import type { SVGProps } from 'react'

export default function MousePointerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M36.2197 30.3297H27.1127L31.8381 42.0141C32.1817 42.7873 31.8381 43.7324 31.0648 44.076L26.855 45.8802C26.0818 46.2239 25.1367 45.7943 24.793 45.0211L20.2396 33.9381L12.8509 41.5845C11.8199 42.6155 10.2734 41.8422 10.2734 40.4676V3.61016C10.2734 2.1496 11.9058 1.46229 12.8509 2.49326L37.2507 27.5804C38.2817 28.6114 37.5084 30.3297 36.2197 30.3297Z" fill="currentColor"/>
    </svg>
  )
}
