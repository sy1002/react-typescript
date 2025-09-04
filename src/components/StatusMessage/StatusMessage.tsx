import React from 'react';

type StatusType = 'success' | 'error' | 'warning' | 'info';

interface StatusMessagePropsInterface {
    status: StatusType;
}


function StatusMessage(props :StatusMessagePropsInterface) {
    const {status} = props;
    console.log(`StatusMessage rendered with status: ${status}`);

    switch (status) {
        case 'success':
            return <div className="status-message success">Operation was successful!</div>;
        case 'error':
            return <div className="status-message error">An error occurred. Please try again.</div>;
        case 'warning':
            return <div className="status-message warning">Warning! Please check your input.</div>;
        case 'info':
            return <div className="status-message info">This is an informational message.</div>;
        default:
            return null;
    }
}

export default StatusMessage;