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
                <nav className="tab-bar show-for-small-only">
                    <section className="left-small">
                        <a href="#" role="button" className="left-off-canvas-toggle menu-icon"><span></span></a>
                    </section>

                    <section className="middle tab-bar-section">
                        Recalbox
                    </section>
                </nav>
                <nav className="top-bar hide-for-small" data-topbar role="navigation">
                    <ul className="title-area">
                        <li className="name">
                            <h1>
                                <Link to="home">Recalbox Web Interface</Link>
                            </h1>
                        </li>
                    </ul>
                    <section className="top-bar-section">
                        <ul className="left">
                            <li>
                                <Link to="configuration">Configuration</Link>
                            </li>
                        </ul>
                        <ul className="right">
                            <li className="has-dropdown">
                                <a href="#">English</a>
                                <ul className="dropdown">
                                    <li className="active"><a href="#">English</a></li>
                                    <li><a href="#">Français</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </nav>
            </header>
        );
    }
}


