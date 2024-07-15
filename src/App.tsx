import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MyntraHomePage1st from "./pages/MyntraHomePage1st";
import Home from "./pages/Home";
import MyCart1 from "./pages/MyCart1";
import MyCart2 from "./pages/MyCart2";
import MyCart3 from "./pages/MyCart3";
import FashionExpertConnect1st from "./pages/FashionExpertConnect1st";
import FashionExpertConnect from "./pages/FashionExpertConnect";
import ChatWithAbha from "./pages/ChatWithAbha";
import SignUpConnsult from "./pages/SignUpConnsult";
import Styling from "./pages/Styling";
import Purchasing from "./pages/Purchasing";
import AllOfThem from "./pages/AllOfThem";
import Others from "./pages/Others";
import CongracluationsPage from "./pages/CongracluationsPage";
import Matching from "./pages/Matching";
import MyntraHomePage2nd from "./pages/MyntraHomePage2nd";
import MyCart from "./pages/MyCart";
import Dashboard from "./pages/Dashboard";

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
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/my-cart3":
        title = "";
        metaDescription = "";
        break;
      case "/my-cart":
        title = "";
        metaDescription = "";
        break;
      case "/my-cart1":
        title = "";
        metaDescription = "";
        break;
      case "/fashion-expert-connect-1st":
        title = "";
        metaDescription = "";
        break;
      case "/fashion-expert-connect":
        title = "";
        metaDescription = "";
        break;
      case "/chat-with-abha":
        title = "";
        metaDescription = "";
        break;
      case "/signup-connsult":
        title = "";
        metaDescription = "";
        break;
      case "/styling":
        title = "";
        metaDescription = "";
        break;
      case "/purchasing":
        title = "";
        metaDescription = "";
        break;
      case "/all-of-them":
        title = "";
        metaDescription = "";
        break;
      case "/others":
        title = "";
        metaDescription = "";
        break;
      case "/congracluations-page":
        title = "";
        metaDescription = "";
        break;
      case "/matching":
        title = "";
        metaDescription = "";
        break;
      case "/myntra-home-page-2nd":
        title = "";
        metaDescription = "";
        break;
      case "/my-cart2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
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
      <Route path="/" element={<MyntraHomePage1st />} />
      <Route path="/home" element={<Home />} />
      <Route path="/my-cart3" element={<MyCart1 />} />
      <Route path="/my-cart" element={<MyCart2 />} />
      <Route path="/my-cart1" element={<MyCart3 />} />
      <Route
        path="/fashion-expert-connect-1st"
        element={<FashionExpertConnect1st />}
      />
      <Route
        path="/fashion-expert-connect"
        element={<FashionExpertConnect />}
      />
      <Route path="/chat-with-abha" element={<ChatWithAbha />} />
      <Route path="/signup-connsult" element={<SignUpConnsult />} />
      <Route path="/styling" element={<Styling />} />
      <Route path="/purchasing" element={<Purchasing />} />
      <Route path="/all-of-them" element={<AllOfThem />} />
      <Route path="/others" element={<Others />} />
      <Route path="/congracluations-page" element={<CongracluationsPage />} />
      <Route path="/matching" element={<Matching />} />
      <Route path="/myntra-home-page-2nd" element={<MyntraHomePage2nd />} />
      <Route path="/my-cart2" element={<MyCart />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
