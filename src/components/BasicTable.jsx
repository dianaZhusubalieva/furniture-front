//! страница админки, отображение товаров(edit, delete)

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { adminContext } from "../contexts/AdminContext";

export default function BasicTable() {
  const { getProducts, products, deleteProduct } =
    React.useContext(adminContext);
  React.useEffect(() => {
    getProducts();
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {products ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Color</TableCell>

                <TableCell align="right">Model</TableCell>
                <TableCell align="right">#</TableCell>
                <TableCell align="right">#</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title={product.description}>
                      <p>{product.description.slice(0, 20)}...</p>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">
                    <img width="50" src={product.image} alt="product" />
                  </TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.color}</TableCell>

                  <TableCell align="right">{product.model}</TableCell>
                  <TableCell align="right">
                    <Link to={`/admin/edit/${product.id}`}>
                      <Button color="warning" variant="outlined">
                        Edit
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => {
                      deleteProduct(product.id)
                      getProducts()
                    }}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
