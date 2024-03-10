import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CallerDashboard from "./pages/CallerDashboard";
import CallerFeedback from "./pages/CallerFeedback";
import ManagerDashboard from "./pages/ManagerDashboard";
import CampaignResearch from "./pages/CampaignResearch";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Instructions from "./pages/Instructions";
import About from "./pages/About";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/callerdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/callerfeedback":
        title = "";
        metaDescription = "";
        break;
      case "/managerdashboard":
        title = "";
        metaDescription = "";
        break;
      case "/campaignresearch":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/resetpassword":
        title = "";
        metaDescription = "";
        break;
      case "/instructions":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/callerdashboard" element={<CallerDashboard />} />
      <Route path="/callerfeedback" element={<CallerFeedback />} />
      <Route path="/managerdashboard" element={<ManagerDashboard />} />
      <Route path="/campaignresearch" element={<CampaignResearch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
