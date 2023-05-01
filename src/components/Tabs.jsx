import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CollectionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", fontSize: "16px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Items"
            {...a11yProps(0)}
            sx={{ fontSize: "16px", fontWeight: "bold" }}
          />
          <Tab
            label="Offers"
            {...a11yProps(1)}
            sx={{ fontSize: "16px", fontWeight: "bold" }}
          />
          <Tab
            label="Analysis"
            {...a11yProps(2)}
            sx={{ fontSize: "16px", fontWeight: "bold" }}
          />
          <Tab
            label="Activity"
            {...a11yProps(2)}
            sx={{ fontSize: "16px", fontWeight: "bold" }}
          />
        </Tabs>
      </Box>
      <TabPanel
        sx={{ fontSize: "16px", fontWeight: "bold" }}
        value={value}
        index={0}
      >
        Items
      </TabPanel>
      <TabPanel value={value} index={1}>
        Offers
      </TabPanel>
      <TabPanel value={value} index={2}>
        Analysis
      </TabPanel>
      <TabPanel value={value} index={2}>
        Activity
      </TabPanel>
    </Box>
  );
}
