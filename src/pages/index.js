import Head from "next/head";
import Header from "../components/Header";
import ArticleCard from "@/components/ArticleCard";
import NewsCardRight from "@/components/newsCardRight";
import InfoStrip from "@/components/InfoStrip";

export default function Home({ articles, currentDate }) {
  const leftTop = articles[0];
  const leftBottom = articles[1];
  const center = articles[2];
  const rightTop = articles[3];
  const rightSecond = articles[4];
  const rightThird = articles[5];
  const centerBottom = articles[6];

  return (
    <div>
      <Head>
        <title>Climate Chronicle</title> 
      </Head>

      <Header currentDate={currentDate} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6 ">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="space-y-4 w-full md:w-[30%]">
            {leftTop && <ArticleCard article={leftTop} variant="normal" />}
            {leftBottom && (
              <ArticleCard article={leftBottom} variant="normal" />
            )}
          </div>

          <div className="w-full md:w-[70%] ">
            <div className="w-full flex-col md:flex-row flex gap-5 items-center">
              <div className="space-y-4 w-[80%]">
                {center && <ArticleCard article={center} variant="tall" />}
              </div>

              <div className="space-y-4 ">
                {rightTop && (
                  <NewsCardRight article={rightTop} variant="normal" />
                )}
                {rightSecond && (
                  <NewsCardRight article={rightSecond} variant="normal" />
                )}

                {rightThird && (
                  <InfoStrip article={rightThird} showImage={false} />
                )}
              </div>
            </div>
            <div>
              {centerBottom && (
                <div className="lg:col-start-2 lg:col-end-4 self-end">
                  <InfoStrip article={centerBottom} showImage />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=climate&sortBy=publishedAt&searchIn=title&apikey=${process.env.NEWS_API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      articles: data.articles || [],
      currentDate,
    },
  };
}
 

