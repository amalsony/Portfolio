export default function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Amal Palackal</h1>
      <p className="text-lg text-gray-600 mb-6">
        Computer Science student at Penn State. <br />
        Building full-stack mobile and web apps for 5 years.
      </p>

      <div className="flex flex-wrap gap-2 text-xs font-bold text-white">
        {/* Socials */}
        <a
          href="mailto:amalsony5@gmail.com"
          className="px-3 py-1 rounded-xl bg-[#DB4437] border-2 border-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all"
        >
          Email
        </a>
        <a
          href="https://github.com/amalsony"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-xl bg-[#181717] border-2 border-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all"
        >
          Github
        </a>
        <a
          href="https://linkedin.com/in/amalsony"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-xl bg-[#0072b1] border-2 border-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
