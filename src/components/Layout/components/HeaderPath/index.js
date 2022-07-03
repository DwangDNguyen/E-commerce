import classNames from 'classnames/bind';
import styles from './HeaderPath.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function HeaderPath({ text }) {
    return (
        <section className={cx('headerPath')}>
            <div className={cx('headerPath-content')}>
                <Button href="#" className={cx('headerPath-home')}>
                    Home
                </Button>
                <h3>/ {text}</h3>
            </div>
        </section>
    );
}

export default HeaderPath;
