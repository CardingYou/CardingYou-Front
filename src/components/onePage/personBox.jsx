

// eslint-disable-next-line react/prop-types
function PersonBox({ content, isInput, isSelected, onClick }) {
    return (
      <div 
        onClick={onClick}
        className={`w-[48%] h-14 flex items-center justify-center text-lg font-bold mt-2 mb-2 rounded-full shadow`}
        style={{
          backgroundColor: isSelected ? '#FFA0B2' : 'white', // 선택되었을 때 배경색 변경
          color: isSelected ? 'white' : '#FF6F8B', // 선택되었을 때 글씨 색상 변경
          border: isSelected ? 'none' : '1px solid #FF6F8B'
        }}
      >
        {isInput ? (
          <input 
            type="text" 
            placeholder={content} 
            className="w-full h-full text-lg font-bold text-emphatic bg-transparent outline-none text-center flex items-center justify-center"
            style={{
              color: isSelected ? 'white' : '#FF6F8B' // input 내부 글씨 색상도 선택 상태에 따라 변경
            }}
          />
        ) : (
          content
        )}
      </div>
    );
}

export default PersonBox;
