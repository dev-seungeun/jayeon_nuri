import React from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

function Room1(props) {
    return (
        <>
            <div className="top_img">
                <img src="/main/top/flower1.jpg" />
            </div>

            <div id="room_title"><FcLike />&nbsp;객실 1,2,3 호&nbsp;<FcLike /></div>

            <div id="room_image_wrap">

                <div className="tz-gallery">

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/room1/1.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/room1/2.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/room1/3.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/room1/4.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/room1/5.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/room1/6.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/room1/7.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-7">
                            <img src="/main/room/room1/8.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-5">
                            <img src="/main/room/room1/9.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-0 col-lg-3"></div>
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/room1/10.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-0 col-lg-3"></div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Room1;