import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          title="Easily monitor all financial activities"
          description="Users can input their income & expenses, categorize transactions, and view reports and summaries of their spending habits. It enables effective budgeting and expense tracking, helping you stay on top of your financial goals."
        />
        <Customers />
      </main>
      <Footer />
    </div>
  );
}
