import React from 'react'; 
import PersonBox from '../../components/onePage/personBox';

function OnePage() {
    return (
      <div className='w-full bg-background p-6'>
          <div className='w-full h-60 bg-yellow-300'>
            <div className='w-full h-10 bg-pink-500  flex items-center text-lg font-bold text-black'>
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
            
          </div>
      </div>
    );
  }
  
  export default OnePage;