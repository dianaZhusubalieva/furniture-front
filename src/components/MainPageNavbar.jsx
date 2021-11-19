import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ShoppingCart } from "@mui/icons-material";
import { clientContext } from "../contexts/ClientContext";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@mui/material";
import IMG from "../helpers/images/logout.png";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Favorites from "./UserContent/Favorites";
styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function PrimarySearchAppBar() {
  const { currentUser, logout, adminEmail } = useAuth();

  // ! cart
  const { productsCountInCart, productsCountInFavorites, getFavorite } = React.useContext(clientContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  //  ! favorites
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {
        currentUser ? (
          <>
            <Button onClick={logout}>
              <h6 className="text3">{currentUser.email}</h6>
              <img src={IMG} alt="" />
            </Button>
          </>
        ) : (
          <Link to="/register">
            <Button >
              Loge In
              <AccountCircle
                style={{ color: "rgba(169, 169, 169, 0.748)" }}
              />
            </Button>
          </Link>
        )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/cart">
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge
              style={{ color: "black" }}
              badgeContent={productsCountInCart}
              color="error"
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
          <p style={{ color: '#1a1a1a' }} >Cart</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={() => {
        handleOpen();
        getFavorite();
      }}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={productsCountInFavorites} color="error">
            <BookmarkBorderIcon />
          </Badge>
        </IconButton>
        <p>Favorites</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>

            <h2 style={{ cursor: 'pointer' }} className="main-logo">Industry West</h2>
            <Link to='/products' >
              <h3 style={{ marginLeft: '50px' }} className="our-prod" >Our Products</h3>
            </Link>
            {currentUser ? (
              currentUser.email === adminEmail ? (
                <Link to="/admin">
                  <Button>Admin</Button>
                </Link>
              ) : (
                <p></p>
              )
            ) : (
              <p></p>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Link to="/cart">
                  <Badge
                    style={{ color: "rgba(102, 102, 102, 0.644)" }}
                    badgeContent={productsCountInCart}
                    color="error"
                  >
                    <ShoppingCart />
                  </Badge>
                </Link>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                style={{ color: "rgba(102, 102, 102, 0.644)" }}
              >
                <Badge badgeContent={productsCountInFavorites} color="error">
                  <BookmarkBorderIcon
                    onClick={() => {
                      handleOpen();
                      getFavorite();
                    }}
                  />
                </Badge>
              </IconButton>
              {currentUser ? (
                <>
                  <Button onClick={logout}>
                    <h6 className="text3">{currentUser.email}</h6>
                    <img src={IMG} alt="" />
                  </Button>
                </>
              ) : (
                <Link to="/register">
                  <Button style={{ marginTop: "7px" }}>
                    <AccountCircle
                      style={{ color: "rgba(102, 102, 102, 0.644)" }}
                    />
                  </Button>
                </Link>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Favorites
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
}

//after account circle in the Box
