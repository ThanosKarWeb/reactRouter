import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

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
          { path: "contact", element: <Contact /> },
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
