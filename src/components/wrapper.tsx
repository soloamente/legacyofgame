import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { motion } from "framer-motion";

const Wrapper = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "w-full flex flex-col items-center py-[60px] pb-10 max-[400px]:px-4 max-sm:px-8 max-2xl:px-12 overflow-hidden",
        className
      )}
      id={props.id}
      ref={ref}
    >
      {children}
    </motion.div>
  )
);
Wrapper.displayName = "Wrapper";
export { Wrapper };
