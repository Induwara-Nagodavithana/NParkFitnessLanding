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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                color="secondary"
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Features
                  </>
                }
                description="There are many features in NPark Fitness. Join us and feel it."
              />
              <RotatingCardBack
                color="secondary"
                image={bgBack}
                title="Discover More"
                description="You will save a lot of time and money. Hurry up and join us."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Join",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="info"
                  icon={<ContentCopyIcon color="primary" fontSize="large" />}
                  title="Schedule Managment"
                  description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="error"
                  icon="restaurant"
                  title="Diet Plan"
                  description="The world's most popular react components library for building user interfaces."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="success"
                  icon="price_change"
                  title="Online Payment"
                  description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="secondary"
                  icon="devices"
                  title="Attendance"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="error"
                  icon="devices"
                  title="Weight Prediction"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="warning"
                  icon="devices"
                  title="Devices"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
