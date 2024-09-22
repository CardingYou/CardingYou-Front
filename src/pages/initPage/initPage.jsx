import React from 'react'; 
import { ReactComponent as Phrase } from '../../assets/images/initPage/Phrase.svg';
import { ReactComponent as Card } from '../../assets/images/initPage/Card.svg';
import '../../global.css';

function InitPage() {
  return (
    <div >
        {/* <div className='py-6 px-2 bg-green-500'></div> */}
        <div className='w-full h-1/5  px-4 flex items-center mt-8'>
            <Phrase />
        </div>
        
        <div className='p-5 bg-secondary custom-rounded-left translate-x-10vw'>
            <Card />
        </div>
        <div className='w-full h-1/10  flex items-center justify-center text-base font-bold text-textGray mt-10vh mb-4'>
            당신의 마음을 전해보세요!
        </div> 
        <div className='w-full h-16 bg-primary flex items-center justify-center text-xl text-white font-bold custom-rounded'>
            시작하기
        </div>
    </div>
  );
}

export default InitPage;
