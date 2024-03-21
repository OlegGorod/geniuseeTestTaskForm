import { Paper, Stack, Typography } from "@mui/material";
import InputUI from "../UI/InputUI";
import constants from "../../constants/Form";

const PersonInfoForm = ({ handleBlur, setValue, control, errors }) => {
  return (
    <Stack spacing={2} width={400}>
      <Paper elevation={0} sx={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Typography variant="h5" gutterBottom>
          {constants.TITLE.PERSONAL_INFO}
        </Typography>
      </Paper>
      <InputUI
        id="firstName"
        label={constants.INPUT_LABEL.FIRST_NAME}
        type="text"
        onBlur={() => handleBlur("firstName")}
        onChange={(e) => setValue("firstName", e.target.value)}
        error={!!errors.firstName}
        errorMsg={errors.firstName?.message}
        required={true}
        control={control}
        placeholder={constants.INPUT_PLACEHOLDER.FIRST_NAME}
        maskType="noMask"
      />
      <InputUI
        id="lastName"
        label={constants.INPUT_LABEL.LAST_NAME}
        type="text"
        onBlur={() => handleBlur("lastName")}
        onChange={(e) => setValue("lastName", e.target.value)}
        error={!!errors.lastName}
        errorMsg={errors.lastName?.message}
        required={true}
        control={control}
        placeholder={constants.INPUT_PLACEHOLDER.LAST_NAME}
        maskType="noMask"
      />
    </Stack>
  );
};

export default PersonInfoForm;
