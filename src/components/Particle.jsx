import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// You can use loadFull or loadSlim
import { loadFull } from "tsparticles";


const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  };

  const options = {
    background: {
      color: "#000000",
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          area: 1500, // Formerly value_area
        },
      },
      links: {      // Formerly line_linked
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "right",
        enable: true,
        speed: 0.05,
        straight: false,
      },
      size: {
        value: 1,
      },
      opacity: {
        value: { min: 0.05, max: 0.5 },
        animation: { // Formerly anim
          enable: true,
          speed: 1,
          startValue: "random",
        },
      },
    },
    interactivity: {
      events: {
        onClick: { // Note the camelCase
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 1, // Formerly particles_nb
        },
      },
    },
    detectRetina: true, // Formerly retina_detect
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "fixed",
            zIndex: -1,
          }}
        />
      )}
    </>
  );
};

export default Particle;