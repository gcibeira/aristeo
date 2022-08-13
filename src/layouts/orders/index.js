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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// API
import useFetch from "react-fetch-hook";


function Orders() {
  const { isLoading, data, error } = useFetch("http://localhost:3001/ordenes");
  const table = {
    columns: [
      { Header: "Título", accessor: "title", width: "45%", align: "left" },
      { Header: "descripción", accessor: "description", align: "left" },
      { Header: "precio", accessor: "price", align: "center" },
    ],
    rows: [],
  }
  
  if(error){
    table.rows = [{title: "Error al cargar datos"}];
  }
  else if(isLoading){
    table.rows = [{title: "Cargando..."}];
  }
  else{
    table.rows = data;
  }
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Menú
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                    table={table}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                    />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Orders;
