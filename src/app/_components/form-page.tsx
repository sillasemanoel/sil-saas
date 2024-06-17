import Image from "next/image";

export function FormPage() {
  return (
    <main className="z-10 flex h-screen flex-col items-center justify-center px-10">
      <div className="flex flex-col items-center justify-center gap-5 max-w-xl md:max-w-3xl lg:max-w-7xl md:gap-5 lg:flex-row-reverse">
        <Image
          src="/images/lightFigure.png"
          width={395}
          height={632}
          alt="Picture of the author"
          priority
          className="w-[200px] md:w-[250px] lg:w-[300px]"
        />
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
