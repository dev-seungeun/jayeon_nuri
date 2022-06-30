import React, {useEffect, useState} from 'react';
import { getEtcInfoJson } from "../components/FetchData";
import "../css/terms_of_use.css";
import "../css/common.css";

function TermsOfUse(props) {

    const [grilledPrice, setGrilledPrice] = useState();
    const [addPersonPrice, setAddPersonPrice] = useState();

    useEffect(() => {

        setGrilledPrice(getEtcInfoJson().grilled);
        setAddPersonPrice(getEtcInfoJson().add_person);

    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf3.jpg?alt=media&token=fe64a929-2712-4ef1-815a-aeccc0d3af9a" />
            </div>

            <div id="terms_wrap">
                <div className="add_wrap">

                    <div className="info_title">유의 사항</div>
                    <div className="info_cont">
                        - 입실 시간은 <span className="orangered">오후 2시 이후</span>, 퇴실 시간은 <span className="orangered">오전 11시</span>까지 입니다. (앞뒤 손님이 없을 시 조정가능 합니다^^)
                        <br/><br/>
                        - 풍기 기차역에서 픽업가능합니다~^^
                        <br/><br/>
                        - 각 호실 마다 객실 바로 앞에 개별 바베큐 시설 완비되어있습니다! (따뜻한 화목난로가 설치되어있는 별도의 바베큐장도 있습니다)
                        <br/><br/>
                        - 4세 이상부터는 추가인원에 해당되며, 또한 숙박을 하지 않더라도 추가 인원에 해당 됩니다. (추가요금 : 1인 <span className="orangered">{addPersonPrice && addPersonPrice.toLocaleString()}원</span>)
                        <br/><br/>
                        - 혹시라도 물건이 파손 되었을 시, 주저하지 마시고 저희에게 말씀해 주세요~
                        <br/><br/>
                        - 객실 내에서는 흡연을 금하며, 생선이나 육류를 구울 수도 없습니다. (화재 및 냄새로 인한 다음손님 배려 차원입니다.)
                        <br/><br/>
                        - 다른 손님을 위해서 객실 내 고성방가도 삼가주시면 감사하겠습니다^^
                        <br/><br/>
                        - 애완동물은 타 객실 손님과 다음날에 이용하실 손님들을 위하여 동반을 금합니다!!
                        <br/><br/>
                        - 미성년자들끼리의 예약,입실이 안됩니니다. 반드시 보호자와 입실해야 합니다.
                        <br/><br/>
                        - 숯불이용 (4인기준) : <span className="orangered">{grilledPrice && grilledPrice.toLocaleString()}원</span>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TermsOfUse;
