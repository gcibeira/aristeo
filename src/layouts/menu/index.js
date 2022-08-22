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
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Dashboard components
import Card from "@mui/material/Card";
import ProductCard from "examples/Cards/ProductCards/SimpleProductCard";

// API
import useFetch from "react-fetch-hook";
import { useShoppingCartController, setCart} from "context/ShoppingCartContext";


function Menu() {
  const baseUrl = "http://localhost:3001/menus/1"
  const { isLoading, data, error } = useFetch(baseUrl);
  const [controller, dispatch] = useShoppingCartController();
  const { cart } = controller;
  

  const addToCart = newProduct => {
    const exists = cart.find(product => product.id === newProduct.id);
    if(exists){
      setCart(dispatch,
        cart.map( product => 
          product.id === exists.id ? {...exists, quantity: exists.quantity+1} : product
        )
      )
    }
    else{
      setCart(dispatch,[...cart, {...newProduct, quantity: 1}]);
    }
  }


  const renderMenu = menu => menu.sections.map((section) => (
    <Grid key={section.title} container py={2} direction="column" justifyContent="center" alignItems="stretch">
      <Grid item>
        <Card>
          <MDBox p={2}>
            <MDTypography variant="h6" fontWeight="medium">
              {section.title}
            </MDTypography>
          </MDBox>
          <Grid container spacing={4} p={2}>
            {
              section.products.map(product =>
                (
                  <Grid item key={product.id} xs={12} md={4}>
                    <ProductCard
                      product={product}
                      onClick={addToCart}
                    />
                  </Grid>
                )
              )
            }
          </Grid>
        </Card>
      </Grid>
    </Grid>
  ));
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        {isLoading && <CircularProgress color='info'/>}
        {!isLoading && error && <Alert severity="error">Error al cargar el menú. Intenta recargar la página.</Alert>}
        {!isLoading && data && renderMenu(data)}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Menu;
