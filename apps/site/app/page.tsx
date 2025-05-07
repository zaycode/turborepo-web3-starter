import {Button} from '@repo/ui/components/ui/button';
import Link from 'next/link';


export default function Home() {
    return <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="font-bold text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
                                The Web3 Starter Kit for Modern Applications
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Build decentralized applications with ease using our comprehensive Web3 starter kit.
                                Powered by
                                Next.js 15 and Tailwind CSS v4.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/dapp">
                                <Button size="lg">Launch DApp</Button>
                            </Link>
                            <Link
                                href="https://github.com/yourusername/web3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" variant="outline">
                                    View on GitHub
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div
                            className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                            <div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-20 blur-3xl"/>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="font-bold text-4xl">WEB3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
                            Features
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Everything you need to build modern Web3 applications
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                        <h3 className="font-bold text-xl">TurboRepo</h3>
                        <p className="text-center text-muted-foreground text-sm">
                            Monorepo setup with optimized build system for maximum developer productivity.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                        <h3 className="font-bold text-xl">Tailwind CSS v4</h3>
                        <p className="text-center text-muted-foreground text-sm">
                            Latest Tailwind CSS with modern styling capabilities and optimized build.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                        <h3 className="font-bold text-xl">Web3 Ready</h3>
                        <p className="text-center text-muted-foreground text-sm">
                            Integrated with wagmi, viem, and RainbowKit for seamless blockchain interactions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>


}