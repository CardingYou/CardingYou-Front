import React from 'react'; 

// eslint-disable-next-line react/prop-types
function PersonBox({ content, isInput }) {
    return (
      <div className='w-[48%] h-12 bg-white flex items-center justify-center text-lg font-bold text-emphatic mt-2 mb-2 rounded-full'>
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