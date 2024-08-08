import React from 'react'; 

// eslint-disable-next-line react/prop-types
function PersonBox({ content, isInput, isSelected, onClick }) {
    return (
      <div 
        onClick={onClick}
        className={`w-[48%] h-12 flex items-center justify-center text-lg font-bold mt-2 mb-2 rounded-full ${isSelected ? 'bg-emphatic text-white' : 'bg-white text-emphatic'}`}>
          {isInput ? (
            <input 
              type="text" 
              placeholder={content} 
              className="w-full h-full text-lg font-bold text-emphatic bg-transparent outline-none text-center flex items-center justify-center"
            />
          ) : (
            content
          )}
      </div>
    );
}
  
export default PersonBox;