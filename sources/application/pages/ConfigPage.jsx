let RouteHandler = ReactRouter.RouteHandler;
let Link = ReactRouter.Link;

/**
 * The configuration page
 */
export default class ConfigPage extends React.Component
{
    /**
     * render the component
     */
    render()
    {
        return (
            <div className="layout">
                <aside className="layout__sidebar hide-for-small">
                    <ul className="side-nav">
                        <li><Link to="configuration">General</Link></li>
                    </ul>
                </aside>
                <main className="layout__content">
                    <RouteHandler/>
                </main>
            </div>
        );
    }
}


