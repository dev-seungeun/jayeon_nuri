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
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F1.png?alt=media&token=b6d28b84-95f0-47be-80af-afbd4b655906",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F2.png?alt=media&token=b4bce9ca-7406-494f-b6f1-b4fcca5e0b88",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F3.JPG?alt=media&token=727862af-911b-4b84-9b82-ebf670ffcc0a",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F4.JPG?alt=media&token=9eb0a343-a37d-4c4d-8498-05c0fb5f1397",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F5.JPG?alt=media&token=13d71357-7a0a-4293-9142-14eefef5961a",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F6.JPG?alt=media&token=4d77491e-7b51-4d17-9caa-d228f73b2993",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F7.JPG?alt=media&token=8371da82-e6fc-4444-8b65-34afd2f95553",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F8.JPG?alt=media&token=5f059152-d2ae-4244-bbe7-f172fe282513",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F9.JPG?alt=media&token=2ef681a0-86fe-4d03-9309-d4e47ef55d12",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F10.JPG?alt=media&token=164730ac-aa87-4382-87ae-2a607c637ef9",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F11.JPG?alt=media&token=16ab8904-3b58-4c86-8ef8-03bef69d7bb2",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F12.JPG?alt=media&token=a6480d32-c5a6-40e1-a005-821b256fd7b9"
]

const priceData = [{
    title: "카라반 4호",
    people: "4인",
    off_season: {weekday: 100000, weekend: 130000},
    peak_season: {weekday: 130000, weekend: 150000},
    high_peak_season: 200000
}]

const roomStuff = [
    "가나다라", "가나다라", "가나다라", "가나다라",
    "가나다라", "가나다라", "가나다라", "가나다라",
    "가나다라", "가나다라", "가나다라", "가나다라",
    "가나다라", "가나다라", "가나다라", "가나다라",
    "가나다라", "가나다라", "가나다라", "가나다라"
]

function Caravan4(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower2.jpg?alt=media&token=d130b841-3898-4c40-aa93-269db0a9b4c7" />
            </div>

            {/*<div id="room_title"><FcLikePlaceholder />&nbsp;카라반 4호&nbsp;<FcLikePlaceholder /></div>*/}
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

export default Caravan4;
export { getPriceData };