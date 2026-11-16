function StackList({ stack }) {
    const items = Array.isArray(stack)
        ? stack
        : typeof stack === "string"
          ? stack.split(",").map((item) => item.trim()).filter(Boolean)
          : [];

    if (items.length === 0) return null;

    return (
        <ul className="mt-1 flex flex-wrap gap-1.5">
            {items.map((item) => (
                <li
                    key={item}
                    className="border border-border-color bg-surface px-2 py-0.5 text-[11px] font-medium tracking-wide text-text-secondary"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default function ExperienceCard({
    period,
    kind,
    title,
    company,
    location,
    sections = [],
    description,
    stack,
    isLast = false,
}) {
    const place = [company, location].filter(Boolean).join(" · ");

    return (
        <article className="grid min-w-0 grid-cols-[5.5rem_minmax(0,1fr)] gap-x-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-x-5">
            <div className="flex flex-col items-center">
                <p className="py-1 text-center text-[11px] font-semibold uppercase leading-tight tracking-wide text-muted">
                    {period}
                </p>
                <div className="mt-1 size-2.5 shrink-0 border-2 border-signal bg-primary" />
                {!isLast ? (
                    <div className="mt-1 w-px grow bg-linear-to-b from-signal/80 via-border-color to-transparent" />
                ) : (
                    <div className="mt-1 h-6 w-px bg-linear-to-b from-border-color to-transparent" />
                )}
            </div>

            <div className="min-w-0 pb-10">
                <div className="border border-border-color/80 bg-surface/70 px-4 py-4 backdrop-blur-[2px] sm:px-5 sm:py-5">
                    {kind ? (
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">
                            {kind}
                        </p>
                    ) : null}

                    <h2 className="font-display text-2xl font-semibold tracking-tight break-words text-text sm:text-[1.75rem]">
                        {title}
                    </h2>

                    {place ? (
                        <p className="mt-1 text-sm text-text-secondary">{place}</p>
                    ) : null}

                    {sections.length > 0 ? (
                        <div className="mt-4 flex flex-col gap-3 border-t border-border-color pt-4">
                            {sections.map((section) => (
                                <div key={section.title}>
                                    <p className="text-xs font-semibold tracking-wide text-text-secondary">
                                        {section.title}
                                    </p>
                                    <p className="mt-0.5 text-sm leading-relaxed break-words text-muted">
                                        {section.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : description ? (
                        <p className="mt-3 text-sm leading-relaxed break-words text-muted">
                            {description}
                        </p>
                    ) : null}

                    <div className="mt-4">
                        <StackList stack={stack} />
                    </div>
                </div>
            </div>
        </article>
    );
}
