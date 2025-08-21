import Image from "next/image";

export default function ProductImage({ src, alt, inStock }) {
  const getValidImageUrl = (imageUrl) => {
    if (!imageUrl || imageUrl.trim() === "") {
      return `https://picsum.photos/600/400?random=${Math.floor(
        Math.random() * 1000
      )}`;
    }

    try {
      new URL(imageUrl);
      return imageUrl;
    } catch {
      return `https://picsum.photos/600/400?random=${Math.floor(
        Math.random() * 1000
      )}`;
    }
  };

  return (
    <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gray-100">
      <Image
        src={getValidImageUrl(src)}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}
