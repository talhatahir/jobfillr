import Image from "next/image";

interface SectionProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const Section: React.FC<SectionProps> = ({ title, description, imageSrc }) => {
  const imageUrl = imageSrc || `/products/phone.png`;

  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 order-2 md:order-1 p-4 justify-start">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{description}</p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-end">
          <Image src={imageUrl} alt="section-image" width={500} height={100} />
        </div>
      </div>
    </section>
  );
};

export default Section;
