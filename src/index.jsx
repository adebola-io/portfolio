import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

/** @type {HTMLElement} */ //@ts-ignore
const root = document.getElementById("adebola-root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
