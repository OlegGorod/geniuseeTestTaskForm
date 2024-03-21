import * as yup from "yup";

const phoneRegExp = /^\+\d{2}\(\d{3}\)\d{7}$/;

export const validationSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .matches(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/g, "Incorrect format"),
    phoneNumber: yup
      .array()
      .of(
        yup
          .string()
          .test(
            "isValidPhoneNumber",
            "Incorrect phone number format",
            (value) => value === "" || phoneRegExp.test(value)
          )
      ),
    country: yup.string().required("Country is required"),
    address: yup.string().required("Address is required"),
    creditCard: yup
      .string()
      .required("Credit card number is required")
      .matches(
        /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
        "Credit card number must have 16 digits"
      ),
    codeCVV: yup
      .string()
      .required("Credit card CVV code is required")
      .matches(/^\d{3}$/, "CVV code number must be exactly 3 digits"),
    agreement: yup.boolean().oneOf([true], "Required terms of use"),
  })
  .required();

export function mockValidateEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random() * 100;
      if (randomNumber <= 75) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
