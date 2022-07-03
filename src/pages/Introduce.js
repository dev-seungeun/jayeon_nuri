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
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjQ1/MDAxNjU2ODM5NjUxNTcx.mzkExMxX01lwaBe7vA-GqMJBbQsXlQCBOxWglZ-pJWkg.ZNCAZR8qTizHKH0pvZYjQigYTaZZXVvCDPIAMIqrxBQg.JPEG.bse14/leaf1.jpg?type=w966" />
            </div>

            <div id="introduce_title"><FcCloseUpMode />&nbsp;자연누리를 소개합니다&nbsp;<FcCloseUpMode /></div>

            <div id="intro_image_wrap">

                <div className="tz-gallery">

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-12 col-xl-8">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfODAg/MDAxNjU2ODQwNDQxNjk0.ahlAI8OqzgM8-CL50w1qGaoXcg9fwel-q-YBPqhXZSgg.GenvyBh61jiLnldBs9a3FpyuZcuav6Rh7VZKUALWIgcg.JPEG.bse14/1.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        저희 소백산 자연누리 펜션은 소백산 비로봉이 보이는 자락 1길에 있으며 <br/>
                        맑고 깨끗한 물이 사계절 마르지 않고 흐르는 계곡을 품고있습니다~ ^^ <br/>
                        그리고 객실마다 테라스가 있는 독채형 펜션으로, 손님들의 프라이버시가 보호되구요~ <br/>
                        동과동 사이에는 데크와 거실이 연결되어 있으므로 펀리하게 바베큐와 옥외식사가 가능합니다^^
                    </div>

