const { createContext, useState } = require('react');

const SideBarContext = createContext();

function SideBarProvider({ children }) {
    const [toggle, setToggle] = useState(true);

    const handleSideBar = () => {
        setToggle(!toggle);
    };
    const value = {
        toggle,
        handleSideBar,
    };
    return <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>;
}

export { SideBarContext, SideBarProvider };
