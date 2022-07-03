import React from 'react';
import "../css/mountain.css";
import "../css/common.css";
import "../css/fluid-gallery.css";
import {openImageModal} from "../App";

function Mountain(props) {
    return (
        <>
            <div className="top_img">
                <img src="/main/top/leaf2.jpg" />
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
                                    <img src="/main/around/mountain/samgadong.jpg" onClick={openImageModal} />
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
                                    <img src="/main/around/mountain/yu.jpg" onClick={openImageModal} />
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
                                    <img src="/main/around/mountain/chundong.jpg" onClick={openImageModal} />
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
                                    <img src="/main/around/mountain/juckryung.JPG" onClick={openImageModal} />
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
                                    <img src="/main/around/mountain/dosolbong.JPG" onClick={openImageModal} />
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
                                    <img src="/main/around/mountain/backdu2.JPG" onClick={openImageModal} />
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
                                    <img src="/main/around/mountain/backdu3.JPG" onClick={openImageModal} />
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
                                    <img src="/main/around/mountain/chundong_gyegok.JPG" onClick={openImageModal} />
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