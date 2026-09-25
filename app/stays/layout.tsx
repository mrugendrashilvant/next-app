import React from "react";
import Header from "@/app/ui/stays/header";
import Footer from "@/app/ui/stays/footer";

export default function Layout({children}: { children: React.ReactNode }) {

    return (
        <>
            <Header/>
            <main className="pt-[calc(4rem+2rem)]">
                {children}
            </main>
            <Footer/>
        </>
    )
}