import React from 'react';

interface NotShowNotiProps {
    handleNotification: () => void;

}

function NotShowNoti(props :NotShowNotiProps) {
    const {handleNotification} = props;

    return (
        <>
            <button onClick={handleNotification}>알림 보기</button>
        </>
    );
}

export default NotShowNoti;