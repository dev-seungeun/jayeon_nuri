import React, {useEffect} from 'react';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from "react-responsive-carousel";

function Caravan2(props) {

    var imgData = [
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F1.jpg?alt=media&token=bb7f3f28-b587-4b16-a74d-cbe45c5eaed3",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F2.jpg?alt=media&token=4ad65fa4-3252-4d52-8eae-322b4e1de1d9",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F3.JPG?alt=media&token=b099f7bd-9bb9-492d-9f74-2b8e4a8e4384",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F4.JPG?alt=media&token=bc1f6f0a-9829-4006-9240-eaa02030decb",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F5.JPG?alt=media&token=58ba8a7d-893e-4bb8-b285-7a5f3db781ee",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F6.JPG?alt=media&token=e3d666b0-a6a2-4bb1-abde-731410c4d405",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F7.JPG?alt=media&token=fa258413-af42-4b23-9bb0-4f45de60affd",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F8.JPG?alt=media&token=d09c6ca5-e6fe-492b-b0fe-22c436b14e34",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F9.jpg?alt=media&token=b5603186-fd4f-4ec2-8ef2-aa6588535747",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F10.jpg?alt=media&token=1ecdfd3c-d904-42ba-af59-8e25713cebf7",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Fcaravan2%2F11.jpg?alt=media&token=1dac1387-72b8-4508-af73-36c4e0f75752"
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

            <div id="room_title"><FcLikePlaceholder />&nbsp;카라반 2호&nbsp;<FcLikePlaceholder /></div>

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
                            <div className="col-sm-12 col-lg-6">
                                <img src={getImage(0)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src={getImage(1)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(2)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(3)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(4)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(5)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(6)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(7)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(8)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(9)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img src={getImage(10)} onClick={openImageModal} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Caravan2;