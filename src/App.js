import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        className="particles-canvas"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              // value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "attract",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 800,
                duration: 2,
                opacity: 0.8,
                size: 70,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#61dafb",
            },
            links: {
              // color: "#282c34",
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.9,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              // outMode: "bounce",
              random: true,
              speed: 1,
              maxspeed: 3,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              // type: "circle",
              type: ["circle", "square"],
            },
            size: {
              random: true,
              value: 9,
            },
          },
          detectRetina: true,
        }}
      />
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      {/* <Resume></Resume> */}
      <Footer></Footer>
    </>
  );
}

export default App;
