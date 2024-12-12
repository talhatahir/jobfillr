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
          leftHalf={
            <>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Fill out hundreds of job applications in a few clicks
              </h2>
              <p className="text-xl font-light">
                Jobfillr makes it easy to fill in all details required on a job application form.
              </p>
              <p className="text-xl font-light">Just click it to fill it!</p>
            </>
          }
          rightHalf={
            <Image src={"/products/rec1.gif"} alt="section-image" width={600} height={300} className="w-full h-auto" />
          }
        />
        <Customers />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                The best Chrome extension!
              </h2>
              <p className="text-xl font-light">Jobfillr is the best free Chrome extension for autofill.</p>
              <p className="text-xl font-light">It is fast, easy to use, requires no subscription or credit card.</p>
            </div>
          }
        />
        <Reviews />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
