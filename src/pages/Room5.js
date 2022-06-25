import React from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

function Room5(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower1.jpg?alt=media&token=80e5da73-8f94-4ba6-8777-5513c8ecd379" />
            </div>

            <div id="room_title"><FcLike />&nbsp;객실 5,6 호&nbsp;<FcLike /></div>

            <div id="room_image_wrap">

                <div className="tz-gallery">

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/room5/1.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/room5/2.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-4 col-xl-4">
                            <img src="/main/room/room5/3.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-xl-6">
                            <img src="/main/room/room5/4.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-3 col-xl-3">
                            <img src="/main/room/room5/5.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-3 col-xl-3">
                            <img src="/main/room/room5/6.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/room5/7.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/room5/8.jpg" onClick={openImageModal} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-0 col-lg-3"></div>
                        <div className="col-sm-12 col-lg-6">
                            <img src="/main/room/room5/9.jpg" onClick={openImageModal} />
                        </div>
                        <div className="col-sm-0 col-lg-3"></div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Room5;