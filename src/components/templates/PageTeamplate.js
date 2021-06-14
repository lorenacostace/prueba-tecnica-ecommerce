import React from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";

const PageTemplate = ({
                          header, children, ...props
                      }) => (
    <Page {...props}>
        {header && <Header>{ header }</Header>}
        {children}
    </Page>
);

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.header`
  position: relative;
  top: 0;
  width: 100%;
  z-index: 20;
`;

PageTemplate.propTypes = {
    children: PropTypes.any.isRequired,
    header: PropTypes.node,
};

PageTemplate.defaultProps = {
    header: null,
};

export default PageTemplate;
