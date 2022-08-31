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


// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  useShoppingCart,
  addProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "context/ShoppingCartContext";

function ProductCard({ product }) {
  const { id, title, description, oldPrice, price, currency, image } = product;
  const [controller, dispatch] = useShoppingCart();
  const { cart } = controller;

  const isInCart = cart.find(item => item.id === id);

  return (
    <Card>
      <MDBox position="relative" borderRadius="lg" mt={-2} mx={1}>
        <MDBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="relative"
          zIndex={1}
        />
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="3%"
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox p={2}>
        <MDTypography display="inline" variant="h6" textTransform="capitalize" fontWeight="bold">
          {title}
        </MDTypography>
        <MDBox mt={1} mb={2}>
          <MDTypography variant="body2" component="p" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox mt={1} mb={2}>
          <MDTypography variant="body1" component="p">
            {oldPrice && <MDTypography variant="body1" component="span" color="error" style={{ textDecoration: 'line-through' }}>
              {`${oldPrice}${currency} `}
            </MDTypography>}
            {`${price}${currency}`}
          </MDTypography>
        </MDBox>
        {isInCart ?
          <ButtonGroup size="small" variant="contained">
            <IconButton onClick={() => decrementProduct(dispatch, id)} size="small">
              -
            </IconButton>
            <IconButton size="small">
              <MDTypography variant="button">
                {isInCart.quantity}
              </MDTypography>
            </IconButton>
            <IconButton onClick={() => incrementProduct(dispatch, id)} size="small">
              +
            </IconButton>
            <IconButton onClick={() => removeProduct(dispatch, id)} color="error" size="small">
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
          :
          <MDButton size="small" onClick={() => addProduct(dispatch, product)} color="info">Agregar al pedido</MDButton>
        }
      </MDBox>
    </Card>
  );
}

// Typechecking props for the ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    currency: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};


export default ProductCard;
