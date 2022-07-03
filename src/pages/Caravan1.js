import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../css/room.css";
import { getPriceJson, getImageJson } from "../components/FetchData";
import RoomPhotos from "../components/RoomPhotos";
import RoomPriceTable from "../components/RoomPriceTable";
import RoomInfo from "../components/RoomInfo";

function Caravan1(props) {

    const navigate = useNavigate();
    const [priceJson, setPriceJson] = useState();
    const [imageJson, setImageJson] = useState();

    useEffect(() => {

        setPriceJson(getPriceJson().caravan1);
        setImageJson(getImageJson().caravan1);

    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjA1/MDAxNjU2ODM5NjUxMzU5.2weC5MRPU-9s4DQjv7_Tf-LfE1htWj9px83twvItVWkg.vBxM2YW26EaC0NGitfn6Hxcz65-9-qUXADigMSFdAoog.JPEG.bse14/flower2.jpg?type=w966" />
            </div>

            <table id="room_tab">
                <tbody>
                <tr>
                    <td id="tab_room1" onClick={(e)=>navigate("/room1/ROOM")}>객실 1,2,3호</td>
                    <td id="tab_room5" onClick={(e)=>navigate("/room5/ROOM")}>객실 5,6호</td>
                    <td id="tab_caravan1" style={{backgroundColor: "black", color:"white"}}>카라반 1호</td>
                    <td id="tab_caravan2" onClick={(e)=>navigate("/caravan2/ROOM")}>카라반 2호</td>
                    <td id="tab_caravan3" onClick={(e)=>navigate("/caravan3/ROOM")}>카라반 3호</td>
                    <td id="tab_caravan4" onClick={(e)=>navigate("/caravan4/ROOM")}>카라반 4호</td>
                </tr>
                </tbody>
            </table>

            {/*<div id="room_title"><FcLikePlaceholder />&nbsp;카라반 1호&nbsp;<FcLikePlaceholder /></div>*/}
            <div id="room_title">
                {priceJson && priceJson.title}
                <p>낭만있는 Camping을 위한 카라반</p>
            </div>

            {imageJson &&
                <RoomPhotos imgList={imageJson} />
            }

            <div id="bottom_info">

                <div className="hrr" />

                { priceJson &&
                    <RoomPriceTable priceDataMap={priceJson} />
                }

                <div className="hrr" />
                
                {RoomInfo()}
            </div>
        </>
    );
}

export default Caravan1;
