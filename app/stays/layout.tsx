import React from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <header>Header</header>
            <div>{children}</div>
            <footer>Footer</footer>
        </>
    )
}