// halaman untuk mengatur hero section
import imageHero from "../../../public/img/heroimage.png";
import { StartedLets } from "../../components/btn/started";

export const Hero = () => {
  return (
    <>
      <div className="flex justify-between px-24 pr-52 items-center bg-white h-screen">
        <div className="hero-section">
          <div className="text-[4.5rem]">
            <h1 className="font-thin">
              Great{" "}
              <span className="font-bold bg-gradient-to-t from-yellow-500 to-green-600 bg-clip-text text-transparent">
                Product
              </span>{" "}
              is
            </h1>
            <h1 className="font-bold">
              built by great{" "}
              <span className="bg-gradient-to-b from-yellow-500 to-green-600 bg-clip-text text-transparent">
                teams
              </span>
            </h1>
          </div>
          <p className="mt-12 font-kumbh text-lg">
            We help build and manage a team of world-class developers <br />
            to bring your vision to life
          </p>
          <div className="mt-12">
            <StartedLets />
          </div>
        </div>
        <img src={imageHero} alt="team" className="transform scale-125" />
      </div>
    </>
  );
};
