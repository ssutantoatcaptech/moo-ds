import type { SVGProps } from 'react'

export default function FolderOutlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M41.875 13C44.1094 13 46 14.8906 46 17.125V36.375C46 38.6953 44.1094 40.5 41.875 40.5H6.125C3.80469 40.5 2 38.6953 2 36.375V11.625C2 9.39062 3.80469 7.5 6.125 7.5H18.6719C19.4453 7.5 20.1328 7.84375 20.6484 8.35938L25.375 13H41.875ZM41.875 36.375V17.125H24.7734C24 17.125 23.3125 16.8672 22.7969 16.3516L18.1562 11.625H6.125V36.375H41.875Z" fill="currentColor"/>
    </svg>
  )
}
