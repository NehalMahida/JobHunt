const required = (propertyType) => {
  return (v) => (v && v.length > 0) || `${propertyType} is required`;
};

const emailPattern = () => {
  return (v) =>
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(v) ||
    "Email is not valid";
};

const passwordPattern = () => {
  return (v) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      v
    ) ||
    "Password must contain at least 1 upper, 1 lower, 1 special char and numbers";
};

export default { required, emailPattern, passwordPattern };
