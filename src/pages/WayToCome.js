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
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjQ1/MDAxNjU2ODM5NjUxNTcx.mzkExMxX01lwaBe7vA-GqMJBbQsXlQCBOxWglZ-pJWkg.ZNCAZR8qTizHKH0pvZYjQigYTaZZXVvCDPIAMIqrxBQg.JPEG.bse14/leaf1.jpg?type=w966" />
            </div>

            <div id="way_wrap">

                <div className="add_wrap">
                    <div className="info_title">지도</div>
                    <div className="info_cont">
                         <div id="map_wrap">
                            <div className="address">경상북도 영주시 풍기읍 삼가로 288<br/>[소백산 자연누리펜션]</div>
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
                                    <td><span className="orangered">풍기역<br/></span> 버스 탑승 예상 시각<br/>(교통상황에 따라 달라질 수 있습니다)</td>
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
                          <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTI1/MDAxNjU2ODQxMDc0NzE3.HR91OF6_8BZMZ_H0xf2ttO6qPky3rS4-xoxZCsdxAqYg.k9fwoJ6hJ4x0eoHNXtXbd0O4QDScoYqYjypXii3Z0AAg.PNG.bse14/station_bus_stop_map.png?type=w966" />
                          <br/><br/><br/>
                          <div style={{fontWeight: "800"}}>하차 정류소 (삼가리-삼가교 입구 방면) 위치</div>
                          <br/>
                          <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjIz/MDAxNjU2ODQxMDc0Njk3.R1yQs2F_raPIbjpJsVD22X3B3jr92FR6ggGhN6_5L-og.tlSdNyGhM5wg6Nrh6nkTNtB55J5iHLRtgzAIzU6DeTYg.PNG.bse14/bus_stop_map.png?type=w966" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default WayToCome;
