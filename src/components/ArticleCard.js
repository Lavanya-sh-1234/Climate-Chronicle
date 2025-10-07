import Image from "next/image";

export default function ArticleCard({ article, variant = "normal" }) {
  const imageHeight = variant === "tall" ? "h-96" : "h-60";

  return (
    <div
      className={`relative  rounded-2xl overflow-hidden shadow-sm cursor-pointer group`}
    >
      <div className={`relative w-full ${imageHeight}`}>
        <Image
          src={article?.urlToImage || "/img/placeholder.jpg"}
          alt={article?.title || "News"}
          fill
          className=" object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 w-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        />
      </div>

      <div className="absolute inset-0 flex items-end p-4">
        <div className="w-full rounded-xl bg-gradient-to-t from-black/45 via-black/10 to-transparent p-3">
          <h1 className="text-white font-bold text-lg leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
            {article?.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
 
