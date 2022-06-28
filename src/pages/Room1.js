import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../css/room.css";
import RoomPhotos from "../components/RoomPhotos";
import RoomPriceTable from "../components/RoomPriceTable";
import RoomInfo from "../components/RoomInfo";

const getPriceData = (e) => {
    return priceData[0];
}

const imgData = [
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F1.jpg?alt=media&token=c95a8c8b-997d-4c58-93a9-6dbca9d83f2a",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F2.jpg?alt=media&token=5869b9b5-d87d-4516-9145-073fcb43f8f3",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F3.jpg?alt=media&token=8882804f-71ba-4c3b-b009-283221bc34e2",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F4.jpg?alt=media&token=e0e7ad50-48b0-4d8d-aa00-16a37925ed8d",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F5.jpg?alt=media&token=05bb55ff-6d5e-4a9a-8749-87071302fe31",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F6.jpg?alt=media&token=6acd75fd-f572-42e5-998c-8aba9a9cebca",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F7.jpg?alt=media&token=782e1a06-6e5c-4f8a-8a14-f5e16a1a741f",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F8.jpg?alt=media&token=6d0e93d3-43c4-4200-bf84-58ea4d23b2fb",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F9.jpg?alt=media&token=42046a2d-3d99-4cfd-832f-0a01f4b66305",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F10.jpg?alt=media&token=04934c0c-add8-406a-9501-8abc7ee425ca"
]

const priceData = [{
    title: "객실 1,2,3 호",
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

function Room1(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower1.jpg?alt=media&token=80e5da73-8f94-4ba6-8777-5513c8ecd379" />
            </div>

            {/*<div id="room_title"><FcLike />&nbsp;객실 1,2,3 호&nbsp;<FcLike /></div>*/}
            <div id="room_title">
                {priceData[0].title}
                <p>여유로운 Healing을 위한 독채 Room</p>
            </div>

            {RoomPhotos(imgData)}

            <div id="bottom_info">
                {RoomPriceTable(priceData)}
                {RoomInfo(roomStuff)}
            </div>
        </>
    );
}

export default Room1;
export { getPriceData };