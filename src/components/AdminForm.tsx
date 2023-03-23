import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Product } from "../../data";
import { useCart } from "../contexts/CartContext";
import { useOrder } from "../contexts/OrderContext";

const AdminSchema = Yup.object().shape({
  id: Yup.string(),
  brand: Yup.string(),
  title: Yup.string().required("Ange titel"),
  description: Yup.string().required("Ange beskrivning"),
  image: Yup.string()
    .required("Ange bild")
    .url("Bilden måste vara en giltig URL"),
  background: Yup.string(),
  price: Yup.number()
    .typeError("Priset måste vara en siffra")
    .positive("Priset måste vara större än 0")
    .required("Ange pris"),
});

type AdminValues = Yup.InferType<typeof AdminSchema>;

export const defaultValues: AdminValues = {
  id: "",
  brand: "",
  title: "",
  description: "",
  image: "",
  background: "",
  price: 0,
};

type AdminFormProps = {
  product?: Product;
  isNewProduct: boolean;
};

export default function AdminForm({ product, isNewProduct }: AdminFormProps) {
  const navigate = useNavigate();

  const buttonText = isNewProduct ? "Ny produkt" : "Ändra produkt";

  const initialValues: AdminValues = {
    id: product?.id || defaultValues.id,
    brand: product?.brand || defaultValues.brand,
    title: product?.title || defaultValues.title,
    description: product?.description || defaultValues.description,
    image: product?.image || defaultValues.image,
    background: product?.background || defaultValues.background,
    price: product?.price || defaultValues.price,
  };

  const formik = useFormik<AdminValues>({
    initialValues,
    validationSchema: AdminSchema,
    onSubmit: (values) => {
      const customer = {
        id: values.id,
        brand: values.brand,
        title: values.title,
        description: values.description,
        image: values.image,
        background: values.background,
        price: values.price,
      };
      console.log(customer);
      // navigate("/confirmation");
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
      data-cy="product-form"
    >
      {" "}
      <TextField
        fullWidth
        id="id"
        type="id"
        name="id"
        label="ID"
        value={formik.values.id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.id && Boolean(formik.errors.id)}
        helperText={formik.touched.id && formik.errors.id}
        inputProps={{ "data-cy": "customer-id" }}
        FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
        autoComplete="name"
      />
      <TextField
        fullWidth
        id="brand"
        type="brand"
        name="brand"
        label="Brand"
        value={formik.values.brand}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.brand && Boolean(formik.errors.brand)}
        helperText={formik.touched.brand && formik.errors.brand}
        inputProps={{ "data-cy": "customer-name" }}
        FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
        autoComplete="Brand"
      />
      <TextField
        fullWidth
        id="title"
        type="title"
        name="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        inputProps={{ "data-cy": "product-title" }}
        FormHelperTextProps={{ "data-cy": "product-title-error" } as any}
        autoComplete="name"
      />
      <TextField
        fullWidth
        id="description"
        type="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        inputProps={{ "data-cy": "product-description" }}
        FormHelperTextProps={{ "data-cy": "product-description-error" } as any}
        autoComplete="name"
      />
      <TextField
        fullWidth
        id="image"
        type="text"
        name="image"
        label="Image"
        value={formik.values.image}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}
        inputProps={{ "data-cy": "product-image" }}
        FormHelperTextProps={{ "data-cy": "product-image-error" } as any}
        autoComplete="name"
      />
      <TextField
        fullWidth
        id="background"
        type="background"
        name="background"
        label="background"
        value={formik.values.background}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.background && Boolean(formik.errors.background)}
        helperText={formik.touched.background && formik.errors.background}
        inputProps={{ "data-cy": "customer-name" }}
        FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
        autoComplete="name"
      />
      <TextField
        fullWidth
        id="price"
        type="price"
        name="price"
        label="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
        inputProps={{ "data-cy": "product-price" }}
        FormHelperTextProps={{ "data-cy": "product-price-error" } as any}
        autoComplete="name"
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        {buttonText}
      </Button>
    </Box>
  );
}
