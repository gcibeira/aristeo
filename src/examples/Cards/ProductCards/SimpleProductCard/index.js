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


function ProductCard({ product, onClick }) {
  const {title, description, oldPrice, price, currency, image} = product;

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
            {oldPrice && <MDTypography variant="body1" component="span" color="error" style={{ textDecoration : 'line-through'}}>
              {`${oldPrice}${currency} `}
            </MDTypography>}
            {`${price}${currency}`}
          </MDTypography>
        </MDBox>
        <MDButton onClick={() => onClick(product)} color="info">Agregar al pedido</MDButton>
      </MDBox>
    </Card>
  );
}

// Typechecking props for the ProductCard
ProductCard.propTypes = {  
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    currency: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};


export default ProductCard;
