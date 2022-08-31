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
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Custom styles for the Configurator
import CartRoot from "examples/Cart/CartRoot";
import CartProductList from "examples/Lists/CartProductList";

// Material Dashboard 2 React context
import {
  useShoppingCart,
  setOpenCart,
  setCart,
} from "context/ShoppingCartContext";

import axios from 'axios';
import { useState } from 'react'


const baseUrl = "http://localhost:3001/orders"

function Cart() {
  const [successSB, setSuccessSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const [controller, dispatch] = useShoppingCart();
  const { openCart, cart } = controller;
  const totalPrice = cart.reduce((total, item) => (total + item.price * item.quantity), 0)

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const handleCheckout = () => {
    const order = {
      origin: "Mesa #001",
      status: "created",
      timestamp: Date.now(),
      products: cart
    }
    axios.post(baseUrl, order)
      .then(() => {
        openSuccessSB();
        setCart(dispatch, [])
      })
      .catch(() => openErrorSB())
  }

  return (
    <>
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
              Mesa #05
            </MDTypography>
          </MDBox>

          <Icon onClick={() => setOpenCart(dispatch, false)} sx={{ cursor: "pointer" }} >
            close
          </Icon>
        </MDBox>
        <Divider />

        <MDBox pt={0.5} pb={3} px={3}>
          {cart.length ?
            <>
              <MDBox>
                <CartProductList />
              </MDBox>
              <Divider />
              <MDTypography variant="h5">Total = {totalPrice} €</MDTypography>
              <MDButton onClick={() => handleCheckout()} color="info">Enviar pedido</MDButton>
            </>
            :
            <MDTypography variant="body2" color="text" justifyContent="center">
              Tu carrito está vacío
            </MDTypography>
          }
        </MDBox>
      </CartRoot>
      <MDSnackbar
        color="success"
        icon="check"
        title="Orden creada!"
        content="Tu orden fue creada con éxito."
        dateTime="Ahora"
        open={successSB}
        onClose={closeSuccessSB}
        close={closeSuccessSB}
        bgWhite
        anchorOrigin = {{ vertical: 'bottom', horizontal: 'center' }}
      />
      <MDSnackbar
        color="error"
        icon="warning"
        title="Error"
        content="Tu orden no pudo ser creada. Intenta nuevamente."
        dateTime="Ahora"
        open={errorSB}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
        anchorOrigin = {{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}

export default Cart;