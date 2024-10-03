import html2canvas from 'html2canvas';

export const onClickDownloadImage = (flipped) => {
  const target = document.getElementById("download");
  if (!target) {
    return alert("사진 저장에 실패했습니다.");
  }

  let textArea;
  let originalTextAreaDisplay;

  // flipped가 true일 경우 textArea 숨기기
  if (flipped) {
    textArea = document.getElementById('textArea');
    if (textArea) {
      originalTextAreaDisplay = textArea.style.display;
      textArea.style.display = 'none';  // textArea 숨기기
    }
  }

  // 버튼 영역 선택
  const buttonsToExclude = document.querySelectorAll('button');

  // 버튼 다 숨기기
  const originalDisplayStyles = [];
  buttonsToExclude.forEach(button => {
    originalDisplayStyles.push(button.style.display);
    button.style.display = 'none';
  });

  // 이미지로 변환
  html2canvas(target).then((canvas) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = canvas.toDataURL("image/png");
    link.download = "letter.png";
    link.click();
    document.body.removeChild(link);
  }).finally(() => {
    // 버튼 다시 보이기
    buttonsToExclude.forEach((button, index) => {
      button.style.display = originalDisplayStyles[index];
    });

    // textArea 다시 보이기 (원래 상태로 복구)
    if (flipped && textArea) {
      textArea.style.display = originalTextAreaDisplay;
    }
  });
};
