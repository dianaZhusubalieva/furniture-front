import * as React from "react";
import { Button } from "@mui/material";
import IMG from "../helpers/images/logout.png";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { clientContext } from "../contexts/ClientContext";
import { useNavigate, Link } from "react-router-dom";
import { adminContext } from "../contexts/AdminContext";
import { ShoppingCart } from "@mui/icons-material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { useAuth } from "../contexts/AuthContext";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import Favorites from "./UserContent/Favorites";
const Search = styled("div")(({ theme }) => ({
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
//! Proverka
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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
  //    ! поиск

  const { getProducts } = React.useContext(adminContext);
  const getProductsClient = React.useContext(clientContext);

  const navigate = useNavigate();
  let obj = new URLSearchParams(window.location.search);
  const filterPhones = (key, value) => {
    obj.set(key, value);
    let newUrl = `${window.location.pathname}?${obj.toString()}`;
    navigate(newUrl);
    getProducts();
    getProductsClient.getProducts();
  };
  // ! cart
  const { productsCountInCart, productsCountInFavorites, getFavorite } =
    React.useContext(clientContext);
  //  ! favorites
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //  ! account
  const { currentUser, logout, adminEmail } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
      {currentUser ? (
        <>
          <Button onClick={logout}>
            <h6 className="text3">{currentUser.email}</h6>
            <img src={IMG} alt="" />
          </Button>
        </>
      ) : (
        <Link to="/register">
          <Button>
            Войти
            <AccountCircle style={{ color: "rgba(169, 169, 169, 0.748)" }} />
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
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Link to="/cart">
            <Badge
              style={{ color: "black" }}
              badgeContent={productsCountInCart}
              color="error"
            >
              <ShoppingCart />
            </Badge>
          </Link>
        </IconButton>
        <p>Корзина</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
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
        <p>Избранное</p>
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
        <p>Профиль</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              style={{ color: "rgba(102, 102, 102, 0.644)" }}
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <h2
              className="main-logo"
              style={{ cursor: "pointer" }}
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => {
                navigate("/");
              }}
            >
              Industry West
            </h2>

            <Search>
              <SearchIconWrapper>
                <SearchIcon style={{ color: "rgba(102, 102, 102, 0.644)" }} />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(e) => {
                  filterPhones(`q`, e.target.value);
                }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{ color: "rgba(102, 102, 102, 0.644)" }}
              />
            </Search>
            {currentUser ? (
              currentUser.email === adminEmail ? (
                <Link to="/admin">
                  <Button>Admin</Button>
                </Link>
              ) : null
            ) : null}
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                style={{ color: "rgba(102, 102, 102, 0.644)" }}
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
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                style={{ color: "rgba(102, 102, 102, 0.644)" }}
              >
                {currentUser ? (
                  <>
                    <Button onClick={logout}>
                      <h6 className="text3">{currentUser.email}</h6>
                      <img src={IMG} alt="" />
                    </Button>
                  </>
                ) : (
                  <Link to="/register">
                    <Button>
                      <AccountCircle
                        style={{ color: "rgba(169, 169, 169, 0.748)" }}
                      />
                    </Button>
                  </Link>
                )}
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                style={{ color: "rgba(102, 102, 102, 0.644)" }}
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
