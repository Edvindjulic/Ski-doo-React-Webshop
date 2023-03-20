import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

const CheckoutSchema = Yup.object().shape({
  email: Yup.string()
    .email("Du måste ange en giltig email")
    .required("Ange en email"),
  street: Yup.string().required("Ange din adress"),
  phone: Yup.string().required("Ange ditt telefonnummer"),
  name: Yup.string().required("Ange ditt namn"),
  zipcode: Yup.string().required("Ange ditt postnummer").min(5).max(5),
  city: Yup.string().required("Ange din stad"),
});

type CheckoutValues = Yup.InferType<typeof CheckoutSchema>;

export default function CheckoutForm() {
  const navigate = useNavigate();

  const formik = useFormik<CheckoutValues>({
    initialValues: {
      email: "",
      street: "",
      phone: "",
      name: "",
      zipcode: "",
      city: "",
    },
    validationSchema: CheckoutSchema,
    onSubmit: (values) => {
      navigate("/confirmbooking");

      console.log(values);
    },
  });
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "25ch",
          display: "flex",
          flexDirection: "column",
        },
      }}
      noValidate
      autoComplete="on"
      onSubmit={formik.handleSubmit}
      data-cy="customer-form"
    >
      <TextField
        fullWidth
        id="name"
        type="name"
        name="name"
        label="Namn"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        inputProps={{ "data-cy": "customer-name" }}
        FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
        autoComplete="name"
      />
      <TextField
        fullWidth
        id="street"
        type="street"
        name="street"
        label="Adress"
        value={formik.values.street}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.street && Boolean(formik.errors.street)}
        helperText={formik.touched.street && formik.errors.street}
        inputProps={{ "data-cy": "customer-address" }}
        FormHelperTextProps={{ "data-cy": "customer-address-error" } as any}
        autoComplete="street-address"
      />
      <TextField
        fullWidth
        id="zipcode"
        type="zipcode"
        name="zipcode"
        label="Postnummer"
        value={formik.values.zipcode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
        helperText={formik.touched.zipcode && formik.errors.zipcode}
        inputProps={{ "data-cy": "customer-zipcode" }}
        FormHelperTextProps={{ "data-cy": "customer-zipcode-error" } as any}
        autoComplete="postal-code"
      />
      <TextField
        fullWidth
        id="city"
        type="city"
        name="city"
        label="Stad"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.city && Boolean(formik.errors.city)}
        helperText={formik.touched.city && formik.errors.city}
        inputProps={{ "data-cy": "customer-city" }}
        FormHelperTextProps={{ "data-cy": "customer-city-error" } as any}
        autoComplete="city"
      />
      <TextField
        fullWidth
        id="email"
        type="email"
        name="email"
        label="E-mail"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        inputProps={{ "data-cy": "customer-email" }}
        FormHelperTextProps={{ "data-cy": "customer-email-error" } as any}
        autoComplete="email"
      />

      <TextField
        fullWidth
        id="phone"
        type="phone"
        name="phone"
        label="Telefonnummer"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        inputProps={{ "data-cy": "customer-phone" }}
        FormHelperTextProps={{ "data-cy": "customer-phone-error" } as any}
        autoComplete="tel"
      />

      <Button color="primary" variant="contained" fullWidth type="submit">
        Beställ
      </Button>
    </Box>
  );
}
