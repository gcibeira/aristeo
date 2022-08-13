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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";


function Cart({handleCloseCart}) {
  return (
    <>
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
        </MDBox>

        <Icon
          sx={({ typography: { size }, palette: { dark } }) => ({
            fontSize: `${size.lg} !important`,
            color: dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={handleCloseCart}
        >
          close
        </Icon>
      </MDBox>

      <Divider />

      <MDBox pt={0.5} pb={3} px={3}>
        <MDBox>
          <p>Producto A x Q</p>
          <p>Producto B x Q</p>
          <p>Producto C x Q</p>
          <p>Producto D x Q</p>
        </MDBox>
      </MDBox>
    </>
  );
}

Cart.propTypes = {
  handleCloseCart: PropTypes.func.isRequired,
};

export default Cart;
