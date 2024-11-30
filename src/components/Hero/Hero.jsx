import { NavLink } from "react-router-dom";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.hero}>
      <h1 className={css.titleHero}>Campers of your dreams</h1>
      <p className={css.descriptionHome}>
        You can find everything you want in our catalog
      </p>
      <NavLink className={css.viewNow} to="/campers">
        View Now
      </NavLink>
    </div>
  );
};

export default Hero;
