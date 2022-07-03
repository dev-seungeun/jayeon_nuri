import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { _databaseGetReview } from "../helpers/database";
import { _commonTimestampToDate, _commonSetCommonInfo } from "../helpers/common";
import "../css/review.css";

function Reviews(props) {

    let reviewListTemp = [];
    const navigate = useNavigate();
    const [reviewList, setReviewList] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(()=> {

        _databaseGetReview(function (id, review) {
            review.key = id;
            reviewListTemp = [review].concat(reviewListTemp);
            setReviewList(reviewListTemp);
        });

        _commonSetCommonInfo("selected_review_id", null);
        _commonSetCommonInfo("selected_review", null);

    },[])

    useEffect(()=> {
        if(reviewList.length > 0) {
            setShow(true);
        }
    },[reviewList])

    return (
        <>
            <div className="top_img">
                <img src="https://postfiles.pstatic.net/MjAyMjA3MDNfMTcg/MDAxNjU2ODM5NjUxMjIx.tBL8Bluy0GyMKNJIZ2dFrDepVhKr88ZwCdUquE8VGqYg.aFqnyShVwkrdbjnObBLaK-wh5eqCaTm6Aman-3qQDuMg.JPEG.bse14/cloud1.jpg?type=w966" />
            </div>

            <div id="review_wrap">
                <div className="add_wrap">
                    {show &&
                        <div id="review_list">
                            <p className="menu_title">이용후기</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>등록일</th>
                                        {/*<th>수정일</th>*/}
                                    </tr>
                                </thead>
                                {reviewList &&
                                <tbody>
                                    {reviewList.map((data, index) => {
                                        return <tr key={index}
                                                    id={data.key}
                                                    onClick={(e) => {
                                                        _commonSetCommonInfo("selected_review_id", data.key);
                                                        _commonSetCommonInfo("selected_review", data);
                                                        navigate("/reviews_steps/COMMUNITY?detail");
                                                    }} >
                                                    <td className="list_title">{data.title}</td>
                                                    <td className="list_author">{data.author}</td>
                                                    <td className="list_time">{_commonTimestampToDate(data.time)}</td>
                                                    {/*<td className="list_update_time">{_commonTimestampToDate(data.update_time)}</td>*/}
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
                            <button className="submit-button register-button" onClick={(e)=>navigate("/reviews_steps/COMMUNITY?editor")}>작성하기</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Reviews;