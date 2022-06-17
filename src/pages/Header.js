import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { BiChevronDown } from "react-icons/bi";

import "../css/header.css";

function Header(props) {

    const [isToggled, setIsToggled] = useState(false);
    const [showInroduceChild, setShowIntroduceChild] = useState(false);
    const [showAroundGuideChild, setShowAroundGuideChild] = useState(false);
    const [showReservationGuide, setShowReservationGuideChild] = useState(false);

    const Header = styled.div`
        @media screen and (max-width: 768px) {
            flex-wrap: wrap;
            .menuwrap {
                left: ${(isToggled ? "0" : "-300px")};
             }            
        }
    `;

    const handleSubMenuOpen = (e) => {
        if(e.target.classList.contains("introduce")) {
            console.log("???")
            setShowIntroduceChild(!showInroduceChild);
            setShowAroundGuideChild(false);
            setShowReservationGuideChild(false);
        }else if(e.target.classList.contains("around_guide")) {
            setShowAroundGuideChild(!showAroundGuideChild);
            setShowIntroduceChild(false);
            setShowReservationGuideChild(false);
        }else if(e.target.classList.contains("reservation_guide")) {
            setShowReservationGuideChild(!showReservationGuide);
            setShowIntroduceChild(false);
            setShowAroundGuideChild(false);
        }else {
            setShowReservationGuideChild(false);
            setShowIntroduceChild(false);
            setShowAroundGuideChild(false);
            setIsToggled(false);
        }
    }

    const handleDimmed = (e) => {
        setIsToggled(false);
    }

    useEffect(() => {
        if(isToggled) { //메뉴펼침
            // document.querySelector('.menuwrap').classList.add('on');
            document.body.style.overflow = "hidden";
        }else { //메뉴닫힘
            // document.querySelector('.menuwrap').classList.remove('on');
            document.body.style.overflow = "unset";
        }
    }, [isToggled]);

    return (

            <Header id="header">
                {isToggled && <div id="dimmed" onClick={handleDimmed}></div>}

                {/* 햄버거 버튼(bar) */}
                <div className="toggle" onClick={() => { setIsToggled(!isToggled); }}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>

                {/* Apple 로고 */}
                <div className="logo">
                    소백산 자연누리 펜션
                    {/*<FontAwesomeIcon icon={faApple}/>*/}
                </div>

                {/* 메뉴 리스트 */}
                <div className="menuwrap">
                    {/* 햄버거 버튼(bar) */}
                    <div className="toggle" onClick={() => { setIsToggled(!isToggled); }}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <nav id="menu">
                        <ul className="header__menulist">
                            <li className="introduce" onClick={handleSubMenuOpen}>
                                자연누리 소개 <BiChevronDown className="menuDownIcon introduce" onClick={handleSubMenuOpen} />
                                { showInroduceChild &&
                                <ul className="inner_ul">
                                    <li><Link to="/introduce">자연누리 둘러보기</Link></li>
                                    <li><Link to="/room1">객실 1,2,3호</Link></li>
                                    <li><Link to="/room5">객실 5,6호</Link></li>
                                    <li><Link to="/caravan1">카라반 1호</Link></li>
                                    <li><Link to="/caravan2">카라반 2호</Link></li>
                                    <li><Link to="/caravan3">카라반 3호</Link></li>
                                    <li><Link to="/caravan4">카라반 4호</Link></li>
                                </ul> }
                            </li>
                            <li className="around_guide" onClick={handleSubMenuOpen}>
                                여행 가이드 <BiChevronDown className="menuDownIcon around_guide" onClick={handleSubMenuOpen} />
                                { showAroundGuideChild &&
                                <ul className="inner_ul">
                                    <li><Link to="/around">주변 여행지</Link></li>
                                    <li><Link to="/mountain">소백산 등산로</Link></li>
                                </ul> }
                            </li>
                            <li className="reservation_guide" onClick={handleSubMenuOpen} >
                                예약 가이드 <BiChevronDown className="menuDownIcon reservation_guide" onClick={handleSubMenuOpen} />
                                { showReservationGuide &&
                                <ul className="inner_ul">
                                    <li><Link to="/reservation">예약 현황</Link></li>
                                    <li><Link to="/terms_of_use">이용 수칙</Link></li>
                                    <li><Link to="/use_price">이용 가격</Link></li>
                                </ul> }
                            </li>
                            <li className="reservation" onClick={handleSubMenuOpen}>
                                <Link to="/reservation">실시간 예약 <BiChevronDown className="menuDownIcon" style={{visibility:"hidden"}} /></Link>
                            </li>
                            <li className="way_to_come" onClick={handleSubMenuOpen}>
                                <Link to="/way_to_come"> 오시는 길 <BiChevronDown className="menuDownIcon" style={{visibility:"hidden"}} /></Link>
                            </li>
                            <li className="reviews" onClick={handleSubMenuOpen}>
                                <Link to="/reviews">이용 후기 <BiChevronDown className="menuDownIcon" style={{visibility:"hidden"}} /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </Header>
    );
}

export default Header;