import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { getFormatByMaskType } from "../../utils/masks";
import {
  AddIcCall,
  BackspaceOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const InputUI = ({
  id,
  type,
  error,
  label,
  onBlur,
  select,
  control,
  maskType,
  required,
  errorMsg,
  onChange,
  countries,
  maskFormat,
  addNumber,
  removeNumber,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  placeholder = "",
}) => {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field: { ref, ...field } }) => (
        <FormControl>
          {maskType === "phone" && (
            <PatternFormat
              id={id}
              {...field}
              label={label}
              value={field.value.join("")}
              type={type}
              onBlur={onBlur}
              onChange={onChange}
              error={error}
              helperText={errorMsg}
              aria-invalid={error}
              inputRef={ref}
              required={required}
              placeholder={placeholder}
              customInput={TextField}
              format={maskFormat.join(" ")}
              patternChar="%"
              mask="_"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {maskFormat.length === 3 ? (
                      <IconButton onClick={removeNumber}>
                        <BackspaceOutlined />
                      </IconButton>
                    ) : (
                      <IconButton onClick={addNumber}>
                        <AddIcCall />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          )}

          {maskType === "creditCard" && (
            <PatternFormat
              id={id}
              {...field}
              label={label}
              value={field.value}
              type={type}
              onBlur={onBlur}
              onChange={onChange}
              error={error}
              helperText={errorMsg}
              aria-invalid={error}
              inputRef={ref}
              required={required}
              placeholder={placeholder}
              customInput={TextField}
              format={getFormatByMaskType(maskType)}
              patternChar="%"
            />
          )}

          {maskType === "codeCVV" && (
            <PatternFormat
              id={id}
              {...field}
              label={label}
              value={field.value}
              type={showPassword ? "text" : type}
              onBlur={onBlur}
              onChange={onChange}
              error={error}
              helperText={errorMsg}
              aria-invalid={error}
              inputRef={ref}
              required={required}
              placeholder={placeholder}
              customInput={TextField}
              format={getFormatByMaskType(maskType)}
              patternChar="%"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}

          {select && (
            <TextField
              {...field}
              label="Country"
              type="text"
              select
              error={error}
              onBlur={onBlur}
              value={field.value}
              onChange={onChange}
              helperText={errorMsg}
              aria-invalid={!!error.country}
              required
              inputRef={ref}
            >
              {countries.map((option) => (
                <MenuItem key={option.id} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}

          {maskType === "noMask" && (
            <TextField
              id={id}
              {...field}
              label={label}
              value={field.value}
              type={type}
              onBlur={onBlur}
              onChange={onChange}
              error={error}
              helperText={errorMsg}
              aria-invalid={error}
              inputRef={ref}
              required={required}
              placeholder={placeholder}
            ></TextField>
          )}
        </FormControl>
      )}
    />
  );
};

export default InputUI;
