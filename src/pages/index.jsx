import Image from "next/image";
import { Grey_Qo } from "next/font/google";
import { Roboto } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Hero from '@/components/Hero'

const greyQo = Grey_Qo({ subsets: ["latin"], display: "swap", weight: '400', });
const roboto = Roboto({ subsets: ["latin"], display: "swap", weight: ['100','300', '400','500','700','900'] });

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-white mx-auto`}
    >
      <Hero />
      <section className="flex justify-center py-20">
        <div className="max-w-2xl text-center space-y-6 px-4">
          <h2 className={`text-[#f1c290] text-5xl md:text-6xl ${greyQo.className}`}>
            Experience Beauty On Your&nbsp;Terms
          </h2>
          <p className={`text-black font-regular text-sm md:  text-xl ${roboto.className}`}>
            I bring professional beauty services right to your door. Whether it’s a glamorous makeover, 
            flawless hair installation, or a rejuvenating wig wash, I make beauty effortless&nbsp;and&nbsp;accessible.
          </p>
        </div>
      </section>
      <section className="text-black flex flex-col items-center">
        <h3>
          Our Services
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <li>Make Up</li>
          <li>Hair</li>
          <li>Styling</li>
          <li>Eyebrows</li>
        </ul>
      </section>
    </main>
  );
}
