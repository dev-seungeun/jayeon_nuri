import React, {useEffect, useState} from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../css/room.css";
import { getPriceJson, getImageJson } from "../components/FetchData";
import RoomPhotos from "../components/RoomPhotos";
import RoomPriceTable from "../components/RoomPriceTable";
import RoomInfo from "../components/RoomInfo";

function Caravan4(props) {

    const [priceJson, setPriceJson] = useState();
    const [imageJson, setImageJson] = useState();

    useEffect(() => {

        setPriceJson(getPriceJson().caravan4);
        setImageJson(getImageJson().caravan4);

    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjA1/MDAxNjU2ODM5NjUxMzU5.2weC5MRPU-9s4DQjv7_Tf-LfE1htWj9px83twvItVWkg.vBxM2YW26EaC0NGitfn6Hxcz65-9-qUXADigMSFdAoog.JPEG.bse14/flower2.jpg?type=w966" />
            </div>

            {/*<div id="room_title"><FcLikePlaceholder />&nbsp;카라반 4호&nbsp;<FcLikePlaceholder /></div>*/}
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

export default Caravan4;
