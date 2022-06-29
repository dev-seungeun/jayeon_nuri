import React, {useEffect, useState} from 'react';
import "../css/room.css";
import { getEtcInfoJson } from "../components/FetchData";
import { openReervationLink } from "../pages/Header";

function RoomInfo(props) {

    const [stuff, setStuff] = useState();

    useEffect(() => {

        let stuffTemp = "";
        getEtcInfoJson().stuff.forEach((st, index) => {
            stuffTemp += st + (getEtcInfoJson().stuff.length-1 != index ? "," : "");
        });
        setStuff(stuffTemp);

    },[]);

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