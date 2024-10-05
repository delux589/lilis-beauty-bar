import Image from "next/image";
import { Grey_Qo } from "next/font/google";
import { Roboto } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const greyQo = Grey_Qo({ subsets: ["latin"], display: "swap", weight: '400', });
const roboto = Roboto({ subsets: ["latin"], display: "swap", weight: '900' });

export default function Hero() {
  return (
    <section className="relative flex flex-col sm:flex-row justify-between items-center h-screen sm:h-full overflow-hidden md:overflow-auto justify-center bg-[#f7bfc2] pt-10 md:pt-24 px-4 md:px-10 2xl:px-40">
		<div className="space-y-6 md:space-y-10 text-center">
			<h1 className={`text-[#8C0000] text-7xl lg:text-9xl text-shadow-heading ${greyQo.className}`}>
				Lili's Beauty Bar
			</h1>

			<p className={`text-xl md:text-2xl lg:text-3xl font-regular text-[#8C0000] text-shadow-body ${roboto.className}`}>
				Where <span className="bg-[#f1c290] py-2 px-4">Beauty</span> Meets <span className="bg-[#f1c290] py-2 px-4">Convenience</span>
			</p>

			<div className="pt-4 md:pt-6">
			<button className="focus:outline-none text-white bg-[#8C0000] hover:bg-[#8C2000] hover:opacity-50 transition duration-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
				Book your spot
			</button>
			</div>
		</div>
		<div className="pt-6 md:pt-0">
			<Image
				src="/lili.png"
				alt="Vercel Logo"
				width={500}
				height={24}
			/>
		</div>
		<div className="w-full absolute bottom-0 py-4 flex justify-center bg-black/60 overflow-hidden sm:hidden">
			<FontAwesomeIcon icon={faChevronDown} size="sm" pulse className="scroll-icon text-[#f7bfc2]"/>
		</div>
	</section>
  );
}
