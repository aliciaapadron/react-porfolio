import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["A", "l", "i", "c", "i", "a"];
  const jobArray = [
    "d",
    "e",
    "s",
    "a",
    "r",
    "r",
    "o",
    "l",
    "l",
    "a",
    "d",
    "o",
    "r",
    "a",
    " ",
    "w",
    "e",
    "b",
    ".",
  ];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>a,</span>
            <br />
            <span className={`${letterClass} _15`}>S</span>
            <span className={`${letterClass} _16`}>o</span>
            <span className={`${letterClass} _17`}>y</span>
            <span className={`${letterClass} _18`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={19}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2>Desarrolladora Front-end</h2>
          <Link to="/contact" className="flat-button">
            CONTÁCTAME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
