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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Dashboard components
import Card from "@mui/material/Card";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

// Images
import pizza1 from "assets/images/pizza-1.jpeg";
import pizza2 from "assets/images/pizza-2.jpg";
import pizza3 from "assets/images/pizza-3.jpg";
// import pizza4 from "assets/images/pizza-4.jpg";


function Menu() {
  const menu = {
    sections: [
      {
        title: "Pizzas",
        items: [
          {
            title: "Margherita",
            description: "Pizza con salsa de tomate, mozzarella y albahaca",
            price: 10.0,
            currency: "$",
            image: pizza1,
          },
          {
            title: "Napolitana",
            description: "Pizza con queso y rodajas de tomate",
            price: 12.0,
            currency: "$",
            image: pizza2,
          },
          {
            title: "Tropical",
            description: "La pizza con ananá!!",
            price: 15.0,
            currency: "$",
            image: pizza3,
          },
        ],
      },
    ],
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox display="flex" justifyContent="space-between" alignItems="center">
          {menu.sections.map( section => (
            <Card key={section.title}>
              <MDBox p={2}>
                <MDTypography variant="h6" fontWeight="medium">
                  {section.title}
                </MDTypography>
              </MDBox>
              <Grid container spacing={4} p={2}>
                {
                  section.items.map( item =>
                    (
                      <Grid item key={item.title} xs={12} md={6}>
                        <SimpleBlogCard
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          action={{
                            type: "internal",
                            route: "#",
                            color: "info",
                            label: "Agregar al pedido"
                          }}
                        />
                      </Grid>
                    )
                  )
                }
              </Grid>
            </Card>
          ))}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Menu;
