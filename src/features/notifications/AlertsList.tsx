import { useAppSelector } from "../../app/hooks";
import { selectLast3Notifications } from "./notificationsSlice";
import { Alert } from '../../Alert';

export function AlertsList() {
    const noticications = useAppSelector(selectLast3Notifications);

    return (
        <div className="position-fixed bottom-0 w-100">
            <div className="container">
                { noticications.map(notification => <Alert id={notification.id} type={notification.type} message={notification.message} />) }
            </div>
        </div>
    );
}