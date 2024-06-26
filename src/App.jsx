import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import { contactAction } from "./pages/help/contactAction";
import Careers from "./pages/careers/careers";
import { careersLoader } from "./pages/careers/careersLoader";
import CareerDetails from "./pages/careers/CareerDetails";
import { careerDetailsLoader } from "./pages/careers/careerDetailsLoader";
import CareersError from "./pages/careers/CareersError";

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "faq", element: <Faq /> },
          { path: "contact", element: <Contact />, action: contactAction },
        ],
      },
      {
        path: "careers",
        element: <CareersLayout />,
        errorElement: <CareersError />,
        children: [
          {
            index: true,
            element: <Careers />,
            loader: careersLoader,
          },
          {
            path: ":id",
            element: <CareerDetails />,
            loader: careerDetailsLoader,
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
