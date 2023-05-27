import { Chart } from "./chart";

export default function Analystics() {
    return (
        <>
            <h2 className="text-2xl font-bold">Analytics</h2>
            <p className="text-muted-foreground text-sm">
                Analytics data and usage of last few weeks
            </p>
            <div className="flex flex-col p-4 border-[1px] rounded-lg mt-4">
                <p className="text-muted-foreground text-sm">Last week</p>
                <h3 className="font-semibold">Command Usage</h3>
                <div className="pr-4 pb-4 mt-8 max-w-xl">
                    <Chart />
                </div>
            </div>
        </>
    );
}
