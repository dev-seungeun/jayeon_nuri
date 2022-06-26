import React, {useEffect} from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from "react-responsive-carousel";

function Caravan1(props) {

    var imgData = [
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F1.jpg?alt=media&token=379aed2e-2f08-4416-8bf8-4965ee797866",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F2.jpg?alt=media&token=62ff7784-33ce-46cc-9c3b-c600e0701a24",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F3.jpg?alt=media&token=f810b6d9-26b0-49c9-bceb-8c30936e5fed",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F4.jpg?alt=media&token=f082f627-ecbd-4a60-bb4e-bfcfb8289bf7",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F5.jpg?alt=media&token=c2f7709a-771d-438e-966b-2acb9f1bc950",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F6.jpg?alt=media&token=4331acb7-fc57-4fb9-bb6c-2adb1a0533c9",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F7.jpg?alt=media&token=bcbdb547-1d2d-409b-a192-e9995e38154d",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F9.jpg?alt=media&token=b20fe86d-261e-4c1e-b5c5-551d6a440657",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F10.jpg?alt=media&token=5326a06c-27bc-4260-9827-b5c21b774a3d",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F11.jpg?alt=media&token=521fb33c-fc6b-44c3-b988-38b587f3d076",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan1%2F11.jpg?alt=media&token=521fb33c-fc6b-44c3-b988-38b587f3d076",
    ]

    const getImage = (idx) => {
        return imgData[idx];
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    const handleResize = (e) => {
        var innerWidth = window.innerWidth;
        if(innerWidth > 1000) {
            document.getElementById("pcCarousel").style.display = "block";
            document.getElementById("mobileCarousel").style.display = "none";
        }else {
            document.getElementById("pcCarousel").style.display = "none";
            document.getElementById("mobileCarousel").style.display = "block";
        }
    }

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower2.jpg?alt=media&token=d130b841-3898-4c40-aa93-269db0a9b4c7" />
            </div>

            <div id="room_title"><FcLikePlaceholder />&nbsp;카라반 1호&nbsp;<FcLikePlaceholder /></div>

            <div id="room_image_wrap">

                <div id="pcCarousel" style={{display:"none"}}>
                    {/*<h2>My Image Gallery</h2>*/}
                    <Carousel autoPlay interval="5000" transitionTime="500">
                        <div onClick={(e) => openImageModal(e, getImage(0))} >
                            <img src={getImage(0)} />
                            {/*<p className="legend">My Classic Still 1</p>*/}
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(1))}>
                            <img src={getImage(1)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(2))}>
                            <img src={getImage(2)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(3))} >
                            <img src={getImage(3)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(4))} >
                            <img src={getImage(4)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(5))} >
                            <img src={getImage(5)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(6))} >
                            <img src={getImage(6)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(7))} >
                            <img src={getImage(7)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(8))} >
                            <img src={getImage(8)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(9))} >
                            <img src={getImage(9)} />
                        </div>
                        <div onClick={(e) => openImageModal(e, getImage(10))} >
                            <img src={getImage(10)} />
                        </div>
                    </Carousel>
                </div>

                <div id="mobileCarousel" style={{display:"none"}}>
                    <div className="tz-gallery">

                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(0)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(1)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(2)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(3)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(4)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(5)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(6)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(7)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(8)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-0 col-lg-3"></div>
                            <div className="col-sm-12 col-lg-3">
                                <img src={getImage(9)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-3">
                                <img src={getImage(10)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-0 col-lg-3"></div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Caravan1;