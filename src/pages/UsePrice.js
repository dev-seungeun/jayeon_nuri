import React, {useEffect} from 'react';
import { getPriceData as getPriceDataRoom1 } from "./Room1";
import { getPriceData as getPriceDataRoom5 } from "./Room5";
import { getPriceData as getPriceDataCaravan1 } from "./Caravan1";
import { getPriceData as getPriceDataCaravan2 } from "./Caravan2";
import { getPriceData as getPriceDataCaravan3 } from "./Caravan3";
import { getPriceData as getPriceDataCaravan4 } from "./Caravan4";
import RoomPriceTable from "../components/RoomPriceTable";
import "../App.css";
import "../css/use_price.css";

function UsePrice(props) {

    var priceData = [
        getPriceDataRoom1(),
        getPriceDataRoom5(),
        getPriceDataCaravan1(),
        getPriceDataCaravan2(),
        getPriceDataCaravan3(),
        getPriceDataCaravan4()
    ]

    useEffect(() => {
        document.querySelector(".add_wrap").style.position = "relative";
        document.querySelector(".add_wrap").style.top = "-50px";
        document.querySelector(".add_wrap").style.border = "none";
    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf3.jpg?alt=media&token=fe64a929-2712-4ef1-815a-aeccc0d3af9a" />
            </div>

            <div id="use_price_wrap">
                {RoomPriceTable(priceData)}

                <div>
                    취소 및 환불규정

                    당일 취소 : 환불 불가

                    입실일 기준 1 일전 : 취소 위약금 70% | 환불금액 - 결제금액의 30%

                    입실일 기준 2 일전 : 취소 위약금 50% | 환불금액 - 결제금액의 50%

                    이용일 당일 예약 후 당일 취소시 환불이 불가 합니다.
                </div>


                <div>
                    숯불제공은 4인 기준
                    20,000원
                </div>

                <div>
                    성수기 기간 (2021년)
                    7월 23일 ~ 7월 29일
                    8월 8일 ~ 8월 31일


                    극 성수기 기간 (2021년)
                    7월 30일 ~ 8월 7일
                </div>

                <div>
                    예약 후 전액 입금 하셔야 예약이 완료됩니다. 24시간이 지나면 취소될 수 있습니다!!
                    예약전화 : 010-4382-0056
                    예약계좌 : [농협] 351-7557-4935-03 (예금주 정정희)
                    입금은 꼭 예약자명으로 해주세요~ 만약 입금자명이 다를 경우 꼭 전화주세요
                </div>
            </div>
        </>
    );
}

export default UsePrice;