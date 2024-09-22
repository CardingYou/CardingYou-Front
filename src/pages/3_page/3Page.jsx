import { useState } from 'react'; 
import NextButton from '../../components/onePage/nextButton';
import { ReactComponent as Button } from '../../assets/images/threePage/Button.svg';
import axios from 'axios';

function ThreePage() {
    const colors = ['#FFADAD', '#FFC996', '#FFFB8F', '#B8FFA6', '#E4ABFF', '#9FC5FF'];
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedOption, setSelectedOption] = useState('direct');
    const [letterContent, setLetterContent] = useState('');
    const [responseContent, setResponseContent] = useState('');

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = async () => {
        const type = selectedOption === 'direct' ? 'custom' : 'AI';
        try {
            const response = await axios.post(`/api/create/letter/type=${type}`, { context: letterContent });
            setResponseContent(response.data.letter); // 받은 응답을 두 번째 textarea에 설정
            console.log(response.data.letter);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
      <div className='w-full h-full bg-white p-6'>
          <div className='w-full h-10 flex items-center text-lg font-bold text-black'>
              편지를 적을 수 있습니다.
          </div>
          <div className='w-full h-10 flex items-center text-lg font-bold text-black pl-2'>
              색상 선택
          </div>
          <div className='w-full h-10 flex items-center text-xs font-bold text-black pl-3'>
              *편지지의 색상을 선택해주세요!
          </div>
          {/* Color Circles */}
          <div className='flex justify-center space-x-4 mt-4'>
              {colors.map((color, index) => (
                  <div 
                      key={index} 
                      onClick={() => handleColorClick(color)}
                      style={{ backgroundColor: color }} 
                      className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor === color ? 'border-2 border-emphatic' : ''}`} 
                  />
              ))}
          </div>

          <div className='w-full h-10' />
          <div className='w-full h-10 flex items-center text-lg font-bold text-black pl-2'>
              편지 내용 작성
          </div>
          <div className='w-full h-6 flex items-center text-xs font-bold text-black pl-4'>
              직접 입력하기 : 직접 입력한 편지 내용의 맞춤법 교정
          </div>
          <div className='w-full h-6 flex items-center text-xs font-bold text-black pl-4'>
              AI에게 맡기기 : AI가 편지 내용 작성
          </div>

          {/* 두 버튼 */}
          <div className='w-full flex justify-center space-x-4 mt-6 mb-4'>
              <button 
                  onClick={() => handleOptionClick('direct')}
                  className={`p-2 rounded-2xl ${selectedOption === 'direct' ? 'bg-[#FF7074] text-white text-lg font-bold' : 'bg-[#FFF2F2] text-[#FF7074] text-lg font-bold'}`}
              >
                  직접 입력하기
              </button>
              <button 
                  onClick={() => handleOptionClick('ai')}
                  className={`p-2 rounded-2xl ${selectedOption === 'ai' ? 'bg-[#FF7074] text-white text-lg font-bold' : 'bg-[#FFF2F2] text-[#FF7074] text-lg font-bold'}`}
              >
                  AI에게 맡기기
              </button>
          </div>

          {/* 편지 작성 텍스트박스 */}
          <div className='w-full flex items-center justify-center'>
              <textarea 
                  className='w-10/12 min-h-52 mt-4 p-2 text-sm text-black border-2 border-emphatic rounded-2xl outline-none'
                  placeholder={selectedOption === 'ai' ? "AI 편지 생성을 위한 프롬프트를 입력" : "편지 내용을 입력해주세요."}
                  value={letterContent}
                  onChange={(e) => setLetterContent(e.target.value)} // 내용 상태 업데이트
              />
          </div>
          <div className='w-full h-20 flex items-center justify-center' onClick={handleSubmit}>
              <Button />
          </div>
          <div className='w-full flex items-center justify-center'>
              <textarea 
                  className='w-10/12 min-h-52 p-2 text-sm text-black border-2 border-emphatic rounded-2xl outline-none'
                  value={responseContent}
                  readOnly // 응답 텍스트는 읽기 전용
              />
          </div>

          <div className='w-full h-24' />
          <div className='fixed bottom-4 right-8 w-full h-20 flex items-center justify-end'>
              <NextButton className="mb-4 mr-4" />
          </div>
      </div>
    );
}

export default ThreePage;
