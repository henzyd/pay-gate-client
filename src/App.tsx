import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotFound from "./pages/404";
import Home from "./pages/home";
import ErrorBoundary from "./components/error-boundary";
import DashboardLoader from "./components/loader/dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <div className="min-h-screen flex">
            <NotFound />
          </div>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={<DashboardLoader />} />;
}

export default App;
