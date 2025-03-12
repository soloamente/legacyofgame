import { cn } from "@/lib/utils";
const ellipseSvg = "/assets/svg/Ellipse 5.svg";

type Props = React.HTMLAttributes<HTMLImageElement>;

export function Ellipse({ className, ...props }: Props) {
  return (
    <img
      src={ellipseSvg}
      className={cn(
        "-z-50 max-w-fit w-[180vw] sm:w-[150vw] lg:w-[130vw] xl:w-[120vw] h-auto absolute -top-10 left-1/2 -translate-x-1/2",
        className
      )}
      {...props}
    />
  );
}
