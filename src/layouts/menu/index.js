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
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import pizza1 from "assets/images/pizza-1.jpeg";
import pizza2 from "assets/images/pizza-2.jpg";
import pizza3 from "assets/images/pizza-3.jpg";
import pizza4 from "assets/images/pizza-4.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Menu() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2}>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Pizzas
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Tradicionales
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <DefaultProjectCard
                image={pizza1}
                label="Promo 1"
                title="Margherita"
                description="Salsa de tomate, queso muzzarella, albahaca y tomates cherries"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "agregar al pedido",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultProjectCard
                image={pizza2}
                label="Promo 2"
                title="Napolitana"
                description="Mozzarella, salsa de tomate, rodajas de tomate y cebolla de verdeo"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "agregar al pedido",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultProjectCard
                image={pizza3}
                label="Promo 3"
                title="Tropical"
                description="Queso, ananá y hongos"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "agregar al pedido",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DefaultProjectCard
                image={pizza4}
                label="Promo 4"
                title="Mediterránea"
                description="Salsa de tomate, queso, jamón crudo y rúcula"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "agregar al pedido",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Menu;
