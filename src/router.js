import { RootRoute, Route, Router } from "@tanstack/react-router";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import NotFound from "./pages/NotFound";
import { App } from "./App";

const rootRoute = new RootRoute({
   component: App,
});

const homeRoute = new Route({
   getParentRoute: () => rootRoute,
   component: Home,
   path: "/",
});

const aboutRoute = new Route({
   getParentRoute: () => rootRoute,
   component: AboutMe,
   path: "/about-me",
});

const notFoundRoute = new Route({
   getParentRoute: () => rootRoute,
   path: "*",
   component: NotFound,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, notFoundRoute]);
export const router = new Router({ routeTree });
