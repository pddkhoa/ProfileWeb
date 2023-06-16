import React from "react";
import { Routes, Route } from "react-router-dom";
import AppRouter from "./appRouter";

function RootRouter() {
  return (
    <Routes>
      <Route path="/*" element={<AppRouter />} />
    </Routes>
  );
}
export default RootRouter;
