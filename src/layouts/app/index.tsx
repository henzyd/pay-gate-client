import { Outlet } from "react-router-dom";
import LeftSide from "./left-side";
import Footer from "./footer";

export default function AppLayout() {
  return (
    <div className="w-full grid grid-cols-2 min-h-screen max-w-maxAppWidth mx-auto">
      <LeftSide />
      <div className="flex flex-col gap-8">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
