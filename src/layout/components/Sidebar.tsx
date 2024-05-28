import { Drawer } from "@mui/material";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}
function Sidebar({ isSidebarOpen, closeSidebar }: SidebarProps) {
  return (
    <Drawer open={isSidebarOpen} onClose={closeSidebar}>
      <div className="w-[200px] flex flex-col items-center py-10">
        {ROUTES.map((item, i) => {
          return (
            <Link to={item.path} key={i}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </Drawer>
  );
}

export default Sidebar;
