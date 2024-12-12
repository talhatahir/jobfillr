import Image from "next/image";
import Link from "next/link";
import { FaChrome } from "react-icons/fa";

const Download: React.FC = () => (
  <section className="container mx-auto py-24 px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-center gap-32">
      <div className="w-full md:w-1/2 order-1 p-4 flex justify-center items-center">
        <Image
          src="/icons/icon-512.png"
          alt="Jobfillr icon"
          width={768}
          height={768}
          className="w-1/2 h-auto mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-1/2 order-2 flex justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Make your life easy
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 mb-6 font-light">
            Add the extension to your browser and start saving time. No more manually filling out job applications.
          </p>
          <div className="flex space-x-4">
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
                style={{ height: "40px", width: "145px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Download;
