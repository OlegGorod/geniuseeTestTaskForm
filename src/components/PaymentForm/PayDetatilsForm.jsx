import { Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import InputUI from "../UI/InputUI";
import constants from "../../constants/Form";

const PayDetatilsForm = ({ handleBlur, setValue, control, errors }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Stack spacing={2} width={400}>
      <Paper elevation={0} sx={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Typography variant="h5" gutterBottom>
          {constants.TITLE.PAY_DETAILS}
        </Typography>
      </Paper>
      <InputUI
        maskType="creditCard"
        id="creditCard"
        label={constants.INPUT_LABEL.CREDIT_CARD}
        type="text"
        onBlur={() => handleBlur("creditCard")}
        onChange={(e) => setValue("creditCard", e.target.value)}
        error={!!errors.creditCard}
        errorMsg={errors.creditCard?.message}
        required={true}
        control={control}
        placeholder={constants.INPUT_PLACEHOLDER.CREDIT_CARD}
      />
      <InputUI
        maskType="codeCVV"
        id="codeCVV"
        label={constants.INPUT_LABEL.CVV2}
        type="password"
        onBlur={() => handleBlur("codeCVV")}
        onChange={(e) => setValue("codeCVV", e.target.value)}
        error={!!errors.codeCVV}
        errorMsg={errors.codeCVV?.message}
        required={true}
        control={control}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        showPassword={showPassword}
        placeholder={constants.INPUT_PLACEHOLDER.CVV2}
      />
    </Stack>
  );
};

export default PayDetatilsForm;
