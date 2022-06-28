import React, {useEffect, useState} from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../css/room.css";
import RoomPhotos from "../components/RoomPhotos";
import RoomPriceTable from "../components/RoomPriceTable";
import RoomInfo from "../components/RoomInfo";

const getPriceData = (e) => {
    return priceData[0];
}

const imgData = [
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F1.jpg?alt=media&token=379aed2e-2f08-4416-8bf8-4965ee797866",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F2.jpg?alt=media&token=62ff7784-33ce-46cc-9c3b-c600e0701a24",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F3.jpg?alt=media&token=f810b6d9-26b0-49c9-bceb-8c30936e5fed",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F4.jpg?alt=media&token=f082f627-ecbd-4a60-bb4e-bfcfb8289bf7",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F5.jpg?alt=media&token=c2f7709a-771d-438e-966b-2acb9f1bc950",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F6.jpg?alt=media&token=4331acb7-fc57-4fb9-bb6c-2adb1a0533c9",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F7.jpg?alt=media&token=bcbdb547-1d2d-409b-a192-e9995e38154d",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F9.jpg?alt=media&token=b20fe86d-261e-4c1e-b5c5-551d6a440657",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F10.jpg?alt=media&token=5326a06c-27bc-4260-9827-b5c21b774a3d",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F11.jpg?alt=media&token=521fb33c-fc6b-44c3-b988-38b587f3d076",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F11.jpg?alt=media&token=521fb33c-fc6b-44c3-b988-38b587f3d076",
]

const priceData = [{
    title: "카라반 1호",
    people: "4인 (최대 5인)",
    off_season: {weekday: 120000, weekend: 150000},
    peak_season: {weekday: 150000, weekend: 170000},
    high_peak_season: 220000
}]

const roomStuff = [
    "가나다라", "가나다라", "가나다라", "가나다라",
    "가나다라", "가나다라", "가나다라", "가나다라",
    "가나다라", "가나다라", "가나다라", "가나다라",
    "가나다라", "가나다라", "가나다라", "가나다라",
    "가나다라", "가나다라", "가나다라", "가나다라"
]

function Caravan1(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower2.jpg?alt=media&token=d130b841-3898-4c40-aa93-269db0a9b4c7" />
            </div>

            {/*<div id="room_title"><FcLikePlaceholder />&nbsp;카라반 1호&nbsp;<FcLikePlaceholder /></div>*/}
            <div id="room_title">
                {priceData[0].title}
                <p>낭만있는 Camping을 위한 카라반</p>
            </div>

            {RoomPhotos(imgData)}

            <div id="bottom_info">
                {RoomPriceTable(priceData)}
                {RoomInfo(roomStuff)}
            </div>
        </>
    );
}

export default Caravan1;
export { getPriceData };