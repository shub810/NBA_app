import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import style from "./sideNav.css";

const SideNavItems = () => {

    const items = [
        {   
            type: style.options,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {   
            type: style.options,
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: style.options,
            icon: 'play',
            text: 'Video',
            link: '/video'
        },
        {
            type: style.options,
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: style.options,
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}></FontAwesome>
                        {item.text}
                    </Link>
                </div> 
            )
        } )
    }

    return (
        <div>
            {showItems()}
        </div>
    )    
}

export default SideNavItems;