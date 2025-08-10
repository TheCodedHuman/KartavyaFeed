function AboutView({ title, imgUrl, subTitle, content, quote, isOdd }) {
    return (
        <section className="py-8">

            {/* Complementary Title Heading */}
            {title && (
                <header className="text-center py-8">
                    <h1 className="font-caudex text-3xl lg:text-5xl font-bold italic">{title}</h1>
                </header>
            )}

            {/* Supplemantary Addons */}
            <article  className={`max-w-screen-xl px-6 md:px-16 lg:px-24 py-16 flex flex-col ${isOdd ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center gap-16 mx-auto`}>

                {/* image */}
                {imgUrl && (
                    <img
                        src={imgUrl}
                        alt="Illustration"
                        className={`w-[80%] sm:w-[60%] lg:w-[22rem] aspect-square ${isOdd ? 'rotate-2' : '-rotate-2'
                            } rounded-2xl ring-4 ring-blue-800 transition-transform duration-300 ease-out hover:scale-105 hover:drop-shadow-2xl`} />
                )}

                {/* sub-title */}
                <div className="flex flex-col gap-6 items-center text-base lg:text-xl w-full lg:w-[60%]">
                    {subTitle && <p className="font-outfit font-semibold text-center">{subTitle}</p>}

                    {/* information lists */}
                    {content && Array.isArray(content) && (
                        <ul className="list-disc space-y-3 font-outfit font-semibold w-[90%]">
                            {content.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    )}

                    {/* quote */}
                    {quote && (
                        <blockquote className="italic font-caudex text-center text-lg lg:text-2xl text-blue-900">
                            “{quote}”
                        </blockquote>
                    )}

                </div>
            </article>
        </section>
    );
}

export default AboutView


