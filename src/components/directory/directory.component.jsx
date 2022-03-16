import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: '../../images/hats.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: '../../images/jackets.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: '../../images/sneakers.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: '../../images/womens.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: '../../images/mens.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
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
                {this.state.sections.map(({ title, imageUrl, id, size }) => (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)
                )}


            </div>
        );
    }
}

export default Directory;