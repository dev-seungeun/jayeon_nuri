import React, {useEffect, useState} from 'react';
import "../css/room.css";
import { openReervationLink } from "../pages/Header";

function RoomInfo(stuffArr) {

    const [stuff, setStuff] = useState();

    useEffect(()=>{
        console.log(stuffArr)
        let stuffTemp = "";
        stuffArr.forEach((st, index) => {
            stuffTemp += st + (stuffArr.length-1 != index ? "," : "");
        });
        setStuff(stuffTemp);
    },[])

    return (
        <>
            <div className="add_wrap">
                <div className="price_title">시설안내</div>
                <div className="stuff" style={{textAlign:"left"}}>
                    {stuff}
                </div>
            </div>

            <div className="hrr"></div>

            <div className="room_bottom_btn" onClick={(e)=>{
                openReervationLink();
            }}>실시간예약</div>
        </>
    );
}

export default RoomInfo;