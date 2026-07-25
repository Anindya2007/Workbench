

export default function StatBox({
    data,
    name,
    icon: Icon,
    style = ""
}) {
    return (
        <div
            className={`flex items-center justify-center gap-6 h-full px-2 ${style}`}
        >
            <Icon
                size={30}
                className="text-indigo-500 cursor-default"
            />

            <div className="flex flex-col">
                <h1 className="text-2xl font-semibold text-indigo-400 leading-none cursor-default">
                    {data}
                </h1>

                <p className="mt-2 text-md text-zinc-300 cursor-default">
                    {name}
                </p>
            </div>
        </div>
    );
}