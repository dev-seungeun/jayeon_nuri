import React from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

function Caravan3(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower2.jpg?alt=media&token=d130b841-3898-4c40-aa93-269db0a9b4c7" />
            </div>

            <div id="room_title"><FcLikePlaceholder />&nbsp;카라반 3호&nbsp;<FcLikePlaceholder /></div>

            <div id="room_image_wrap">

                <div className="tz-gallery">

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan3/1.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan3/2.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/caravan3/3.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-3">
                            <img src="/main/room/caravan3/4.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-3">
                            <img src="/main/room/caravan3/5.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-3">
                            <img src="/main/room/caravan3/6.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-3">
                            <img src="/main/room/caravan3/7.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/caravan3/8.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/caravan3/9.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-0 col-lg-1"></div>
                        <div className="col-sm-12 col-lg-3">
                            <img src="/main/room/caravan3/10.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-3">
                            <img src="/main/room/caravan3/11.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <img src="/main/room/caravan3/12.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-0 col-lg-1"></div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Caravan3;