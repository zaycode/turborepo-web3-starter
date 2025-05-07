import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <h1 className="font-bold text-4xl">Web3 Starter Kit</h1>
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
