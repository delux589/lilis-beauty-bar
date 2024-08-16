import Image from "next/image";
import { Grey_Qo } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Hero from '@/components/Hero'

const greyQo = Grey_Qo({ subsets: ["latin"], display: "swap", weight: '400', });
const roboto = Noto_Sans({ subsets: ["latin"], display: "swap", weight: ['100','300', '400','500','700','900'] });

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-white mx-auto`}
    >
      <Hero />
      <section className="flex justify-center pt-20 pb-32">
        <div className="max-w-screen-xl text-center space-y-20 px-4">
          <h2 className={`text-[#8C0000] text-5xl md:text-9xl text-shadow-heading ${greyQo.className}`}>
            Experience Beauty On&nbsp;Your&nbsp;Terms
          </h2>
          <p className={`text-black font-regular text-sm md:text-2xl ${roboto.className}`}>
            I bring professional beauty services right to your door. Whether it’s a glamorous makeover, 
            flawless hair installation, or a rejuvenating wig wash, I make beauty effortless&nbsp;and&nbsp;accessible.
          </p>
        </div>
      </section>
      <section className={`text-black flex-col md:flex-row  items-center justify-center md:justify-evenly pt-4 pb-20 px-6`}>
        <aside className="md:w-1/2 flex justify-center">
          <Image
            src="/services.jpg"
            alt="Vercel Logo"
            width={500}
            height={24}
          />
        </aside>
        <div className="md:w-1/2 flex flex-col items-center justify-center space-y-6">
          <h3 className={`text-[#8C0000] text-9xl md:text-9xl text-shadow-heading ${greyQo.className}`}>
            Our Services
          </h3>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <li className="space-y-4 flex flex-col items-center border border-1 border-[#8C0000]">
              <div>
                <Image
                  src="/make-up.png"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-center space-y-4">
                <h6 className={`text-[#8C0000] text-9xl md:text-5xl text-shadow-heading ${greyQo.className}`}>
                  Make-Up
                </h6>
                <p className={`text-sm ${roboto.className}`}>
                  I create a flawless look that enhances your natural beauty for everyday elegance and transforms you with bold glamour for those special occasions
                </p>
              </div> 
            </li>
            <li className="space-y-4 flex flex-col items-center border border-1 px-1 py-3 border-[#8C0000]">
              <div>
                <Image
                  src="/hair.png"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-center space-y-4">
                <h6 className={`text-[#8C0000] text-9xl md:text-5xl text-shadow-heading ${greyQo.className}`}>
                  Hair
                </h6>
                <p className={`text-sm ${roboto.className}`}>
                  I provide seamless hair installations for a perfect fit and flawless look, along with professional care to keep your wigs looking fresh and beautiful
                </p>
              </div> 
            </li>
            <li className="space-y-4 flex flex-col items-center border border-1 px-1 py-3 border-[#8C0000]">
              <div>
                <Image
                  src="/styling.png"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-center space-y-4">
                <h6 className={`text-[#8C0000] text-9xl md:text-5xl text-shadow-heading ${greyQo.className}`}>
                  Styling
                </h6>
                <p className={`text-sm ${roboto.className}`}>
                  Expert styling to help you achieve the perfect look for any event.
                </p>
              </div> 
            </li>
            <li className="space-y-4 flex flex-col items-center border border-1 px-1 py-3 border-[#8C0000]">
              <div>
                <Image
                  src="/eyebrow.png"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-center space-y-4">
                <h6 className={`text-[#8C0000] text-9xl md:text-5xl text-shadow-heading ${greyQo.className}`}>
                  Strip Lashes
                </h6>
                <p className={`text-sm ${roboto.className}`}>
                  Instantly elevate your look with our premium strip lashes.
                </p>
              </div> 
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
