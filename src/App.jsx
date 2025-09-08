import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/Common/RootLayout";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/CompanyPage/AboutPage/AboutPage";
import WorkPage from "./components/CompanyPage/WorkPage/WorkPage";
import MainServicesPage from "./components/MainServicesPage/MainServicesPage";
import ServicePage from "./components/MainServicesPage/ServicePage/ServicePage";
import ContactPage from "./components/ContactPage/ContactPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> }, // ✅ localhost:3000/
        { path: "dcs-testing", element: <HomePage /> }, // ✅ github.io/dcs-testing/
        { path: "about", element: <AboutPage /> },
        { path: "work", element: <WorkPage /> },
        { path: "services", element: <MainServicesPage /> },
        { path: "services/:id", element: <ServicePage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
