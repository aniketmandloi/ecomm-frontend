import React from "react";
import { useAppSelector } from "../../store/hooks";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);

  // Define styles using `sx` prop
  const appBarSx: SxProps<Theme> = {
    position: "static",
    bgcolor: "primary.main",
    boxShadow: 1,
  };

  const toolbarSx: SxProps<Theme> = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleSx: SxProps<Theme> = {
    flexGrow: 1,
    fontWeight: 600,
  };

  return (
    <AppBar position="static" sx={appBarSx}>
      <Toolbar sx={toolbarSx}>
        <Typography variant="h6" sx={titleSx}>
          Aniket's Shop
        </Typography>
        <div>
          {!isAuthenticated && (
            <Button color="inherit" component={Link} to={`/login`}>
              Login
            </Button>
          )}
          {isAuthenticated && (
            <Button color="inherit" component={Link} to={`/orders`}>
              My Orders
            </Button>
          )}
          <IconButton
            aria-label="access shopping cart"
            color="inherit"
            component={Link}
            to="/cart"
          >
            <Badge badgeContent={items?.length || 0} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
