const routes = [
  {
    path: "/register",
    name: "register",
    component: () => import("../components/Register"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/Home"),
  },
  {
    path: "/",
    redirect: "/register",
  },
  {
    path: "/*",
    redirect: "/register",
  },
];

export default routes;
