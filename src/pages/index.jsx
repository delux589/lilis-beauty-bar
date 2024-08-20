import Image from "next/image";
import { Grey_Qo } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Hero from '@/components/Hero'
import Services from '@/components/ServicesBlock'

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
      <Services />
    </main>
  );
}
