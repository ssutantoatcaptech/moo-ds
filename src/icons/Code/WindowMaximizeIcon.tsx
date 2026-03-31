import type { SVGProps } from 'react'

export default function WindowMaximizeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M41.875 4.75C44.1094 4.75 46 6.64062 46 8.875V39.125C46 41.4453 44.1094 43.25 41.875 43.25H6.125C3.80469 43.25 2 41.4453 2 39.125V8.875C2 6.64062 3.80469 4.75 6.125 4.75H41.875ZM40.5 18.5V11.2812C40.5 10.7656 39.9844 10.25 39.4688 10.25H8.53125C7.92969 10.25 7.5 10.7656 7.5 11.2812V18.5H40.5Z" fill="currentColor"/>
    </svg>
  )
}
