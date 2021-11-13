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
      .min(3, "Минимальное количество символов 3")
      .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
    description: yup
      .string()
      .min(10, "Минимальное количество символов 10")
      .max(255, "Максимальное количество символов 255")
      .required("Поле обязательно для заполнения"),
    image: yup
      .string()

      .required("Поле обязательно для заполнения"),
    price: yup
      .number()
      .min(3, "Минимальное количество символов 3")

      .required("Поле обязательно для заполнения"),
    color: yup.string().required("Поле обязательно для заполнения"),
    model: yup
      .string()
      .min(1, "Минимальное количество символов 1")
      .max(30, "Максимальное количество символов 30")
      .required("Поле обязательно для заполнения"),
    type: yup
      .string()
      .required("Поле обязательно для заполнения"),
  });

  const { addProduct } = React.useContext(adminContext);

  const navigate = useNavigate();
  //   const handleSubmit = (product) => {
  //     // console.log(product);
  //   };

  return (
    <>
      <MyNavbar />
      <div className="add-page">
        <h2>Добавить мебель</h2>
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
                label="Название мебели"
                type="text"
                variant="standard"
                name="name"
                value={values.name}
                error={!!errors.name && touched.name}
                helperText={touched.name ? errors.name : ""}
                onChange={handleChange}
              />
              <TextField
                label="Описание мебели"
                type="text"
                variant="standard"
                name="description"
                value={values.description}
                error={!!errors.description && touched.description}
                helperText={touched.description ? errors.description : ""}
                onChange={handleChange}
              />
              <TextField
                label="Фото мебели"
                type="text"
                variant="standard"
                name="image"
                value={values.image}
                error={!!errors.image && touched.image}
                helperText={touched.image ? errors.image : ""}
                onChange={handleChange}
              />
              <TextField
                label="Цена мебели"
                type="number"
                variant="standard"
                name="price"
                value={values.price}
                error={!!errors.price && touched.price}
                helperText={touched.price ? errors.price : ""}
                onChange={handleChange}
              />
              <TextField
                label="Цвет мебели"
                type="text"
                variant="standard"
                name="color"
                value={values.color}
                error={!!errors.color && touched.color}
                helperText={touched.color ? errors.color : ""}
                onChange={handleChange}
              />

              <TextField
                label="Модель мебели"
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
                  <InputLabel id="demo-simple-select-helper-label">Тип</InputLabel>
                  <Select
                    // label="Тип"
                    variant='standard'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='type'
                    value={values.type}
                    onChange={handleChange}
                    error={!!errors.type && touched.type}
                    helperText={touched.type ? errors.type : ""}
                  >
                    <MenuItem value='кровать'>Кровать</MenuItem>
                    <MenuItem value="диван">Диван</MenuItem>
                    <MenuItem value="кресло">Кресло</MenuItem>
                    <MenuItem value="стол">Стол</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Button variant="contained" color="primary" type="submit">
                Добавить мебель
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddPage;
