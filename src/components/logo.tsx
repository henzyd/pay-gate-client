import { twMerge } from "tailwind-merge";
import _logo from "~/assets/logo.svg";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return <img src={_logo} alt="PayGate-logo" className={twMerge(`w-[6.5rem]`, `${className}`)} />;
}
