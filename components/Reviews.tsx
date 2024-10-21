import Review from "./Review";

interface ReviewData {
  rating: number;
  title?: string;
  content: string;
  author: string;
  designation?: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    content: "I didn't realize how much I needed this until I began using it.",
    author: "Salman Ali Shehzad",
    designation: "Founder @ Musings Inc",
  },
  {
    rating: 5,
    content: "Saves a lot of my time! Thanks",
    author: "Amshee Hassan",
    designation: "Senior Engineer",
  },
  {
    rating: 5,
    content:
      "I can't thank the developer of this plugin enough for developing this fantastic plugin! If you're tired of endlessly filling out job applications, look no further. This extension is a game-changer.",
    author: "Arslan Irshad",
    designation: "Engineering Manager",
  },
  {
    rating: 5,
    content: "Saves my time. Awesome and quick. Now I can easily apply for a lot of jobs.",
    author: "Saad Tahir",
    designation: "CEO @ Velocity Studios",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          Reviews from real users
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
