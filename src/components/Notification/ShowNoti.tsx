import React from 'react';

interface ShowNotiProps {
    handleNotification: () => void;
}

function ShowNoti(props: ShowNotiProps) {
    const {handleNotification} =props;

    return (
        <>
            <h1>📢 새로운 알림이 도착했습니다!</h1>
            <button onClick={handleNotification}>알림 닫기</button>
        </>
    );
}

export default ShowNoti;