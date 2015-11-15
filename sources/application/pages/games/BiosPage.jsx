import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "../../components/ApiClient.jsx";
import Pagination from "../../components/Pagination.jsx";


/**
 * The system BIOS
 */
export default class BiosPage extends React.Component
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
        let self = this;
        apiClient.get(
            `/bios?count=${this.state.itemByPage}&page=${this.state.page}`,
            counterpart("api.bios.getMessage"), 
            counterpart("api.bios.getError"), 
            "json"
        ).done((data, status, xhr) => {
            let pagination = xhr.getResponseHeader("Content-Range");
            let paginationSplit = pagination.split("/");
            let total = paginationSplit[1];
            let range = paginationSplit[0];
            let rangeSplit = range.split("-");
            let indexStart = rangeSplit[0];
            let indexEnd = rangeSplit[1];

            self.setState({
                list: data,
                count: data.length,
                total: total,
                indexStart: indexStart,
                indexEnd: indexEnd
            });
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
        let pageCount = Math.ceil(this.state.total / this.state.itemByPage);


        return (
            <article className="page">
                <h1 className="page__title"><Translate content="page.title.bios"/></h1>
                
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
                    <Pagination pageCount={pageCount} page={this.state.page} onChange={this.onChangePage.bind(this)}/>
                </ul>
            </article>
        );
    }
}


