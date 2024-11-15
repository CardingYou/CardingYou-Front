import html2canvas from 'html2canvas';

export const onClickDownloadImage = (flipped) => {
  const target = document.getElementById("download");
  if (!target) {
    return alert("사진 저장에 실패했습니다.");
  }

  let textArea;
  let originalTextAreaDisplay;
  
  // 요소 선택
  const buttonsToExclude = target.querySelectorAll('button');
  const imagesToFlip = target.querySelectorAll('img');

  // 이미지 좌우 반전 - 이미지가 반전되어 저장되는 에러 fix
  imagesToFlip.forEach((img) => {
    img.style.transform = 'scaleX(-1)';
  });

  // flipped가 true일 경우 textArea 숨기기
  if (flipped) {
    textArea = document.getElementById('textArea');
    if (textArea) {
      originalTextAreaDisplay = textArea.style.display;
      textArea.style.display = 'none';  // textArea 숨기기
    }
  }

  // 버튼 다 숨기기
  const originalDisplayStyles = [];
  buttonsToExclude.forEach(button => {
    originalDisplayStyles.push(button.style.display);
    button.style.display = 'none';
  });

  // 이미지로 변환
  html2canvas(target, { useCORS: true }).then((canvas) => {
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

  // 좌우 반전 복원
  imagesToFlip.forEach((img) => {
    img.style.transform = '';
  });
};
