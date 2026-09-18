export default function ExperienceCard({
    period,
    kind,
    title,
    company,
    location,
    sections = [],
    description,
    stack,
}) {
    const place = [company, location].filter(Boolean).join(" · ");

    return (
        <div className="flex min-w-0">
            <div className="flex w-24 flex-none flex-col items-center sm:w-30">
                <span className="my-2 text-center text-xs uppercase tracking-wide text-muted">
                    {period}
                </span>
                <div className="mb-1 h-3 w-3 rounded-full bg-accent-secondary" />
                <div className="w-px grow bg-linear-to-b from-accent-secondary to-border-color" />
            </div>

            <div className="flex min-w-0 flex-col gap-2 px-2 py-4">
                <div>
                    {kind ? (
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
                            {kind}
                        </p>
                    ) : null}
                    <h2 className="text-lg font-bold tracking-wide break-words text-text">
                        {title}
                    </h2>
                    {place ? (
                        <p className="mt-0.5 text-sm text-text-secondary">{place}</p>
                    ) : null}
                </div>

                {sections.length > 0 ? (
                    <div className="flex flex-col gap-2">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <p className="text-xs font-semibold tracking-wide text-text-secondary">
                                    {section.title}
                                </p>
                                <p className="text-sm break-words text-muted">{section.text}</p>
                            </div>
                        ))}
                    </div>
                ) : description ? (
                    <p className="text-sm break-words text-muted">{description}</p>
                ) : null}

                {stack ? (
                    <p className="text-xs text-muted">{stack}</p>
                ) : null}
            </div>
        </div>
    );
}
