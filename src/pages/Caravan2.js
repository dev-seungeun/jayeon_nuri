import React from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

function Caravan2(props) {
    return (
        <>
            <div className="top_img">
                <img src="/main/top/flower2.jpg" />
            </div>

            <div id="room_title"><FcLikePlaceholder />&nbsp;카라반 2호&nbsp;<FcLikePlaceholder /></div>

            <div id="room_image_wrap">

                <div className="tz-gallery">

                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/caravan2/1.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/caravan2/2.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/3.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/4.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/5.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/6.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/7.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/8.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/9.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/10.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan2/11.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Caravan2;