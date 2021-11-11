import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BasicTable from "../components/BasicTable";

const AdminPage = () => {
  return (
    <div>
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
