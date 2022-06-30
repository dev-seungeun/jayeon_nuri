import React from 'react';
import "../css/mountain.css";
import "../css/common.css";
import "../css/fluid-gallery.css";
import {openImageModal} from "../App";

function Mountain(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf2.jpg?alt=media&token=cc7772eb-ce5b-4d35-8d51-1732b09a73a7" />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Fmountain%2Fsamgadong.jpg?alt=media&token=f13e06c9-c0de-498e-ab66-e34c5db5d7fd" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Fmountain%2Fyu.jpg?alt=media&token=5d1d40f6-ccb2-453b-ba91-5c7cd10f1260" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Fmountain%2Fchundong.jpg?alt=media&token=b794c9f4-49e2-4625-9f23-3f37af02aba7" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Fmountain%2Fjuckryung.JPG?alt=media&token=53dc9aee-39d7-4b70-b4fb-87e328310974" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Fmountain%2Fdosolbong.JPG?alt=media&token=b2eaa1cc-f88b-4207-9e2a-5956d071f4d3" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Fmountain%2Fbackdu2.JPG?alt=media&token=02945d18-5547-4ff6-bf2c-8eff31bbbd8e" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Fmountain%2Fbackdu3.JPG?alt=media&token=a8cabf86-7a85-4604-8959-2429cdf8b6a3" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Fmountain%2Fchundong_gyegok.JPG?alt=media&token=d01fba10-3524-4a5e-8bae-2f4c160cba31" onClick={openImageModal} />
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