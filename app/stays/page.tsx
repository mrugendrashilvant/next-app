import Link from "next/link";

export default function Stays() {
    return (
        <>
            <div className="hero bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className="card bg-base-100 w-96 border mb-4">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <Link href={'/stays/list'} className="btn btn-primary">Search</Link>
                    </div>
                </div>
            </div>
        </>
    )
}