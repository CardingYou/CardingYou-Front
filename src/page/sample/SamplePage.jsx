import SampleComponent from "@/components/sample/SampleComponent";

export default function SamplePage() {
  return (
      <div className="w-full">
      <h1 className="text-blue-500">샘플 페이지입니다.</h1>
      1. 파일 경로는 <b>절대경로</b>입니다. {"@/"}로 시작해주세요. (=== ./src){" "}
      <br />
      2. global.css에 <b>전역 스타일</b> 정의해주세요. <br />
      3. 색상은 Theme.js에 정의해주세요. <br />
      <br />
      <div className="w-full h-2rem bg-primary">
        hi
      </div>
      ---------------- 샘플 컴포넌트입니다... ------------------------------------------------
      <SampleComponent />
      ---------------- 샘플 컴포넌트입니다... ----------------
      <br /><br />
      <b>이외 필요한 라이브러리들 설치해주세요...</b>
      <br />
      <br />
      라우터 세팅 완료, baseURL 세팅 완료, eslint 세팅 완료
      <br />
      <h3>공용 스타일</h3>
      추후 디자인에 따라 global.css에 정의하기
      <br />
    </div>
  );
}