import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { cn } from "../../lib/utils";

interface ResponsiveHeaderProps {
  openSidebar: () => void;
  handleSearch: () => void;
  isSearchOn: boolean;
}
function ResponsiveHeader({
  openSidebar,
  handleSearch,
  isSearchOn,
}: ResponsiveHeaderProps) {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl" className="py-5">
        <div className="flex items-center">
          <MenuIcon onClick={openSidebar} />
          <div className="flex justify-between w-full">
            <h2 className="font-primary font-black text-2xl pl-4">SHOP.CO</h2>
            {isSearchOn && (
              <input
                type="search"
                className={cn(
                  isSearchOn
                    ? "bg-[#f0f0f0] w-1/4 py-1 rounded-2xl ml-6 pl-10"
                    : "hidden"
                )}
              />
            )}
            <div className="flex justify-around w-[100px]">
              <SearchIcon onClick={handleSearch} />
              <ShoppingCartOutlined />
              <AccountCircleOutlined />
            </div>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}

export default ResponsiveHeader;
