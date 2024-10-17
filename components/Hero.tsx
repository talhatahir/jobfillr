import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center my-16 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <div className="mb-8">
        <button className="bg-blue-100 text-blue-800 dark:bg-black dark:text-blue-100 px-4 py-2 rounded-full text-sm">
          Follow along on Twitter
        </button>
      </div>
      <h1 className="font-sans text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        Template app amazing hero!
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Here is a short description of the app. It is a modern app.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/get-started"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          Get Started
        </Link>
        <Link
          href="https://github.com"
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
