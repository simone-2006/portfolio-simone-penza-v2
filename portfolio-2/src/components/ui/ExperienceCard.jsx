export default function ExperienceCard({ period, title, description }) {
    return (
        <div className="flex min-w-0">
            <div className="flex w-24 flex-none flex-col items-center sm:w-30">
                <span className="my-2 text-center text-xs uppercase tracking-wide text-muted">
                    {period}
                </span>
                <div className="mb-1 h-3 w-3 rounded-full bg-accent-secondary" />
                <div className="w-px grow bg-linear-to-b from-accent-secondary to-border-color" />
            </div>

            <div className="flex min-w-0 flex-col gap-1 px-2 py-4">
                <h2 className="text-lg font-bold tracking-wide break-words text-text">
                    {title}
                </h2>
                <p className="text-sm break-words text-muted">{description}</p>
            </div>
        </div>
    );
}
