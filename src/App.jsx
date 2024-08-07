import { Route, Routes } from "react-router-dom";
import SamplePage from "./pages/sample/SamplePage";
import OnBoardingPage from "./pages/onBoarding/OnBoardingPage";
import InitPage from './pages/initPage/initPage';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/init" element={<InitPage />} />
      </Routes>
    </>
  )
}

export default App
