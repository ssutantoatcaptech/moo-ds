import type { SVGProps } from 'react'

export default function EjectIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M46 36.5662V42.8554C46 44.6242 44.5285 46 42.8608 46H5.19013C3.42432 46 2.05091 44.6242 2.05091 42.8554V36.5662C2.05091 34.8956 3.42432 33.4216 5.19013 33.4216H42.8608C44.5285 33.4216 46 34.8956 46 36.5662ZM6.75974 30.2769C2.63952 30.2769 0.481302 25.4618 3.22812 22.4154L20.4938 3.54774C22.3577 1.48409 25.5951 1.48409 27.459 3.54774L44.7247 22.4154C47.4715 25.4618 45.3133 30.2769 41.1931 30.2769H6.75974Z" fill="currentColor"/>
    </svg>
  )
}
