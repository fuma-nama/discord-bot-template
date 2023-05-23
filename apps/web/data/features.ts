import {
    BotIcon,
    BrainCircuitIcon,
    HardDriveIcon,
    MessageCircleIcon,
    MusicIcon,
    SearchIcon,
} from "lucide-react";

const features = [
    {
        href: `welcome-message`,
        title: "Welcome Message",
        body: "Send a message to new members",
        icon: MessageCircleIcon,
    },
    {
        href: `storage`,
        title: "Storage",
        body: "Drop down some key notes",
        icon: HardDriveIcon,
    },
    {
        href: "ai",
        title: "Discord AI",
        body: "Generate some ideas with AI",
        icon: BrainCircuitIcon,
    },
    {
        href: `music`,
        title: "Music",
        body: "Play any music in Discord",
        icon: MusicIcon,
    },
    {
        href: `analytics`,
        title: "Analytics",
        body: "Analyze the data of your server",
        icon: SearchIcon,
    },
    {
        href: `automation`,
        title: "Automation",
        body: "Automate simple tasks such as sending a message",
        icon: BotIcon,
    },
];

export default features;