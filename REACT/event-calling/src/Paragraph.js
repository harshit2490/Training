import React from 'react';
import Footer from './Footer';

function Paragraph(props) {
    return (
        <div className="child">
            This data is necessacy: {props.num}
            <Footer />
        </div>
    );
}

export default Paragraph;