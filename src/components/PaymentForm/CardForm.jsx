import { Controller, useForm } from "react-hook-form";
import {
  Stack,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
} from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  mockValidateEmail,
  validationSchema,
} from "../../schemas/validationSchema";
import { useContext, useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import PersonInfoForm from "./PersonInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import PayDetatilsForm from "./PayDetatilsForm";
import constants from "../../constants/Form";
import { AppContext } from "../../store/AppProvider";

const CardForm = () => {
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setMaskFormat } = useContext(AppContext);

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: [""],
    country: "",
    address: "",
    creditCard: "",
    codeCVV: "",
    agreement: false,
  };

  const {
    handleSubmit,
    trigger,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitSuccessful },
    control,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (isSubmitSuccessful && formData && !isLoading) {
      setMaskFormat([constants.FORMAT.PHONE]);
      reset();
      console.log("Form submitted successfully:", formData);
    }
  }, [reset, isSubmitSuccessful, formData, isLoading, setMaskFormat]);

  const handleBlur = async (fieldName) => {
    try {
      if (fieldName === "email") {
        await mockValidateEmail(fieldName);
        await trigger(fieldName);
      } else {
        await trigger(fieldName);
      }
    } catch (error) {
      setError(fieldName, { message: "Validation server error message" });
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    await promise
      .then(() => {
        setIsLoading(false);
        setFormData(data);
      })
      .catch((error) => {
        console.error("Error on server", error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <PersonInfoForm
            handleBlur={handleBlur}
            setValue={setValue}
            control={control}
            errors={errors}
          />

          <ContactInfoForm
            handleBlur={handleBlur}
            setValue={setValue}
            control={control}
            errors={errors}
          />

          <PayDetatilsForm
            handleBlur={handleBlur}
            setValue={setValue}
            control={control}
            errors={errors}
          />

          <Grid item xs={12}>
            <Controller
              name="agreement"
              control={control}
              render={({ field: { value, ...field } }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={!!value} />}
                  inputRef={field.ref}
                  label={constants.INPUT_LABEL.AGREE}
                  aria-invalid={!!errors.agreement}
                  required
                />
              )}
            />
            <FormHelperText error>
              {errors.agreement ? errors.agreement.message : " "}
            </FormHelperText>
          </Grid>

          <LoadingButton
            type="submit"
            loading={isLoading}
            loadingIndicator="Loading…"
            variant="contained"
            color="primary"
            aria-label="Submit form"
          >
            <span>Submit</span>
          </LoadingButton>
        </Stack>
      </form>

      <DevTool control={control} />
    </>
  );
};

export default CardForm;
