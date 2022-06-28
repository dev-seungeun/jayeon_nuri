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
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F1.jpg?alt=media&token=6fad9d14-e849-4f7c-8cc8-5f43e6159210",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F2.jpg?alt=media&token=6713011d-45e3-4553-a98f-1da6c02a2d3f",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F3.jpg?alt=media&token=1e85cc43-c7a4-4b33-8c62-531520fdc666",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F4.jpg?alt=media&token=e6a62a3d-d6a2-4364-8bfd-25935374cf30",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F5.jpg?alt=media&token=1e3d0fee-fc58-480e-a76f-c58d76449bdd",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F6.jpg?alt=media&token=ea2d6443-ea5e-4202-85b6-3980893e3ad7",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F7.jpg?alt=media&token=a4593a8f-9308-46e0-9106-7b986419ebce",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F8.jpg?alt=media&token=7022d980-db56-41eb-883b-a498ad02cfe0",
    "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F9.jpg?alt=media&token=8c5954e8-971f-4b4c-b848-53788f75c6c3"
]

const priceData = [{
    title: "객실 5,6 호",
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

function Room5(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower1.jpg?alt=media&token=80e5da73-8f94-4ba6-8777-5513c8ecd379" />
            </div>

            {/*<div id="room_title"><FcLike />&nbsp;객실 5,6 호&nbsp;<FcLike /></div>*/}
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

export default Room5;
export { getPriceData };