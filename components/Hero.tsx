import Link from "next/link";
import Image from "next/image";
import { FaChrome } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <div className="flex items-center justify-center mb-6">
        <img src="/icons/icon-128.png" alt="Jobfillr logo" className="w-24 h-24 mr-1" />
        <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
          Jobfillr - Autofill job applications
        </h1>
      </div>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 font-light">
        Autofill your job applications with a single click!
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="https://chromewebstore.google.com/detail/pjclfaplmlmplmdjnhpilgpnflnmdbdg"
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 flex items-center"
        >
          <FaChrome className="mr-2" />
          Add to Chrome
        </Link>
        <a href="https://www.buymeacoffee.com/talhatahir" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png"
            alt="Buy Me A Coffee"
            width={145}
            height={40}
          />
        </a>
      </div>
    </section>
  );
}
