import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function WelcomeMessage() {
    return (
        <>
            <h1 className="text-2xl font-bold">Welcome Message</h1>
            <p className="text-muted-foreground text-sm">
                Send a new message when someone joined the server
            </p>
            <form className="flex flex-col gap-4 flex-1">
                <fieldset>
                    <label htmlFor="channel" className="text-sm font-medium">
                        Channel
                    </label>
                    <Select>
                        <SelectTrigger id="channel" className="mt-2">
                            <SelectValue
                                placeholder={
                                    <p className="text-muted-foreground">
                                        Select...
                                    </p>
                                }
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </fieldset>
                <fieldset>
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Type something here"
                        className="mt-2"
                    />
                </fieldset>
                <div className="mt-auto flex flex-row gap-4 justify-end">
                    <Button className="w-24">Save</Button>
                    <Button className="w-24" variant="secondary">
                        Discard
                    </Button>
                </div>
            </form>
        </>
    );
}
