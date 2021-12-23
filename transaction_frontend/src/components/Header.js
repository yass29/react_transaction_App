import React from 'react'

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "white",
        border:'black',
        color: 'blue',
        textAlign: 'center',
        borderStyle : 'double' ,
    }

    return( 
        <div className="row">
            <div className="col-12">
                <div style={headerStyle}>
                <h1>Transaction Assignment</h1>
                </div>
            </div>

        </div>
        
    )
} 