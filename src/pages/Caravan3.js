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
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F1.JPG?alt=media&token=033450a4-5362-48ce-80b1-50d53a246322",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F2.JPG?alt=media&token=7ab2fd7d-534b-41b2-839e-ed2555bf27f1",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F3.JPG?alt=media&token=02c1d01c-e899-4f56-900e-8fb4aa84bf3d",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F4.JPG?alt=media&token=77ad671a-e2d9-4abf-8ccf-fee349a45b56",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F5.JPG?alt=media&token=2a494908-4987-4b37-ae5c-a54b5b2aa9fd",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F6.JPG?alt=media&token=1433ffd7-ff5c-4107-9c50-906761c8a9ef",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F7.JPG?alt=media&token=509d3f65-21c3-46d2-837b-f8ecbb978e78",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F8.JPG?alt=media&token=74e3e1be-ddae-432c-971c-7df7e9ab0d01",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F9.JPG?alt=media&token=67c38753-87ea-4e0a-a776-9f1638c35d1a",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F10.JPG?alt=media&token=6a09ab7d-8bfb-4893-8e10-bd085a8e7d3f",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F11.JPG?alt=media&token=fe9bb053-5d8b-4283-85b3-b38abebf1df1",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F12.JPG?alt=media&token=cbe7a135-35b5-49fe-9225-bc7364d09999"
]

const priceData = [{
    title: "카라반 3호",
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

function Caravan3(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower2.jpg?alt=media&token=d130b841-3898-4c40-aa93-269db0a9b4c7" />
            </div>

            {/*<div id="room_title"><FcLikePlaceholder />&nbsp;카라반 3호&nbsp;<FcLikePlaceholder /></div>*/}
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

export default Caravan3;
export { getPriceData };