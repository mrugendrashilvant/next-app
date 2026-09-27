"use client";
import Link from "next/link";
import Alert from "@/app/ui/helper/alert";
import {AlertType} from "@/app/lib/definitions";
import {useState} from "react";

export default function StaysSearch() {
    const [alertData, setAlertData] = useState<{
        type: AlertType,
        text: string,
        key: number
    }>({type: AlertType.success, text: 'Search success', key: 0});

    function handleVerifySearch() {
        const newAlertData = {
            type: AlertType.error,
            text: "Search success",
            key: alertData.key+1
        }
        setAlertData(newAlertData);
    }

    return (
        <div className="max-w-md">
            <div className="card bg-base-100 w-96 border mb-4">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div  className="flex justify-center gap-4 items-center">
                <button onClick={handleVerifySearch} className="btn btn-outline btn-primary">Verify</button>
                <Link href={'/stays/list'} className="btn btn-primary">Search</Link>
            </div>
            <Alert key={alertData.key} type={alertData.type}>
                <span className="text-base-100">{alertData.text}</span>
            </Alert>

        </div>
    )
}