{/*
                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-12 col-xl-8">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjM4/MDAxNjU2ODQwNDQxODE4.ndpa-qDXR05VYC8ui9Ea6_j6DEFbQkcjXHM_W8yJw5Mg.j6QwxWU_87a77hZnZivlCW-ezdI4ipGF8ixY3H1nqbEg.JPEG.bse14/2.jpg?type=w966" onClick={openImageModal} />
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
*/}

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjA2/MDAxNjU2ODQwNDQxODM5.15-AyBDlbS9i2iKb_qpnRnjrcbf5DyDWqLIwnQQ2cfIg.d1023tnC6V35LwNS6Pl_Abuh_9sHq40JBP0D6tAwV8cg.JPEG.bse14/3.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfNjMg/MDAxNjU2ODQwNDQxOTM2.Ujx3UD6kpWJ8dNkwrhFc_w58x37pT3F8lpBBzfS7F60g.NZaQ1WOAzMFfTi2jlbsyna48qCcc7dvua9fP1A1-ui4g.JPEG.bse14/4.jpg?type=w966" onClick={openImageModal} />
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
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfNTkg/MDAxNjU2ODQwNDQyMjIw.DE9sU_nb_BQEtkgBbpRrs3a5A-qx5qcEcMa1nl8CBTAg.OAKQ_jOcP9w5FYWYBfnM673rmlbBJn9n5Yu17FtcyHMg.JPEG.bse14/5.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjgy/MDAxNjU2ODQwNDQxNzIz.KecwIKo7022Bo53FbaZPzEf54h2WAREcjENkiQXl0qAg.kXPzT_L0oywGj2QJPQKy2jHMeNBjDsGCg-aT14hb3Log.JPEG.bse14/6.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>
                    </div>

                    <div className="explain">
                        저희 펜션에서 소백산 정상 비로봉이 보인답니다~ 소백산은 백두대간의 한 줄기이며 비로봉은 해발 1,439m에요~
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjcz/MDAxNjU2ODQwNDQzMzUw.lE25ZqoIyxIclc2CXGowEyU35XwO9ha9DN1eMKAaiS4g.EplV9jPpYtPgFKqYvSJPnA6TrqDHi9VbZYKTIaJxBQMg.JPEG.bse14/7.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjk3/MDAxNjU2ODQwNDQzNjkw.nmW1oxK-jmXZSwxz0O69wMm3gDK5P2ziCb3NVy_hK-0g.yEJs1tDSxawA3P3Bk045csPjM0EhHzAgt7zqqmNqd2gg.JPEG.bse14/8.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>

                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjIw/MDAxNjU2ODQwNDQ0MDIz.Wa3-GZXgsE-x8z9zxjvqThjstsNTwzjAIUIS9hBvIgYg.QjZ7-NpRZCsaq2Xn_HdkUCL8LXlcpumKqpMBABQ-KYQg.JPEG.bse14/9.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjA5/MDAxNjU2ODQwNDQ1Mzgy.VgOCWmGLm3j9lZadKJb4BHLTZmaZGVExz6nG5EOsB4Eg.k9-pb397v8HWYtNtpAEKU-6Vb3hqvHiwIc_iw0In5wog.JPEG.bse14/10.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-0 col-xl-2"></div>

                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTYx/MDAxNjU2ODQwNDQzMjI2.MydqbZamLBu_RS4wdQjRkDvtBLqZ2T_LWuazv0KEk4Qg.bGE0NbL60WrT2bHd9a9KrcbTRDunUOVapZN7UZg5Tr0g.JPEG.bse14/11.JPG?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTUw/MDAxNjU2ODQwNjUwMTUw.5o13EDxk9m33V3tB91KtIqiIXOaYYeYAr-5t94tD2-sg.War070voFA-XRaTlq_PF5iJ2bdMmd78sS1xpjWCtUQMg.JPEG.bse14/12.jpg?type=w966" onClick={openImageModal} />
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
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjY3/MDAxNjU2ODQwNDQ1MjIy.BvPhnUlXxAmBMFS3SQ5JloWPusErdSdg2Bva_tAP0ZQg.WcBwlbDhMEpC0VHegNKU3L8d9hzmZkMWhVCkj3a0OYAg.JPEG.bse14/13.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-xl-2"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTgx/MDAxNjU2ODQwNDQ0NTgy.RtKs1RBBItxj9_MrIkiovT2XtirPRfB92BzoXBdwASgg.OtFB8KIFFljSeVxrpHhp7r83tJX-b270FJZK0Zqumdcg.JPEG.bse14/14.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjky/MDAxNjU2ODQwNDQ0MzY4.lmpjlpU5yV2PWVVKt7F-tQ_-XYEauAaD6Spr7vG4yf4g._SAwjhkcQnHi9ctCQSP5AFjdMd5hMNJObZ30f8yFB1Yg.JPEG.bse14/15.jpg?type=w966" onClick={openImageModal} />
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
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjI0/MDAxNjU2ODQwNzM3MjM4.yLHcN4g3xofDbg-Wh1ybhqWzVWOSdUpQw9X9MhmkwNEg.sjy9QPnCVjS31mosy__Ts0RbUW3icLazWp3sG6sVDqcg.JPEG.bse14/16.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfOSAg/MDAxNjU2ODQwNzM3MTYy.LU9YISpxJW7Kx_sNQaIddFZqSc0h7YYao8oXBdmLvWkg.nYp-0RONWMDMPNt3NeBzuqgRKbkabq__SmMZiAwhNoQg.JPEG.bse14/17.jpg?type=w966" onClick={openImageModal} />
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
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjAz/MDAxNjU2ODQwNzM2NjAw.yyIZWeh6pjRN-cwxPyESZVLc2qBsmW3L7JInalnapcAg.jRqoqQzz7dMGLst2FdMz1j4J0ejTyTUct_zM4EacW0sg.JPEG.bse14/18.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-xl-2"></div>
                    </div>

                    <div className="explain">
                        무궁화꽃이피었습니다!
                    </div>

                    <div className="row">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjUw/MDAxNjU2ODQwNzM3MDc2.HpRp2CNH9fULah85FvazkuhZa1K4WwQUPz0Olurxdswg.r8Y6Nq2mvlvoiXp4q4R3TwYBs2zqzcFxJh4Jh5jZdyog.JPEG.bse14/19.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-xl-2"></div>
                    </div>

                    <div className="explain">
                        손자와 함께 야구 놀이해 주시는 할아버지 ~ 참 멋져요^^
                    </div>

                    <div className="row">
                        <div className="col-lg-0 col-xl-2"></div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTIy/MDAxNjU2ODQwNDQ3MzEx.TB2pY2me1tyLAZz5A-omc5CN4k2-x67Fl1pHYEo7x4Mg.hZTgVzI6z7HYy_mcNhotKw5uebbbMM6RPLs01_mNDQwg.JPEG.bse14/20.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMjc2/MDAxNjU2ODQwNzQ2NTM2.A1rXuTCTmYYhYiNNry7AWTtKogd_8WA85Gxdl4QO9mkg.m25JY7x48S7P3ZB-rbBTOBlF2-W7S_lOinMiGUyOzj8g.JPEG.bse14/21.jpg?type=w966" onClick={openImageModal} />
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
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTY2/MDAxNjU2ODQwNzUxNDg5.tGhhnIZ0Ryww3e-nX4OGozuTWDlWTOGzycUoUCOdt7Yg.3StkP0UaRel-h4Qc4WTQbdpP2G7_a8tNl-hDKyDd36Yg.JPEG.bse14/22.jpg?type=w966" onClick={openImageModal} />
                        </div>
                        <div className="col-lg-6 col-xl-4">
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTQ4/MDAxNjU2ODQwNzUwNjE2.Z2TWnz17VUOWJfwu3uIonztGohIiVbamfVkyaO9QrZ0g.XpBRzPGUYYdHRsSPkPAihEcAUYzvI-W7KGrxa21vsvkg.JPEG.bse14/23.jpg?type=w966" onClick={openImageModal} />
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
                            <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfNjYg/MDAxNjU2ODQwNzQ4NDE3.jZL4ChpSdfRwBCfmBg3nfvEt5QoayP2ADnD-ltADI3Ag.2w62QqO5t1TUmn0_D4Td8e9tGc3gsb_9DperRvNWJP4g.JPEG.bse14/24.jpg?type=w966" onClick={openImageModal} />
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