import React, {useEffect} from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from "react-responsive-carousel";

function Caravan4(props) {

    var imgData = [
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F1.png?alt=media&token=b6d28b84-95f0-47be-80af-afbd4b655906",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F2.png?alt=media&token=b4bce9ca-7406-494f-b6f1-b4fcca5e0b88",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F3.JPG?alt=media&token=727862af-911b-4b84-9b82-ebf670ffcc0a",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F4.JPG?alt=media&token=9eb0a343-a37d-4c4d-8498-05c0fb5f1397",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F5.JPG?alt=media&token=13d71357-7a0a-4293-9142-14eefef5961a",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F6.JPG?alt=media&token=4d77491e-7b51-4d17-9caa-d228f73b2993",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F7.JPG?alt=media&token=8371da82-e6fc-4444-8b65-34afd2f95553",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F8.JPG?alt=media&token=5f059152-d2ae-4244-bbe7-f172fe282513",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F9.JPG?alt=media&token=2ef681a0-86fe-4d03-9309-d4e47ef55d12",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F10.JPG?alt=media&token=164730ac-aa87-4382-87ae-2a607c637ef9",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F11.JPG?alt=media&token=16ab8904-3b58-4c86-8ef8-03bef69d7bb2",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan4%2F12.JPG?alt=media&token=a6480d32-c5a6-40e1-a005-821b256fd7b9"
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

            <div id="room_title"><FcLikePlaceholder />&nbsp;카라반 4호&nbsp;<FcLikePlaceholder /></div>

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
                        <div onClick={(e) => openImageModal(e, getImage(11))} >
                            <img src={getImage(11)} />
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
                            <div className="col-sm-12 col-lg-4 col-xl-5">
                                <img src={getImage(9)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(10)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-3">
                                <img src={getImage(11)} onClick={openImageModal} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Caravan4;