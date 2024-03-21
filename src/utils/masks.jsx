import constants from "../constants/Form";

export const getFormatByMaskType = (maskType) => {
  switch (maskType) {
    case 'creditCard':
      return constants.FORMAT.CREDIT_CARD;
    case 'codeCVV':
      return constants.FORMAT.CVV;
    default:
      return '';
  }
};

