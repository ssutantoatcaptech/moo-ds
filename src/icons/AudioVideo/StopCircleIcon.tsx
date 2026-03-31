import type { SVGProps } from 'react'

export default function StopCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M24 2C36.1532 2 46 11.8468 46 24C46 36.1532 36.1532 46 24 46C11.8468 46 2 36.1532 2 24C2 11.8468 11.8468 2 24 2ZM32.5161 31.0968V16.9032C32.5161 16.1935 31.8065 15.4839 31.0968 15.4839H16.9032C16.1048 15.4839 15.4839 16.1935 15.4839 16.9032V31.0968C15.4839 31.8952 16.1048 32.5161 16.9032 32.5161H31.0968C31.8065 32.5161 32.5161 31.8952 32.5161 31.0968Z" fill="currentColor"/>
    </svg>
  )
}
