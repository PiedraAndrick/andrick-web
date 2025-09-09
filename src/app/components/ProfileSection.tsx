export default function ProfileSection() {
  return (
    <section
      id="perfil"
      className="bg-gray-900 text-white py-16 px-6 md:px-20 text-center "
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Perfil Profesional</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          Ingeniero en Tecnologías de la Información con experiencia en el
          desarrollo de aplicaciones web, especializado en{" "}
          <span className="font-semibold text-blue-400">
           el desarrollo backend para aplicaciones web
          </span>.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-4">
          He trabajado en proyectos que abarcan desde{" "}
          <span className="font-semibold">chatbots con NLP</span> hasta{" "}
          <span className="font-semibold">sistemas fintech escalables</span>,
          aplicando tecnologías modernas como{" "}
          <span className="font-semibold">Kafka,Redis, JIRA y contenedores Docker</span>.

          Mi visión por la innovacion y genualidad me a llevado a fortalecer mis habilidades como freelancer en el desarrollo de soluciones 
          para aplicaciones web.
        </p>
      </div>
    </section>
  );
}