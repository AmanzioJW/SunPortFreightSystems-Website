const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'

export const MessageIllustration = () => (
    <div aria-hidden>
        <div className="flex items-center gap-2">
            <img
                src={MESCHAC_AVATAR}
                className="size-4 rounded-full"
                alt="Meschac"
                loading="lazy"
                width="460"
                height="460"
            />
            <span className="text-sm">Irung</span>
        </div>

        <div className="bg-illustration border-border-illustration mt-2 w-fit rounded-2xl rounded-tl border p-3 text-sm">
            Hey <span className="text-primary">@bernard</span>, I've updated the dashboard metrics.
        </div>
    </div>
)