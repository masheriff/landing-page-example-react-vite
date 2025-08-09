function Hero() {
  return (
    <section className="w-full h-screen p-16">
      <div className="container mx-auto h-full bg-cover bg-center flex items-center justify-center bg-[url('/images/hero-bg.png')]">
        <div className="flex flex-col items-center text-center">
          <h1 className=" text-3xl md:text-5xl text-white leading-none tracking-widest">
            <span className="font-bold mr-2 bg-black/80 px-4 py-1">BR</span>
            Architects
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
