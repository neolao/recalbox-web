import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "../../components/ApiClient.jsx";


/**
 * The listing of games
 */
export default class ListingPage extends React.Component
{
    /**
     * Constructor
     *
     * @param   {object}    props   Properties
     */
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            systemId: "snes",
            list: [],
            total: 0,
            count: 0,
            indexStart: 0,
            indexEnd: 0
        };
    }


    /**
     * The component is mounted
     */
    componentDidMount()
    {
        this.loadList();
    }

    /**
     * The user changes the system
     *
     * @param   {object}    event   The event
     */
    onChangeSystem(event)
    {
        let parameterName = event.target.name;
        let parameterValue = event.target.value;
        let state = {};
        state[parameterName] = parameterValue;
        this.setState(state);

        process.nextTick(() => {
            this.loadList();
        });
    }

    /**
     * Load the ROM list based on the filters
     */
    loadList()
    {
        apiClient.get(
            `/systems/${this.state.systemId}/roms`, 
            counterpart("api.roms.getMessage"), 
            counterpart("api.roms.getError"), 
            "json"
        ).done((data, status, xhr) => {
            let pagination = xhr.getResponseHeader("Content-Range");
            let paginationSplit = pagination.split("/");
            let total = paginationSplit[1];
            let range = paginationSplit[0];
            let rangeSplit = range.split("-");
            let indexStart = rangeSplit[0];
            let indexEnd = rangeSplit[1];

            this.setState({
                list: data,
                count: data.length,
                total: total,
                indexStart: indexStart,
                indexEnd: indexEnd
            });
        });
    }

    /**
     * render the component
     */
    render()
    {
        // Files
        let rows = [];
        for (let file of this.state.list) {
            rows.push(<tr key={file.basename}>
                <td>{file.basename}</td>
                <td width="100">{file.sizeHuman}</td>
            </tr>);
        }

        // Pagination
        let pagination = [];
    

        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.roms"/></h1>

                <div className="form-container">
                    <div className="small-12 medium-6 columns">
                        <select name="systemId" value={this.state.systemId} onChange={this.onChangeSystem.bind(this)}>
                            <option value="gba">{counterpart("system.gba.label")}</option>
                            <option value="snes">{counterpart("system.snes.label")}</option>
                        </select>
                    </div>
                </div>

                <p className="listing-total">Total: {this.state.total}</p>
                <table className="listing">
                    <thead>
                        <tr>
                            <th><Translate content="page.listing.header.fileName"/></th>
                            <th><Translate content="page.listing.header.size"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>

                <ul className="pagination" role="menubar" aria-label="Pagination">
                    {pagination}
                </ul>

            </article>
        );
    }
}


