import React from 'react'; 
import PersonBox from '../../components/onePage/personBox';
import EmotionBox from '../../components/onePage/emotionBox';
import { ReactComponent as Thanks } from '../../assets/images/onePage/thanks.svg';
import { ReactComponent as Sorry } from '../../assets/images/onePage/sorry.svg';
import { ReactComponent as Congratulation } from '../../assets/images/onePage/congratulation.svg';
import { ReactComponent as Delight } from '../../assets/images/onePage/delight.svg';
import { ReactComponent as Joy } from '../../assets/images/onePage/Joy.svg';
import { ReactComponent as Question } from '../../assets/images/onePage/question.svg';

function OnePage() {
    return (
      <div className='w-full bg-background p-6'>
          <div className='w-full h-60'>
            <div className='w-full h-10 flex items-center text-lg font-bold text-black'>
                누구에게 카드를 전하고 싶나요?
            </div>
            <div className="w-full h-auto flex flex-wrap justify-between">
                <PersonBox content={'어머니'} />
                <PersonBox content={'아버지'} />
                <PersonBox content={'할머니'} />
                <PersonBox content={'할아버지'} />
                <PersonBox content={'친구'} />
                <PersonBox content={'직접 입력'} isInput={true} />
            </div>
            <div className='w-full h-10' />
            <div className='w-full h-10 flex items-center text-lg font-bold text-black'>
                어떤 마음을 전하고 싶나요?
            </div>
            <div className="w-full h-auto flex flex-wrap justify-between pl-7 pr-7">
                <EmotionBox content={'고마움'} Icon={Thanks} />
                <EmotionBox content={'미안함'} Icon={Sorry} />
                <EmotionBox content={'축하함'} Icon={Congratulation} />
                <EmotionBox content={'반가움'} Icon={Delight} />
                <EmotionBox content={'기쁨'} Icon={Joy} />
                <EmotionBox content={'직접 입력'} isInput={true} Icon={Question} />
            </div>
          </div>
      </div>
    );
  }
  
  export default OnePage;