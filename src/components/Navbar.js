import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'utils/publicUrl';

function Navbar() {

    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button>
                    <img src={('/assets/home.svg')} alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button>
                    <img src={publicUrl('/assets/explore.svg')} alt="Explore"/>
                </button>
            </div>
						...
        </nav>
    );
}

export default Navbar;