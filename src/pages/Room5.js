import React, {useEffect, useState} from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../css/room.css";
import { getPriceJson, getImageJson } from "../components/FetchData";
import RoomPhotos from "../components/RoomPhotos";
import RoomPriceTable from "../components/RoomPriceTable";
import RoomInfo from "../components/RoomInfo";

function Room5(props) {

    const [priceJson, setPriceJson] = useState();
    const [imageJson, setImageJson] = useState();

    useEffect(() => {

        setPriceJson(getPriceJson().room5);
        setImageJson(getImageJson().room5);

    }, []);

    return (
        <>
            <div className="top_img">
                <img src="/main/top/flower1.jpg" />
            </div>

            {/*<div id="room_title"><FcLike />&nbsp;객실 5,6 호&nbsp;<FcLike /></div>*/}
            <div id="room_title">
                {priceJson && priceJson.title}
                <p>여유로운 Healing을 위한 독채 Room</p>
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

export default Room5;
