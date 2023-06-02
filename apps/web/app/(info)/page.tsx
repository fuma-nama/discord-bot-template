import Link from "next/link";
import { cn } from "@/utils/cn";
import { buttonVariants } from "ui/components/button";
import clsx from "clsx";
import { discord_url, invite_url } from "@/utils/shared";

export default async function Home() {
    return (
        <main className="flex flex-1 flex-col items-center py-12 md:py-24 gap-24 container">
            <div
                className={clsx(
                    "z-[2] mt-auto relative flex flex-col gap-2 place-items-center text-center",
                    "before:-z-[1] before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10",
                    "after:max-md:hidden after:-z-[1] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"
                )}
            >
                <h1 className="text-4xl font-bold dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
                    Discord Bot
                </h1>
                <p className="text-muted-foreground">
                    The best Discord bot you've ever seen
                </p>
                <div className="mt-4 flex flex-col md:flex-row gap-4 max-md:w-full">
                    <Link href="/dashboard" className={cn(buttonVariants())}>
                        Dashboard
                    </Link>
                    <a
                        href={invite_url}
                        target="_blank"
                        rel="noopener noreferrerr"
                        className={cn(buttonVariants({ variant: "secondary" }))}
                    >
                        {`Invite ->`}
                    </a>
                </div>
            </div>

            <div className="mt-auto grid text-center md:grid-cols-3 md:text-left md:w-full">
                <Link
                    href="/docs"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Learn{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p
                        className={`m-0 max-w-[30ch] text-sm text-muted-foreground`}
                    >
                        Learn to use Discord Bot for your community.
                    </p>
                </Link>
                <a
                    href={invite_url}
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Invite{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p
                        className={`m-0 max-w-[30ch] text-sm text-muted-foreground`}
                    >
                        Invite and explore powerful features of discord bot.
                    </p>
                </a>
                <a
                    href={discord_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Support{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p
                        className={`m-0 max-w-[30ch] text-sm text-muted-foreground`}
                    >
                        Ask for help and Discuss about new features in our
                        community server.
                    </p>
                </a>
            </div>
        </main>
    );
}
