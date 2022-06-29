import React, {useEffect, useState} from 'react';
import "../css/room.css";
import "../css/way_to_com.css";

const max_width = 600;

function RoomPriceTable(props) {

    const [isMobile, setIsMobile] = useState();
    const [isAllPrice, setIsAllPrice] = useState();

    const [priceRowPC, setPriceRowPC] = useState();
    const [priceRowMobile, setPriceRowMobile] = useState();
    const [priceOffMobile, setPriceOffMobile] = useState();
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
                        <td>{priceDataMap[roomName].people}</td>
                        <td>
                            <div className="weekday">{priceDataMap[roomName].off_season.weekday.toLocaleString()}</div>
                            <div className="weekend">{priceDataMap[roomName].off_season.weekend.toLocaleString()}</div>
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

            document.querySelector(".add_wrap").style.position = "relative";
            document.querySelector(".add_wrap").style.top = "-20px";
            document.querySelector(".add_wrap").style.marginBottom = "50px";
            document.querySelector(".add_wrap").style.padding = "0px";
            document.querySelector(".add_wrap").style.border = "none";


        }else if(isAllPrice == false) {

            // PC
            const pricePC = [priceDataMap].map((data, index) => {
                return (
                    <tr key={"price_data_" + index}>
                        {isAllPrice && <td>{priceDataMap.title}</td>}
                        {isAllPrice && <td>{priceDataMap.people}</td>}
                        <td>{priceDataMap.off_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.off_season.weekend.toLocaleString()}</td>
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
                    <tr key={"price_peak_" + index}>
                        <td>{priceDataMap.off_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.off_season.weekend.toLocaleString()}</td>
                    </tr>
                )
            });
            setPriceOffMobile(priceOff);

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
                    <tr key={"price_peak_" + index}>
                        <td>{priceDataMap.high_peak_season.weekday.toLocaleString()}</td>
                        <td>{priceDataMap.high_peak_season.weekend.toLocaleString()}</td>
                    </tr>
                )
            });
            setPriceHighPeakMobile(priceHighPeak);
        }

    },[isAllPrice])

    return (
        <>
            <div className="add_wrap">
                {!isAllPrice && <div className="price_title">가격정보</div>}
                {isAllPrice && <div className="is_all_price_title">이용가격</div>}

                {!isMobile &&
                <div id="room_price">
                    <table cellSpacing="1" cellPadding="8">
                        <tbody>
                        <tr>
                            {isAllPrice && <th rowSpan="2">객실명</th>}
                            {isAllPrice && <th rowSpan="2">인원</th>}
                            <th colSpan="2">비수기</th>
                            <th colSpan="2">성수기</th>
                            <th colSpan="2">극성수기</th>
                        </tr>
                        <tr>
                            <th className="room_bold">주중</th>
                            <th className="room_bold">주말(금,토)</th>
                            <th className="room_bold">주중</th>
                            <th className="room_bold">주말(금,토)</th>
                            <th className="room_bold">주중</th>
                            <th className="room_bold">주말(금,토)</th>
                        </tr>
                        {priceRowPC}
                        </tbody>
                    </table>
                    <div className="add_price"> 인당 추가요금 (4세 이상) : 10,000원 </div>
                    <div className="add_price" style={{color:"orangered"}}> 숯불 제공 : 4인기준 20,000원 </div>
                </div>
                }


                {isMobile && !isAllPrice &&
                <div id="room_price">
                    <table cellSpacing="1" cellPadding="8">
                        <tbody>
                        <tr>
                            <th colSpan="2">비수기</th>
                        </tr>
                        <tr>
                            <th className="room_bold" style={{width: "50%"}}>주중</th>
                            <th className="room_bold">주말(금,토)</th>
                        </tr>
                        { priceOffMobile }
                        <tr>
                            <th colSpan="2">성수기</th>
                        </tr>
                        <tr>
                            <th className="room_bold" style={{width: "50%"}}>주중</th>
                            <th className="room_bold">주말(금,토)</th>
                        </tr>
                        { pricePeakMobile }
                        <tr>
                            <th colSpan="2">극성수기</th>
                        </tr>
                        <tr>
                            <th className="room_bold" style={{width: "50%"}}>주중</th>
                            <th className="room_bold">주말(금,토)</th>
                        </tr>
                        { priceHighPeakMobile }
                        </tbody>
                    </table>
                    <div className="add_price"> 인당 추가요금 (4세 이상) : 10,000원 </div>
                    <div className="add_price" style={{color:"orangered"}}> 숯불 제공 : 4인기준 20,000원 </div>
                </div>
                }


                {isMobile && isAllPrice &&
                <div id="room_price">
                    <table cellSpacing="1" cellPadding="8">
                        <tbody>
                        <tr>
                            <th>객실명</th>
                            <th>인원</th>
                            <th>비수기</th>
                            <th>성수기</th>
                            <th>극성수기</th>
                        </tr>
                        {priceRowMobile}
                        </tbody>
                    </table>
                    <div className="price_color"> <span className="weekday">* 주중요금</span> <span className="weekend">&nbsp;&nbsp;* 주말(금,토) 요금</span> </div>
                    <div className="add_price"> 인당 추가요금 (4세 이상) : 10,000원 </div>
                    <div className="add_price" style={{color:"orangered"}}> 숯불 제공 : 4인기준 20,000원 </div>
                </div>
                }
            </div>
        </>
    );
}

export default RoomPriceTable;