import { Button, Card, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { generateId, Product } from "../../data";
import { useProduct } from "../contexts/ProductContext";

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
    .positive("Priset måste vara högre än 0 kr")
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
  const { addProduct, updateProduct } = useProduct();
  const buttonText = isNewProduct ? "Lägg till produkt" : "Ändra produkt";
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
      let uniqueID = values.id;
      if (values.id === "") {
        uniqueID = generateId();
      }
      const customer = {
        id: uniqueID,
        brand: values.brand,
        title: values.title,
        description: values.description,
        image: values.image,
        background: values.background,
        price: values.price,
      };
      if (isNewProduct) {
        addProduct(customer as Product);
      }
      if (!isNewProduct) {
        updateProduct(customer.id as string, customer as Product);
      }
      navigate("/admin");
    },
  });
  return (
    <>
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
        onSubmit={formik.handleSubmit}
        data-cy="product-form"
      >
        <TextField
          fullWidth
          id="title"
          type="title"
          name="title"
          label="Titel"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          inputProps={{ "data-cy": "product-title" }}
          FormHelperTextProps={{ "data-cy": "product-title-error" } as any}
        />
        <TextField
          fullWidth
          id="description"
          type="description"
          name="description"
          label="Beskrivning"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          inputProps={{ "data-cy": "product-description" }}
          FormHelperTextProps={
            { "data-cy": "product-description-error" } as any
          }
        />
        <TextField
          fullWidth
          id="brand"
          type="brand"
          name="brand"
          label="Märke"
          value={formik.values.brand}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.brand && Boolean(formik.errors.brand)}
          helperText={formik.touched.brand && formik.errors.brand}
          inputProps={{ "data-cy": "customer-name" }}
          FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
        />
        <TextField
          fullWidth
          id="image"
          type="text"
          name="image"
          label="Bild-URL"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
          inputProps={{ "data-cy": "product-image" }}
          FormHelperTextProps={{ "data-cy": "product-image-error" } as any}
        />
        <TextField
          fullWidth
          id="background"
          type="background"
          name="background"
          label="Bakgrundsbild-URL"
          value={formik.values.background}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.background && Boolean(formik.errors.background)}
          helperText={formik.touched.background && formik.errors.background}
          inputProps={{ "data-cy": "customer-name" }}
          FormHelperTextProps={{ "data-cy": "customer-name-error" } as any}
        />
        <TextField
          fullWidth
          id="price"
          type="price"
          name="price"
          label="Pris"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
          inputProps={{ "data-cy": "product-price" }}
          FormHelperTextProps={{ "data-cy": "product-price-error" } as any}
        />
        <Button color="secondary" variant="contained" fullWidth type="submit">
          {buttonText}
        </Button>
      </Box>
      {!isSmallScreen && (
        <Box sx={{ textAlign: "center" }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "1rem",
              padding: "2rem",
              justifyContent: "center",
              maxWidth: "30rem",
              minWidth: "15rem",
              "& a": {
                color: "black",
                textDecoration: "none",
              },
            }}
          >
            <Link to={"/product/" + formik.values.id}>
              <img
                src={formik.values.image}
                alt={formik.values.title}
                width="100%"
              />

              <Box
                sx={{
                  display: "flex",
                  fontSize: "25px",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    fontStyle: "italic",
                    paddingRight: "0.8rem",
                  }}
                >
                  <h2>{formik.values.brand}</h2>
                </Box>
                <Box>
                  <h2 data-cy="formik.values-title">{formik.values.title}</h2>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  fontSize: "25px",
                }}
              >
                <h6>2023</h6>
                <h6>{formik.values.price}</h6>
              </Box>
              <Box
                sx={{ maxWidth: "30rem", display: "flex", flexWrap: "wrap" }}
              >
                <p data-cy="formik.values-description">
                  {formik.values.description}
                </p>
              </Box>
            </Link>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "0.5rem",
              }}
            >
              <Button color="success">Add to cart</Button>
            </Box>
          </Card>
        </Box>
      )}
    </>
  );
}
