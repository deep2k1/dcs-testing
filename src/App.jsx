import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/CompanyPage/AboutPage/AboutPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainServicesPage from "./components/MainServicesPage/MainServicesPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import WorkPage from "./components/CompanyPage/WorkPage/WorkPage";
import ServicePage from "./components/MainServicesPage/ServicePage/ServicePage";
import SubServicePage from "./components/MainServicesPage/SubServicePage/SubServicePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />, // optional
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/work",
      element: <WorkPage />,
    },
    {
      path: "/services",
      element: <MainServicesPage />,
    },
    // Sub-Services pages
    {
      path: "/services/:id",
      element: <ServicePage />,
    },
    {
      path: "/services/:id/:subId",
      element: <SubServicePage />, // sub-service
    },
    // {
    //   path: "/services/cad_page", // ✅ standalone
    //   element: <CADPage />,
    // },
    // {
    //   path: "/services/bim_page", // ✅ standalone
    //   element: <BIMPage />,
    // },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "*", // catch-all route for 404s
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
