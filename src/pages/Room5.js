import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../css/room.css";
import { getPriceJson, getImageJson } from "../components/FetchData";
import RoomPhotos from "../components/RoomPhotos";
import RoomPriceTable from "../components/RoomPriceTable";
import RoomInfo from "../components/RoomInfo";

function Room5(props) {

    const navigate = useNavigate();
    const [priceJson, setPriceJson] = useState();
    const [imageJson, setImageJson] = useState();

    useEffect(() => {

        setPriceJson(getPriceJson().room5);
        setImageJson(getImageJson().room5);

    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfODMg/MDAxNjU2ODM5NjUxMzc1.Bf77I8cMLxmrjY95b7_t0NhUu-C3Qf_roEiwC3E-a2cg.xYKrDWXlh3To30H-yhnyXH9lS45BJcVp4OVFFnJk4Z4g.JPEG.bse14/flower1.jpg?type=w966" />
            </div>

            <table id="room_tab">
                <tbody>
                <tr>
                    <td id="tab_room1" onClick={(e)=>navigate("/room1/ROOM")}>객실 1,2,3호</td>
                    <td id="tab_room5" style={{backgroundColor: "black", color:"white"}}>객실 5,6호</td>
                    {/*<td id="tab_caravan1" onClick={(e)=>navigate("/caravan1/ROOM")}>카라반 1호</td>*/}
                    {/*<td id="tab_caravan2" onClick={(e)=>navigate("/caravan2/ROOM")}>카라반 2호</td>*/}
                    {/*<td id="tab_caravan3" onClick={(e)=>navigate("/caravan3/ROOM")}>카라반 3호</td>*/}
                    {/*<td id="tab_caravan4" onClick={(e)=>navigate("/caravan4/ROOM")}>카라반 4호</td>*/}
                </tr>
                </tbody>
            </table>

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
