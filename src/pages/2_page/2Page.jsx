import { useState, useRef } from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import NextButton from '../../components/onePage/nextButton';
import PhraseBox from '../../components/twoPage/phraseBox';
import { ReactComponent as Plus } from '../../assets/images/twoPage/Plus.svg';
import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function TwoPage() {
    const location = useLocation();
    const { target, sentiment } = location.state || {};

    const [selectedType, setSelectedType] = useState(null);
    const type = ['명언 넣기', '성경 구절', '노래 가사', '없음'][selectedType];

    const handlePhraseClick = (index) => {
        setSelectedType(index);
    };

    const navigate = useNavigate(); 
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [phrase, setPhrase] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef(null);

    // 파일 선택창을 열기 위한 함수
    const handleClick = () => {
        fileInputRef.current.click();
    };

    // 파일이 업로드될 때 실행되는 함수
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUploadedImage(imageUrl);
            setImageFile(file);
        }
    };

    // 모달 열기
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const postCardData = async (downloadURL) => {
        // 이미지 URL이 존재하지 않을 경우 초기 이미지 URL을 설정
        // if (!downloadURL && !imageFile) {
        //     console.error('Image URL not found. Make sure to upload the image first.');
        //     return;
        // }
    
        try {
            const response = await axios.post(`/create/phrase`, {
                target: target,          
                sentiment: sentiment,    
                type: type,              
                image_url: downloadURL,   // downloadURL이 없을 경우 빈 문자열로 전달
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.status === 200) {
                console.log('Successfully posted:', response.data);
    
                // response.data에 imgURL이 존재하고, imageFile이 없다면 imageFile을 설정
                if (response.data.imgURL && !imageFile) {
                    setImageFile(response.data.imgURL);
                    console.log('이미지 url : '+imageFile);
                }
                setPhrase(response.data.phrase);
                console.log("문구 : "+phrase);

                navigate('/three', { state: response.data });
            } else {
                console.error('Failed to post data:', response.statusText);
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };
    

    const uploadImgToFB = async () => {

        if (!imageFile) {
            console.log("[uploadImgToFB] 파일 없음");
            postCardData(null);
            return;
        }
        
        try {
            const fileReference = ref(storage, `userPersonalImg/${uuidv4()}`);
            const uploadResult = await uploadBytes(fileReference, imageFile);
            console.log(`[uploadImgToFB] response -> ${uploadResult.metadata.fullPath}`);

            const downloadURL = await getDownloadURL(fileReference);
            console.log(`[uploadImgToFB] downloadURL-> ${downloadURL}`);
            postCardData(downloadURL);
            console.log(downloadURL);
        } catch (error) {
            console.error("Error uploading file: ", error);
        }
    };

    return (
        <div className='w-full h-full bg-white p-6'>
            <div className='w-full h-10 flex items-center text-lg font-bold text-black'>
                카드 표지에 사진을 추가하시겠어요?
            </div>
            <div className='w-full h-10 flex items-center text-sm font-bold text-black '>
                *첨부하지 않을 시 AI가 자동 생성해드려요!
            </div>

            {/* 사진 업로드 및 미리보기 */}
            <div 
              className="w-128 min-h-64 flex flex-col items-center justify-center border border-emphatic rounded-xl text-lg font-bold text-plus_button ml-4 mr-4 cursor-pointer pt-8 pb-8"
              onClick={uploadedImage ? openModal : handleClick} // 이미지가 있으면 모달 열기, 없으면 파일 선택창 열기
            >
                {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-64 h-64 object-cover rounded-xl"
                    />
                ) : (
                    <>
                        <Plus />
                        사진 업로드
                    </>
                )}
            </div>

            {/* 숨겨진 파일 입력 */}
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              accept="image/*" 
              onChange={handleFileChange}
            />

            {/* 모달창 */}
            {isModalOpen && (
                <div 
                  className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                  onClick={closeModal}
                >
                    <div className="relative">
                        <img 
                          src={uploadedImage} 
                          alt="Uploaded in modal" 
                          className="max-w-full max-h-full"
                        />
                        <button 
                          className="absolute top-2 right-2 text-white text-xl"
                          onClick={closeModal}
                        >
                          &times;
                        </button>
                    </div>
                </div>
            )}

            <div className='w-full h-10' />
            <div className='w-full h-10 flex items-center text-lg font-bold text-black'>
                좋은 문구를 추가할 수 있습니다.
            </div>
            <div className='w-128 min-h-32 flex flex-col items-center justify-center rounded-2xl ml-4 mr-4 mt-4'>
                {['명언 넣기', '성경 구절', '노래 가사', '없음'].map((content, index) => (
                    <PhraseBox
                    key={index}
                    content={content}
                    isSelected={selectedType === index}
                    onClick={() => handlePhraseClick(index)}
                    />
                ))}
            </div>

            <div className='w-full h-5' />
            <div className='fixed bottom-4 right-8 w-full h-20 flex items-center justify-end' onClick={() => uploadImgToFB() } >
                <NextButton className="mb-4 mr-4"
                />
            </div>
        </div>
    );
}

export default TwoPage;
