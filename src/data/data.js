import { faAslInterpreting, faHSquare, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEarthAsia, faKeyboard, faUser } from '@fortawesome/free-solid-svg-icons';

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
export const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        iconColor: '#000',
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Thông tin',
        iconColor: '#0088cc',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Đổi mật khẩu',
        to: '/feedback',
        iconColor: '#10ca93',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Đăng xuất',
        iconColor: '#e04f5f',
    },
];
