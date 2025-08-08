import * as React from "react"
import { icons } from "lucide-react"

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof icons
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name]
  return <LucideIcon {...props} />
}
