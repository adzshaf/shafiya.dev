const Timeline = ({ experiences }) => {
  let options = {
    year: "numeric",
    month: "long",
  };

  return (
    <>
      <h1 className="text-ivory text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl underline mb-8">
        Experiences.
      </h1>
      <ol className="p-4">
        {experiences.map((experience, i) => (
          <li
            className="feed-item relative pb-5 pl-6 border-l-2 border-red-300 last:border-transparent"
            key={`event${i}`}
          >
            <h1 className="block text-gray-500 relative uppercase -top-1 text-lg mt-4">
              {experience.experience_title}
            </h1>
            <h2 className="text-md text-ivory">
              {experience.experience_organization}
            </h2>
            <div className="mt-4">
              <span className="text-ivory">
                {new Intl.DateTimeFormat("en-US", options).format(
                  new Date(experience.experience_start_period)
                )}
              </span>
              <span className="text-ivory">
                {experience.experience_end_period
                  ? ` - ${new Intl.DateTimeFormat("en-US", options).format(
                      new Date(experience.experience_end_period)
                    )}`
                  : ""}
              </span>
            </div>
            <span>
              <ul className="list-disc list-inside mt-4">
                {experience.experience_descriptions.map((item) => (
                  <li className="text-ivory">{item.item}</li>
                ))}
              </ul>
            </span>
            <a
              href={experience.experience_link}
              className="text-gray-500 mt-4 underline"
            >
              {experience.experience_link}
            </a>
            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-start mt-4">
              {experience.experience_tags.map((tag) => (
                <div className="bg-neon-green p-2 rounded-lg mr-2 mb-4">
                  {tag}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Timeline;
