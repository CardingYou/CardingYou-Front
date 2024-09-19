import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc, collection, getDocs, setDoc } from "firebase/firestore"; 

export default function FirebaseTest() {
    const [imgUrl, setImgUrl] = useState("");
    const userUUID = "1";

    useEffect(() => {
        console.log(db);
        fetchData(); 
    }, []);

    // TODO 최종 편지지 서버통신 완료 후 해당 로직 삭제 예정
    async function fetchData() {
        try {

            const fireStore = doc(db, "cardImg", "41");
            const fireStoreData = await getDoc(fireStore);    

            if (fireStoreData.exists()) {
                const data = fireStoreData.data();
                console.log("Document data:", data);
                
                if (data.imgUrl) {
                    console.log("Fetched imgUrl:", data.imgUrl);
                    setImgUrl(data.imgUrl);
                } else {
                    console.log("imgUrl 필드가 없습니다.");
                }
            } else {
                console.log("No such document!"); 
            }
        } catch (error) {
            console.error("Error fetching document:", error); 
        }
    }

    // TODO 사용자 등록이 필요할 경우 실제 userUUID 받아오는 것으로 수정 
    async function uploadUser() {
        try {
            const usersCollection = collection(db, "users");
            const snapshot = await getDocs(usersCollection);

            let exists = false;
            let maxIndex = 0;

            snapshot.forEach((doc) => {
                const data = doc.data();
                const docId = parseInt(doc.id);

                if (docId > maxIndex) {
                    maxIndex = docId;
                }

                if (data.userId === userUUID) {
                    exists = true;
                }
            });

            if (exists) {
                console.log("userUUID 이미 존재함");
            } else {
                const newDocId = (maxIndex + 1).toString();
                await setDoc(doc(db, "users", newDocId), { uuid: userUUID });
                console.log(`userUUID 추가: ${newDocId}`);
            }
        } catch (error) {
            console.error("UUID 업로드 에러 -> ", error);
        }
    }

    async function uploadLetterUrl() {
        try {
            const letterCollection = collection(db, "finalLetterUrl");
            const snapshot = await getDocs(letterCollection);

            let maxIndex = 0;

            snapshot.forEach((doc) => {
                const docId = parseInt(doc.id);

                if (docId > maxIndex) {
                    maxIndex = docId;
                }

            });

            const newDocId = (maxIndex + 1).toString();
            await setDoc(doc(db, "finalLetterUrl", newDocId), { uuid: userUUID, letterUrl: imgUrl });
            console.log(`최종 편지 url 추가: ${newDocId}`);

        } catch (error) {
            console.error("최종 편지 url 업로드 에러 -> ", error);
        }
    }

    return (
        <div>
            <div>firebase 연동 테스트용</div>
            <div> <button onClick={uploadUser} ><u>사용자 uuid 저장</u> </button> </div>
            <div> <button onClick={uploadLetterUrl} ><u>편지 이미지 저장</u> </button> </div>   // TODO 최종 편지지 서버통신 성공 시 자동 이미지 저장하는 것으로 수정 예정
            {imgUrl && <img src={imgUrl} alt="Firestore에서 불러온 이미지" />}
        </div>
    )
}
