import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(20, "Max 20 characters allowed"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password Should be at least 6 characters"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password Should be at least 6 characters"),
});

export const avatarValidator = Yup.object().shape({
  avatar: Yup.string().required("Please select an avatar"),
});
