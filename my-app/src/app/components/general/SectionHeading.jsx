export default function SectionHeading({ 
  subtitle, 
  title,
  subtitleClassName = "",
  titleClassName = "",
  subtitleTextColor = "text-[var(--button-red)]"
}) {
  return (
    <>
      {subtitle && (
        <h5 className={`${subtitleTextColor} text-left md:text-center text-base sm:text-lg md:text-xl font-plus-jakarta-sans font-medium mb-4  ${subtitleClassName}`}>
          {subtitle}
        </h5>
      )}
      {title && (
        <h2 className={`font-stix leading-12 mb-2 text-[var(--foreground)] text-left md:text-center ${titleClassName}`}>
          {title}
        </h2>
      )}
    </>
  );
}

