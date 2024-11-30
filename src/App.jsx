import profileImage from "./assets/profile.jpg";
import coverImage from "./assets/cover.jpg";
import Button from "./components/Button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { mediaImages, socialMediaLinks } from "./lib/config";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="bg-black min-h-[100dvh]">
      <div className="container">
        <div className="w-full relative">
          <img
            loading="eager"
            src={coverImage}
            className="w-full h-full max-h-[360px] object-cover object-top rounded-b-lg"
          />

          <img
            src={profileImage}
            className="aspect-square w-[120px] md:w-[160px] xl:w-[200px] object-cover absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border-[6px] border-black"
          />
        </div>

        <div className="mt-[80px] md:mt-[110px] flex flex-col items-center">
          <h1
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-xl md:2xl lg:text-3xl font-semibold text-white text-center"
          >
            Muhammad Ehab
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
            className="col-span-12 md:col-span-4 rounded-lg bg-[#2b2b2ba3] text-white w-full py-10 text-sm sm:text-base md:text-xl font-medium flex items-center justify-center"
          >
            Fashion
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="col-span-12 md:col-span-4 rounded-lg bg-[#2b2b2ba3] text-white w-full py-10 text-sm sm:text-base md:text-xl font-medium flex items-center justify-center"
          >
            LifeStyle
          </div>
        </div>

        <div className="mt-[40px] md:mt-[60px] xl:mt-[80px] flex flex-col gap-8">
          <Button
            data-aos="zoom-in"
            onClick={() =>
              window.open(
                "https://www.instagram.com/elbob.films1/profilecard/?igsh=MWs1bnN6YjM2NHFnZw==",
                "_blank"
              )
            }
          >
            Instagram
          </Button>
          <Button
            data-aos="zoom-in"
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/1DoVe2gggG/?mibextid=LQQJ4d",
                "_blank"
              )
            }
          >
            Facebook
          </Button>
          <Button
            data-aos="zoom-in"
            onClick={() =>
              window.open(
                "https://m.shein.com/ar/?ref=ar&rep=dir&ret=mar",
                "_blank"
              )
            }
          >
            Shop my looks by Shein
          </Button>
          <Button
            data-aos="zoom-in"
            onClick={() =>
              window.open(
                "https://www.tiktok.com/@muhammadehab_?_t=8UzPHOGRNW2&_r=1",
                "_blank"
              )
            }
          >
            Tiktok
          </Button>
          <Button
            data-aos="zoom-in"
            onClick={() =>
              window.open("https://www.threads.net/@muhammadehab_", "_blank")
            }
          >
            Threads
          </Button>
        </div>

        <div className="mt-[40px] md:mt-[60px] xl:mt-[80px]"></div>

        <div className="mt-[40px] md:mt-[60px] xl:mt-[80px]">
          <p className="text-center text-2xl mx-auto mb-10 max-w-[600px] text-white mt-2">
            Fashion blogger and content creator For business and collaboration
          </p>

          <div className="w-full grid grid-cols-12 gap-4">
            {mediaImages.map((item, index) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  key={index}
                  className="w-full rounded-md overflow-hidden col-span-12 md:col-span-4 relative before:absolute before:content-[''] before:inset-0 before:bg-[#00000061] before:z-10 group hover:before:bg-transparent before:duration-150 before:blur-3xl hover:before:blur-none aspect-[317/396]"
                >
                  <img
                    loading="lazy"
                    className="w-full h-full object-cover rotate-3 group-hover:rotate-0 duration-150"
                    src={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="bg-[#2b2b2bf2] py-10 mt-[40px]">
        <div className="container">
          <h2 className="text-center text-white text-xl font-semibold">
            Muhammad Ehab
          </h2>

          <div className="flex justify-center gap-4 mt-4">
            {socialMediaLinks.map((item, index) => {
              return (
                <span
                  key={index}
                  role="button"
                  onClick={() => window.open(item.link, "_blank")}
                  style={{ color: item.color }}
                  className="text-lg lg:text-2xl"
                >
                  {item.icon}
                </span>
              );
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
