import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Routes } from "./Routes";

export const Router: FC = () => {
  return useRoutes([...Routes]);
};