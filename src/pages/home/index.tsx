import { useState } from "react";
import { MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "~/components/button";
import FormField from "~/components/form-field";
import { usePaymentRequest } from "~/mutations/payment";
import VerificationModal from "./verification-modal";
import AmountField from "~/components/amount-field";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  amount: Yup.number().min(2, "Amount is required"),
});

export default function Home() {
  const [displayVerificationModal, setDisplayVerificationModal] = useState(false);

  const paymentRequest = usePaymentRequest();

  return (
    <>
      <div className="flex flex-col gap-8 px-8 tabletAndBelow:px-4">
        <h1 className="text-2xl font-medium text-center tabletAndBelow:text-xl">
          Welcome to my payment platform
        </h1>
        <div className="max-w-[600px] mx-auto flex flex-col gap-4 w-full">
          <p className="text-sm">Please fill the form below to pay me:</p>
          <Formik
            initialValues={{
              email: "",
              currency: "₦",
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
            {({ handleSubmit, isSubmitting, setFieldValue, values }) => (
              <form action="post" onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <FormField
                  label="Email"
                  required
                  placeholder="example@gmail.com"
                  name="email"
                  type="email"
                />

                <AmountField
                  label="Amount"
                  required
                  placeholder="0.00"
                  name="amount"
                  value={values.amount}
                  onChange={(e) => {
                    setFieldValue("amount", e.target.value);
                  }}
                  type="number"
                  currencyProps={{
                    className: "w-[130px]",
                    value: values.currency,
                    onChange: (e) => {
                      setFieldValue("currency", e.target.value);
                    },
                    children: [
                      <MenuItem key={1} value="₦">
                        NGN (₦)
                      </MenuItem>,
                      <MenuItem key={2} value="$">
                        USD ($)
                      </MenuItem>,
                      <MenuItem key={3} value="£">
                        GBP (£)
                      </MenuItem>,
                    ],
                  }}
                />
                <Button className="w-full !mt-4" type="submit" loading={isSubmitting}>
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
        data={paymentRequest.data || {}}
      />
    </>
  );
}
