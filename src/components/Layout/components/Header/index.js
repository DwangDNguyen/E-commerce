import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';

import Button from '~/components/Button';

import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [currentUser, setCurrentUser] = useState(true);

    return (
        <header className={cx('wrapper')}>
            <nav className={cx('header-content')}>
                <div className={cx('header-logo')}>
                    <img
                        src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
                        alt="logo"
                    />
                </div>
                <ul className={cx('header-list')}>
                    <li className={cx('header-items')}>
                        <Button href="/">Home</Button>
                    </li>
                    <li className={cx('header-items')}>
                        <Button href="/about">About</Button>
                    </li>
                    <li className={cx('header-items')}>
                        <Button href="/products">Products</Button>
                    </li>
                </ul>
                <div className={cx('header-cart-wrapper')}>
                    <Button href="#" className={cx('cart-btn')} rightIcon={<FaShoppingCart />}>
                        Cart
                        <span className={cx('badge')}>12</span>
                    </Button>
                    {currentUser ? (
                        <Button href="#" rightIcon={<FaUserMinus />} onClick={() => setCurrentUser(false)}>
                            Logout
                        </Button>
                    ) : (
                        <Button href="#" rightIcon={<FaUserPlus />} onClick={() => setCurrentUser(true)}>
                            Login
                        </Button>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
