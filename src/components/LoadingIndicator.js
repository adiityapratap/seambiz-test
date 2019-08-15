import React, { PureComponent } from 'react';
import { CircularProgress } from '@material-ui/core';
 
export default class LoadingIndicator extends PureComponent {
    render() {
        return (
            <div className="loader"><CircularProgress className="progress-loader" /></div>
        )
    }
} 