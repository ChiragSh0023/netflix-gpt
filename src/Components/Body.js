import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import Browse from "./Browse/Browse";
import WatchMovie from "./WatchMovie";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch",
      element: <WatchMovie />,
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <Outlet />
    </RouterProvider>
  );
};

export default Body;
