import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Vision UI components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";

function MiniStatisticsCard({ bgColor, title, count, percentage, icon, direction }) {
  const { info } = colors;

  return (
    <Card sx={{ padding: "16px" }}>
      <VuiBox>
        <Grid container alignItems="center">
          {direction === "left" && (
            <Grid item>
              <VuiBox
                bgColor={info}
                color="#fff"
                width="3rem"
                height="3rem"
                borderRadius="lg"
                display="flex"
                justifyContent="center"
                alignItems="center"
                shadow="md"
              >
                {icon.component}
              </VuiBox>
            </Grid>
          )}

          <Grid item xs={8}>
            <VuiBox
              ml={direction === "left" ? 2 : 0}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <VuiTypography
                variant="caption"
                color={bgColor === "white" ? "text" : "white"}
                opacity={bgColor === "white" ? 1 : 0.7}
                textTransform="capitalize"
                fontWeight={title.fontWeight}
              >
                {title.text}
              </VuiTypography>

              <VuiBox display="flex" alignItems="baseline">
                <VuiTypography variant="h5" fontWeight="bold" color="white" mr="6px">
                  {count}
                </VuiTypography>
                <VuiTypography
                  variant="button"
                  color={percentage.color}
                  fontWeight="bold"
                >
                  {percentage.text}
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </Grid>

          {direction === "right" && (
            <Grid item xs={4}>
              <VuiBox
                bgColor="#0075FF"
                color="white"
                width="3rem"
                height="3rem"
                marginLeft="auto"
                borderRadius="lg"
                display="flex"
                justifyContent="center"
                alignItems="center"
                shadow="md"
              >
                <Icon fontSize="small" color="inherit">
                  {icon.component}
                </Icon>
              </VuiBox>
            </Grid>
          )}
        </Grid>
      </VuiBox>
    </Card>
  );
}

MiniStatisticsCard.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
    ]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default MiniStatisticsCard;
