import { useAppDispatch } from './app/hooks';
import { removeNotification } from './features/notifications/notificationsSlice';
export interface AlertProps {
    id: number;
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
}

export function Alert(props: AlertProps) {
    const dispatch = useAppDispatch();
    // Sposób 1
    // const getAlertClass = (type: string): string {
    //     switch(props.type) {
    //         case "success":
    //            return "alert-success";
    //         case "info":
    //             return "alert-info";
    //         case "warning":
    //             return "alert-warning";
    //         case "error":
    //             return "alert-danger";
    //         default:
    //             return "alert-light";
    //     }
    // }
    // const typeClass = getAlertClass(props.type);



    // Sposób 2
    const typeClassMap = new Map([
        ['success', 'alert-success'],
        ['info', 'alert-primary'],
        ['warning', 'alert-warning'],
        ['error', 'alert-danger']
    ]);

   const typeClass = typeClassMap.has(props.type) ? typeClassMap.get(props.type) : 'alert-light';


    return (
        <div className={"alert alert-dismissible fade show " + typeClass}>
            {props.message}
            { props.id > 0 ? <button type="button" className="btn-close" aria-label="Close" 
                onClick={() => dispatch(removeNotification({ id: props.id }))}></button> : '' }
        </div>
    )
}