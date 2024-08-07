import React, {useState} from 'react'

export default function CardLetter() {
    const [date, setDate] = useState("yyyy.MM.dd");

  return (
    <div className="flex w-full flex-col text-center justify-center bg-[url('assets/images/card_bg.png')] bg-cover bg-center'">
            <div className='flex justify-center'>
            <img src="assets/images/carding_for_you.png" alt="carding_for_you" />
            </div>
            <div className='mt-4 flex justify-center'>
            <div className='relative w-[60%] pb-[79%] bg-white rounded-xl overflow-hidden'>
                <img className='absolute top-0 left-0 w-full h-full object-cover' src="assets/images/sample_letter_img.png" alt="카드 이미지" />
            </div>
            </div>
            <div>
            <button className='bg-white text-lg text-white rounded-2xl py-2 px-4 mt-10'>
                <div className='flex'>
            <img className='mr-3' src="assets/images/speaker.png" alt="스피커" />
                <p className='text-orange font-bold'>
                음성으로 듣기
                </p>
                </div>
            </button>
            <div>
            <button className='mr-4 bg-purple text-lg text-white rounded-3xl py-2 px-12 mt-6 font-semibold'>
                다운로드
            </button>
            <button className='bg-yellow text-lg text-white rounded-3xl py-2 px-12 font-semibold'>
                공유하기
            </button>
            </div>
            <div className='absolute bottom-0 mb-10 pr-6 w-full flex justify-end'>
                <p className='text-[#FCCC63] font-normal text-4xl'>
                    {date}
                </p>
            </div>
            </div>
    </div>
  )
}
