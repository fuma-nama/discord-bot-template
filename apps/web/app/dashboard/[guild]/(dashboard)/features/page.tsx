import features from "@/data/features";
import { LucideIcon } from "ui/icons";
import Link from "next/link";

/**
 * List of Features
 */
export default async function FeaturesPage({
    params,
}: {
    params: { guild: string };
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
                <FeatureCard
                    key={feature.href}
                    href={`/dashboard/${params.guild}/features/${feature.href}`}
                    title={feature.title}
                    body={feature.body}
                    icon={feature.icon}
                />
            ))}
        </div>
    );
}

function FeatureCard({
    body,
    href,
    icon: Icon,
    title,
}: {
    title: string;
    icon: LucideIcon;
    body: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="flex flex-col border-[1px] rounded-lg p-4 transition-colors hover:border-primary"
        >
            <div className="p-[1px] bg-gradient-to-br from-slate-900 to-slate-50 rounded-md h-fit w-fit mb-2">
                <Icon className="bg-background p-2 w-10 h-10 rounded-md" />
            </div>
            <div className="flex flex-col items-start">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm">{body}</p>
            </div>
        </Link>
    );
}
