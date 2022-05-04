import React from 'react';


import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.styles.scss'

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">

            {/* <div className="menu-item">

                    <div className="content">
                        <h1 className="title">Jackets</h1>
                        <span className="subtitle">
                            Shop Now
                        </span>
                    </div>
                </div> */}
            {sections.map(({ title, imageUrl, id, size, linkUrl }) => (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />)
            )}


        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory);