import { useCallback, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResponsiveHeader from "./components/ResponsiveHeader";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "@mui/material";
import { Screen } from "../constants/screen";
import { Outlet } from "react-router-dom";

function Layout() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery(Screen.xl);
  const handleSidebarOpen = useCallback(() => {
    setSidebar(true);
  }, []);
  const handleSidebarClose = useCallback(() => {
    setSidebar(false);
  }, []);
  const handleSearch = () => {
    setSearch(!search);
  };
  return (
    <>
      {isSmallScreen ? (
        <ResponsiveHeader
          openSidebar={handleSidebarOpen}
          handleSearch={handleSearch}
          isSearchOn={search}
        />
      ) : (
        <Header />
      )}
      {isSmallScreen && (
        <Sidebar isSidebarOpen={sidebar} closeSidebar={handleSidebarClose} />
      )}
      <section className="mt-2">
        <Outlet />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
