import React, {useEffect} from 'react';
import KakaoMapScript from "../components/KakaoMapScript";
import "../App.css";
import "../css/way_to_com.css";

function WayToCome(props) {

    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf1.jpg?alt=media&token=cac64197-4772-4c8e-8e0f-637d7a914e02" />
            </div>

            <div id="map_wrap">
              <div id='map' style={{ margin: "0 auto" }}></div>
            </div>
        </>
    );
}

export default WayToCome;
