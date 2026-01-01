export default function Languages({ languages }: { languages: string[] }) {
  return (
    <section className="mb-8">
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
        Main Languages
      </h2>

      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <span
            key={lang}
            className="px-3 py-1 text-xs font-medium bg-white text-gray-600 rounded-lg border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          >
            {lang}
          </span>
        ))}
      </div>
    </section>
  );
}
