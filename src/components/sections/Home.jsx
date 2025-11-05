

export const Home = () => {
    return ( 
    <section 
        id="home"
        className="min-h-screen flex items-center justify-center relative"
    >
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent gradient-text leading-right">
                Hi, I'm Matheus Mamede
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I’m a passionate Junior Fullstack Developer, constantly learning and improving my skills to become better every day.
                My goal is to deliver high-quality, efficient, and creative solutions that help companies grow and achieve their goals. 
                Always striving to turn ideas into reality through clean code and modern technology.
            </p>
            <div className="flex justify-center space-x-4">
                <a 
                href="projects" 
                className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                View Projects
                </a>

                <a 
                href="contact" 
                className="border border-green-500/50 text-green-400 py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-green-500/10"
                >
                Contact Me
                </a>
            </div>
        </div>

    </section>
  );
};