import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'components/utils/publicUrl';

function Navbar(props) {//props is a function passed from App
    function handleNavChange(page){//page is passed by the onClick
        if (props.onNavChange){
            props.onNavChange(page);//passing the page to the prop, i.e. App's function
        }
    }
        
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('home')}>
                    <img src={publicUrl('/assets/home.svg')} alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('explore')}>
                    <img src={publicUrl('/assets/explore.svg')} alt="Explore"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('newpost')}>
                    <img src={publicUrl('/assets/newpost.svg')} alt="New Post"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('activity')}>
                    <img src={publicUrl('/assets/like.svg')} alt="Like"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('profile')}>
                    <img src={publicUrl('/assets/profile.svg')} alt="Profile"/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;