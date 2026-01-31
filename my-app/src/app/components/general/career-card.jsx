import Image from "next/image";

export default function CareerCard({ title, description, icon, imageUrl }) {
  return (
    <div className="bg-[var(--lite-sand)] rounded-xl p-6 h-full flex flex-col border border-red-200">
      {/* Icon */}
      <div className="mb-4">
        {icon ? (
          icon
        ) : imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} icon`}
            width={48}
            height={48}
            className="object-contain"
          />
        ) : (
          <Image
            src="https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png"
            alt="Career icon"
            width={48}
            height={48}
            className="object-contain"
          />
        )}
      </div>

      {/* Title */}
      <h3 className="mb-3 !text-[22px] leading-none">{title}</h3>

      {/* Description */}
      <div
        className="text-[var(--foreground)] text-sm flex-grow [&_a]:text-[var(--button-red)] [&_a]:underline [&_a]:font-bold [&_a]:hover:text-[var(--dark-orange-red)] transition-colors"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

