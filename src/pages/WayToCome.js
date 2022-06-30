import React, {useEffect} from 'react';
import KakaoMapScript from "../components/KakaoMapScript";
import "../css/way_to_come.css";
import "../css/common.css";

function WayToCome(props) {

    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf1.jpg?alt=media&token=cac64197-4772-4c8e-8e0f-637d7a914e02" />
            </div>

            <div id="way_wrap">

                <div className="add_wrap">
                    <div className="info_title">지도</div>
                    <div className="info_cont">
                         <div id="map_wrap">
                            <div className="address">경상북도 영주시 풍기읍 삼가로 288 [소백산 자연누리펜션]</div>
                            <br/>
                            <div className="hrr"/><br/>
                            <div id='map'></div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">기차 <span className="orangered">&nbsp;KTX-이음(중앙선) 개통</span></div>
                    <div className="info_cont">
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="time_title" colSpan="2">기차별 소요시간 (청량리 - 풍기)</th>
                                    </tr>
                                    <tr>
                                        <th>기차</th>
                                        <th>소요시간</th>
                                    </tr>
                                    <tr>
                                        <td>KTX-이음<br/>(주중 3회 운행, 주말 4회 운행)</td>
                                        <td>1시간 36분</td>
                                    </tr>
                                    <tr>
                                        <td>무궁화호<br/>(1일 2회 운행)</td>
                                        <td>2시간 2분 ~ 2시간 7분</td>
                                    </tr>
                                    <tr>
                                        <td>누리로<br/>(1일 2회 운행)</td>
                                        <td>2시간 23분 ~ 2시간 26분</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">마을버스 26번 (안정-풍기-항공고)</div>
                    <div className="info_cont">
                        <table>
                            <tbody>
                                <tr>
                                    <th className="time_title" colSpan="7"><span className="orangered">풍기역</span> - 삼가리(하차 지점) : 10분 정도 소요</th>
                                </tr>
                                <tr>
                                    <td>영주 버스 출발 시각<br/>(영주 - 풍기역 : 20~30분 소요)</td>
                                    <td>7:30</td>
                                    <td>8:25</td>
                                    <td>9:30</td>
                                    <td>13:20</td>
                                    <td>15:10</td>
                                    <td>18:00</td>
                                </tr>
                                <tr>
                                    <td><span className="orangered">풍기역</span> 버스 탑승 예상 시각<br/>(교통상황에 따라 달라질 수 있습니다)</td>
                                    <td>7:50</td>
                                    <td>8:45</td>
                                    <td>9:50</td>
                                    <td>13:40</td>
                                    <td>15:30</td>
                                    <td>18:20</td>
                                </tr>
                            </tbody>
                        </table>
                        <br/><br/>

                        <div className="text_center">
                          <div style={{fontWeight: "800"}}>승차 정류소 (풍기역) 위치</div>
                          <br/>
                          <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fway_to_come%2Fstation_bus_stop_map.png?alt=media&token=5db39d93-2fd8-49e5-a6ad-6ad6ae5fde6f" />
                          <br/><br/><br/>
                          <div style={{fontWeight: "800"}}>하차 정류소 (삼가리-삼가교 입구 방면) 위치</div>
                          <br/>
                          <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fway_to_come%2Fbus_stop_map.png?alt=media&token=eb124ba8-b071-412f-8c6b-c6bd5a377709" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default WayToCome;
