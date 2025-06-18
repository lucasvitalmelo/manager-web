import { useTheme } from "@/context/theme-context"

type LogoProps = {
  size?: number
}

export function Logo({ size = 30 }: LogoProps) {
  const { theme } = useTheme()

  const isDark = theme === "dark"
  const backgroundColor = !isDark ? "white" : "black"
  const strokeColor = !isDark ? "black" : "white"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        rx="4"
        fill={backgroundColor}
      />
      <path
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
      />
      <path
        d="M8 7V14"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7V11"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke={strokeColor}
        d="M16 7V16"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}




