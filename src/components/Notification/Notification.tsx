import React, {useState} from 'react';
import ShowNoti from "./ShowNoti";
import NotShowNoti from "./NotShowNoti";

function Notification() {
    const [showNotification, setShowNotification] = useState<boolean>(false);

    const handleNotification = () => {
        setShowNotification((prev) => !prev);
    };

    return (
        <>
            {showNotification && <ShowNoti handleNotification={handleNotification} />}
            {!showNotification && <NotShowNoti handleNotification={handleNotification} />}
        </>
    );
}

export default Notification;