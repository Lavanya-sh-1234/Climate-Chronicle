import Image from "next/image";

export default function InfoStrip({ article, showImage = false }) {
  let text = article?.content || article?.description || "";

  text
    .replace(/\{.*?\}/g, "")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/return\s+false/gi, "")
    .replace(/\d+\s*chars?/gi, "")
    .replace(/[;,]{2,}/g, " ")
    .replace(/\s*\.\s*\d+\s*C/i, " 1.5 C")
    .replace(/\s+/g, " ")
    .replace(/\s*\+\s*\[\s*\d+\s*chars?\s*\]\s*\.?\s*$/i, "")
    .trim();

  let sentences = text
    .split(/[.?!]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 8 && !/^\d+$/.test(s));

  sentences = sentences.slice(0, 3);

  sentences = sentences.map((s) => s.charAt(0).toUpperCase() + s.slice(1));

  return (
    <div
      className={`${showImage ? "flex" : "block"} ${
        showImage ? "bg-white" : "bg-red-400"
      } rounded-lg overflow-hidden hover:shadow-lg transition-shadow mt-3`}
    >
      <div className={`${showImage ? "flex-1 p-2" : "p-3"}`}>
        <h1
          className={`text-black font-bold text-lg leading-tight line-clamp-1 ${
            showImage ? "mb-1" : "mb-2"
          }`}
        >
          {article?.title}
        </h1>

        <ul className={`${showImage ? "pl-3" : "pl-4"} list-disc space-y-1`}>
          {sentences.map((sentence, i) => (
            <li key={i} className="text-sm text-gray-900 leading-tight">
              {sentence.endsWith(".") ? sentence : sentence + "."}
            </li>
          ))}
        </ul>
      </div>

      {showImage && (
        <div className="relative w-36 h-22 flex-shrink-0 mt-2">
          <Image
            src={article?.urlToImage || "/img/placeholder.jpg"}
            alt={article?.title || "News"}
            fill
            className="object-cover rounded-2xl"
            sizes="80px"
          />
        </div>
      )}
    </div>
  );
}   

