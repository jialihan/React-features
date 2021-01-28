import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, linkUrl, history, match }) => (
    <div style={{ width: '100px', height: '100px', border: '1px solid blue' }}
        onClick={() => history.push(`${match.url}profile/${linkUrl}`)}
    >
        <h1 className='title'>{title}</h1>
    </div >
);

export default withRouter(MenuItem);