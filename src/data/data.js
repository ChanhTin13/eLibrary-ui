import { faAslInterpreting, faHSquare, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const navigation = [
    {
        code: 'home',
        icon: <FontAwesomeIcon icon={faAslInterpreting} />,
        action: null,
    },
    {
        code: 'setting',
        icon: <FontAwesomeIcon icon={faHSquare} />,
        action: null,
    },
    {
        code: 'student',
        icon: <FontAwesomeIcon icon={faHouse} />,
        action: null,
    },
];

export const MENU_CHILD = [
    {
        code: 'home',
        name: 'Quản lý hệ thống',
        child: [
            {
                name: 'Tin tức ',
                action: 'https://www.w3schools.com/css/css3_transitions.asp',
            },
            {
                name: 'Truyền thông',
                action: '/',
            },
        ],
    },
    {
        code: 'setting',
        name: 'Cài đặt',
        child: [
            {
                name: 'Tin tức',
                action: '/',
            },
            {
                name: 'Truyền thông',
                action: '/',
            },
        ],
    },
];
