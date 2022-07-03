import React from 'react';
import {openImageModal} from "../App";
import "../css/around.css";
import "../css/common.css";
import "../css/fluid-gallery.css";

function Around(props) {

    return (
        <>
            <div className="top_img">
                <img src="/main/top/leaf2.jpg" />
            </div>

            <div id="around_wrap">
                <div className="add_wrap">

                    <div className="info_title">소백산 자락길</div>
                    <div className="info_cont">
                        소백산 물길 따라 쭉 이어진 2.5km 자락길이에요~ 출발점이 자연누리에서 자동차로 1분 거리랍니다^^
                        <br/>
                        중간중간 음수대가 있고, 약수물이 있어 따로 물을 준비하지 않아도 돼요^^
                        <br/>
                        또, 무릎이 안좋으신 분들을 위한 지팡이도 준비되어 있어요~
                        <br/><br/>

                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/jarak1.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/jarak2.jpg" onClick={openImageModal} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/jarak3.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/jarak4.jpg" onClick={openImageModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">무섬마을</div>
                    <div className="info_cont">
                        영주 무섬마을 맑고 투명한 강물위에 통나무를 반으로 자른 외나무 다리가 있어
                        <br/>
                        스릴넘치는 추억쌓기에 안성맞춤인 곳 이에요^^
                        <br/>
                        강물 깊이가 야트막하고 바닥은 고운모래여서 애기들이 놀기에도 좋은 곳 이랍니다!
                        <br/><br/>

                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/musum1.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">금계호</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/geumgyeho1.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/geumgyeho2.jpg" onClick={openImageModal} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-4 col-xl-4">
                                    <img src="/main/around/around/geumgyeho3.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4 col-xl-4">
                                    <img src="/main/around/around/geumgyeho4.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4 col-xl-4">
                                    <img src="/main/around/around/geumgyeho5.jpg" onClick={openImageModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">금계호 옆 산책로</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-2 col-xl-2">
                                    <img src="/main/around/around/geumgyehowalk1.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-5 col-xl-5">
                                    <img src="/main/around/around/geumgyehowalk2.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-5 col-xl-5">
                                    <img src="/main/around/around/geumgyehowalk4.jpg" onClick={openImageModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">금선정</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/geumsunjung.png" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">선비촌</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/sunbi2.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/sunbi1.jpg" onClick={openImageModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">부석사</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/busuksa.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">소백산 철쭉</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/sobaekflower.JPG" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">소수서원</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/sosu.jpg" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_wrap">
                    <div className="info_title">풍기온천</div>
                    <div className="info_cont">
                        <div className="tz-gallery">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-3 col-xl-3"></div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="/main/around/around/onchun.png" onClick={openImageModal} />
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

export default Around;