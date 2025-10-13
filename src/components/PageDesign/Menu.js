import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Menu() {
  const fullText = "Porsche 911 Carrera: Motorsport-Derived Performance";
  const [letters, setLetters] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // To prevent the animation from restarting on every render,
  // you could use a ref to track if it's already been run:
  const hasAnimated = useRef(false);
  useEffect(() => {
    let index = 0;
    const text = fullText.split("");
    setLetters([]);

    const interval = setInterval(() => {
      setLetters((prev) => {
        const newLetters = [...prev, text[index]];
        index++;
        if (index === text.length) clearInterval(interval);
        return newLetters;
      });
    }, 80);

    return () => clearInterval(interval);
    // No dependency array → runs once only
  }, []);

  const slides = [
    {
      img: "Carrera.jpg",
      title: "Porsche 911 Carrera",
      text: "Pure motorsport DNA refined for the road.",
    },
    {
      img: "Taycan Turbo S.jpg",
      title: "Porsche Taycan Turbo",
      text: "Electric power meets iconic Porsche performance.",
    },
    {
      img: "718 Cayman.jpg",
      title: "Porsche 718 Cayman",
      text: "Compact agility with unmatched precision.",
    },
    {
      img: "Panamera.jpg",
      title: "Porsche Panamera",
      text: "Luxury and performance in perfect harmony.",
    },
    {
      img: "Macan.jpg",
      title: "Porsche Macan GTS",
      text: "Dynamic power meets everyday practicality.",
    },
  ];

              const slide = [
                {
                    id: 1,
                    title: "2.9-litre Twin-Turbo V6 Engine",
                    description: "The Panamera is powered by a 2.9-litre twin-turbo V6 engine with power output of 260 kW (353 PS) and torque of 500 Nm.",
                    image: "Engine.avif"
                },
                {
                    id: 2,
                    title: "Advanced Performance",
                    description: "Experience exceptional acceleration and responsive handling with the advanced engineering of the Panamera's powertrain.",
                    image: "Gearbox.avif"
                },
                {
                    id: 3,
                    title: "Premium Craftsmanship",
                    description: "Every detail of the Panamera reflects the highest standards of automotive design and manufacturing excellence.",
                    image: "Part3.avif"
                },
                {
                  id: 4,  
                  title: "Rear-Axle Steering.",
                  description: "Available as an option, rear-axle steering en-hances performance and suitability for day-to-day usability in equal measure." ,
                  image:"Rear.avif"
                }
            ];



  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const responsives = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 100 // shows part of next/prev slide
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
    }
  };


  return (
    <div>
      <div className="p-4 rounded-xl">
        <div className="relative w-full h-screen">
          <img
            src="/pp1.jpg"
            alt="Porsche 911"
            className="w-full h-full object-cover opacity-0 animate-fadeIn"
          />

          {/* Typing Heading */}
          <h1 className="absolute top-6 left-0 w-full text-7xl font-bold text-white drop-shadow-lg text-center px-4 font-heather tracking-wider">
            {letters.map((char, i) => (
              <span
                key={i}
                className="inline-block opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${i * 0.05}s` }} // staggered animation
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <div className="relative w-full h-screen overflow-hidden">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="../vid1.mp4"
          autoPlay
          loop
          muted
        />

        {/* Text overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <p className="text-4xl text-white font-bold text-center px-4">
            A Legacy of Innovation and Engineering Excellence
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-white mt-4 max-w-5xl flex  p-6 rounded-xl font-franklin text-lg leading-relaxed">
          Porsche began as an engineering and design consultancy in 1931, with
          the senior Ferdinand Porsche bringing decades of innovative experience
          from groundbreaking designs like the Volkswagen Beetle and Auto Union
          Grand Prix cars. This foundation in engineering paved the way for the
          creation of the first branded sports car, the Porsche 356, in 1948 "In
          every Porsche, engineering becomes an art form, where metal breathes
          with precision and every curve is sculpted for performance. The
          heartbeat of the engine is a symphony of power, tuned with unwavering
          mastery, turning adrenaline into motion. Each gear shift, each turn,
          is a testament to the relentless pursuit of perfection, where
          innovation and craftsmanship collide. From the roar of the track to
          the elegance of the open road, Porsche transforms engineering into
          poetry, crafting machines that are not just vehicles, but living
          expressions of speed, passion, and timeless design."
        </p>
      </div>

      <div className="flex items-center justify-between p-6 ml-8 rounded-xl">
        <div className="max-w-md   rounded-xl shadow-xl p-6">
          <p className="text-5xl text-white font-medium ">3.4s </p>
          <p className="text-white leading-relaxed text-sm ">
            0-100 km/h (0-62 mph) with Launch Control
          </p>
          <br />
          <p className="text-6xl text-white font-medium ">
            493 <span className="text-xl ">Ps /</span>
          </p>
          <p className="text-6xl text-white font-medium ">
            450 <span className="text-xl ">Nm</span>{" "}
          </p>
          <p className="text-white leading-relaxed text-sm ">
            Maximum power output and torque
          </p>
          <br />
          <p className="text-5xl text-white font-medium ">
            308 km/h <span className="text-xl "> (192 mph)</span>
          </p>
          <p className="text-white leading-relaxed ">Top track speed</p>
          <p className="text-white leading-relaxed text-sm ">
            Fuel consumption combined: 13.0 l/100 km (preliminary value),
            CO2-emissions combined (WLTP): 295 g/km (preliminary value), CO2
            Class: G (preliminary value)
          </p>
          <br />
          <button className="mt-4 px-6 py-2 bg-orange-500 text-black  hover:bg-orange-700 transition-colors duration-300">
            View Technical Specs
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="ml-6">
          <img
            src="./bg1.jpg"
            alt="App Preview"
            className="w-[600px] h-auto rounded-full shadow-xl "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Card */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/img4.jpg"
            alt="Porsche Range"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute top-6 left-6 text-black">
            <p className="text-sm">Up to</p>
            <h1 className="text-7xl font-bold leading-none">610</h1>
            <p className="text-base">km of range</p>
          </div>
        </div>
        {/* Right Card (lowered slightly) */}
        <div className="relative rounded-xl overflow-hidden mt-12">
          <img
            src="/img5.jpg"
            alt="Charging Porsche"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute top-6 left-6 text-white">
            <p className="text-sm">Charging time</p>
            <h1 className="text-7xl font-bold leading-none">21</h1>
            <p className="text-base">Minutes</p>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col items-center">
        {/* Logo on top center */}
        <img
          src="/logo.png" 
          alt="911 Logo"
          className="w-32 h-32 object-contain mb-6"
        />

        {/* Image below */}
        <img
          src="/img6.jpg"
          alt="Charging Porsche"
          className="w-full h-[700px] object-cover rounded-3xl"
        />
      </div>
      <h1 className="text-white font-bold text-4xl flex justify-center p-2">Porsche Highlights</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        infinite
        responsive={responsive}
        keyBoardControl
        pauseOnHover
        swipeable
      >
        {slides.map((item, i) => (
          <div key={i} className="p-3 relative">
            <div className="rounded  overflow-hidden shadow-lg relative group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Fade-in overlay caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white p-3 hover-fadeInUpp">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

<div className="flex flex-col items-center justify-center max-w-5xl mx-auto p-4 gap-2">
  <p className="text-white font-franklin text-3xl leading-snug text-center">
    Driving Dynamics.
  </p>
  <p className="text-white font-franklin text-lg leading-relaxed text-center">
    Porsche vehicles are engineered for exceptional driving dynamics, offering precise handling, responsive steering, and a balanced chassis that delivers an engaging driving experience. Advanced suspension systems and performance-oriented features ensure optimal road grip and stability, whether on winding roads or high-speed highways.
  </p>
</div>
        

           <div className="w-full flex justify-center py-10 bg-black">
      <Carousel
        responsive={responsives}
        infinite={false}
        autoPlay={false}
        arrows
        centerMode
        containerClass="w-full max-w-full h-full"
        itemClass="flex justify-center px-4" // spacing between slides
        draggable
        swipeable
      >
        {slide.map((slides, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl"
          >
            {/* Image on left */}
            <div className="md:w-[800px] w-full">
              <img
                src={slides.image}
                alt={slides.title}
                className="w-full h-24 md:h-[350px] object-cover rounded-8xl p-4"
              />
            </div>

            {/* Text on right */}
            <div className="md:w-[600px] w-full p-8 flex flex-col justify-center">
              <h2 className="text-4xl md:text-xl font-bold text-black mb-4">
                {slides.title}
              </h2>
              <p className="text-black text-lg leading-relaxed">{slides.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>


    </div>
  );
}

export default Menu;
