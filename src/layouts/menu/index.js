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

function Menu() {
  const baseUrl = "http://localhost:3001/menus/1"
  const { isLoading, data, error } = useFetch(baseUrl);

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
                    <ProductCard product={{...product, "currency": menu.currency}} />
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
        {isLoading ? <CircularProgress color='info'/> :
          <>
            {error && <Alert severity="error">Error al cargar el menú. Intenta recargar la página.</Alert>}
            {data && renderMenu(data)}
          </>
        }
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Menu;
