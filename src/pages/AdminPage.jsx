import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import "./diana.css";
import MyNavbar from "../components/MyNavbar";

const AdminPage = () => {
  return (
    <>
      <MyNavbar />
      <div className="adminPage">
        <Link to="/products">
          <Button style={{ marginRight: '40px' }} >To Products</Button>
        </Link>
        <Link to="/admin/add">
          <Button variant='outlined' >Add Product</Button>
        </Link>

        <div>
          <BasicTable />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
