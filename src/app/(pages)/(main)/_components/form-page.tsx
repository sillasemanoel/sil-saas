import LightFigure from "/public/svgs/figure.svg";

export function FormPage() {
  return (
    <main className="z-10 flex h-screen flex-col items-center justify-center px-10 py-16">
      <div className="flex flex-col items-center justify-center gap-5 max-w-xl md:max-w-3xl lg:max-w-7xl md:gap-5 lg:flex-row-reverse">
        <LightFigure className="flex flex-none fill-[#09090b] dark:fill-white w-[10rem] md:w-[15rem] max-h-[16rem] md:max-h-[24rem]" />
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
            Meu primeiro saas, seguindo as melhores práticas de desenvolvimento.
            🙌🏻🚀
          </h1>
        </div>
      </div>
    </main>
  );
}
