const signUpConfig = {
    header: "  Welcome Amazon Vehicle Services",
    hiddenDefaults: ["phone_number"],
    defaultCountryCode: "1",
    signUpFields: [
      {
        label: "First Name",
        key: "given_name",
        required: true,
        displayOrder: 100,
        type: "string",
        placeholder: "First Name",
      },
      {
        label: "Last Name",
        key: "family_name",
        required: true,
        displayOrder: 101,
        type: "string",
        placeholder: "Last Name",
      },
    ],
  };
  
  export default signUpConfig;