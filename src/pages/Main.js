import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "../css/main.css"
import { AiFillHome, AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineHome, HiOutlinePencilAlt, HiOutlinePencil } from "react-icons/hi";
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

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 801, maxWidth: 999 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 501, maxWidth: 800  })
    return isMobile ? children : null
}
const Tiny = ({ children }) => {
    const isTiny = useMediaQuery({ maxWidth: 500 })
    return isTiny ? children : null
}

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
            setTableMobile(false)
        }else {
            setTableMobile(true)
        }
    }

    return (
        <>
            <div className="main_wrap">
                <div className="main_carousel_wrap">
                    <div resizeMode="stretch" className="main_carousel" style={{backgroundImage: "url(/main/carousel/spring2.jpg)"}}></div>
                    <div className="main_title">JAYEON-NURI PENSION</div>
                </div>
                <div className="menu_box_wrap">
                    <div>
                        <Link to="/introduce"><div className="menu_box"><HiOutlineHome /><br/><span className="menu_box_eng">INTRODUCE</span><br/><span className="menu_box_kor">펜션소개</span></div></Link>
                    </div>
                    <div>
                        <Link to="/room1"><div className="menu_box"><BiBed /><br/><span className="menu_box_eng">ROOM</span><br/><span className="menu_box_kor">객실안내</span></div></Link>
                    </div>
                    <div>
                        <Link to="/terms_of_use"><div className="menu_box"><TbListCheck /><br/><span className="menu_box_eng">RULES</span><br/><span className="menu_box_kor">이용수칙</span></div></Link>
                    </div>
                    <div>
                        <Link to="/reservation"><div className="menu_box"><IoCalendarOutline /><br/><span className="menu_box_eng">RESERVATION</span><br/><span className="menu_box_kor">예약안내</span></div></Link>
                    </div>
                    <div>
                        <Link to="/reviews"><div className="menu_box"><TbPencil /><br/><span className="menu_box_eng">REVIEWS</span><br/><span className="menu_box_kor">이용후기</span></div></Link>
                    </div>
                    <div>
                        <Link to="/way_to_come"><div className="menu_box"><GrMapLocation /><br/><span className="menu_box_eng">LOCATION</span><br/><span className="menu_box_kor">오시는 길</span></div></Link>
                    </div>
                </div>
                <div className="main_img">
                    <div>
                        <img src="/main/1.jpg"/>
                    </div>
                    <div>
                        <img src="/main/2.jpg"/>
                    </div>
                    <div>
                        <img src="/main/3.jpg"/>
                    </div>
                    <div>
                        <img src="/main/4.jpg"/>
                    </div>
                </div>
                <div className="etc_info">
                    {!tableMobile &&
                    <table>
                        <tr>
                            <td rowSpan={2}>
                                <div>Notice</div>
                                <div>1</div>
                                <div>2</div>
                            </td>
                            <td colSpan={2}>
                                <div>주소</div>
                                <div>경상북도 영주시 풍기읍 삼가로 288 자연누리펜션</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>문의전화</div>
                                <div>1234-5678</div>
                            </td>
                            <td>
                                <div>입금계좌</div>
                                <div>1234-5678-91011</div>
                                <div>농협은행 / 예금주 : 정정희</div>
                            </td>
                        </tr>
                    </table>
                    }
                    {tableMobile &&
                    <table>
                        <tr>
                            <td colSpan={2}>
                                <div>Notice</div>
                                <div>1</div>
                                <div>2</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div>주소</div>
                                <div>경상북도 영주시 풍기읍 삼가로 288 자연누리펜션</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>문의전화</div>
                                <div>1234-5678</div>
                            </td>
                            <td>
                                <div>입금계좌</div>
                                <div>1234-5678-91011</div>
                                <div>농협은행 / 예금주 : 정정희</div>
                            </td>
                        </tr>
                    </table>
                    }
                </div>
            </div>
        </>
    )
};

export default Main;
