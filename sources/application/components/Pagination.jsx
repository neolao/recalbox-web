import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import apiClient from "./ApiClient.jsx";

/**
 * Pagination
 */
export default class Pagination extends React.Component
{
    /**
     * Constructor
     *
     * @param   {object}    props   The properties
     */
    constructor(props)
    {
        super(props);
    }

    /**
     * The user clicks on a page
     *
     * @param   {Number}    index   The new page index
     * @param   {object}    event   The click event
     */
    onChange(index, event)
    {
        if (this.props.onChange) {
            this.props.onChange(index, event);
        }
    }

    /**
     * render the copmonent
     */
    render()
    {
        if (this.props.pageCount <= 1) {
            return <div></div>;
        }

        let pages = [];
        for (let index = 1; index <= this.props.pageCount; index++) {
            if (index === this.props.page) {
                pages.push(
                    <li className="pagination__page pagination__page--current current">
                        <a>{index}</a>
                    </li>
                );
            } else {
                pages.push(
                    <li className="pagination__page">
                        <a onClick={this.onChange.bind(this, index)}>{index}</a>
                    </li>
                );
            }
        }

        return (
            <ul className="pagination">
                {pages}
            </ul>
        );
    }
}
