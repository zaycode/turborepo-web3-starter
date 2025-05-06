import { ConnectButton } from '@repo/ui/components/connect-button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex w-full justify-center border-border border-b bg-background pt-8 pb-6 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Gerhana Web3 DApp
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-background via-background lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ConnectButton />
        </div>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="font-bold text-4xl">Gerhana Web3 Starter Kit</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-border px-5 py-4 transition-colors hover:border-primary hover:bg-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 font-semibold text-2xl">
            Next.js 15{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-muted-foreground text-sm">
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        <Link
          href="https://tailwindcss.com/docs"
          className="group rounded-lg border border-border px-5 py-4 transition-colors hover:border-primary hover:bg-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 font-semibold text-2xl">
            Tailwind CSS v4{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-muted-foreground text-sm">
            Learn about the latest Tailwind CSS features.
          </p>
        </Link>

        <Link
          href="https://wagmi.sh/"
          className="group rounded-lg border border-border px-5 py-4 transition-colors hover:border-primary hover:bg-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 font-semibold text-2xl">
            Web3{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-muted-foreground text-sm">
            Explore the Web3 ecosystem with wagmi and viem.
          </p>
        </Link>
      </div>
    </main>
  );
}
