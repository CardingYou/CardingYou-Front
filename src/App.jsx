import { Route, Routes } from "react-router-dom";
import SamplePage from "./\bpages/sample/SamplePage";

function App() {

  return (
    <>
    <Routes>
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </>
  )
}

export default App
