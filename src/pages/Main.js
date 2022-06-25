import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { openImageModal } from "../App";
import { changeToggleColor } from "./Header";
import platform from 'platform';
import Carousel from 're-carousel';
import IndicatorDots from '../components/CarouselIndicatorDots';
import Buttons from '../components/CarouselButtons';
import "../css/main.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';

import { AiFillHome, AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineHome, HiChevronLeft,HiChevronRight, HiOutlinePencilAlt, HiOutlinePencil } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { TbHome, TbNotes, TbCheck, TbChecks, TbCircleCheck, TbListCheck, TbPencil } from "react-icons/tb";
import { RiHome4Line } from "react-icons/ri";
import { GrHome, GrHomeRounded, GrNotes, GrLocation, GrMapLocation } from "react-icons/gr";
import { BiHome, BiBed, BiNotepad, BiCalendar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { IoHomeOutline, IoBed, IoCheckmarkOutline, IoCheckmarkCircleOutline, IoCalendarNumberOutline, IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { ImFileText, ImFileText2 } from "react-icons/im";


// const Desktop = ({ children }) => {
//     const isDesktop = useMediaQuery({ minWidth: 1000 })
//     return isDesktop ? children : null
// }
// const Tablet = ({ children }) => {
//     const isTablet = useMediaQuery({ minWidth: 801, maxWidth: 999 })
//     return isTablet ? children : null
// }
// const Mobile = ({ children }) => {
//     const isMobile = useMediaQuery({ minWidth: 501, maxWidth: 800  })
//     return isMobile ? children : null
// }
// const Tiny = ({ children }) => {
//     const isTiny = useMediaQuery({ maxWidth: 500 })
//     return isTiny ? children : null
// }


const Main = (props) => {

    const navigate = useNavigate();
    const videoRef = useRef();
    // const [tableMobile, setTableMobile] = useState(true);

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        handleResize();

        // alert(platform.name.toLowerCase());
        // platform.name //
        // PC : Chrome, Electron, Firefox, Firefox for iOS, IE, Microsoft Edge, PhantomJS, Safari, SeaMonkey, Silk, Opera Mini, Opera
        // Mobile : Chrome Mobile, Firefox Mobile, IE Mobile, Opera Mobile
        if(platform.name.toLowerCase() == "safari") {
            videoRef.current.pause();
        }else {
            videoRef.current.play();
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    const handleResize = (e) => {
        var innerWidth = window.innerWidth;
        if(innerWidth > 1000) {
            // setTableMobile(false);
            document.getElementById("etc_info_intro").setAttribute("rowSpan", 2);
            document.getElementById("etc_info_intro").removeAttribute("colSpan", 2);

            if(document.getElementById("temp_tr") != null) {
                document.getElementById("etc_info_intro").insertAdjacentElement("afterend", document.getElementById("etc_info_notice"));
                document.getElementById("temp_tr").remove();
            }
        }else {
            // setTableMobile(true);
            document.getElementById("etc_info_intro").setAttribute("colSpan", 2);
            document.getElementById("etc_info_intro").removeAttribute("rowSpan", 2);

            if(document.getElementById("temp_tr") == undefined) {
                var tr = document.createElement("tr");
                tr.setAttribute("id", "temp_tr");
                tr.appendChild(document.getElementById("etc_info_notice"));
                document.getElementById("etc_info_intro").parentNode.insertAdjacentElement("afterend", tr);
            }
        }
    }

    const handleLinkMove = (e, link) => {
        changeToggleColor(link.split("/")[2]);
        navigate(link);
    }

    return (
        <>
            <div className="main_wrap">
                <div className="main_carousel_wrap">
                    <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
                        <img className="main_carousel_img" src="/main/carousel/1.jpg" />
                        <img className="main_carousel_img" src="/main/carousel/2.jpg" />
                        <img className="main_carousel_img" src="/main/carousel/3.jpg" />
                        <img className="main_carousel_img" src="/main/carousel/4.jpg" />
                    </Carousel>
                    <div className="main_title">JAYEONNURI PENSION</div>
                </div>
                <div className="menu_box_wrap">
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/introduce/ABOUT")}><HiOutlineHome /><br/><span className="menu_box_eng">INTRODUCE</span><br/><span className="menu_box_kor">펜션소개</span></div>
                    </div>
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/room1/ROOM")}><BiBed /><br/><span className="menu_box_eng">ROOM</span><br/><span className="menu_box_kor">객실안내</span></div>
                    </div>
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/terms_of_use/RESERVATION")}><TbListCheck /><br/><span className="menu_box_eng">RULES</span><br/><span className="menu_box_kor">이용수칙</span></div>
                    </div>
                    <div>
                        <div onClick={(e) => {window.open("http://www.pensionlife.co.kr/asp/calendar/online_cal.php?jid=1395","","width=900px, location=no, titlebar=no, scrollbars=yes, menubar=no, status = no, left = 500, toolbar=no");}} className="menu_box"><IoCalendarOutline />
                            <br/><span className="menu_box_eng">RESERVATION</span><br/><span className="menu_box_kor">예약</span>
                        </div>
                    </div>
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/reviews/COMMUNITY")}><TbPencil /><br/><span className="menu_box_eng">REVIEWS</span><br/><span className="menu_box_kor">이용후기</span></div>
                    </div>
                    <div>
                        <div className="menu_box" onClick={(e)=>handleLinkMove(e, "/way_to_come/ABOUT")}><GrMapLocation /><br/><span className="menu_box_eng">LOCATION</span><br/><span className="menu_box_kor">오시는 길</span></div>
                    </div>
                </div>
                <div className="main_img">
                    <div className="tz-gallery">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2F1.jpg?alt=media&token=40fe08e2-633b-4c26-8c2b-b2124c015215" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2F2.jpg?alt=media&token=321097fe-a2cc-435b-a1da-f252380c01e1" onClick={openImageModal} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2F3.jpg?alt=media&token=1f59e794-5600-4ae1-b17d-1862888f723c" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2F4.jpg?alt=media&token=715a99ec-c568-4683-b64f-e506b94b7a8e" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2F5.jpg?alt=media&token=54756f29-d605-4242-b177-797a92ec346e" onClick={openImageModal} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-xs-12">
                                <video id="summer_video" ref={videoRef} autoPlay muted loop>
                                    <source src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2Fsummer_video1.mp4?alt=media&token=ea95d2af-113a-4c81-9463-bea328aa2a39" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2F6.jpg?alt=media&token=b30793e7-72ae-4a81-9926-0d1be4f5e445" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2F7.jpg?alt=media&token=decd0c97-cb83-4d0f-8aae-9dc1a1716e3c" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2F8.jpg?alt=media&token=7a120372-df70-4e46-bb91-7e737d704875" onClick={openImageModal} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="etc_info">
                    <table>
                      <thead></thead>
                      <tbody>
                        <tr>
                            <td id="etc_info_intro">
                                <div>
                                    <div>JAYEONNURI PENSION</div>
                                    <div>Happiness & Comfort</div>
                                    <div>행복한 여행을 만들어 드립니다</div>
                                    <div>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Fmain_list%2Fbottom.jpg?alt=media&token=360becab-b233-4a73-b5db-b057500b8e91" />
                                    </div>
                                </div>
                            </td>
                            <td id="etc_info_notice" colSpan={2}>
                                <div>
                                    <div>Notice & Event</div>
                                    <div>
                                    게시물이 없습니다.
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td id="etc_info_call">
                                <div>
                                    <div>문의사항</div>
                                    <div>010-4382-0056</div>
                                </div>
                            </td>
                            <td id="etc_info_account">
                                <div>
                                    <div>입금계좌</div>
                                    <div>351-7557-4935-03</div>
                                    <div>농협은행 / 예금주 : 정정희</div>
                                </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Main;
