import { useEffect } from "react";
import { db } from "../../firebase";

export default function FirebaseTest() {

    useEffect(() => {
        console.log(db);
    }, []);

    return (
        <div>
            <div>firebase 연동 테스트용</div>
        </div>
    )
}

