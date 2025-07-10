import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      component="footer"
      py={2}
      px={3}
    >
      <VuiBox>
        <VuiTypography
          variant="button"
          sx={{ fontWeight: "400 !important" }}
          color="white"
        >
          @ @ 2025, Made by whs 3기 🛠️ 이거고쳐조
        </VuiTypography>
      </VuiBox>

      <VuiBox>
        <VuiBox display="flex" justifyContent="flex-start"
        flexWrap="wrap"
        gap="36px"
        pr={{ xs: 0, lg: "60px" }}
        mt={{ xs: 2, lg: 0 }}
        >
          <VuiTypography
            component="a"
            href="https://github.com/"
            variant="body2"
            color="white"
          >
            GitHub
          </VuiTypography>
          <VuiTypography
            component="a"
            href="https://discord.com/"
            variant="body2"
            color="white"
          >
            Discord
          </VuiTypography>
          <VuiTypography
            component="a"
            href="https://slack.com/"
            variant="body2"
            color="white"
          >
            Slack
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

export default Footer;
