import { Route, Routes } from "react-router-dom";
import SamplePage from "./pages/sample/SamplePage";
import OnBoardingPage from "./pages/onBoarding/OnBoardingPage";
import Loading from "./pages/loading/Loading";
import CardBox from "./pages/cardBox/CardBox";
import CardLetter from "./pages/cardBox/CardLetter";
import FirebaseTest from "./pages/sample/FirebaseTestPage";

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/card" element={<CardBox />} />
        <Route path="/letter" element={<CardLetter />} />
        
        <Route path="/testFirebase" element={<FirebaseTest />} />
      </Routes>
    </>
  )
}

export default App
