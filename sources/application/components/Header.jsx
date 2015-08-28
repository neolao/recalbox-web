/**
 * The application header
 */
export default class Header extends React.Component {

    render() {
        return (
            <header>
                <nav className="top-bar" data-topbar role="navigation">
                    <ul className="title-area">
                        <li className="name">
                            <h1>Recalbox Web Interface</h1>
                        </li>
                        <li className="toggle-topbar menu-icon">
                            <a href="#"><span>Menu</span></a>
                        </li>
                    </ul>
                    <section className="top-bar-section">
                        <ul className="right">
                            <li className="active">
                                <a href="#">Right Button Active</a>
                           </li>
                        </ul>
                    </section>
                </nav>
            </header>
        );
    }
}


