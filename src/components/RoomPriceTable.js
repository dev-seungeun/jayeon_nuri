import React, {useEffect, useState} from 'react';
import { getEtcInfoJson } from "../components/FetchData";
import "../css/room.css";

const max_width = 600;

function RoomPriceTable(props) {

    const [grilledPrice, setGrilledPrice] = useState();
    const [addPersonPrice, setAddPersonPrice] = useState();

    const [isMobile, setIsMobile] = useState();
    const [isAllPrice, setIsAllPrice] = useState();

    const [priceRowPC, setPriceRowPC] = useState();
    const [priceRowMobile, setPriceRowMobile] = useState();
    const [priceOffMobile, setPriceOffMobile] = useState();
    const [priceSemiPeakMobile, setPriceSemiPeakMobile] = useState();
    const [pricePeakMobile, setPricePeakMobile] = useState();
    const [priceHighPeakMobile, setPriceHighPeakMobile] = useState();

    const handleResize = (e) => {
        if(window.innerWidth >= max_width) {
            setIsMobile(false);
        }else {
            setIsMobile(true);
        }
    }

    useEffect(()=>{

        setGrilledPrice(getEtcInfoJson().grilled);
        setAddPersonPrice(getEtcInfoJson().add_person);

        setIsMobile(window.innerWidth >= max_width ? false : true);
        window.addEventListener("resize", handleResize);

        setIsAllPrice(Object.keys(props.priceDataMap)[0] == "title" ? false : true);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[])

    useEffect(()=>{

        const priceDataMap = props.priceDataMap;

        if(isAllPrice == true) {

            const pricePC = Object.keys(priceDataMap).map((roomName, index) => {
                return (
                    <tr key={"price_data_" + index}>
                        {isAllPrice && <td>{priceDataMap[roomName].title}</td>}
                        {isAllPrice && <td>{priceDataMap[roomName].people}</td>}
                        <td>{priceDataMap[roomName].off_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap[roomName].off_season.weekend.toLocaleString()}</td>
                        <td>{priceDataMap[roomName].semi_peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap[roomName].semi_peak_season.weekend.toLocaleString()}</td>
                        <td>{priceDataMap[roomName].peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap[roomName].peak_season.weekend.toLocaleString()}</td>
                        <td>{priceDataMap[roomName].high_peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap[roomName].high_peak_season.weekend.toLocaleString()}</td>
                    </tr>
                )
            });
            setPriceRowPC(pricePC);

            const priceMobile = Object.keys(priceDataMap).map((roomName, index) => {
                return (
                    <tr key={"price_data_"+index}>
                        <td>{priceDataMap[roomName].title}</td>
                        <td style={{minWidth:"50px"}}>{priceDataMap[roomName].people}</td>
                        <td>
                            <div className="weekday">{priceDataMap[roomName].off_season.weekday.toLocaleString()}</div>
                            <div className="weekend">{priceDataMap[roomName].off_season.weekend.toLocaleString()}</div>
                        </td>
                        <td>
                            <div className="weekday">{priceDataMap[roomName].semi_peak_season.weekday.toLocaleString()}</div>
                            <div className="weekend">{priceDataMap[roomName].semi_peak_season.weekend.toLocaleString()}</div>
                        </td>
                        <td>
                            <div className="weekday">{priceDataMap[roomName].peak_season.weekday.toLocaleString()}</div>
                            <div className="weekend">{priceDataMap[roomName].peak_season.weekend.toLocaleString()}</div>
                        </td>
                        <td>
                            <div className="weekday">{priceDataMap[roomName].high_peak_season.weekday.toLocaleString()}</div>
                            <div className="weekend">{priceDataMap[roomName].high_peak_season.weekend.toLocaleString()}</div>
                        </td>
                    </tr>
                )
            });
            setPriceRowMobile(priceMobile);

        }else if(isAllPrice == false) {

            // PC
            const pricePC = [priceDataMap].map((data, index) => {
                return (
                    <tr key={"price_data_" + index}>
                        {isAllPrice && <td>{priceDataMap.title}</td>}
                        {isAllPrice && <td>{priceDataMap.people}</td>}
                        <td>{priceDataMap.off_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.off_season.weekend.toLocaleString()}</td>
                        <td>{priceDataMap.semi_peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.semi_peak_season.weekend.toLocaleString()}</td>
                        <td>{priceDataMap.peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.peak_season.weekend.toLocaleString()}</td>
                        <td>{priceDataMap.high_peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.high_peak_season.weekend.toLocaleString()}</td>
                    </tr>
                )
            });
            setPriceRowPC(pricePC);


            // mobile
            const priceOff = [priceDataMap].map((data, index) => {
                return (
                    <tr key={"price_off_" + index}>
                        <td>{priceDataMap.off_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.off_season.weekend.toLocaleString()}</td>
                    </tr>
                )
            });
            setPriceOffMobile(priceOff);

            const priceSemiPeak = [priceDataMap].map((data, index) => {
                return (
                    <tr key={"price_semi_peak_" + index}>
                        <td>{priceDataMap.semi_peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.semi_peak_season.weekend.toLocaleString()}</td>
                    </tr>
                )
            });
            setPriceSemiPeakMobile(priceSemiPeak);

            const pricePeak = [priceDataMap].map((data, index) => {
                return (
                    <tr key={"price_peak_" + index}>
                        <td>{priceDataMap.peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.peak_season.weekend.toLocaleString()}</td>
                    </tr>
                )
            });
            setPricePeakMobile(pricePeak);

            const priceHighPeak = [priceDataMap].map((data, index) => {
                return (
                    <tr key={"price_high_peak_" + index}>
                        <td>{priceDataMap.high_peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.high_peak_season.weekend.toLocaleString()}</td>
                    </tr>
                )
            });
            setPriceHighPeakMobile(priceHighPeak);


            document.querySelectorAll(".add_wrap").forEach((el)=>{
                el.style.position = "relative";
                el.style.top = "0px";
            })

        }

    },[isAllPrice])

    return (
        <>
            <div className="add_wrap">
                {!isAllPrice && <div className="price_title">????????????</div>}
                {isAllPrice && <div className="info_title">????????????</div>}

                {!isMobile &&
                <div id="room_price">
                    <table cellSpacing="1" cellPadding="8">
                        <tbody>
                        <tr>
                            {isAllPrice && <th rowSpan="2">?????????</th>}
                            {isAllPrice && <th rowSpan="2">??????</th>}
                            <th colSpan="2">?????????</th>
                            <th colSpan="2">????????????</th>
                            <th colSpan="2">?????????</th>
                            <th colSpan="2">????????????</th>
                        </tr>
                        <tr>
                            <th className="room_bold">??????</th>
                            <th className="room_bold">??????(???,???)</th>
                            <th className="room_bold">??????</th>
                            <th className="room_bold">??????(???,???)</th>
                            <th className="room_bold">??????</th>
                            <th className="room_bold">??????(???,???)</th>
                            <th className="room_bold">??????</th>
                            <th className="room_bold">??????(???,???)</th>
                        </tr>
                        {priceRowPC}
                        </tbody>
                    </table>
                    <div className="add_price"> ?????? ???????????? (7??? ??????) : {addPersonPrice && addPersonPrice.toLocaleString()}??? </div>
                    <div className="add_price" style={{color:"orangered"}}> ?????? ?????? : 4????????? {grilledPrice && grilledPrice.toLocaleString()}??? </div>
                </div>
                }


                {isMobile && !isAllPrice &&
                <div id="room_price">
                    <table cellSpacing="1" cellPadding="8">
                        <tbody>
                        <tr>
                            <th colSpan="2">?????????</th>
                        </tr>
                        <tr>
                            <th className="room_bold" style={{width: "50%"}}>??????</th>
                            <th className="room_bold">??????(???,???)</th>
                        </tr>
                        { priceOffMobile }
                        <tr>
                            <th colSpan="2">????????????</th>
                        </tr>
                        <tr>
                            <th className="room_bold" style={{width: "50%"}}>??????</th>
                            <th className="room_bold">??????(???,???)</th>
                        </tr>
                        { priceSemiPeakMobile }
                        <tr>
                            <th colSpan="2">?????????</th>
                        </tr>
                        <tr>
                            <th className="room_bold" style={{width: "50%"}}>??????</th>
                            <th className="room_bold">??????(???,???)</th>
                        </tr>
                        { pricePeakMobile }
                        <tr>
                            <th colSpan="2">????????????</th>
                        </tr>
                        <tr>
                            <th className="room_bold" style={{width: "50%"}}>??????</th>
                            <th className="room_bold">??????(???,???)</th>
                        </tr>
                        { priceHighPeakMobile }
                        </tbody>
                    </table>
                    <div className="add_price"> ?????? ???????????? (7??? ??????) : {addPersonPrice && addPersonPrice.toLocaleString()}??? </div>
                    <div className="add_price" style={{color:"orangered"}}> ?????? ?????? : 4????????? {grilledPrice && grilledPrice.toLocaleString()}??? </div>
                </div>
                }


                {isMobile && isAllPrice &&
                <div id="room_price">
                    <table cellSpacing="1" cellPadding="8">
                        <tbody>
                        <tr>
                            <th>?????????</th>
                            <th>??????</th>
                            <th>?????????</th>
                            <th>????????????</th>
                            <th>?????????</th>
                            <th>????????????</th>
                        </tr>
                        {priceRowMobile}
                        </tbody>
                    </table>
                    <div className="price_color"> <span className="weekday">* ????????????</span> <span className="weekend">&nbsp;&nbsp;* ??????(???,???) ??????</span> </div>
                    <div className="add_price"> ?????? ???????????? (7??? ??????) : {addPersonPrice && addPersonPrice.toLocaleString()}??? </div>
                    <div className="add_price" style={{color:"orangered"}}> ?????? ?????? : 4????????? {grilledPrice && grilledPrice.toLocaleString()}??? </div>
                </div>
                }
            </div>
        </>
    );
}

export default RoomPriceTable;
