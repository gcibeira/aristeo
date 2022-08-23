/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the Configurator
import CartRoot from "examples/Cart/CartRoot";
import CartProductList from "examples/Lists/CartProductList";

// Material Dashboard 2 React context
import {
  useShoppingCartController,
  setOpenCart,
} from "context/ShoppingCartContext";

function Cart() {
  const [controller, dispatch] = useShoppingCartController();
  const { openCart, cart } = controller;
  const darkMode = false;
  const totalPrice = cart.reduce((total, item) => (total + item.price * item.quantity),0)

  return (
    <CartRoot variant="permanent" ownerState={{ openCart }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDBox>
          <MDTypography variant="h5">Tu pedido</MDTypography>
          <MDTypography variant="body2" color="text">
            pedido #305827
          </MDTypography>
        </MDBox>

        <Icon
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={() => setOpenCart(dispatch, false)}
        >
          close
        </Icon>


      </MDBox>

      <Divider />

      <MDBox pt={0.5} pb={3} px={3}>
        <MDBox>
          <CartProductList />
        </MDBox>
      </MDBox>
      <Divider />
      <MDTypography variant="h5">Total = {totalPrice}</MDTypography>
    </CartRoot>
  );
}

export default Cart;
