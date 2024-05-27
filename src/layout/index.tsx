import { useCallback, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResponsiveHeader from "./components/ResponsiveHeader";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "@mui/material";
import { Screen } from "../constants/screen";
import AppRouter from "../routes/AppRouter";

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
      <header>
        {isSmallScreen ? (
          <ResponsiveHeader
            openSidebar={handleSidebarOpen}
            handleSearch={handleSearch}
            isSearchOn={search}
          />
        ) : (
          <Header />
        )}
      </header>
      {isSmallScreen && (
        <Sidebar isSidebarOpen={sidebar} closeSidebar={handleSidebarClose} />
      )}
      <main className="mt-2 px-14 ">
        <AppRouter />
      </main>
      <footer className="absolute bottom-0 w-full max-h-[300px] ">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
