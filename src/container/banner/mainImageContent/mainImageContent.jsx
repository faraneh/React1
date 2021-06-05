import React from 'react';
import './mainImageContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faShare, faUserAlt} from "@fortawesome/free-solid-svg-icons";

const mainImageContent = () => {
    return ( 
        <div className={'MainImageContent'}>
            <h3>This is our great company.</h3>
            <FontAwesomeIcon icon={faShare} className={"LinkOnMainImage"}/>
            <FontAwesomeIcon icon={faEnvelope} className={"LinkOnMainImage"}/>
            <FontAwesomeIcon icon={faUserAlt} className={"LinkOnMainImage"}/>
        </div>
     );
}
 
export default mainImageContent;