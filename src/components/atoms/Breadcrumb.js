import React from 'react';
import { withRouter, Link } from "react-router-dom";
import routes from "../../config/routes";

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
        <div>
            {crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                    <span key={key}>
                            {name}
                        </span>
                ) : (
                    <Link key={key} to={path}>
                        {`${name} / `}
                    </Link>
                )
            )}
        </div>
    )
}

export default withRouter(Breadcrumb);
