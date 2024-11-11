import { Route, Routes } from "react-router-dom";
import SamplePage from "./pages/sample/SamplePage";
import OnBoardingPage from "./pages/onBoarding/OnBoardingPage";
import InitPage from './pages/initPage/initPage';
import OnePage from './pages/1_page/1Page';
import Loading from "./pages/loading/Loading";
import CardBox from "./pages/cardBox/CardBox";
import CardLetter from "./pages/cardBox/CardLetter";
import FirebaseTest from "./pages/sample/FirebaseTestPage";
import TwoPage from "./pages/2_page/2Page";
import ThreePage from "./pages/3_page/3Page";

// Build Test 주석
function App() {

  return (
    <>
    <Routes>
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/" element={<InitPage />} />
        <Route path="/one" element={<OnePage />} />
        <Route path="/two" element={<TwoPage />} />
        <Route path='/three' element={<ThreePage />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/card" element={<CardBox />} />
        <Route path="/letter/:randomPath" element={<CardLetter />} />
        
        <Route path="/testFirebase" element={<FirebaseTest />} />
      </Routes>
    </>
  )
}

export default App
