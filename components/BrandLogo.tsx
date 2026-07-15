import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  showText?: boolean;
};

export function BrandLogo({ className = "", showText = true }: BrandLogoProps) {
  return (
    <div className={`brand-logo ${className} ${showText ? "" : "brand-logo--mark"}`} aria-label="Beenacria Sicily">
      <Image
        src="/assets/beenacria/logo.png"
        alt="Beenacria Sicily"
        width={1280}
        height={1024}
        className="brand-image"
        priority={className.includes("hero")}
      />
    </div>
  );
}
