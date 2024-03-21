const INPUT_PLACEHOLDER = {
  FIRST_NAME: "Hayman",
  LAST_NAME: " Andrews",
  EMAIL: "example@mail.com",
  PHONE: "+38(050)1231212",
  CREDIT_CARD: 'XXXX XXXX XXXX XXXX',
  CVV2: 'XXX'
};

const INPUT_LABEL = {
  FIRST_NAME: "First name",
  LAST_NAME: "Last name",
  EMAIL: "Email",
  PHONE: "Phone number",
  COUNTRY: "Country",
  ADDRESS: "Address",
  CREDIT_CARD: "Credit card",
  CVV2: "CVV2 code",
  AGREE: "Agreement with terms of use",
};

const TITLE = {
  PERSONAL_INFO: "Personal information",
  CONTACT_INFO: "Contact information",
  PAY_DETAILS: "Payment details",
};

const FORMAT = {
  PHONE: "+%%(%%%)%%%%%%%", 
  CREDIT_CARD: "%%%% %%%% %%%% %%%%",
  CVV: "%%%"
}

const constants = {
  INPUT_PLACEHOLDER,
  TITLE,
  INPUT_LABEL,
  FORMAT
};

export default constants;
