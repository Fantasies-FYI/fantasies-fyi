
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { style?: React.CSSProperties }
>(({ className, value, style, ...props }, ref) => {
  // Get custom colors from style object if present
  const indicatorStyle = {
    transform: `translateX(-${100 - (value || 0)}%)`,
    backgroundColor: style?.["--progress-foreground"] as string || 'hsl(var(--primary))',
  };

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      style={{
        backgroundColor: style?.["--progress-background"] as string || undefined,
        ...style
      }}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 transition-all"
        style={indicatorStyle}
      />
    </ProgressPrimitive.Root>
  );
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
