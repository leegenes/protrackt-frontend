import React from 'react';

import styles from '../styles/app.css';

const Navigation = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <a href="#" className={styles.navlink} id={styles.navlinklogo}>PROTRACKT</a>
        <button className={styles.navlink} id={styles.navlinklogin} type="button">>Sign In</button>
      </div>
    </div>
  )
}

export default Navigation;
