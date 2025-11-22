import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const tabItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#2e6763" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                  sx: { backgroundColor: "#2cc0b6ff", color: "white" }, // background + text color
                }}
              >
                <div style={{ width: 250, padding: 20 }}>
                  {tabItems.map((item) => (
                    <Tab
                      key={item.label}
                      label={item.label}
                      component={Link}
                      to={item.path}
                      style={{
                        display: "block",
                        marginBottom: 10,
                        color: "white",
                        backgroundColor: "#144642ff",
                        borderRadius: "20px 0 20px",
                      }}
                    />
                  ))}
                </div>
              </Drawer>
            </>
          ) : (
            <Tabs textColor="#2e6763">
              {tabItems.map((item) => (
                <Tab
                  key={item.label}
                  label={item.label}
                  component={Link}
                  to={item.path}
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
