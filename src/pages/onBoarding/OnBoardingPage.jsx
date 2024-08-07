import { useNavigate } from "react-router-dom";

export default function OnBoardingPage() {
  const navigate = useNavigate();

  const locateGuide = () => () => {
    navigate("/sample");
  }

  return (
    <div>
    <div>CardingYou 시작 페이지입니다.</div>
    <button onClick={locateGuide()}>Guide 확인하기</button>
    </div>
  )
}
