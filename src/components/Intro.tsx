interface Props {
  name: string;
}

const Intro: React.FC<Props> = ({ name }) => {
  return (
    <section
      id="intro"
      className=" px-4 mt-5 text-center text-slate-200 flex flex-col justify-center items-center"
    >
      <img
        src="./src/img/main.jpg"
        alt="Tu foto"
        className="rounded-full mx-auto mb-4 max-h-48 shadow-md shadow-blue-600"
      />
      <h2 className="text-2xl font-bold mb-4">
        Hola, soy{" "}
        <span className=" text-3xl font-mono text-blue-800 ">{name}</span>{" "}
      </h2>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Mis compañeros me conocen como ADev. Soy un apasionado Frontend
        Developer, graduado de Ingenieria en Ciencias Informaticas con
        experiencia en el desarrollo de sitios web estéticos y funcionales. Me
        apasiona crear interfaces atractivas, optimizadas y con un excelente
        rendimiento, siempre buscando la mejor experiencia de usuario.
      </p>
    </section>
  );
};

export default Intro;
