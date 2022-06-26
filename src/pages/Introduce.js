import React from 'react';
import { openImageModal } from "../App";
import { FcCloseUpMode } from "react-icons/fc";
import "../App.css";
import "../css/introduce.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';


function Introduce(props) {
    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fleaf1.jpg?alt=media&token=cac64197-4772-4c8e-8e0f-637d7a914e02" />
            </div>

            <div id="introduce_title"><FcCloseUpMode />&nbsp;자연누리를 소개합니다&nbsp;<FcCloseUpMode /></div>

            <div id="intro_image_wrap">

                <div className="tz-gallery">

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-12 col-xl-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F1.jpg?alt=media&token=2ac97545-1eff-4036-847c-c6e85165282e" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        저희 소백산 자연누리 펜션은 소백산 비로봉이 보이는 자락 1길에 있으며 <br/>
                        맑고 깨끗한 물이 사계절 마르지 않고 흐르는 계곡을 품고있습니다~ ^^ <br/>
                        그리고 객실마다 테라스가 있는 독채형 펜션으로, 손님들의 프라이버시가 보호되구요~ <br/>
                        동과동 사이에는 데크와 거실이 연결되어 있으므로 펀리하게 바베큐와 옥외식사가 가능합니다^^
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-12 col-xl-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F2.jpg?alt=media&token=9a6c8946-5801-40b7-8525-378e63f59527" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        꿈과 낭만이있는 카라반입니다 ~^^ 캠핑을 통한 새로운 힐링을 찾아 나설 분들은 카라반을 이용하세요~ <br/>
                        내부는 아늑하고 아기자기하며 외부는 계곡과 맞닿아있어요~ <br/>
                        물소리를 들으며 도란도란 얘기나누며 추억을 쌓을수있는 예쁜곳이랍니다~~ <br/>
                        커플, 그리고 아이들이 있는 가족분들도 많이 이용하신답니다^^ <br/>
                        그리고 침대를 이용하고 싶으신 분들은 카라반을 선택해주세요~
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F3.jpg?alt=media&token=42c3ff05-44ed-455f-bb0f-c35ad6be7e3e" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F4.jpg?alt=media&token=b927f85b-6ee1-4608-b30e-af11a89fa7ad" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        펜션 앞뒤는 예쁜 산이 병풍처럼 둘러있어 아늑하고 밝으며 넓직한 잔디밭과 계곡까지~~ <br/>
                        도시에서의 지친 일상을 잠깐 잊고 가족들과 혹은 친구들과의 추억을 만들어 가시기에 딱! 맞춤인 곳! <br/>
                        바로 저희 자연누리가 아닐런지요~~o^^o
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F5.jpg?alt=media&token=b529750e-ff28-46ee-ad78-ae0201e49476" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F6.jpg?alt=media&token=7a19bc4e-2751-444c-b909-456c4161a38f" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        저희 펜션에서 소백산 정상 비로봉이 보인답니다~ 소백산은 백두대간의 한 줄기이며 비로봉은 해발 1,439m에요~
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F7.jpg?alt=media&token=2ff42de7-c659-4029-8377-c600566e4a87" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F8.jpg?alt=media&token=716a1cf3-4daa-4a08-ac4f-a6d85ce8fb2a" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>

                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F9.jpg?alt=media&token=30d38dda-e526-4955-bb0e-0de6b4bbdd2a" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F10.jpg?alt=media&token=9f2e35c4-c9d4-4dfa-9e7b-006f5ce45425" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>

                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F11.JPG?alt=media&token=c6b8caf2-b8d4-466c-92c3-b9547527f914" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F12.jpg?alt=media&token=1d0c7830-f773-4e04-83e5-d8de491d98b9" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        마당앞과 개울사이에 넓은잔디밭 이있어요~~ <br/>
                        한여름에 잔디밭에 자리 깔아놓고 계곡에 들어갔다가 나와서 음료한잔하면 더위야 물렀거라~~~^^ <br/>
                        해넘어가면 시원한 산바람은 덤이랍니다~~^^
                    </div>

                    <div className="row">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F13.jpg?alt=media&token=0f74a02a-6ba1-42da-ab1c-176a8a0a00f9" onClick={openImageModal} />
                        </div>
                        <div className="col-xl-2"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F14.jpg?alt=media&token=b08ee987-cf8e-44ad-b894-426961a08456" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F15.jpg?alt=media&token=8c5cf548-62bd-4272-aea9-449964a0bd2c" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        햇볕이 너무 뜨거워 물속으로 풍덩~ 물살이 세지않고 깊은곳은 어른 배꼽정도의깊이~ <br/>
                        아빠와함께 튜브를타며 행복해하는 아기의 모습은 참 예뻐요 <br/>
                        어른들도 물속으로 풍덩 들어가 물장난치며 잠시나마 복잡한 도시를떠나 동심이되고! 더위도 잊고~o^^o
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F16.jpg?alt=media&token=63564520-eeaf-4d6a-a5a0-b6574db4d0aa" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F17.jpg?alt=media&token=634f7b97-6e5d-4391-acad-8f553f3138e9" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        온 세상을 펄펄끓게 만들었던 해가 서산을 넘으면 언제 그랬냐는듯 시원한바람과 함께 잠자리를 데려오면 <br/>
                        아이들이 하나둘씩 잠자리채를들고 가운데 잔디밭으로 모여들어 <br/>
                        금새 친구가되고 잠자리도잡고 이리저리 뛰어놀고~~ <br/>
                        아이들의 맑은 재잘거림과 웃음소리는 노래가되고~~
                    </div>

                    <div className="row">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F18.jpg?alt=media&token=ec7855b0-d2c7-4d5b-adad-ba04df10efed" onClick={openImageModal} />
                        </div>
                        <div className="col-xl-2"></div>
                    </div>

                    <div className="explain">
                        무궁화꽃이피었습니다!
                    </div>

                    <div className="row">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F19.jpg?alt=media&token=aa35ba82-3830-451d-96e0-598cef27dbe3" onClick={openImageModal} />
                        </div>
                        <div className="col-xl-2"></div>
                    </div>

                    <div className="explain">
                        손자와 함께 야구 놀이해 주시는 할아버지 ~ 참 멋져요^^
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F20.jpg?alt=media&token=c7c887b0-e5ac-4f5a-af61-a3648100d65f" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F21.jpg?alt=media&token=8ad7f0f4-b154-4c28-b4c2-1b85d5d976af" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        펜션 옆에 있는 저수지에요 새벽에 일어나서 물안개가 내려와 있는 저수지 주변을 산책하면 외국의 멋진 풍경을 부러워 할 필요가 없어요 <br/>
                        그리고 이른 저녁을 먹고 산책하면 소백산에서 불어오는 시원한 바람이 땀을 식혀준답니다^^
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F22.jpg?alt=media&token=562f3a9a-9f0c-46bf-bfcd-4c21266d85cd" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F23.jpg?alt=media&token=223150f7-5887-4ccf-93e4-18e6c8e6cd43" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        자연누리의 바베큐장이에요~ <br/>
                        객실의 각 데크에도 바베큐 시설이 되어있어 오붓하게 가족끼리 즐기실 수도 있구요 <br/>
                        식구가 많으시거나 회식장소가 필요하신 분들은 따로 설치되어있는 이 바베큐장을 이용하시면 됩니다~^^ <br/>
                        약 25명 정도는 충분히 즐기실 수 있답니다~
                    </div>

                    <div className="row">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fintroduce%2F24.jpg?alt=media&token=2e2bbde3-1354-4f91-b21c-828aa95cc74a" onClick={openImageModal} />
                        </div>
                        <div className="col-xl-2"></div>
                    </div>

                    <div className="explain">
                        청량리와 풍기 간 'KTX이음'이 개통되어서 더 빨리 자연누리로 오실수 있답니다 <br/>
                        주중 3회, 주말 4회 운영하며 소요시간(청량리-풍기)은 1시간 36분입니다 ^^
                    </div>

                </div>

            </div>
        </>
    );
}

export default Introduce;