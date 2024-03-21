import { Paper, Stack, Typography } from "@mui/material";
import { useCallback, useContext } from "react";
import InputUI from "../UI/InputUI";
import constants from "../../constants/Form";
import { AppContext } from "../../store/AppProvider";

const countries = [
  {
    id: 1,
    label: "Ukraine",
    value: "ukr",
  },
  {
    id: 2,
    label: "Poland",
    value: "pol",
  },
  {
    id: 3,
    label: "Croatia",
    value: "cr",
  },
];

const ContactInfoForm = ({ handleBlur, setValue, control, errors }) => {
  const { maskFormat, setMaskFormat } = useContext(AppContext);
  const addPhoneNumber = useCallback(() => {
    const newMaskFormat = constants.FORMAT.PHONE + ",";
    if (maskFormat.length < 2) {
      const newArrOfMaskFormat = [newMaskFormat, ...maskFormat];
      setMaskFormat(newArrOfMaskFormat);
    } else if (maskFormat.length === 2) {
      setMaskFormat([newMaskFormat, newMaskFormat, constants.FORMAT.PHONE]);
    }
  }, [setMaskFormat, maskFormat]);

  const removePhoneNumber = useCallback(() => {
    setMaskFormat([constants.FORMAT.PHONE]);
    setValue("phoneNumber", [""]);
  }, [setMaskFormat, setValue]);

  const handlePhoneNumber = useCallback(
    (e) => {
      const inputValue = e.target.value;
      const phoneNumbersArray = inputValue.split(",").map((num) => num.trim());
      setValue("phoneNumber", phoneNumbersArray);
    },
    [setValue]
  );

  return (
    <Stack spacing={2} width={400}>
      <Paper elevation={0} sx={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Typography variant="h5" gutterBottom>
          {constants.TITLE.CONTACT_INFO}
        </Typography>
      </Paper>
      <InputUI
        id="email"
        label={constants.INPUT_LABEL.EMAIL}
        type="email"
        onBlur={() => handleBlur("email")}
        onChange={(e) => setValue("email", e.target.value)}
        error={!!errors.email}
        errorMsg={errors.email?.message}
        required={false}
        control={control}
        placeholder={constants.INPUT_PLACEHOLDER.EMAIL}
        maskType="noMask"
      />

      <InputUI
        maskType="phone"
        id="phoneNumber"
        label={constants.INPUT_LABEL.PHONE}
        type="tel"
        onBlur={() => handleBlur("phoneNumber")}
        onChange={handlePhoneNumber}
        addNumber={addPhoneNumber}
        removeNumber={removePhoneNumber}
        error={!!errors.phoneNumber}
        errorMsg={errors.phoneNumber?.message}
        required={false}
        control={control}
        placeholder={constants.INPUT_PLACEHOLDER.PHONE}
        maskFormat={maskFormat}
      />
      <InputUI
        id="country"
        label={constants.INPUT_LABEL.COUNTRY}
        type="text"
        select={true}
        onBlur={() => handleBlur("country")}
        onChange={(e) => setValue("country", e.target.value)}
        error={!!errors.country}
        errorMsg={errors.country?.message}
        required={true}
        countries={countries}
        control={control}
      />
      <InputUI
        id="address"
        label={constants.INPUT_LABEL.ADDRESS}
        type="text"
        onBlur={() => handleBlur("address")}
        onChange={(e) => setValue("address", e.target.value)}
        error={!!errors.address}
        errorMsg={errors.address?.message}
        required={true}
        control={control}
        maskType="noMask"
      />
    </Stack>
  );
};

export default ContactInfoForm;
