import React from 'react';
import Navbar from '../banner/navbar/navbar';
import MainImageContent from './mainImageContent/mainImageContent';


const banner = () => {
    return ( 
        <React.Fragment>
            <Navbar />
            <MainImageContent />
        </React.Fragment>
     );
}
 
export default banner;