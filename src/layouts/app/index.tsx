import { Outlet } from "react-router-dom";
import LeftSide from "./left-side";
import Footer from "./footer";

export default function AppLayout() {
  return (
    <div className="w-full grid grid-cols-2 tablet:grid-cols-1 min-h-screen mx-auto">
      <LeftSide />
      <div className="w-full bg-white flex flex-col">
        <div className="flex-grow max-w-[900px] w-full flex flex-col py-12 justify-center">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
