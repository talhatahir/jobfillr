import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                The best free Chrome extension!
              </h2>
              <p className="text-xl font-light">
                Jobfillr is the best free Chrome extension for autofill. It is fast, easy to use, and has no
                subscription or credit card required.
              </p>
            </div>
          }
        />
        <Customers />
        <Section
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Effortlessly highlight the key features of your app
              </h2>
              <p className="text-xl font-light">
                Our app makes it easy to showcase your key features. With customizable sections, you can highlight the
                most important aspects of your product. More to come.
              </p>
            </>
          }
          rightHalf={
            <Image src={"/products/rec1.gif"} alt="section-image" width={600} height={300} className="w-full h-auto" />
          }
        />

        <Reviews />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
