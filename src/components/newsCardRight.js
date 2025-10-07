import Image from "next/image";

export default function NewsCardRight({ article }) {
  return (
    <div className="flex bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow group w-full">
      
      <div className="relative w-38 h-28 flex-shrink-0">
        <Image
          src={article?.urlToImage || "/img/placeholder.jpg"}
          alt={article?.title || "News"}
          fill
          className="object-cover rounded-2xl"
          sizes="96px"
        />
      </div>

      <div className="flex-1 p-3">
        <h3 className="text-black font-bold text-lg leading-tight">
          {article?.title}
        </h3>
      </div>
    </div>
  );
}

