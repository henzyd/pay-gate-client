import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "~/components/button";
import FormField from "~/components/form-field";
import { usePaymentRequest } from "~/mutations/payment";
import VerificationModal from "./verification-modal";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  amount: Yup.number().min(1, "Amount is required"),
});

export default function Home() {
  const [displayVerificationModal, setDisplayVerificationModal] = useState(false);

  const paymentRequest = usePaymentRequest();

  return (
    <>
      <div className="flex flex-col gap-8 px-8">
        <h1 className="text-2xl font-medium text-center">Welcome to my payment platform</h1>
        <div className="max-w-[600px] mx-auto flex flex-col gap-4 w-full">
          <p className="text-sm">Please fill the form below to pay me:</p>
          <Formik
            initialValues={{
              email: "",
              amount: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              const data = await paymentRequest.mutateAsync({
                ...values,
              });

              if (data) {
                setDisplayVerificationModal(true);
              }
            }}
            validateOnBlur={false}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form action="post" onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <FormField
                  label="Email"
                  required
                  placeholder="example@gmail.com"
                  name="email"
                  type="email"
                />

                <Button className="w-full !mt-2" type="submit" loading={isSubmitting}>
                  Pay Now
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <VerificationModal
        open={displayVerificationModal}
        setOpen={(bool: boolean) => setDisplayVerificationModal(bool)}
        data={paymentRequest.data}
      />
    </>
  );
}
