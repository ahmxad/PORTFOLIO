import React, { useState, useEffect } from "react";
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
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Changed to 'md' for better tablet support
  const location = useLocation();
  const [value, setValue] = useState(0);

  const tabItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const currentIndex = tabItems.findIndex((item) => item.path === location.pathname);
    if (currentIndex !== -1) {
      setValue(currentIndex);
    } else {
      setValue(false); // No tab selected if route doesn't match
    }
  }, [location.pathname]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "var(--primary-color, #2e6763)" }}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
            Ahmad
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                  sx: { backgroundColor: "var(--background-color, #ebd6aac2)" }
                }}
              >
                <div style={{ width: 250, padding: 20 }}>
                  {tabItems.map((item) => (
                    <Tab
                      key={item.label}
                      label={item.label}
                      component={Link}
                      to={item.path}
                      onClick={toggleDrawer} // Close drawer on click
                      sx={{
                        display: "block",
                        marginBottom: 1,
                        color: location.pathname === item.path ? "white" : "var(--primary-color, #2e6763)",
                        backgroundColor: location.pathname === item.path ? "var(--secondary-color, #144642ff)" : "transparent",
                        borderRadius: "8px",
                        fontWeight: location.pathname === item.path ? "bold" : "normal",
                        '&:hover': {
                           backgroundColor: "var(--secondary-color, #144642ff)",
                           color: "white"
                        }
                      }}
                    />
                  ))}
                </div>
              </Drawer>
            </>
          ) : (
            <Tabs 
              value={value} 
              textColor="inherit"
              TabIndicatorProps={{ style: { backgroundColor: "#fff" } }} // White indicator
            >
              {tabItems.map((item) => (
                <Tab
                  key={item.label}
                  label={item.label}
                  component={Link}
                  to={item.path}
                  sx={{ color: '#fff', '&.Mui-selected': { color: '#fff', fontWeight: 'bold' } }}
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
