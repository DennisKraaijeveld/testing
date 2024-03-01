import { ArrowRight } from "lucide-react"
import * as React from "react"

import { cn } from "~/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-full border border-secondary-accent bg-transparent px-4 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }

export interface InputWithButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onButtonClick: () => void
}

const InputWithButton = React.forwardRef<
  HTMLInputElement,
  InputWithButtonProps
>(({ className, type, onButtonClick, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={`flex h-12 w-full rounded-full border border-secondary-accent bg-transparent px-4 py-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
      <button
        onClick={onButtonClick}
        className="absolute right-3 top-2.5 h-7 w-7 flex items-center justify-center rounded-full bg-[#7D8B8B] text-white"
        aria-label="Submit"
      >
        <ArrowRight className="text-white h-5 w-5" />
      </button>
    </div>
  )
})
InputWithButton.displayName = "InputWithButton"

export { InputWithButton }
