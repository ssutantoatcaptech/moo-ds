import type { SVGProps } from 'react'

export default function ParagraphIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M44.4284 3.57143V6.71429C44.4284 7.59821 43.6427 8.28571 42.857 8.28571H38.1427V44.4286C38.1427 45.3125 37.357 46 36.5713 46H33.4284C32.5445 46 31.857 45.3125 31.857 44.4286V8.28571H28.7141V44.4286C28.7141 45.3125 27.9284 46 27.1427 46H23.9999C23.1159 46 22.4284 45.3125 22.4284 44.4286V33.4286H19.2856C10.5445 33.4286 3.57129 26.4554 3.57129 17.7143C3.57129 9.07143 10.5445 2 19.2856 2H42.857C43.6427 2 44.4284 2.78571 44.4284 3.57143Z" fill="currentColor"/>
    </svg>
  )
}
