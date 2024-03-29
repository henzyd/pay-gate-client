import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "~/components/button";
import Modal from "~/components/modal";
import OtpInput from "~/components/otp-input";
import { useEmailVerification, useResendVerificationCode } from "~/mutations/payment";

type VerificationModalProps = {
  open: boolean;
  setOpen: (bool: boolean) => void;
  data: { email: string } | null;
};

export default function VerificationModal({ open, setOpen, data }: VerificationModalProps) {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const verifyEmail = useEmailVerification();
  const resendCode = useResendVerificationCode();

  if (!data) {
    return;
  }

  function onClose() {
    setOpen(false);
  }

  return (
    <Modal
      muiModal={{
        open,
        onClose,
      }}
      innerContainer={{
        className: "pt-[2rem]",
      }}
    >
      <div className="flex flex-col gap-2 w-full">
        <header>
          <h1 className="text-xl font-semibold">Verify Email</h1>
          <p className="text-sm text-center">
            We sent a code to <span className="font-semibold">{data?.email}</span>
          </p>
        </header>
        <div className="flex flex-col items-center gap-12 py-4 w-full">
          <OtpInput
            value={otp}
            onChange={(value) => {
              setOtp(value);
              if (value.length === 6) {
                setIsComplete(true);
              } else {
                setIsComplete(false);
              }
            }}
          />
          <Button
            type="submit"
            className="w-full !p-4 mt-5"
            disabled={!isComplete}
            onClick={async () => {
              const response = await verifyEmail.mutateAsync({
                otp,
              });

              if (response) {
                navigate("/paystack");
              }
            }}
            loading={verifyEmail.isPending}
          >
            Verify
          </Button>
        </div>
        <p className="text-sm">
          Didn't get a code?{" "}
          <button
            className="text-primary-600 font-semibold"
            onClick={async () => {
              await resendCode.mutateAsync({
                email: data.email,
              });
            }}
          >
            Resend
          </button>
        </p>
      </div>
    </Modal>
  );
}
