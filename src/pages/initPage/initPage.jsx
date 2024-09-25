import React, { useState } from 'react'; 
import { ReactComponent as Phrase } from '../../assets/images/initPage/Phrase.svg';
import { ReactComponent as Card } from '../../assets/images/initPage/Card.svg';
import { ReactComponent as Question } from '../../assets/images/initPage/Question.svg';
import { ReactComponent as Bubble } from '../../assets/images/initPage/Bubble.svg';
import { useNavigate } from 'react-router-dom'; 
import '../../global.css';

function InitPage() {
  const navigate = useNavigate(); 
  const [isBubbleVisible, setIsBubbleVisible] = useState(false); // 상태값을 사용하여 Bubble 가시성 제어

  const handleStartClick = () => {
    navigate('/one');  
  };

  const handleQuestionClick = () => {
    setIsBubbleVisible(!isBubbleVisible);  
  };

  return (
    <div className='pt-16'>
      <div className='w-full h-1/5  px-4 flex items-center mt-8'>
        <Phrase />
      </div>
      
      <div className='p-5 bg-secondary custom-rounded-left translate-x-10vw'>
        <Card />
      </div>

      <div className='w-full h-28 flex items-end justify-center pb-2'>
        {/* Bubble을 Question 위에 표시 */}
        {isBubbleVisible && (
          <div className=' flex justify-center'>
            <Bubble />
          </div>
          
        )}
      </div>
        
      <div className='w-full h-1/10 flex items-center justify-center text-base font-bold text-textGray mb-4 relative'>
        당신의 마음을 전해보세요!
        <Question className='ml-2 cursor-pointer' onClick={handleQuestionClick} />
      </div> 
      
      <div className='w-full h-20 flex items-center justify-center bg-blue'>
        <div
          className='w-full h-16 bg-primary flex items-center justify-center text-xl text-white font-bold custom-rounded'
          onClick={handleStartClick}  
        >
          시작하기
        </div>
      </div>
    </div>
  );
}

export default InitPage;
