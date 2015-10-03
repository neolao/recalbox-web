import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "../../components/ApiClient.jsx";


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
            indexEnd: 0
        };
    }


    /**
     * The component is mounted
     */
    componentDidMount()
    {
        let self = this;
        apiClient.get(
            "/bios", 
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
                <h1 className="page__title"><Translate content="page.title.bios"/></h1>
                
                <p>Total: {this.state.total}</p>
                <table className="small-12 medium-12 large-8 columns end">
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


