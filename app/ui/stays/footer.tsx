import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="relative overflow-hidden bg-slate-500 text-white">
                {/* Background Glow */}
                <div
                    className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-400/20 blur-3xl"/>

                <div className="relative mx-auto max-w-7xl px-6 pt-24">
                    {/* CTA */}
                    <div
                        className="flex flex-col gap-8 border-b border-white/10 pb-16 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/50">
                                Stays
                            </p>

                            <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                                Ready to discover your next perfect stay?
                            </h2>
                        </div>

                        <Link
                            href={'/stays'}
                            className="rounded-full bg-white px-8 py-4 font-medium text-slate-900 transition-all duration-300 hover:scale-105">
                            Explore Stays
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-8 py-12 md:flex-row md:justify-between">
                        <div>
                            <p className="text-white/40">Contact</p>
                            <a
                                href="mailto:hello@stay.now"
                                className="mt-2 block text-lg hover:text-violet-400"
                            >
                                hello@stay.now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Huge Brand Name */}
                <div className="relative select-none">
                    <h1
                        className="
                        text-center
                        font-black
                        tracking-tight
                        leading-normal
                        text-white/10
                        text-[22vw]
                        md:text-[16vw]
                        "
                    >
                        Stays
                    </h1>
                </div>

                {/* Bottom Bar */}
                <div
                    className="flex mx-auto max-w-7xl flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/40 md:flex-row md:justify-between">
                    <p>© 2026 Stays. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}