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
    const [reviewContent, setReviewContent] = useState();

    const registReview = async(e) => {
        if(props && props.id != null) {

            try {
                const review = {
                    update_time: Date.now(),
                    title: document.querySelector(".editor_title").value,
                    content: reviewContent
                }

                await _databaseUpdateReview(props.id, review)
                    .then(() => {
                        window.location.reload();
                    });
            } catch (error) {
                console.log(error);
            }

        }else {

            try {
                const review = {
                    time: Date.now(),
                    update_time: "",
                    title: document.querySelector(".editor_title").value,
                    content: reviewContent,
                    author: document.querySelector(".editor_author").value,
                    password: document.querySelector(".password").value
                }

                await _databaseRegistReview(review)
                    .then(() => {
                        window.location.reload();
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
                {props.id == null && <p style={{fontWeight:"800"}}>후기 작성하기</p>}
                {props.id != null && <p style={{fontWeight:"800"}}>후기 수정하기</p>}
                
                {props.id == null && <input className="editor_author" placeholder="작성자" value={reviewAuthor}/>}
                {props.id != null && <div className="author">작성자 : {reviewAuthor}</div>}
                {props.id == null && <input className="editor_password" placeholder="비밀번호" />}
                <input className="editor_title" placeholder="제목" value={reviewTitle}/>
                <CKEditor
                    editor={ ClassicEditor }
                    data={ reviewContent }
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        document.querySelector(".ck-file-dialog-button").style.display = "none";
                        document.querySelector(".ck-file-dialog-button").nextSibling.style.display = "none";
                        document.querySelector(".ck-file-dialog-button").nextSibling.nextSibling.style.display = "none";
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
                {props.id == null && <button className="submit-button" onClick={registReview}>등록</button>}
                {props.id != null && <button className="submit-button" onClick={registReview}>수정</button>}
                
                <button className="cancel-button" onClick={(e)=>window.location.reload()}>취소</button>
            </div>
        </>
    );
}
export default MyEditor;