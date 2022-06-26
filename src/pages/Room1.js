import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

function Room1(props) {

    var imgData = [
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F1.jpg?alt=media&token=c95a8c8b-997d-4c58-93a9-6dbca9d83f2a",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F2.jpg?alt=media&token=5869b9b5-d87d-4516-9145-073fcb43f8f3",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F3.jpg?alt=media&token=8882804f-71ba-4c3b-b009-283221bc34e2",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F4.jpg?alt=media&token=e0e7ad50-48b0-4d8d-aa00-16a37925ed8d",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F5.jpg?alt=media&token=05bb55ff-6d5e-4a9a-8749-87071302fe31",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F6.jpg?alt=media&token=6acd75fd-f572-42e5-998c-8aba9a9cebca",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F7.jpg?alt=media&token=782e1a06-6e5c-4f8a-8a14-f5e16a1a741f",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F8.jpg?alt=media&token=6d0e93d3-43c4-4200-bf84-58ea4d23b2fb",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F9.jpg?alt=media&token=42046a2d-3d99-4cfd-832f-0a01f4b66305",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom1%2F10.jpg?alt=media&token=04934c0c-add8-406a-9501-8abc7ee425ca"
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
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fflower1.jpg?alt=media&token=80e5da73-8f94-4ba6-8777-5513c8ecd379" />
            </div>

            <div id="room_title"><FcLike />&nbsp;객실 1,2,3 호&nbsp;<FcLike /></div>

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
                    </Carousel>
                </div>

                <div id="mobileCarousel" style={{display:"none"}}>
                    <div className="tz-gallery">

                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img
                                    src={getImage(0)}
                                    onClick={openImageModal}/>
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img
                                    src={getImage(1)}
                                    onClick={openImageModal}/>
                            </div>
                            <div className="col-sm-12 col-lg-4 col-xl-4">
                                <img
                                    src={getImage(2)}
                                    onClick={openImageModal}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <img
                                    src={getImage(3)}
                                    onClick={openImageModal}/>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img
                                    src={getImage(4)}
                                    onClick={openImageModal}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <img
                                    src={getImage(5)}
                                    onClick={openImageModal}/>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img
                                    src={getImage(6)}
                                    onClick={openImageModal}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-7">
                                <img
                                    src={getImage(7)}
                                    onClick={openImageModal}/>
                            </div>
                            <div className="col-sm-12 col-lg-5">
                                <img
                                    src={getImage(8)}
                                    onClick={openImageModal}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-0 col-lg-3"></div>
                            <div className="col-sm-12 col-lg-6">
                                <img
                                    src={getImage(9)}
                                    onClick={openImageModal}/>
                            </div>
                            <div className="col-sm-0 col-lg-3"></div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Room1;