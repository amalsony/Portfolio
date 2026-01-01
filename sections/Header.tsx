export default function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Amal Palackal</h1>
      <p className="text-lg text-gray-600 mb-6">
        Computer Science student at Penn State. <br />
        Building full-stack mobile and web apps for 5 years.
      </p>

      <div className="flex gap-4 text-sm font-medium text-gray-500">
        {/* Socials */}

        <a
          href="mailto:amalsony5@gmail.com"
          className="hover:text-black transition-colors border-b border-transparent hover:border-black uppercase font-bold"
        >
          Email
        </a>

        <a
          href="https://github.com/amalsony"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors border-b border-transparent hover:border-black uppercase font-bold"
        >
          Github
        </a>

        <a
          href="https://linkedin.com/in/amalsony"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors border-b border-transparent hover:border-black uppercase font-bold"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
