import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { twMerge } from "tailwind-merge";

export default function Button({
  loading,
  variant = "contained",
  className,
  size = "medium",
  sx,
  ...props
}: LoadingButtonProps) {
  return (
    <LoadingButton
      variant={variant}
      className={twMerge(
        `flex justify-center items-center !normal-case !rounded-md !p-3 !text-white !font-Rubik !font-medium`,
        loading && `opacity-40 !cursor-not-allowed !shadow-none`,
        `${className}`
      )}
      {...props}
      sx={{
        ...sx,
      }}
      size={size}
      loading={loading}
      disableElevation
    >
      <>{props.children}</>
    </LoadingButton>
  );
}
