import { Route, Routes } from "react-router-dom";
import SamplePage from "./\bpages/sample/SamplePage";
import OnBoardingPage from "./\bpages/onBoarding/OnBoardingPage";

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </>
  )
}

export default App
