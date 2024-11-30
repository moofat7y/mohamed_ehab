import profileImage from "./assets/profile.jpg";
import coverImage from "./assets/cover.jpg";
import Button from "./components/Button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="bg-black min-h-[100dvh] pb-8">
      <div className="container">
        <div className="w-full relative">
          <img
            src={coverImage}
            className="w-full h-full max-h-[360px] object-cover object-top"
          />

          <img
            src={profileImage}
            className="aspect-square w-[120px] md:w-[160px] xl:w-[200px] object-cover absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border-[6px] border-black"
          />
        </div>

        <div className="mt-[80px] md:mt-[110px]">
          <h1
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-xl md:2xl lg:text-3xl font-semibold text-white text-center"
          >
            Mohamed Ehab
          </h1>
        </div>

        <div className="mt-[60px] gap-3 grid grid-cols-12">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="col-span-12 md:col-span-4 rounded-lg bg-[#2b2b2ba3] text-white w-full py-10 text-sm sm:text-base md:text-xl font-medium flex items-center justify-center"
          >
            Blogger
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="col-span-12 md:col-span-4 rounded-lg bg-[#2b2b2ba3] text-white w-full py-10 text-sm sm:text-base md:text-xl font-medium flex items-center justify-center"
          >
            Fashion
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className="col-span-12 md:col-span-4 rounded-lg bg-[#2b2b2ba3] text-white w-full py-10 text-sm sm:text-base md:text-xl font-medium flex items-center justify-center"
          >
            LifeStyle
          </div>
        </div>

        <div className="mt-[40px] md:mt-[60px] xl:mt-[80px] flex flex-col gap-8">
          <Button>Instagram</Button>
          <Button>Facebook</Button>
          <Button>Tiktok</Button>
          <Button>Threads</Button>
        </div>
      </div>
    </main>
  );
}

export default App;
