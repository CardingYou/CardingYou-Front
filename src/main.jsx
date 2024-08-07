import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import "./global.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className="flex w-full justify-center bg-[#FFF] xl:text-[26px] text-[17px] xl:mt-10 xl:px-20 px-7 mt-10 bg-white">
    <App />
    </div>
  </BrowserRouter>
)
