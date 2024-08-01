import { Outlet } from "react-router-dom";
import App from "../App";
import { DrawerMainScreen } from "../drawerSample/MainScreen";
export const Routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/drawer",
        element: <DrawerMainScreen />,
      },
    ],
  },
];