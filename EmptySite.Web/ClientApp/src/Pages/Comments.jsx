
import React, { useState } from 'react';
import "bootswatch/dist/morph/bootstrap.min.css";


const Comments = () => {

    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    const onButtonClick = () => {
        setMessage("I'm sorry, but I'm not paying money to give this dumb little site a backend! If you feel that you were cheated out of a comment that was rightfully yours, call me to relate it in person and get one (1) FREE reaction! (or two, if the comment is good enough) *terms and conditions may apply");
        setComment('');
    }

    return (
        <div style={{ marginTop: 80 }}>
            <h1>Here, I decided to be kind enough and give this site some functionality! Do you have any suggestions/comments?
                You can put them up here, for everyone to see. How awesome!</h1>
            <hr />
            <textarea className='form-control mb-2' rows="3" placeholder='Write your comments here' value={comment} onChange={e => setComment(e.target.value) } />
            <br />
            <button className='btn btn-light' onClick={onButtonClick}>Submit</button>
            <br />
            {!!message && <h3>{message}</h3> }
        </div>
    )
};


export default Comments;