import React from 'react';
import './commentBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";


const commentBox = (props) => {
    return ( 
        <div className={'CommentBox'}>
            <img src={props.content[3]} className={'CommentPhrasePic'} />
            <div className={'CommentPhrase1'}>{props.content[2]}</div>
            <FontAwesomeIcon icon={faQuoteRight} style={{color: 'rgb(255, 196, 0)', fontSize: '2rem'}} />
            <div className={'CommentPhrase2'}>{props.content[1]}</div>
            <div className={'CommentPhrase3'}>{props.content[0]}</div>
        </div>
     );
}
 
export default commentBox;