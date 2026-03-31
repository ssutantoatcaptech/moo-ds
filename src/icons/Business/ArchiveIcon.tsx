import type { SVGProps } from 'react'

export default function ArchiveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M4.75 40.5V15.75H43.25V40.5C43.25 42.0469 41.9609 43.25 40.5 43.25H7.5C5.95312 43.25 4.75 42.0469 4.75 40.5ZM18.5 22.2812V22.9688C18.5 23.5703 18.9297 24 19.5312 24H28.4688C28.9844 24 29.5 23.5703 29.5 22.9688V22.2812C29.5 21.7656 28.9844 21.25 28.4688 21.25H19.5312C18.9297 21.25 18.5 21.7656 18.5 22.2812ZM43.25 4.75C44.7109 4.75 46 6.03906 46 7.5V11.625C46 12.3984 45.3125 13 44.625 13H3.375C2.60156 13 2 12.3984 2 11.625V7.5C2 6.03906 3.20312 4.75 4.75 4.75H43.25Z" fill="currentColor"/>
    </svg>
  )
}
