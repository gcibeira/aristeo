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


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MDAvatar from "components/MDAvatar";

import {
  useShoppingCart,
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "context/ShoppingCartContext";


function CartProductList() {
  const [controller, dispatch] = useShoppingCart();
  const { cart } = controller;

  return (
    <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
      {cart.map(({ id, image, title, quantity, price, currency }) => (
        <MDBox key={id} component="li" display="flex" alignItems="center" py={1} mb={1}>
          <MDBox mr={2}>
            <MDAvatar size="md" src={image} alt={title} shadow="md" />
          </MDBox>
          <MDBox display="flex" sx={{ flexGrow: 1 }} flexDirection="column" alignItems="flex-start" justifyContent="center">
            <MDTypography variant="button" fontWeight="medium">
              {`${title}`}
            </MDTypography>
            <MDTypography variant="caption" color="text">
              {`${quantity * price}${currency}`}
            </MDTypography>
          </MDBox>
          <ButtonGroup size="small" variant="contained">
            <IconButton onClick={() => decrementProduct(dispatch, id)} size="small">
              -
            </IconButton>
            <IconButton size="small">
              <MDTypography variant="button">
                {quantity}
              </MDTypography>
            </IconButton>
            <IconButton onClick={() => incrementProduct(dispatch, id)} size="small">
              +
            </IconButton>
            <IconButton onClick={() => removeProduct(dispatch, id)} color="error" size="small">
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </MDBox>
      ))}
    </MDBox>
  );
}

export default CartProductList;
