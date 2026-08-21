export default function ExperienceCard({ period, title, description }) {
    return (
        <div className="flex">
            <div className="flex flex-col items-center flex-none w-30">
                <span className="text-xs text-muted my-2 uppercase tracking-wide">
                    {period}
                </span>
                <div className="w-3 h-3 rounded-full bg-accent-secondary mb-1" />
                <div className="w-px grow bg-linear-to-b from-accent-secondary to-border-color" />
            </div>

            <div className="flex flex-col gap-1 px-2 py-7 rounded-lg">
                <div className="flex items-baseline gap-2">
                    <h2 className="font-bold text-xl text-text tracking-wide">
                        {title}
                    </h2>
                </div>
                <p className="text-muted text-sm">{description}</p>
            </div>
        </div>
    );
}
