let Link = ReactRouter.Link;

/**
 * The application header
 */
export default class Header extends React.Component
{
    /**
     * render the copmonent
     */
    render()
    {
        return (
            <header>
                <nav className="top-bar" data-topbar role="navigation">
                    <ul className="title-area">
                        <li className="name">
                            <h1><Link to="home">Recalbox Web Interface</Link></h1>
                        </li>
                        <li className="toggle-topbar menu-icon">
                            <a href="#"><span>Menu</span></a>
                        </li>
                    </ul>
                    <section className="top-bar-section">
                        <ul className="right">
                            <li className="has-dropdown">
                                <a href="#">English</a>
                                <ul className="dropdown">
                                    <li className="active"><a href="#">English</a></li>
                                    <li><a href="#">Français</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="left">
                            <li>
                                <Link to="configuration">Configuration</Link>
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
        );
    }
}


