import React, {useState} from 'react'

export default function CardBox() {
    const [date, setDate] = useState("yyyy.MM.dd");

  return (
    <div className="flex w-full flex-col text-center justify-center bg-[url('assets/images/card_bg.png')] bg-cover bg-center'">
            <p className='text-white text-4xl font-semibold'>
                카드가
            </p>
            <p className='mt-3 text-white text-4xl font-semibold'>
                도착했어요!
            </p>
            <div className='mt-10 flex justify-center'>
            <img src="assets/images/card.png" alt="카드 이미지" />
            </div>
            <div>
            <button className='bg-primary text-lg text-white rounded-3xl py-2 px-12 mt-10'>
                확인하기
            </button>
            <div className='absolute bottom-0 mb-10 pr-6 w-full flex justify-end'>
                <p className='text-[#FCCC63] font-normal text-4xl'>
                    {date}
                </p>
            </div>
            </div>
    </div>
  )
}
