import {useState} from 'react'
import useTextToSpeech from '../../utils/TTS/TextToSpeech';
import { onClickDownloadImage } from '../../utils/image/DownloadImg';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function CardLetter() {
    const { randomPath } = useParams(); // 경로 접근
    console.log('path 확인 : ', randomPath);

    const location = useLocation();
    const navigate = useNavigate();
    const response = location.state; // navigate로 전달된 데이터 접근

    console.log('이미지 url : '+response.imgURL);
    console.log('카드 색상 : '+ response.selectedColor);

    if(!response || response == null || response == undefined) {
        alert("카드 데이터를 받아오는 데 실패하였습니다 ! ");
        navigate("/"); // 처음으로 이동
    } 

    const [flipped, setFlipped] = useState(false);
    const { play } = useTextToSpeech(response.responseContent); 

    const DownLoadImage = () => {
        onClickDownloadImage(flipped);
    }

  return (
    <div className="flex w-full flex-col text-center justify-center bg-[url('/assets/images/card_bg.png')] bg-cover bg-center'" id="download">
            <div className='flex justify-center'>
            <img src="/assets/images/carding_for_you.png" alt="carding_for_you" />
            </div>
            <div className='mt-4 flex justify-center'>
                <div 
                    className="relative w-[60%] pb-[79%] bg-white rounded-xl overflow-hidden"
                    onClick={() => setFlipped(!flipped)} 
                    style={{
                        perspective: '1000px',
                        border: flipped ? 'none' : `4px solid ${response.selectedColor}`,
                    }}
                >
                    <div 
                        className={`absolute w-full h-full transition-transform duration-700`} 
                        style={{
                        transformStyle: 'preserve-3d',
                        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
                        }}
                    >
                    {/* 카드 앞면 */}
                    <div 
                        className="absolute w-full h-full backface-hidden flex bg-white"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(0deg)',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                        id='textArea'
                    >
                        <div className='py-10 px-5 text-black text-left font-xs whitespace-pre-wrap overflow-scroll scrollbar-hide'>
                            {response.responseContent}
                        </div>
                    </div>

                    {/* 카드 뒷면 */}
                    <div 
                    className="absolute w-full h-full backface-hidden flex justify-center items-center"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                    >
                        <img className='absolute top-0 left-0 w-full h-full object-cover' src={response.imgURL} alt="카드 이미지" />
                        
                        {/* 표지 문구 임의로 생성함 */}
                        <div 
                            className="absolute w-full h-full flex items-center justify-center text-center p-4"
                            style={{
                                color: 'white',  
                                fontSize: '1.5rem', 
                                fontWeight: 'bold', 
                                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', 
                            }}
                        >
                            {response.phrase}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
            <button 
            onClick={play} 
            className='bg-white text-lg text-white rounded-2xl py-2 px-4 mt-10'
            >
                <div className='flex'>
            <img className='mr-3' src="/assets/images/speaker.png" alt="스피커" />
                <p className='text-orange font-bold'>
                음성으로 듣기
                </p>
                </div>
            </button>
            <div>
            <button 
            onClick={DownLoadImage}
            className='mr-4 bg-purple text-lg text-white rounded-3xl py-2 px-12 mt-6 font-semibold'
            >
                다운로드
            </button>
            <button className='bg-yellow text-lg text-white rounded-3xl py-2 px-12'>
                공유하기
            </button>
            </div>
            <div className='absolute bottom-0 mb-10 pr-6 w-full flex justify-end'>
                <p className='text-[#FCCC63] font-normal text-4xl'>
                    {response.date}
                </p>
            </div>
            </div>
    </div>
  )
}
