import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

export default function AppreciationLetterLayout({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/appreciation-letter.png",
  imageAlt = "Appreciation Letter",
  subtitle = "Appreciation Letter",
  title = "Appreciation Letter",
  description = "At Kalinga University, you'll find the world in one place. With students from 29+ countries, we celebrate their cultures, faiths, and beliefs. We offer an inclusive environment where they can freely practice their religion and stay connected with their roots.",
  subtitleClassName = "",
  titleClassName = "!text-white",
  subtitleTextColor = "text-[var(--dark-orange-red)]",
}) {
  return (
    <section className="container mx-auto py-16 mx-2">
      <div className="bg-[var(--dark-blue)] text-white rounded-2xl shadow-lg overflow-hidden">
        <div className="">
          <div className="items-center gap-8 py-16 flex flex-col md:flex-row">
            <div className="flex flex-col gap-4 px-6 md:px-8">
              <SectionHeading
                subtitle={subtitle}
                title={title}
                subtitleClassName={subtitleClassName}
                titleClassName={titleClassName}
                subtitleTextColor={subtitleTextColor}
              />
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="relative w-full h-[400px] md:h-[500px] px-6 md:px-8">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain rounded-lg"
                sizes="(min-width: 768px) 25vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

