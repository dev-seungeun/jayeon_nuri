import React, {useEffect} from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from "react-responsive-carousel";

function Caravan3(props) {

    var imgData = [
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F1.JPG?alt=media&token=033450a4-5362-48ce-80b1-50d53a246322",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F2.JPG?alt=media&token=7ab2fd7d-534b-41b2-839e-ed2555bf27f1",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F3.JPG?alt=media&token=02c1d01c-e899-4f56-900e-8fb4aa84bf3d",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F4.JPG?alt=media&token=77ad671a-e2d9-4abf-8ccf-fee349a45b56",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F5.JPG?alt=media&token=2a494908-4987-4b37-ae5c-a54b5b2aa9fd",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F6.JPG?alt=media&token=1433ffd7-ff5c-4107-9c50-906761c8a9ef",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F7.JPG?alt=media&token=509d3f65-21c3-46d2-837b-f8ecbb978e78",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F8.JPG?alt=media&token=74e3e1be-ddae-432c-971c-7df7e9ab0d01",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F9.JPG?alt=media&token=67c38753-87ea-4e0a-a776-9f1638c35d1a",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F10.JPG?alt=media&token=6a09ab7d-8bfb-4893-8e10-bd085a8e7d3f",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F11.JPG?alt=media&token=fe9bb053-5d8b-4283-85b3-b38abebf1df1",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan3%2F12.JPG?alt=media&token=cbe7a135-35b5-49fe-9225-bc7364d09999"
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

            <div id="room_title"><FcLikePlaceholder />&nbsp;카라반 3호&nbsp;<FcLikePlaceholder /></div>

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
                            <div className="col-sm-12 col-lg-3">
                                <img src={getImage(3)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-3">
                                <img src={getImage(4)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-3">
                                <img src={getImage(5)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-3">
                                <img src={getImage(6)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <img src={getImage(7)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src={getImage(8)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-0 col-lg-1"></div>
                            <div className="col-sm-12 col-lg-3">
                                <img src={getImage(9)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-3">
                                <img src={getImage(10)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <img src={getImage(11)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-0 col-lg-1"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Caravan3;