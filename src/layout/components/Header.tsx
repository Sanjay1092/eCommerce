import { AppBar, Container, Menu, useMediaQuery } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl" className="flex items-center py-5 pl-2">
          {ROUTES.map((item, i) => {
            return (
              <Link
                key={i}
                to={item.path}
                className={cn(
                  item.name === "Shop.co"
                    ? "font-primary font-black text-2xl"
                    : "font-secondary text-[16px] font-light",
                  "px-2 ml-5"
                )}
              >
                {item.name === "cart" ? (
                  <ShoppingCartOutlinedIcon />
                ) : (
                  item.name
                )}
                {i === 0 && (
                  <select className="font-secondary text-[16px] font-light ml-6">
                    <option className="bg-transparent">Shop</option>
                  </select>
                )}
                {i >= 3 && i !== 4 && (
                  <input
                    type="search"
                    className="bg-[#f0f0f0] w-[580px] py-1 rounded-2xl ml-6 pl-10"
                  />
                )}
              </Link>
            );
          })}
          <SearchIcon className="absolute right-[56%] top-7 text-[#a8a8a8]" />
          <AccountCircleOutlinedIcon className="ml-3" />
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
