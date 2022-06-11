/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
// import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
// import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="secondary" textGradient mb={2}>
            1,679,477+ Owners and Trainers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many training centers, medical facilities and gyms trust this platform.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Saman Perera"
              date="1 day ago"
              review="This is an excellent platform, this help me to grow my business in covid-19 lockdowns."
              rating={4}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="secondary"
              name="Kamal Weerasiri"
              date="1 week ago"
              review="I found NParkFitness when my bussiness in downside. This help my business to grow. I am very greateful to you all !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nimal Silva"
              date="3 weeks ago"
              review="Great product. I love Calorie Calculator and Weight prediction features."
              rating={5}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
