"use client";
import React, {useState} from "react";
import { motion } from "framer-motion";

export default function Header() {
    const links = ["Home", "Features", "Pricing", "About"];
    const [active, setActive] = useState("Home");
    return (
        <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
            <nav className="flex rounded-full border bg-white/10 p-2 backdrop-blur-xl">
                {links.map((link) => (
                    <button
                        key={link}
                        onClick={() => setActive(link)}
                        className="relative px-5 py-2 text-white"
                    >
                        {active === link && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 rounded-full bg-white"
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            />
                        )}

                        <span
                            className={`relative z-10 ${
                                active === link ? "text-slate-900" : "text-slate-700"
                            }`}
                        >
{link}
</span>
                    </button>
                ))}
            </nav>
        </header>
    )
}