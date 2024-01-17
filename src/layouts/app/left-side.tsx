import Logo from "~/components/logo";
import Payment from "~/assets/illustrations/payment.png";

export default function LeftSide() {
  return (
    <aside className="flex-col flex justify-center items-end w-full relative tabletAndBelow:hidden bg-primary-50 min-h-screen">
      <div className="p-6 flex-col flex justify-center items-center max-w-[900px]">
        <div className="absolute z-10 top-[35px] left-[35px]">
          <Logo />
        </div>
        <div className="flex flex-col gap-4 w-[75%] items-center py-12">
          <figure className="w-[90%]">
            <img
              src={Payment}
              className="w-full h-full object-contain"
              alt="payment illustration"
            />
          </figure>
          <p className="text-center text-sm largeLaptop:text-base text-black/90">
            This is a payment website built by{" "}
            <a
              href="https://www.linkedin.com/in/uchechukwu-anachuna/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Henry
            </a>{" "}
            to receive payments in any currency.
          </p>
        </div>
      </div>
    </aside>
  );
}
