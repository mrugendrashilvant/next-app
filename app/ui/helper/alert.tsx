import {AlertType} from "@/app/lib/definitions";
import React, {useEffect, useState} from "react";

const alertStyles = {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info',
};

export default function Alert({type, children, duration=3000}: {type: AlertType, children: React.ReactNode, duration?: number}) {
    const [isVisible, setIsVisible] = useState(true);
    const typeClass = alertStyles[type] || 'alert-info';

    useEffect(() => {
        const timer = setTimeout(()=>{
            setIsVisible(false);
        }, duration);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    if(!isVisible) return null;

    return (
        <>
            <div role="alert" className={`alert ${typeClass}`}>
                {children}
            </div>
        </>
    )
}