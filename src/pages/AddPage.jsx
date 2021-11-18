import React from "react";
import { adminContext } from "../contexts/AdminContext";

import * as yup from "yup";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MyNavbar from "../components/MyNavbar";

import { Button, TextField } from "@mui/material";

const AddPage = () => {
  const schema = yup.object({
    name: yup
      .string()
      .min(3, "min count 3")
      .max(30, "max count 30")
      .required("Required field"),
    description: yup
      .string()
      .min(10, "min count 10")
      .max(255, "max count 255")
      .required("Required field"),
    image: yup
      .string()

      .required("Required field"),
    price: yup
      .number()
      .min(3, "min count 3")

      .required("Required field"),
    color: yup.string().required("Required field"),
    model: yup
      .string()
      .min(1, "min count 1")
      .max(30, "max count 30")
      .required("Required field"),
    type: yup
      .string()
      .required("Required field"),
  });

  const { addProduct } = React.useContext(adminContext);

  const navigate = useNavigate();

  return (
    <>
      <MyNavbar />
      <div className="add-page">
        <h2>Add Furniture</h2>
        <Formik
          validationSchema={schema}
          onSubmit={(product) => {
            addProduct(product);
            navigate("/admin");
          }}
          initialValues={{
            name: "",
            description: "",
            image: "",
            price: "",
            color: "",
            model: "",
            type: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name of furniture"
                type="text"
                variant="standard"
                name="name"
                value={values.name}
                error={!!errors.name && touched.name}
                helperText={touched.name ? errors.name : ""}
                onChange={handleChange}
              />
              <TextField
                label="Description of furniture"
                type="text"
                variant="standard"
                name="description"
                value={values.description}
                error={!!errors.description && touched.description}
                helperText={touched.description ? errors.description : ""}
                onChange={handleChange}
              />
              <TextField
                label="Image of furniture"
                type="text"
                variant="standard"
                name="image"
                value={values.image}
                error={!!errors.image && touched.image}
                helperText={touched.image ? errors.image : ""}
                onChange={handleChange}
              />
              <TextField
                label="Price of furniture"
                type="number"
                variant="standard"
                name="price"
                value={values.price}
                error={!!errors.price && touched.price}
                helperText={touched.price ? errors.price : ""}
                onChange={handleChange}
              />
              <TextField
                label="Color of furniture"
                type="text"
                variant="standard"
                name="color"
                value={values.color}
                error={!!errors.color && touched.color}
                helperText={touched.color ? errors.color : ""}
                onChange={handleChange}
              />

              <TextField
                label="Model of furniture"
                type="text"
                variant="standard"
                name="model"
                value={values.model}
                error={!!errors.model && touched.model}
                helperText={touched.model ? errors.model : ""}
                onChange={handleChange}
              />

              <Box sx={{ minWidth: 200 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    variant="standard"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="type"
                    value={values.type}
                    label="Type of Furniture"
                    onChange={handleChange}
                    error={!!errors.type && touched.type}
                    helperText={touched.type ? errors.type : ""}
                  >
                    <MenuItem value="кровать">Bed</MenuItem>
                    <MenuItem value="диван">Sofa</MenuItem>
                    <MenuItem value="кресло">Arm chair</MenuItem>
                    <MenuItem value="стол">Table</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Button variant="contained" color="primary" type="submit">
                Add furniture
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddPage;
