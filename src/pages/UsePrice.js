import React, {useEffect, useState} from 'react';
import { getPriceJson, getEtcInfoJson } from "../components/FetchData";
import RoomPriceTable from "../components/RoomPriceTable";
import "../App.css";
import "../css/use_price.css";
import "../css/room.css";

function UsePrice(props) {

    const [priceJson, setPriceJson] = useState();
    const [season, setSeason] = useState();

    useEffect(() => {

        setPriceJson(getPriceJson());
        setSeason(getEtcInfoJson().season);

        // document.querySelectorAll(".add_wrap").forEach(function(el) {
        //     el.style.position = "relative";
        //     el.style.top = "-20px";
        //     el.style.border = "none";
        //     el.style.marginBottom = "50px";
        //     el.style.padding = "0px";
        // });
    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf3.jpg?alt=media&token=fe64a929-2712-4ef1-815a-aeccc0d3af9a" />
            </div>

            <div id="use_price_wrap">
                {priceJson && <RoomPriceTable priceDataMap={priceJson} />}


                <div className="add_wrap">
                    <div className="is_all_price_title">환불규정</div>

                    <div className="use_cont">
                        · 당일 취소 : <span style={{color:"red"}}>환불 불가</span>
                        <br/>
                        · 입실일 기준 1 일전 - 취소 위약금 : <span style={{color:"red"}}>70%</span>, 환불금액 : <span style={{color:"red"}}>30%</span>
                        <br/>
                        · 입실일 기준 2 일전 - 취소 위약금 : <span style={{color:"red"}}>50%</span>, 환불금액 : <span style={{color:"red"}}>50%</span>
                        <br/>
                        · 이용일 당일 예약 후 <span style={{color:"red"}}>당일 취소시 환불이 불가</span> 합니다.
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="is_all_price_title">성수기 안내 { season && "("+season.year+")" }</div>

                    <div className="use_cont">
                        · 성수기 기간&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - { season && season.peak }
                        <br/>
                        · 극성수기 기간&nbsp; - { season && season.high_peak }
                        <br/>
                        · 공휴일 전날은 주말요금이 적용됩니다.
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="is_all_price_title">예약 완료 기준</div>

                    <div className="use_cont">
                        · 예약 후 전액 입금 하셔야 예약이 완료됩니다. 24시간이 지나면 취소될 수 있습니다.
                        <br/>
                        · 입금은 꼭 예약자명으로 해주세요~ 만약 입금자명이 다를 경우 꼭 전화주세요
                        <br/>
                        · 예약전화 - 010-4382-0056
                        <br/>
                        · 예약계좌 - [농협] 351-7557-4935-03 (예금주 정정희)
                    </div>
                </div>

            </div>
        </>
    );
}

export default UsePrice;
