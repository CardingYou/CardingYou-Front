import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import PersonBox from '../../components/onePage/personBox';
import EmotionBox from '../../components/onePage/emotionBox';
import NextButton from '../../components/onePage/nextButton';
import { ReactComponent as Thanks } from '../../assets/images/onePage/thanks.svg';
import { ReactComponent as Sorry } from '../../assets/images/onePage/sorry.svg';
import { ReactComponent as Congratulation } from '../../assets/images/onePage/congratulation.svg';
import { ReactComponent as Delight } from '../../assets/images/onePage/delight.svg';
import { ReactComponent as Joy } from '../../assets/images/onePage/joy.svg';
import { ReactComponent as Question } from '../../assets/images/onePage/question.svg';

function OnePage() {
  const navigate = useNavigate(); 
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  // 선택된 사람과 감정을 각각 target과 sentiment에 저장
  const target = ['어머니', '아버지', '할머니', '할아버지', '친구', '직접 입력'][selectedPerson];
  const sentiment = ['고마움', '미안함', '축하함', '반가움', '기쁨', '직접 입력'][selectedEmotion];

  const handlePersonClick = ({index, content}) => {
    if (index === 5){
      setSelectedPerson(content);
    }else{
      setSelectedPerson(index);
    }
  };

  const handleEmotionClick = ({index, content}) => {
    if (index === 5){
      setSelectedPerson(content);
    }else{
      setSelectedEmotion(index);
    }
  };

  const handleNextClick = () => {
    navigate('/two', { state: { target, sentiment } });  
  };

  return (
    <div className='w-full h-full bg-white p-6'>
        
      <div className='w-full h-10 flex items-center text-lg font-bold text-black'>
          누구에게 카드를 전하고 싶나요?
      </div>
      <div className="w-full h-auto flex flex-wrap justify-between mt-2">
          {['어머니', '아버지', '할머니', '할아버지', '친구', '직접 입력'].map((content, index) => (
            <PersonBox
              key={index}
              content={content}
              isInput={content === '직접 입력'}
              isSelected={selectedPerson === index}
              onClick={() => handlePersonClick({index, content})}
            />
          ))}
      </div>

      <div className='w-full h-10' />
      <div className='w-full h-10 flex items-center text-lg font-bold text-black'>
          어떤 마음을 전하고 싶나요?
      </div>
      <div className="w-full h-auto flex flex-wrap justify-between pl-7 pr-7 mt-2">
        {['고마움', '미안함', '축하함', '반가움', '기쁨', '직접 입력'].map((content, index) => (
          <EmotionBox
            key={index}
            content={content}
            Icon={
              content === '고마움' ? Thanks :
              content === '미안함' ? Sorry :
              content === '축하함' ? Congratulation :
              content === '반가움' ? Delight :
              content === '기쁨' ? Joy :
              Question
            }
            isInput={content === '직접 입력'}
            isSelected={selectedEmotion === index}
            onClick={() => handleEmotionClick({ index, content })}
          />
        ))}
      </div>


      <div className='w-full h-5' />
      <div 
        className='fixed bottom-4 right-8 w-full h-20 flex items-center justify-end'
        onClick={handleNextClick}>
          <NextButton className="mb-4 mr-4" />
      </div>
      
    </div>
  );
}

export default OnePage;
