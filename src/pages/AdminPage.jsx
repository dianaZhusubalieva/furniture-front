import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import "./diana.css";

const AdminPage = () => {
  return (
    <div className="adminPage">
      <Link to="/admin/add">
        <Button>Add Product</Button>
      </Link>
      <div>
        <BasicTable />
      </div>
    </div>
  );
};

export default AdminPage;
