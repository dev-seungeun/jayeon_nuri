import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { _commonTimestampToDate, _commonGetCommonInfo } from "../helpers/common";
import MyEditor from "../components/MyEditor";
import "../css/board.css";
import "../css/review.css";

function Reviews(props) {

    const location = useLocation();
    const [viewName, setViewName] = useState();
    const [selectedData, setSelectedData] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

    const checkPassword = (in_password) => {

        if(in_password === selectedData.password) {
            setViewName("editor");
        }else {
            alert("비밀번호가 맞지 않습니다.");
        }

    }

    const checkPasswordEnter = (e) => {
        if(window.event.keyCode === 13) {
            checkPassword(document.querySelector(".in_password").value)
        }
    }

    useEffect(()=> {

        const query = location.search.substring(1);
        setViewName(query);

        setSelectedData(_commonGetCommonInfo("selected_review"));
        setSelectedId(_commonGetCommonInfo("selected_review_id"));

    },[])

    return (
        <>
            <div className="top_img">
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTcg/MDAxNjU2ODM5NjUxMjIx.tBL8Bluy0GyMKNJIZ2dFrDepVhKr88ZwCdUquE8VGqYg.aFqnyShVwkrdbjnObBLaK-wh5eqCaTm6Aman-3qQDuMg.JPEG.bse14/cloud1.jpg?type=w966" />
            </div>

            <div id="board_wrap">
                <div className="add_wrap">
                    {viewName === "editor" && <MyEditor id={selectedId} data={selectedData} setViewName={setViewName} />}
                    {viewName === "password" &&
                    <div id="review_check_password">
                        <p className="password_txt">비밀번호 확인</p>
                        <input className="in_password" onKeyUp={(e) => checkPasswordEnter(e)} />
                        <button className="submit-button pass-check-button" onClick={(e)=>checkPassword(document.querySelector(".in_password").value)}>확인</button>
                        <button className="submit-button check-list-button" onClick={(e)=>window.history.back()}>목록으로</button>
                    </div>
                    }
                    {selectedData && viewName === "detail" &&
                        <div id="board_detail">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="detail_title" colSpan="2">{selectedData.title}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="detail_author" colSpan="2">{selectedData.author}
                                            <span>{_commonTimestampToDate(selectedData.time)}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="detail_content" colSpan="2" dangerouslySetInnerHTML={{__html: selectedData.content}}></td>
                                    </tr>
                                    {selectedData.reply !== "" &&
                                        <tr>
                                            <td className="detail_reply_title">자연누리<br/>답글</td>
                                            <td className="detail_reply_content" dangerouslySetInnerHTML={{__html: selectedData.reply}}></td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                            <button className="submit-button modify-button" onClick={(e)=>setViewName("password")}>수정하기</button>
                            <button className="submit-button list-button" onClick={(e)=>window.history.back()}>목록으로</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Reviews;
