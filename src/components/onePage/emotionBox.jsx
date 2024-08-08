import React from 'react'; 

// eslint-disable-next-line react/prop-types
function EmotionBox({ content, isInput, Icon, isSelected, onClick }) {
    return (
      <div
        onClick={onClick}
        className={`bg-white flex flex-col items-center justify-center text-base font-bold text-black mt-2 mb-2 pt-3 pb-3 shadow
          ${isSelected ? 'border-2 border-emphatic' : ''}`} // 선택된 상태에 테두리 추가
        style={{
          width:  '8rem', // 기본값은 8rem (32px)
          height: 'auto', // 기본값은 7rem (28px)
          borderRadius: '2rem', // 기본값은 0.5rem (8px)
        }}
      >
        <Icon className='pb-1'/>
        {isInput ? (
          <input 
            type="text" 
            placeholder={content} 
            className="w-full h-auto text-base font-bold text-black bg-transparent outline-none text-center flex items-center justify-center"
          />
        ) : (
          content
        )}
      </div>
    );
}
  
export default EmotionBox;
