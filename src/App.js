import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
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
                mode: "push",
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
              value: "ff0000",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
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
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 100,
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
    </>
  );
}

export default App;
