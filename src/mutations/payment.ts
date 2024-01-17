import { useMutation } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import { notifyError, notifySuccess } from "~/utils/toast";

export function usePaymentRequest() {
  return useMutation({
    mutationFn: async (data: Record<string, any>) => {
      const { data: response } = await axios.post("", data);

      return response;
    },
    onSuccess: () => {
      notifySuccess("Payment request successfully sent please verify your email");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          notifyError("Error occured when sending payment request");
        }
      }
    },
  });
}

export function useEmailVerification() {
  return useMutation({
    mutationFn: async (data: Record<string, any>) => {
      const { data: response } = await axios.post("", data);

      return response;
    },
    onSuccess: () => {
      notifySuccess("Successfully verified email");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          notifyError("Error occured while verifying email");
        }
      }
    },
  });
}

export function useResendVerificationCode() {
  return useMutation({
    mutationFn: async (data: { email: string }) => {
      const { data: response } = await axios.post("", data);

      return response;
    },
    onSuccess: () => {
      notifySuccess("A new code has been to sent to your email address");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          notifyError("Error occured while resending code");
        }
      }
    },
  });
}
