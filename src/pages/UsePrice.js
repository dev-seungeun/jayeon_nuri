import React, {useEffect, useState} from 'react';
import { getPriceJson, getEtcInfoJson } from "../components/FetchData";
import RoomPriceTable from "../components/RoomPriceTable";
import "../css/use_price.css";
import "../css/common.css";

function UsePrice(props) {

    const [priceJson, setPriceJson] = useState();
    const [season, setSeason] = useState();

    useEffect(() => {

        setPriceJson(getPriceJson());
        setSeason(getEtcInfoJson().season);

    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfNjIg/MDAxNjU2ODM5NjUxOTAy.l9pawtssymJlNIadtL2Q3GgTzsR1h0Soq3YCemlfyXQg.9PmcC-AXy1Bi4AFKOO34HB0zzjhenIqNbODd83r4QBcg.JPEG.bse14/leaf3.jpg?type=w966" />
            </div>

            <div id="use_price_wrap">
                {priceJson && <RoomPriceTable priceDataMap={priceJson} />}


                <div className="add_wrap">
                    <div className="info_title">환불규정</div>

                    <div className="info_cont">
                        · 당일 취소 : <span className="orangered">환불 불가</span>
                        <br/>
                        · 입실일 기준 1 일전 - 취소 위약금 : <span className="orangered">70%</span>, 환불금액 : <span className="orangered">30%</span>
                        <br/>
                        · 입실일 기준 2 일전 - 취소 위약금 : <span className="orangered">30%</span>, 환불금액 : <span className="orangered">70%</span>
                        <br/>
                        · 입실일 기준 3 ~ 6 일전 - 취소 위약금 : <span className="orangered">20%</span>, 환불금액 : <span className="orangered">80%</span>
                        <br/>
                        · 입실일 기준 7 일전 - 취소 위약금 : <span className="orangered">10%</span>, 환불금액 : <span className="orangered">90%</span>
                        <br/>
                        · 이용일 당일 예약 후 <span className="orangered">당일 취소시 환불이 불가</span> 합니다.
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">성수기 안내 <span className="orangered">{ season && "("+season.year+")" }</span></div>

                    <div className="info_cont">
                        · 준성수기 기간&nbsp; - { season && season.semi_peak }
                        <br/>
                        · 성수기 기간&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - { season && season.peak }
                        <br/>
                        · 극성수기 기간&nbsp; - { season && season.high_peak }
                        <br/>
                        · 공휴일 전날은 주말요금이 적용됩니다.
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">예약 완료 기준</div>

                    <div className="info_cont">
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
