import { Button } from "ui/components/button";

export default function AIPage() {
    return (
        <div>
            <div className="flex flex-col rounded-lg p-4 bg-gradient-to-br from-blue-100 via-pink-200 to-purple-400 text-black shadow-xl shadow-purple-200/20">
                <h3 className="text-xl font-bold">Discord AI</h3>
                <p className="text-sm">
                    Use our powerful AI to generate perfect ideas for you daily
                    life
                </p>
                <Button className="mt-8">Join Waitlist</Button>
            </div>
        </div>
    );
}
