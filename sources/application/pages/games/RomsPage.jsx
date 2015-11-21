import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "../../components/ApiClient.jsx";
import Pagination from "../../components/Pagination.jsx";
import ButtonUpload from "../../components/ButtonUpload.jsx";


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
            indexEnd: 0,
            page: 1,
            itemByPage: 100
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
     * The user clicks on a page
     *
     * @param   {Number}    index   The new page index
     * @param   {object}    event   The click event
     */
    onChangePage(index, event)
    {
        this.setState({page: index});

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
            `/systems/${this.state.systemId}/roms?count=${this.state.itemByPage}&page=${this.state.page}`, 
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
     * The user delete a file
     *
     * @param   {string}    fileName    The file name
     * @param   {object}    event       The event
     */
    onDelete(fileName, event)
    {
        apiClient.remove(
            `/systems/${this.state.systemId}/roms/${fileName}`, 
            counterpart("api.roms.getMessage"), 
            counterpart("api.roms.getError"), 
            "json"
        ).done((data, status, xhr) => {
            this.loadList();
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
                <td>
                    <button className="button tiny alert" onClick={this.onDelete.bind(this, file.basename)}><Translate content="button.delete"/></button>
                </td>
            </tr>);
        }

        // Pagination
        let pageCount = Math.ceil(this.state.total / this.state.itemByPage);

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

                <div className="listing-header">
                    <p className="small-6 columns listing-total">
                        Total: {this.state.total}
                    </p>
                    <p className="small-6 columns listing-actions">
                        <ButtonUpload/>
                    </p>
                </div>
                <table className="listing">
                    <thead>
                        <tr>
                            <th><Translate content="page.listing.header.fileName"/></th>
                            <th><Translate content="page.listing.header.size"/></th>
                            <th><Translate content="page.listing.header.action"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>

                <ul className="pagination" role="menubar" aria-label="Pagination">
                    <Pagination pageCount={pageCount} page={this.state.page} onChange={this.onChangePage.bind(this)}/>
                </ul>

            </article>
        );
    }
}


