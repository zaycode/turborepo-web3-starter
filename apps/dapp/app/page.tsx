import { ConnectButton } from "@repo/ui/components/connect-button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-border bg-background pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Gerhana Web3 DApp
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-background via-background lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ConnectButton />
        </div>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold">Gerhana Web3 Starter Kit</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-border px-5 py-4 transition-colors hover:border-primary hover:bg-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Next.js 15{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-muted-foreground">
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        <Link
          href="https://tailwindcss.com/docs"
          className="group rounded-lg border border-border px-5 py-4 transition-colors hover:border-primary hover:bg-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Tailwind CSS v4{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-muted-foreground">
            Learn about the latest Tailwind CSS features.
          </p>
        </Link>

        <Link
          href="https://wagmi.sh/"
          className="group rounded-lg border border-border px-5 py-4 transition-colors hover:border-primary hover:bg-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Web3{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm text-muted-foreground">
            Explore the Web3 ecosystem with wagmi and viem.
          </p>
        </Link>
      </div>
    </main>
  )
}
