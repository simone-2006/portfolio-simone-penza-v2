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
                <span className="my-3 px-1 text-center text-xs leading-snug uppercase tracking-wide text-muted">
                    {period}
                </span>
                <div className="mb-2 h-3 w-3 rounded-full bg-accent-secondary" />
                <div className="w-px grow bg-linear-to-b from-accent-secondary to-border-color" />
            </div>

            <div className="flex min-w-0 flex-col gap-4 px-3 py-6 sm:px-4">
                <div className="space-y-1.5">
                    {kind ? (
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                            {kind}
                        </p>
                    ) : null}
                    <h3 className="font-serif text-2xl leading-snug break-words text-text">
                        {title}
                    </h3>
                    {place ? (
                        <p className="text-sm leading-relaxed text-text-secondary">{place}</p>
                    ) : null}
                </div>

                {sections.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {sections.map((section) => (
                            <div key={section.title} className="space-y-1.5">
                                <p className="text-xs font-semibold tracking-wide text-text-secondary">
                                    {section.title}
                                </p>
                                <p className="text-sm leading-relaxed break-words text-muted">{section.text}</p>
                            </div>
                        ))}
                    </div>
                ) : description ? (
                    <p className="text-sm leading-relaxed break-words text-muted">{description}</p>
                ) : null}

                {stack ? (
                    <p className="pt-1 text-xs leading-relaxed text-muted">{stack}</p>
                ) : null}
            </div>
        </div>
    );
}
