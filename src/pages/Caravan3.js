import React, {useEffect, useState} from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../css/room.css";
import { getPriceJson, getImageJson } from "../components/FetchData";
import RoomPhotos from "../components/RoomPhotos";
import RoomPriceTable from "../components/RoomPriceTable";
import RoomInfo from "../components/RoomInfo";

function Caravan3(props) {

    const [priceJson, setPriceJson] = useState();
    const [imageJson, setImageJson] = useState();

    useEffect(() => {

        setPriceJson(getPriceJson().caravan3);
        setImageJson(getImageJson().caravan3);

    }, []);

    return (
        <>
            <div className="top_img">
                <img src="/main/top/flower2.jpg" />
            </div>

            {/*<div id="room_title"><FcLikePlaceholder />&nbsp;카라반 3호&nbsp;<FcLikePlaceholder /></div>*/}
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

export default Caravan3;
