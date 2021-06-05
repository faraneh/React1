import React from 'react';

const firstRow = () => {
    const classP = {
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 70,
        margin: 'auto',
        width: '60%',
    }
    return ( 
        <div style={classP}>
            <h2 style={{marginBottom: 30, fontWeight: '700'}}>WHO WE are?</h2>
            <p style={{color: 'lightgrey', fontSize: '1.19rem', fontWeight: '300'}}>According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</p>
        </div>
     );
}
 //gfg
export default firstRow;