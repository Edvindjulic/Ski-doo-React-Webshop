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
  id: Yup.string().required("Ange id"),
  brand: Yup.string(),
  title: Yup.string().required("Ange titel"),
  description: Yup.string().required("Ange beskrivning"),
  image: Yup.string().required("Ange bild"),
  background: Yup.string(),
  price: Yup.number().required("Ange pris"),
});

type AdminValues = Yup.InferType<typeof AdminSchema>;

const defaultValues: AdminValues = {
  id: "",
  brand: "",
  title: "",
  description: "",
  image: "",
  background: "",
  price: 0,
};

type AdminFormProps = {
  myProduct?: Product;
};

export default function AdminForm({ myProduct }: AdminFormProps) {
  const navigate = useNavigate();

  const initialValues: AdminValues = {
    id: myProduct?.id || defaultValues.id,
    brand: myProduct?.brand || defaultValues.brand,
    title: myProduct?.title || defaultValues.title,
    description: myProduct?.description || defaultValues.description,
    image: myProduct?.image || defaultValues.image,
    background: myProduct?.background || defaultValues.background,
    price: myProduct?.price || defaultValues.price,
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
      ADMINFORM
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
        inputProps={{ "data-cy": "customer-name" }}
        FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
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
        inputProps={{ "data-cy": "customer-name" }}
        FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
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
        inputProps={{ "data-cy": "customer-name" }}
        FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
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
        inputProps={{ "data-cy": "customer-name" }}
        FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
        autoComplete="name"
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Lägg till produkt
      </Button>
    </Box>
  );
}
