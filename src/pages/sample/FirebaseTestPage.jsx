import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore"; 

export default function FirebaseTest() {
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        console.log(db);
        fetchData(); 
    }, []);

    async function fetchData() {
        try {

            const fireStore = doc(db, "cardImg", "42");
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

    return (
        <div>
            <div>firebase 연동 테스트용</div>
            {imgUrl && <img src={imgUrl} alt="Firestore에서 불러온 이미지" />}
        </div>
    )
}
