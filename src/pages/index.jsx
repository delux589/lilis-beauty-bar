import Image from "next/image";
import { Grey_Qo } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-solid-svg-icons'
import Hero from '@/components/Hero'
import Services from '@/components/ServicesBlock'

const greyQo = Grey_Qo({ subsets: ["latin"], display: "swap", weight: '400', });
const roboto = Noto_Sans({ subsets: ["latin"], display: "swap", weight: ['100','300', '400','500','700','900'] });

export default function Home() {
  const services = {
    title: 'Our Services',
    list: [
        {
            img: '/make-up.png',
            title: 'Make-up',
            description: `
                I create a flawless look that enhances your natural 
                beauty for everyday elegance and transforms you with 
                bold glamour for those special occasions
            `
        },
        {
            img: '/hair.png',
            title: 'Hair',
            description: `
                I provide seamless hair installations for a perfect fit 
                and flawless look, along with professional care to keep 
                your wigs looking fresh and beautiful
            `
        },
        {
            img: '/styling.png',
            title: 'Styling',
            description: `
                Expert styling to help you achieve the perfect look for any event.
            `
        },
        {
            img: '/eyebrow.png',
            title: 'Strip Lashes',
            description: `
                Instantly elevate your look with our premium strip lashes.
            `
        }
    ]
}
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
        <section className={`text-black flex flex-col md:flex-row  items-center justify-center md:justify-around pt-4 pb-20 2xl:px-6`}>
            <aside className="md:w-1/2 flex justify-center">
            <Image
                src="/services.jpg"
                alt="Vercel Logo"
                width={500}
                height={24}
            />
            </aside>
            <div className="md:w-1/2 flex flex-col items-center justify-center space-y-10 py-10">
            <h3 className={`text-[#8C0000] text-7xl md:text-9xl text-shadow-heading ${greyQo.className}`}>
                Our Services
            </h3>
            <div>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    { services.list.map(service => {
                        return (
                            <li className="space-y-4 flex flex-col items-center py-3">
                                <div>
                                    <Image
                                    src={service.img}
                                    alt="Vercel Logo"
                                    width={50}
                                    height={50}
                                    />
                                </div>
                                <div className="text-center space-y-6 flex flex-col items-center">
                                    <h6 className={`text-[#8C0000] text-6xl md:text-5xl text-shadow-heading ${greyQo.className}`}>
                                        { service.title}
                                    </h6>
                                    <p className={`text-sm ${roboto.className} max-w-[75%]`}>
                                        { service.description}
                                    </p>
                                </div> 
                                </li>
                        )
                    })}
                    
                </ul>
                </div>
            </div>
        </section>
        <section>
            <div className="py-20 flex flex-col space-y-10 items-center justify-center bg-[#f7bfc2] w-full">
                <h6 className="text-[#8C0000] text-5xl lg:text-7xl text-shadow-heading __className_793924">
                    Book Now to secure your spot
                </h6>
                <a className="focus:outline-none text-white bg-[#8C0000] hover:bg-[#8C2000] hover:opacity-50 transition duration-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                    Book Now
                </a>
            </div>
        </section>
        <footer className="py-20 flex flex-col items-center justify-center space-y-20">
            <h6 className={`text-[#8C0000] text-5xl md:text-7xl text-shadow-heading ${greyQo.className}`}>
                Let's connect
            </h6>
            <div className="uppercase flex space-x-10 font-bold">
            `    <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" class="text-[#8C0000]">
                    Facebook
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" class="text-[#8C0000]">
                    Instagram
                </a>
                <a href="https://www.tiktok.com/@your-profile" target="_blank" rel="noopener noreferrer" class="text-[#8C0000]">
                    TikTok
                </a>`
            </div>
        </footer>
    </main> 
  );
}
