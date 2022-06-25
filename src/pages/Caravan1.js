import React from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

function Caravan1(props) {
    return (
        <>
            <div className="top_img">
                <img src="/main/top/flower2.jpg" />
            </div>

            <div id="room_title"><FcLikePlaceholder />&nbsp;카라반 1호&nbsp;<FcLikePlaceholder /></div>

            <div id="room_image_wrap">

                <div className="tz-gallery">

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/1.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/2.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/3.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/4.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/5.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/6.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/7.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/8.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan1/9.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-0 col-lg-3"></div>
                        <div className="col-sm-12 col-lg-3">
                            <img src="/main/room/caravan1/10.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-3">
                            <img src="/main/room/caravan1/11.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-0 col-lg-3"></div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Caravan1;