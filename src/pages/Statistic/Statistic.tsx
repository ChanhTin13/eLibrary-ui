import * as React from 'react';
import Card from '~/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import grids from '~/grid/Grid.module.scss';
import styles from './Statistic.module.scss';

const grid = classNames.bind(grids);
const cx = classNames.bind(styles);
function Statistic() {
    return (
        <div className={grid('grid')}>
            <div className={cx('card-content')}>
                <div className={grid('row')}>
                    <div className={grid('col', 'l-4', 'm-6', 'c-6')}>
                        <Card
                            icon={<FontAwesomeIcon icon={faUser} />}
                            iconColor="blue"
                            textContent="Student"
                            numberContent={12}
                        />
                    </div>
                    <div className={grid('col', 'l-4', 'm-6', 'c-6')}>
                        <Card
                            icon={<FontAwesomeIcon icon={faUser} />}
                            iconColor="orange"
                            textContent="Reserved"
                            numberContent={40}
                        />
                    </div>
                    <div className={grid('col', 'l-4', 'm-6', 'c-6')}>
                        <Card
                            icon={<FontAwesomeIcon icon={faUser} />}
                            iconColor="red"
                            textContent="New"
                            numberContent={36}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('chart-content')}></div>
        </div>
    );
}

export default Statistic;
