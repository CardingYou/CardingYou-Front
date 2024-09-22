/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { min: '1200px', max: '1919px' }, // desktop
        lg: { min: '960px', max: '1199px' }, // tablet
        md: { min: '768px', max: '959px' }, // mobile
      },
      colors: {
        primary: '#FFADAC', // main1의 '시작하기' 버튼 배경과 동일
        secondary: '#FFE2E1', // main1의 이미지 뒤 배경과 동일
        emphatic: '#FF6F8B', // 1번의 카드 선택 시 진한 핑크 배경과 동일
        background: '#FFF0F1', // 1번 이후 페이지의 배경색
        next_button: '#FF91A6', // 1번 이후 '다음단계' 버튼 배경색과 동일
        plus_button: '#FFBBBB', // 2번의 카드 표지 사진 추가 + 색과 동일
        card_button: '#FFEAE9', // 카드 완성 후 '카드 만들기' 버튼 배경색과 동일
        black: '#000000',
        white: '#FFFFFF',
        orange: '#FF9900',
        purple: '#7E8BFF',
        yellow: '#FFC165',
        placeholder: '#BFBFBF', // 3번의 placeholder와 동일
        textGray: '#787878',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards',
      },
    },
  },
  plugins: [],
}

