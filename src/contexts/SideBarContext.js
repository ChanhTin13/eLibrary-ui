import PropTypes from 'prop-types';
const { createContext, useState } = require('react');

const SideBarContext = createContext();

function SideBarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSideBar = () => {
        setIsOpen(!isOpen);
    };
    const value = {
        isOpen: isOpen,
        handleSideBar,
    };
    return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;
}
SideBarProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { SideBarContext, SideBarProvider };
