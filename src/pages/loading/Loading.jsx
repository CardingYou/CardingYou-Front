import { SyncLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
        <SyncLoader 
        color="rgba(255, 173, 172, 1)"
        loading
        />
        <p className='mt-10 pt-10 text-2xl'>생성 중입니다.</p>
        <p className='mt-5 text-lg text-placeholder'>잠시만 기다려주세요.</p>
    </div>
  )
}
