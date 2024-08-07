import { Route, Routes } from "react-router-dom";
import SamplePage from "./pages/sample/SamplePage";
import OnBoardingPage from "./pages/onBoarding/OnBoardingPage";
import Loading from "./pages/loading/Loading";
import CardBox from "./pages/cardBox/CardBox";

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/card" element={<CardBox />} />
      </Routes>
    </>
  )
}

export default App
