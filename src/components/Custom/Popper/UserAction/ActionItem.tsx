import React from 'react';
import classNames from 'classnames/bind';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import Button from '~/components/Custom/Button';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

interface ActionItemProps {
    data: {
        icon: React.ReactNode | IconDefinition;
        to?: string;
        iconColor: string;
        title: string;
    };
}

const ActionItem: React.FC<ActionItemProps> = ({ data }) => {
    return (
        <Button
            className={cx('menu-item')}
            leftIcon={data.icon as React.ReactNode}
            to={data.to}
            iconColor={data.iconColor}
        >
            {data.title}
        </Button>
    );
};

export default ActionItem;
