import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { _databaseRegistReview, _databaseUpdateReview } from "../helpers/database";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "../css/common.css";
import "../css/review.css";

function MyEditor(props) {

    const navigate = useNavigate();
    const [reviewAuthor, setReviewAuthor] = useState();
    const [reviewTitle, setReviewTitle] = useState();
    const [reviewContent, setReviewContent] = useState("");

    const registReview = async(e) => {

        if(document.querySelector(".editor_title").value.trim() === "") {
            alert("제목을 입력해주세요.");
            return;
        }
        if(reviewContent.trim() === "") {
            alert("내용을 입력해주세요.");
            return;
        }


        if(props && props.id != null) {

            try {
                const review = {
                    update_time: Date.now(),
                    title: document.querySelector(".editor_title").value,
                    content: reviewContent
                }

                await _databaseUpdateReview(props.id, review)
                    .then(() => {
                        window.history.back();
                    });
            } catch (error) {
                console.log(error);
            }

        }else {

            if(document.querySelector(".editor_author").value.trim() === "") {
                alert("작성자 성함을 입력해주세요.");
                return;
            }
            if(document.querySelector(".editor_password").value.trim() === "") {
                alert("비밀번호를 입력해주세요.");
                return;
            }

            try {
                const review = {
                    time: Date.now(),
                    update_time: "",
                    title: document.querySelector(".editor_title").value,
                    content: reviewContent,
                    author: document.querySelector(".editor_author").value,
                    password: document.querySelector(".editor_password").value
                }

                await _databaseRegistReview(review)
                    .then(() => {
                        window.history.back();
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(()=>{
        if(props.data) {
            setReviewContent(props.data.content);
            setReviewAuthor(props.data.author);
            setReviewTitle(props.data.title);
        }
    },[])

    return (
        <>
            <div className="add_wrap" id="editor_wrap">
                {props.id == null && <p className="menu_title">후기 작성하기</p>}
                {props.id != null && <p className="menu_title">후기 수정하기</p>}

                <input className="editor_author" placeholder="작성자 이름" value={reviewAuthor || ""} onChange={(e) => setReviewAuthor(e.target.value)} disabled={props.id != null ? true : false} />
                {props.id == null && <input className="editor_password" placeholder="비밀번호" />}
                <input className="editor_title" placeholder="제목" value={reviewTitle || ""} onChange={(e) => setReviewTitle(e.target.value)} />
                <CKEditor
                    editor={ ClassicEditor }
                    data={ reviewContent }
                    onReady={ editor => {
                        if(document.querySelector(".ck-file-dialog-button"))
                            document.querySelector(".ck-file-dialog-button").style.display = "none";
                        if(document.querySelector(".ck-file-dialog-button").nextSibling)
                            document.querySelector(".ck-file-dialog-button").nextSibling.style.display = "none";
                        if(document.querySelector(".ck-file-dialog-button").nextSibling.nextSibling)
                            document.querySelector(".ck-file-dialog-button").nextSibling.nextSibling.style.display = "none";
                        if(document.querySelector(".ck-file-dialog-button").nextSibling.nextSibling.nextSibling)
                            document.querySelector(".ck-file-dialog-button").nextSibling.nextSibling.nextSibling.style.display = "none";
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setReviewContent(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
                {props.id == null && <button className="submit-button" onClick={registReview}>등록하기</button>}
                {props.id != null && <button className="submit-button" onClick={registReview}>수정하기</button>}

                <button className="submit-button cancel-button" onClick={(e)=>{
                    if(props.id != null) props.setViewName("detail");
                    else window.history.back();
                }}>취소</button>
            </div>
        </>
    );
}
export default MyEditor;
