export interface AlertProps {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
}

export function Alert(props: AlertProps) {
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
        ['success', 'alert-sucess'],
        ['info', 'alert-primary'],
        ['warning', 'alert-warning'],
        ['error', 'alert-danger']
    ]);

   const typeClass = typeClassMap.has(props.type) ? typeClassMap.get(props.type) : 'alert-light';


    return (
        <div className={"alert " + typeClass}>{props.message}</div>
    )
}