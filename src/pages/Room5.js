import React, {useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

function Room5(props) {

    var imgData = [
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F1.jpg?alt=media&token=6fad9d14-e849-4f7c-8cc8-5f43e6159210",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F2.jpg?alt=media&token=6713011d-45e3-4553-a98f-1da6c02a2d3f",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F3.jpg?alt=media&token=1e85cc43-c7a4-4b33-8c62-531520fdc666",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F4.jpg?alt=media&token=e6a62a3d-d6a2-4364-8bfd-25935374cf30",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F5.jpg?alt=media&token=1e3d0fee-fc58-480e-a76f-c58d76449bdd",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F6.jpg?alt=media&token=ea2d6443-ea5e-4202-85b6-3980893e3ad7",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F7.jpg?alt=media&token=a4593a8f-9308-46e0-9106-7b986419ebce",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F8.jpg?alt=media&token=7022d980-db56-41eb-883b-a498ad02cfe0",
        "https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Froom%2Froom5%2F9.jpg?alt=media&token=8c5954e8-971f-4b4c-b848-53788f75c6c3"
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

            <div id="room_title"><FcLike />&nbsp;객실 5,6 호&nbsp;<FcLike /></div>

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
                            <div className="col-sm-12 col-lg-6 col-xl-6">
                                <img src={getImage(3)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-3 col-xl-3">
                                <img src={getImage(4)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-3 col-xl-3">
                                <img src={getImage(5)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <img src={getImage(6)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img src={getImage(7)} onClick={openImageModal} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-0 col-lg-3"></div>
                            <div className="col-sm-12 col-lg-6">
                                <img src={getImage(8)} onClick={openImageModal} />
                            </div>
                            <div className="col-sm-0 col-lg-3"></div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Room5;