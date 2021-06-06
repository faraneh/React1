import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faHome, faLink, faMoneyBill} from "@fortawesome/free-solid-svg-icons";

const navBar = () => {
        return ( 
            <div className={'Navbar'}>
                <div className={'LogoName'}> <FontAwesomeIcon icon={faBars}/><p>My First React Website</p> </div>
                <div className={'NavLinks'}>
                    <div className={'NavLink'}>
                        <FontAwesomeIcon icon={faHome} style={{marginRight: 8, marginTop: 2}}/>
                        <p>Home</p>
                        {/* <FontAwesomeIcon icon={faCaretDown} style={{marginLeft: 5, color: 'lightGrey', marginTop: 2}}/> */}
                    </div>
                    <div className={'NavLink'}>
                        <FontAwesomeIcon icon={faLink} style={{marginRight: 8, marginTop: 2}}/>
                        <p>Features</p>
                        {/* <FontAwesomeIcon icon={faCaretDown} style={{marginLeft: 5, color: 'lightGrey', marginTop: 2}}/>*/}
                    </div> 
                    <div className={'NavLink'}>
                        <FontAwesomeIcon icon={faMoneyBill} style={{marginRight: 8, marginTop: 2}}/>
                        <p>Pricing</p>
                        {/* <FontAwesomeIcon icon={faCaretDown} style={{marginLeft: 5, color: 'lightGrey', marginTop: 2}}/> */}
                    </div>
                    <button className="btn btn-light"><p>Buy Now</p></button>
                </div>
            </div>
        );
}
 
export default navBar;