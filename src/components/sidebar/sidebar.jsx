import "./sidebar.scss";

const Sidebar = () => {

    return (
        <div className="sidebar-container">
           <img src="/logo.svg" className="logo" alt="logo" />

            <div className="sidebar-menu">
                <a href="#" className="sidebar-menu-links">
                   <img src="/dashboard.svg" alt="dashboard" />
                </a>
                <a href="" className="sidebar-menu-links">
                   <img src="/vuesax.svg" alt="vuesax" />
                </a>
                <a href="" className="sidebar-menu-links">
                   <img src="/profile.svg" alt="profile" />
                </a>
                <a href="" className="sidebar-menu-links">
                    <img src="/box.svg" alt="box" />
                </a>
                <a href="" className="sidebar-menu-links">
                   <img src="/discount.svg" alt="discount" />
                </a>
                <a href="" className="sidebar-menu-links">
                  <img src="/info.svg" alt="" />
                </a>
                <div className="theme">
                    <button className="theme-menu-links">
                        <div className="theme-conteiner active">
                            <img src="/light.svg" alt="light-mode" />
                        </div>
                    </button>
                    <button className="theme-menu-links">
                      <img src="/dark.svg" alt="dark-mode" />
                    </button>
                </div>
            </div>

            <div className="sidebar-footer">
                <a href="" className="sidebar-footer-links">
                   <img src="/arrow-right.svg" alt="arrow-right" />
                </a>
                <a href="" className="sidebar-footer-links">
                   <img src="/settings.svg" alt="settings" />
                </a>
                <a href="" className="sidebar-footer-links">
                    <img src="/logout.svg" alt="logout" />
                </a>
            </div>
        </div>
    );
}

export default Sidebar;