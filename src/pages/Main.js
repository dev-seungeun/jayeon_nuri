import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { openImageModal } from "../App"
import "../css/main.css";
import "../css/fluid-gallery.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 're-carousel'
import IndicatorDots from '../components/CarouselIndicatorDots'
import Buttons from '../components/CarouselButtons'

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

    const [tableMobile, setTableMobile] = useState(true);

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    const handleResize = (e) => {
        var innerWidth = window.innerWidth;
        if(innerWidth > 1000) {
            setTableMobile(false);
            document.getElementById("etc_info_intro").setAttribute("rowSpan", 2);
            document.getElementById("etc_info_intro").removeAttribute("colSpan", 2);

            if(document.getElementById("temp_tr") != null) {
                document.getElementById("etc_info_intro").insertAdjacentElement("afterend", document.getElementById("etc_info_notice"));
                document.getElementById("temp_tr").remove();
            }
        }else {
            setTableMobile(true);
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
                        <Link to="/introduce/ABOUT"><div className="menu_box"><HiOutlineHome /><br/><span className="menu_box_eng">INTRODUCE</span><br/><span className="menu_box_kor">펜션소개</span></div></Link>
                    </div>
                    <div>
                        <Link to="/room1/ROOM"><div className="menu_box"><BiBed /><br/><span className="menu_box_eng">ROOM</span><br/><span className="menu_box_kor">객실안내</span></div></Link>
                    </div>
                    <div>
                        <Link to="/terms_of_use/RESERVATION"><div className="menu_box"><TbListCheck /><br/><span className="menu_box_eng">RULES</span><br/><span className="menu_box_kor">이용수칙</span></div></Link>
                    </div>
                    <div>
                        <div onClick={(e) => {window.open("http://www.pensionlife.co.kr/asp/calendar/online_cal.php?jid=1395","","width=900px, location=no, titlebar=no, scrollbars=yes, menubar=no, status = no, left = 500, toolbar=no");}} className="menu_box"><IoCalendarOutline />
                            <br/><span className="menu_box_eng">RESERVATION</span><br/><span className="menu_box_kor">예약</span>
                        </div>
                    </div>
                    <div>
                        <Link to="/reviews/COMMUNITY"><div className="menu_box"><TbPencil /><br/><span className="menu_box_eng">REVIEWS</span><br/><span className="menu_box_kor">이용후기</span></div></Link>
                    </div>
                    <div>
                        <Link to="/way_to_come/ABOUT"><div className="menu_box"><GrMapLocation /><br/><span className="menu_box_eng">LOCATION</span><br/><span className="menu_box_kor">오시는 길</span></div></Link>
                    </div>
                </div>
                <div className="main_img">
                    <div className="tz-gallery">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
                                <img src="/main/1.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-6 col-xl-6">
                                <img src="/main/2.jpg" onClick={openImageModal} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/3.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/4.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/5.jpg" onClick={openImageModal} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/6.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/7.jpg" onClick={openImageModal} />
                            </div>
                            <div className="col-xs-12 col-sm-4 col-lg-4 col-xl-4">
                                <img src="/main/8.jpg" onClick={openImageModal} />
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
                                        <img src="/main/bottom.jpg" />
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
                            <td>
                                <div id="etc_info_account">
                                    <div>입금계좌</div>
                                    <div>1234-5678-91011</div>
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
