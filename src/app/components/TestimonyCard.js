import Image from "next/image";

const TestimonyCard = ({ testimonyData }) => {
  return (
    <div className="bg-white p-7 rounded-lg w-full mb-6" data-aos="fade-left" data-aos-delay={100}>
      <div className="flex space-x-4 items-center mb-4">
        <div className="relative">
          <Image src={testimonyData.image} width={579} height={720} className="object-cover h-14 w-14 rounded-full" alt="Testimony Image" />
        </div>
        <div className="leading-3">
          <strong className="block text-heading text-lg">
            {testimonyData.name}, {new Date(testimonyData.publishedAt).toISOString().slice(0, 10)}
          </strong>
        </div>
      </div>
      <div>{testimonyData.authortitle}</div>
      <div>
        <blockquote className="max-w-xs mt-4">&ldquo;{testimonyData.body}&rdquo;</blockquote>
      </div>
    </div>
  );
};

export default TestimonyCard;