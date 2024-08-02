import { Outlet } from "react-router-dom";
import App from "../App";
import { DrawerMainScreen } from "../drawerSample/MainScreen";
import { Header } from "../parts/Header";
export const Routes = [
  {
    path: "/",
    element: (
        <>
            <Header/>
            <Outlet />
        </>
    ),
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