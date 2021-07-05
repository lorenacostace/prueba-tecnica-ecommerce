import React from 'react';
import { withRouter } from "react-router-dom";
import routes from "../../../config/routes";
import { BreadCrumbs, BreadCrumbColor } from "./BreadCrumbStyle";

function Breadcrumb (props) {
    const crumbs = routes
        .filter(({ path }) => props.match.path.includes(path))
        .map(({ path, ...rest }) => ({
            path: Object.keys(props.match.params).length
                ? Object.keys(props.match.params).reduce(
                    (path, param) => path.replace(
                        `:${param}`, props.match.params[param]
                    ), path
                )
                : path,
            ...rest
        }));
    if (crumbs.length <= 1) {
        return null;
    }
    return (
        <BreadCrumbs>
            {crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                    <span key={key}>
                            {name}
                        </span>
                ) : (
                    <BreadCrumbColor key={key} to={path}>
                        {`${name} / `}
                    </BreadCrumbColor>
                )
            )}
        </BreadCrumbs>
    )
}

export default withRouter(Breadcrumb);
