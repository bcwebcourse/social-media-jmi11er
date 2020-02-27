import React from 'react';
import css from './Header.module.css';
import publicUrl from 'components/utils/publicUrl';

function Header() {

  return (
    <div className={css.header}>
      <div>
        <button>
          <img src={publicUrl('/assets/camera.svg')} alt="Camera"/>
        </button>
      </div>
      <div>
        <button>
          <img src={publicUrl('/assets/logo.png')} alt="Logo"/>
        </button>
      </div>
      <div>
        <button>
          <img src={publicUrl('/assets/message.svg')} alt="Message"/>
        </button>
      </div>
    </div>
  );
}
export default Header;
/*function Navbar() {

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
}*/