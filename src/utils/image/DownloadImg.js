import html2canvas from 'html2canvas';

export const onClickDownloadImage = () => {
  const target = document.getElementById("download");
  if (!target) {
    return alert("사진 저장에 실패했습니다.");
  }

  // 다운로드에서 제외할 요소 선택
  const buttonsToExclude = target.querySelectorAll('button');

  // 버튼 요소 숨기기 및 원래 display 값 저장
  const originalDisplayStyles = [];
  buttonsToExclude.forEach(button => {
    originalDisplayStyles.push(button.style.display);
    button.style.display = 'none';
  });

  html2canvas(target).then((canvas) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = canvas.toDataURL("image/png");
    link.download = "letter.png";
    link.click();
    document.body.removeChild(link);
  });

  // 캡처 후 버튼 요소 원래 display 값 복원
  buttonsToExclude.forEach((button, index) => {
    button.style.display = originalDisplayStyles[index];
  });
};
