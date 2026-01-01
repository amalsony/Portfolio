import Image from "next/image";

export default function Home() {
  const projects = [
    {
      id: "wardrobeai",
      title: "WardrobeAI",
      description:
        "A full-stack AI fashion app enabling users to digitize wardrobes and generate AI-recommended outfit suggestions. Scaled to 3,200+ users.",
      tech: ["React Native", "Swift", "OpenAI API", "LLM", "MongoDB"],
      link: "https://www.wardrobeai.app",
      color: "#BD42C0",
      theme: "light",
    },
    {
      id: "universalnotes",
      title: "UniversalNotes",
      description:
        "An open-source browser extension that brings Community Notes from X/Twitter to the rest of the internet. Features secure OAuth syncing between the extension and the Next.js web app.",
      tech: ["React", "Next.js", "Chrome Extension", "OAuth"],
      link: "https://www.universalnotes.org",
      color: "#14428bff",
      theme: "dark",
    },
    {
      id: "teegle",
      title: "Teegle",
      description:
        "A social network for learning where users create topic-based Q&A communities. Grew to 200+ users.",
      tech: ["Next.js", "Express", "GraphQL", "MongoDB"],
      link: "https://www.teegle.app",
      color: "#13976bff",
      theme: "light",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-gray-200">
      <main className="max-w-2xl mx-auto py-20 px-6">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Amal Palackal
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            2nd-year Computer Science student at Penn State <br />
            Building full-stack mobile and web apps for 4 years
          </p>

          <div className="flex gap-4 text-sm font-medium text-gray-500">
            {/* Socials */}
            <a
              href="mailto:amalsony5@gmail.com"
              className="hover:text-black transition-colors border-b border-transparent hover:border-black"
            >
              Email
            </a>
            <a
              href="https://github.com/amalsony"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors border-b border-transparent hover:border-black"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/amalsony"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors border-b border-transparent hover:border-black"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Projects Section */}
        <section>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
            Selected Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderLeft: `4px solid ${project.color}` }}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>

                  <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                    <Image
                      src="/external_link.svg"
                      alt="Open External Link"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Amal Palackal</p>
        </footer>
      </main>
    </div>
  );
}
