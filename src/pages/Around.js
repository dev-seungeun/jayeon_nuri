import React from 'react';
import {openImageModal} from "../App";
import "../css/around.css";
import "../css/common.css";
import "../css/fluid-gallery.css";

function Around(props) {

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf2.jpg?alt=media&token=cc7772eb-ce5b-4d35-8d51-1732b09a73a7" />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fjarak1.jpg?alt=media&token=0ef78cc6-a0c0-40df-a277-0f95f94e2057" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fjarak2.jpg?alt=media&token=78c334a2-e50f-46d5-becc-cc10074bfbe5" onClick={openImageModal} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fjarak3.jpg?alt=media&token=a52d5b87-f871-4e8b-adbe-23ee59dbc1ac" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fjarak4.jpg?alt=media&token=a0b4e876-f66c-4ce0-b433-79cc0a3c3b40" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fmusum1.jpg?alt=media&token=406a37b7-8d79-4836-8ef1-1c87047c1a63" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumgyeho1.jpg?alt=media&token=d1be38b6-64f5-4264-b72f-63aebb783872" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumgyeho2.jpg?alt=media&token=3ef2d776-5a15-4448-906c-b5152b5762e6" onClick={openImageModal} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-4 col-xl-4">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumgyeho3.jpg?alt=media&token=cdfdb942-fc23-4785-9149-0fc0a3f9e811" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4 col-xl-4">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumgyeho4.jpg?alt=media&token=e9dfe902-2b0c-4ba8-810d-2ead84a3335a" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4 col-xl-4">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumgyeho5.jpg?alt=media&token=46cf7d18-2768-43cd-9073-e7a615fabdcf" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumgyehowalk1.jpg?alt=media&token=21c97137-3f36-4403-afd3-3236a1530845" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-5 col-xl-5">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumgyehowalk2.jpg?alt=media&token=dc4de57d-790d-418c-a862-df2b9c7beef5" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-5 col-xl-5">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumgyehowalk4.jpg?alt=media&token=36b43f0f-2ea7-4440-b319-967c678e8fa0" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fgeumsunjung.png?alt=media&token=ae4bc93b-523e-4ef5-aa0b-a1daa0da6ac5" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fbusuksa.jpg?alt=media&token=bfed1632-4e31-4b1d-bddb-8fc2971fdee5" onClick={openImageModal} />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fsunbi2.jpg?alt=media&token=f9c33c73-0189-4f37-8405-48628f7adb5b" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fbusuksa.jpg?alt=media&token=bfed1632-4e31-4b1d-bddb-8fc2971fdee5" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fsobaekflower.JPG?alt=media&token=e99b992b-f879-401b-9274-622630daa14c" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fsosu.jpg?alt=media&token=54bbf01a-7c8b-462a-8c5c-a91b296e455e" onClick={openImageModal} />
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
                                    <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Faround%2Faround%2Fonchun.png?alt=media&token=02a580c9-38fd-49e1-96a9-c2c750184f2b" onClick={openImageModal} />
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