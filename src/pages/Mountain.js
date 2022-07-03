import React from 'react';
import "../css/mountain.css";
import "../css/common.css";
import "../css/fluid-gallery.css";
import {openImageModal} from "../App";

function Mountain(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfOTMg/MDAxNjU2ODM5NjUxMjkx.tVNsR_Ft2ttrkCn4r_oM6WGtDPncmWrVhIwvvMuKj1gg.CXfNaVRY3YfC4zx7ZYjcQ3uDpkvXeUOIk23OAjKxENUg.JPEG.bse14/leaf2.jpg?type=w966" />
            </div>

            <div id="mountain_wrap">

                <div className="add_wrap" style={{paddingBottom: "0px"}}>
                    <div className="info_cont">
                        삼가 매표소는 자연누리에서 자동차로 1분 거리 입니다 ^^
                        <br/>
                        삼가 매표소에서 시작하는 등산로는 삼가동 코스, 삼가 어의곡 코스, 삼가천동 코스입니다
                        <br/>
                        그 외 삼가매표소에서 시작하지 않는 다른 코스에는 죽령 코스, 도솔봉 코스, 백두대간 2코스, 백두대간 3코스, 천동계곡 코스가 있습니다
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">삼가동 코스</div>
                    <div className="info_cont text_center">
                        [삼가 매표소 - 비로봉 : 소요시간 3시간]
                        <br/><br/>
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfNzAg/MDAxNjU2ODQwODk0Nzk5.8cnSqXh_UUubpfrEGYGB3JY4_i--1QtDHzKKShQZkDAg.tjshrRbo74M3WgZIUkluPMBEaY9xgCHD72Jn4-DfiUEg.JPEG.bse14/samgadong.jpg?type=w966" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">삼가 어의곡 코스</div>
                    <div className="info_cont text_center">
                        [삼가 매표소 - 어의 매표소 : 소요시간 5시간 10분]
                        <br/><br/>
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjAg/MDAxNjU2ODQwODk0ODMz.-1ow34If2p6xwKGLajcYUsuTF0EH264Q_E7F9_m3A4Ag.lPclS8owBE94z0QYlAGNZCe2KrqpdVRGxuofMJM7Mxkg.JPEG.bse14/yu.jpg?type=w966" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">삼가천동 코스</div>
                    <div className="info_cont text_center">
                        [삼가 매표소 - 천동 매표소 : 소요시간 5시간 20분]
                        <br/><br/>
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfNzkg/MDAxNjU2ODQwODk0NTA4.35gLQpw5_YSJDBkFQ9Ct0Tai-JLA4EEYZtLvxnk5t7Ug.RjKOQD9WmRnVEw5k8GpuD_zcaX4Hn6MaQElUmxERmKcg.JPEG.bse14/chundong.jpg?type=w966" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">죽령 코스</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjUw/MDAxNjU2ODQwODk0Nzc3.tO9h0TAjgYZhDIqbYvWmtmZTEmK0QRGd_8w3_7qBAUkg.JYa4r2f-HmZEAxDNKkBhM4Qvp1_eH5M3bKUWNDPZ5EAg.JPEG.bse14/juckryung.JPG?type=w966" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">도솔봉 코스</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTg4/MDAxNjU2ODQwODk0NTM3.etNtTPlWmEPG9QmJGwUP_EbinuUockwuKmV5u_HvB_4g.gWbeLXNqKSFyIm-BilnttupjVG-tv1Lst8RCi5KY7Gcg.JPEG.bse14/dosolbong.JPG?type=w966" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">백두대간 2코스</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjQy/MDAxNjU2ODQwODk0NTIy.Wu2fEMDTwwmsJSR-CPE3nit3Tdrv42bkz53SNlzMyQkg.s-v5OPeXg7GNZqoIakUVZ1AiRT1L2hGHEP0W_GKfsqMg.JPEG.bse14/backdu2.JPG?type=w966" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">백두대간 3코스</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMzQg/MDAxNjU2ODQwODk0NTI4.SQv_OnOwtiG2Hfs0Yy5jvZtYwvW_0fCazDkLeThSr1Yg.AGD029EnomiytZenISkjidybUJolm8PBQCPxtO4qZdog.JPEG.bse14/backdu3.JPG?type=w966" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">천동계곡 코스</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTQ4/MDAxNjU2ODQwODk0NTM1.OuyGvApEtudm3w5PpL7njL_HmHVziK4qg2R3DRC_Dawg.2gNXtPF4Ruxkm_KOAhhGFX8veiPp3j89QRm3rmMzV9Eg.JPEG.bse14/chundong_gyegok.JPG?type=w966" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </>
    );
}

export default Mountain;