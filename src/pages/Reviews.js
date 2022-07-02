import React, {useEffect, useState} from 'react';
import { _databaseGetReview } from "../helpers/database";
import { _commonTimestampToDate } from "../helpers/common";
import MyEditor from "../components/MyEditor";
import "../css/review.css";

function Reviews(props) {

    let reviewListTemp = [];
    const [viewName, setViewName] = useState("list");
    const [reviewList, setReviewList] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [show, setShow] = useState(false);

    const checkPassword = (in_password) => {

        if(in_password == selectedData.password) {
            setViewName("editor");
        }else {
            alert("비밀번호가 맞지 않습니다.");
        }

    }

    useEffect(()=> {
        _databaseGetReview(function (id, review) {
            review.key = id;
            reviewListTemp = [review].concat(reviewListTemp);
            setReviewList(reviewListTemp);
        });
    },[])

    useEffect(()=> {
        if(reviewList.length > 0) {
            setShow(true);
        }
    },[reviewList])

    return (
        <>
            <div className="top_img">
                <img src="https://firebasestorage.googleapis.com/v0/b/jayeon-nuri.appspot.com/o/public%2Fmain%2Ftop%2Fcloud1.jpg?alt=media&token=09ebabcd-c29c-4db7-bb90-46afba8b1ebc" />
            </div>

            <div id="review_wrap">
                <div className="add_wrap">
                    {viewName == "editor" && <MyEditor id={selectedId} data={selectedData} />}
                    {viewName == "password" &&
                    <div>
                        <p className="password_txt">비밀번호 확인</p>
                        <input className="in_password"/>
                        <button className="pass-check-button" onClick={(e)=>checkPassword(document.querySelector(".in_password").value)}>확인</button>
                        <button className="check-list-button" onClick={(e)=>window.location.reload()}>목록으로</button>
                    </div>
                    }
                    {viewName == "detail" &&
                        <div id="review_detail">
                            <table>
                                <thead>
                                    <tr>
                                        <th>제목</th>
                                        <th colSpan="3">{selectedData.title}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>작성자</td>
                                        <td colSpan="3">{selectedData.author}</td>
                                    </tr>
                                    <tr>
                                        <td>등록일자</td>
                                        <td>{_commonTimestampToDate(selectedData.time)}</td>
                                        <td>수정일자</td>
                                        <td>{_commonTimestampToDate(selectedData.update_time)}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4" dangerouslySetInnerHTML={{__html: selectedData.content}}></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="submit-button" onClick={(e)=>setViewName("password")}>수정하기</button>
                            <button className="list-button" onClick={(e)=>window.location.reload()}>목록으로</button>
                        </div>
                    }
                    {viewName == "list" && show &&
                        <div id="review_list">
                            <p style={{fontWeight:"800", textAlign:"left"}}>이용후기</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>등록일시</th>
                                        <th>수정일시</th>
                                    </tr>
                                </thead>
                                {reviewList &&
                                <tbody>
                                    {reviewList.map((data, index) => {
                                        return <tr key={index}
                                                    id={data.key}
                                                    data-review={data}
                                                    onClick={(e) => {
                                                        setViewName("detail");
                                                        setSelectedId(data.key);
                                                        setSelectedData(data);
                                                    }} >
                                                    <td className="list_title">{data.title}</td>
                                                    <td>{data.author}</td>
                                                    <td>{_commonTimestampToDate(data.time)}</td>
                                                    <td>{_commonTimestampToDate(data.update_time)}</td>
                                                </tr>
                                    })}
                                </tbody>
                                }
                                {!reviewList &&
                                <tbody>
                                    <tr>
                                        <td>등록된 후기가 없습니다.</td>
                                    </tr>
                                </tbody>
                                }
                            </table>
                            <button className="submit-button" onClick={(e)=>setViewName("editor")}>작성하기</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Reviews;