import React from 'react'; 

// eslint-disable-next-line react/prop-types
function PhraseBox({ content, isSelected, onClick }) {
    const isQuote = content === '명언 넣기';
    const isNone = content === '없음';

    return (
        <div
            onClick={onClick}
            className={`w-full bg-white flex flex-col items-center justify-center text-base font-bold text-black shadow
                ${isSelected ? 'border-2 border-emphatic' : ''} 
                ${isQuote ? 'rounded-t-2xl' : ''} 
                ${isNone ? 'rounded-b-2xl' : ''}`}
            style={{
                height: '3rem',
                backgroundColor: isSelected ? '#FFA0B2' : 'white',
                color: isSelected ? 'white' : '#FF7074',
                border: isSelected ? 'none' : '0.5px solid #FF6F8B'
            }}
        >
            {content}
        </div>
    );
}
  
export default PhraseBox;
