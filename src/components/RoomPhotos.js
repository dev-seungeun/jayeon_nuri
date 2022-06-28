import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { openImageModal } from "../App";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "../App.css";
import "../css/room.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

function RoomPhotos(imgData) {

    const [mobilePhotos, setMobilePhotos] = useState(null);
    const [pcPhotos, setPcPhotos] = useState();

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        handleResize();

        const mobile = imgData.map((imgSrc, index) => {
            return ( <img key={"mobile_photo_"+index} src={imgSrc} /> )
        });
        setMobilePhotos(mobile);

        const pc = imgData.map((imgSrc, index) => {
            return (
                <img key={"pc_photo_"+index} src={imgSrc} />
            )
        });
        setPcPhotos(pc);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    const handleResize = (e) => {
        var innerWidth = window.innerWidth;
        if(innerWidth > 1000) {
            document.getElementById("pcCarousel").style.display = "inline-block";
            document.getElementById("mobileCarousel").style.display = "none";
        }else {
            document.getElementById("pcCarousel").style.display = "none";
            document.getElementById("mobileCarousel").style.display = "inline-block";
        }
    }

    return (
        <>
            <div id="room_image_wrap">

                <div id="pcCarousel" style={{width:"100%", display:"none"}}>
                    <Carousel autoPlay interval="5000" transitionTime="500">
                        {pcPhotos}
                    </Carousel>
                </div>

                <div id="mobileCarousel" style={{display:"none"}}>
                    <div className="tz-gallery">
                        {mobilePhotos}
                    </div>
                </div>

            </div>
        </>
    );
}

export default RoomPhotos;