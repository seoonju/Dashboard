import React, { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

function Tables() {
  const [repoColumns, setRepoColumns] = useState([]);
  const [repoRows, setRepoRows] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/dashboard_data.json`)
      .then((res) => res.json())
      .then((data) => {
        setRepoColumns([
          { name: "name", align: "left", width: "15%" },
          { name: "vulnerabilities", align: "center", width: "10%" },
          { name: "changes", align: "center", width: "10%" },
          { name: "sastTool", align: "center", width: "15%" },
          { name: "rerun", align: "center", width: "10%" },
          { name: "url", align: "left", width: "40%" }
        ]);

        setRepoRows(
          data.repos.map((repo) => ({
            name: repo.name,
            vulnerabilities: repo.vulnerabilities,
            changes: repo.changes,
            sastTool: repo.sastTool || "N/A",            
            rerun: repo.rerun ? "Yes" : "No",
            url: (
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#5e72e4", wordBreak: "break-all" }}
              >
                {repo.url}
              </a>
            )
          }))
        );
      })
      .catch((err) => console.error("dashboard_data.json 로딩 실패:", err));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" px={3} py={2}>
              <VuiTypography variant="lg" color="white">
                Repositories Table
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={repoColumns} rows={repoRows} />
            </VuiBox>
          </Card>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
