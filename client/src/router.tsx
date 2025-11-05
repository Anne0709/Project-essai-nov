import { createBrowserRouter } from "react-router";
import App from "./App";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "homepage",
      },
      {
        element: <ContactPage />,
        path: "contact",
      },
      {
        element: <AboutPage />,
        path: "about",
      },
    ],
  },
]);

export default router;
