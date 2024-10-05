import Image from "next/image";
import { Grey_Qo } from "next/font/google";
import { Roboto } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const greyQo = Grey_Qo({ subsets: ["latin"], display: "swap", weight: '400', });
const roboto = Roboto({ subsets: ["latin"], display: "swap", weight: '900' });

export default function Hero() {
    const services = {
        title: 'Our Services',
    }
    return (
        <section className={`text-black flex flex-col md:flex-row  items-center justify-center md:justify-around pt-4 pb-20 2xl:px-6`}>
            <aside className="md:w-1/2 flex justify-center">
            <Image
                src="/services.jpg"
                alt="Vercel Logo"
                width={500}
                height={24}
            />
            </aside>
            <div className="md:w-1/2 flex flex-col items-center justify-center space-y-20">
            <h3 className={`text-[#8C0000] text-9xl md:text-9xl text-shadow-heading ${greyQo.className}`}>
                Our Services
            </h3>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                { services.list.forEach(service, index=> {
                    return (
                        <li className="space-y-4 flex flex-col items-center py-3" key="${index}">
                            <div>
                                <Image
                                src={service.img}
                                alt="Vercel Logo"
                                width={50}
                                height={50}
                                />
                            </div>
                            <div className="text-center space-y-6 flex flex-col items-center">
                                <h6 className={`text-[#8C0000] text-9xl md:text-5xl text-shadow-heading ${greyQo.className}`}>
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
        </section>
    );
}
