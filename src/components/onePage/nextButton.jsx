import React from 'react'; 
import { ReactComponent as Airplane} from './../../assets/images/onePage/airplane.svg';
// eslint-disable-next-line react/prop-types
function NextButton() {
    return (

      <div className='w-36 h-12 flex items-center justify-center text-lg font-bold mt-2 mb-2 rounded-full bg-next_button text-white'>
        <span className='mr-2'>다음단계</span>
        <Airplane />
      </div>
    );
}
  
export default NextButton;