import React from 'react';
import "../App.css";
import "../css/room.css";

function TermsOfUse(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf3.jpg?alt=media&token=fe64a929-2712-4ef1-815a-aeccc0d3af9a" />
            </div>

            <div className="add_wrap">

                <div className="is_all_price_title">예약시 체크리스트</div>
                <div>
                    - 입실퇴실 시간 : 입실 PM 02:00 / 퇴실 AM11시
                    - 바베큐 숯불/그릴이용 : 2인기준 15,000원
                </div>


                <div className="is_all_price_title">유의 사항</div>
                <div>
                    - 저희 Shining펜션에서는 애완견 동반입실이 불가능합니다.
                    - 미성년자들끼리의 예약,입실이 안됩니니다. 반드시 보호자와 입실해야 합니다.
                    - 건물내의 복도에서는 금연을 해야하며, 실내에서는 고기나 생선, 튀김류의 요리를 해서는 안됩니다.
                    - 집기나 가구를 파손하셨을 경우 펜션지기에게 알려주세요
                </div>
            </div>

        </>
    );
}

export default TermsOfUse;