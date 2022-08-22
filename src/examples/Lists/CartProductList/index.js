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
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";
import Icon from "@mui/material/Icon";

import {
  useShoppingCartController,
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "context/ShoppingCartContext";

function CartProductList() {
  const [controller, dispatch] = useShoppingCartController();
  const { cart } = controller;
  const renderItems = cart.length?
  (
    cart.map(({ id, image, title, quantity, price, currency }) => (
      <MDBox key={id} component="li" display="flex" alignItems="center" py={1} mb={1}>
        <MDBox mr={2}>
          <MDAvatar size="md" src={image} alt={title} shadow="md"/>
        </MDBox>
        <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
          <MDTypography variant="button" fontWeight="medium">
            {`${quantity} x ${title}`}
          </MDTypography>
          <MDTypography variant="caption" color="text">
          {`${quantity*price}${currency}`}
          </MDTypography>
        </MDBox>
        <MDBox ml="auto">
          <MDButton onClick={() => incrementProduct(dispatch, id)} variant="text" color="success" iconOnly>
              +
          </MDButton>
          <MDButton onClick={() => decrementProduct(dispatch, id)} variant="text" color="error" iconOnly>
              -
          </MDButton>
          <MDButton onClick={() => removeProduct(dispatch, id)} variant="text" color="error" iconOnly>
              <Icon>delete</Icon>
          </MDButton>
        </MDBox>
      </MDBox>
    ))
  ):(
    <MDTypography variant="body2" color="text" justifyContent="center">
      Tu carta está vacía
    </MDTypography>
  )

  return (
    <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
      {renderItems}
    </MDBox>
  );
}

export default CartProductList;
