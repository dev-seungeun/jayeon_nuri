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
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F1.jpg?alt=media&token=bb7f3f28-b587-4b16-a74d-cbe45c5eaed3",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F2.jpg?alt=media&token=4ad65fa4-3252-4d52-8eae-322b4e1de1d9",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F3.JPG?alt=media&token=b099f7bd-9bb9-492d-9f74-2b8e4a8e4384",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F4.JPG?alt=media&token=bc1f6f0a-9829-4006-9240-eaa02030decb",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F5.JPG?alt=media&token=58ba8a7d-893e-4bb8-b285-7a5f3db781ee",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F6.JPG?alt=media&token=e3d666b0-a6a2-4bb1-abde-731410c4d405",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F7.JPG?alt=media&token=fa258413-af42-4b23-9bb0-4f45de60affd",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F8.JPG?alt=media&token=d09c6ca5-e6fe-492b-b0fe-22c436b14e34",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F9.jpg?alt=media&token=b5603186-fd4f-4ec2-8ef2-aa6588535747",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F10.jpg?alt=media&token=1ecdfd3c-d904-42ba-af59-8e25713cebf7",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F11.jpg?alt=media&token=1dac1387-72b8-4508-af73-36c4e0f75752"
]

const priceData = [{
    title: "카라반 2호",
    people: "4인",
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

function Caravan2(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower2.jpg?alt=media&token=d130b841-3898-4c40-aa93-269db0a9b4c7" />
            </div>

            {/*<div id="room_title"><FcLikePlaceholder />&nbsp;카라반 2호&nbsp;<FcLikePlaceholder /></div>*/}
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

export default Caravan2;
export { getPriceData };
