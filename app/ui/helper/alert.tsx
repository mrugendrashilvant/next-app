import {AlertType} from "@/app/lib/definitions";
import React, {useEffect, useState} from "react";

export default function Alert({type, children, duration=3000}: {type: AlertType, children: React.ReactNode, duration?: number}) {
    const [isVisible, setIsVisible] = useState(true);

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
            <div role="alert" className={`alert alert-${type}`}>
                {children}
            </div>
        </>
    )
}