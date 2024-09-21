import React, { useState } from 'react'; 
import NextButton from '../../components/onePage/nextButton';

function ThreePage() {
    const colors = ['#FFADAD', '#FFC996', '#FFFB8F', '#B8FFA6', '#E4ABFF', '#9FC5FF'];
    const [selectedColor, setSelectedColor] = useState(null); // 선택된 색상 상태 관리

    const handleColorClick = (color) => {
        setSelectedColor(color); // 색상 선택 시 상태 업데이트
    };

    return (
      <div className='w-full h-full bg-white p-6'>
          
            <div className='w-full h-10 flex items-center text-lg font-bold text-black'>
                편지를 적을 수 있습니다.
            </div>
            <div className='w-full h-10 flex items-center text-lg font-bold text-black pl-2'>
                색상 선택
            </div>
            <div className='w-full h-10 flex items-center text-xs font-bold text-black pl-3'>
                *편지지의 색상을 선택해주세요!
            </div>
            {/* Color Circles */}
            <div className='flex justify-center space-x-4 mt-4'>
                {colors.map((color, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleColorClick(color)} // 클릭 시 색상 선택
                        style={{ backgroundColor: color }} 
                        className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor === color ? 'border-2 border-emphatic' : ''}`} // 선택된 색상에 테두리 추가
                    />
                ))}
            </div>

            <div className='w-full h-10' />
            <div className='w-full h-10 flex items-center text-lg font-bold text-black pl-2'>
                편지 내용 작성
            </div>
            <div className='w-full h-10 flex items-center text-xs font-bold text-black pl-3'>
                직접 입력하기 : 직접 입력한 편지 내용의 맞춤법 교정
            </div>
            <div className='w-full h-10 flex items-center text-xs font-bold text-black pl-3'>
                AI에게 맡기기 :  AI가 편지 내용 작성
            </div>
            
            <div className='w-full h-5' />
            <div className='fixed bottom-4 right-8 w-full h-20 flex items-center justify-end'>
                <NextButton className="mb-4 mr-4" />
            </div>

      </div>
    );
}

export default ThreePage;
