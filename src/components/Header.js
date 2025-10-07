import Image from "next/image";
import { useState, useCallback } from "react";
import CategoriesPanel from "./CategoriesPanel";

export default function Header({ currentDate }) {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const openCategories = useCallback(() => setIsCategoriesOpen(true), []);
  const closeCategories = useCallback(() => setIsCategoriesOpen(false), []);
  const toggleCategories = useCallback(
    () => setIsCategoriesOpen((v) => !v),
    []
  );

  return (
    <header className="w-full bg-white  relative">
      <div className="bg-blue-50 p-2 md:p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-2 md:space-x-6">
            <p suppressHydrationWarning className="text-sm text-gray-700">
              {currentDate}
            </p>
            <span className="text-gray-800">•</span>
            <p className="text-sm">
              Deadly Dubai Floods Made Worse By Climate Change
            </p>
          </div>

          <div className="flex flex-wrap items-center space-x-2 md:space-x-4">
            <button className="underline text-sm">
              Subscribe to Climate Chronicle
            </button>
            <span className="hidden md:inline text-gray-800">•</span>
            <div className="flex items-center space-x-1">
              <p className="text-sm text-gray-800 hidden sm:inline">
                Follow us on :
              </p>
              <div className="flex space-x-1">
                <Image
                  src="/icons/facebook.svg"
                  width={18}
                  height={18}
                  alt="Facebook"
                />
                <Image
                  src="/icons/instagram.svg"
                  width={18}
                  height={18}
                  alt="Instagram"
                />
                <Image
                  src="/icons/linkedin.svg"
                  width={18}
                  height={18}
                  alt="LinkedIn"
                />
                <Image
                  src="/icons/youtube.svg"
                  width={18}
                  height={18}
                  alt="YouTube"
                />
                <Image
                  src="/icons/x.svg"
                  width={18}
                  height={18}
                  alt="X-twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 md:p-4">
        <div className="bg-white flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center  sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-2/3" style={{alignItems:"center"}}>
            <Image
              alt="Climate Chronicle logo"
              src="/img/logo.png"
              width={130}
              height={130}
              className="rounded-full"
            />
            <h1
              className="text-3xl sm:text-6xl font-bold inline bg-gradient-to-r from-sky-400 via-sky-100 to-transparent
          bg-[length:100%_2px] bg-no-repeat bg-left-bottom pb-1"
            >
              Climate Chronicle
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end w-full sm:w-1/3 space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
            <div className="relative w-full  flex justify-center">
              <div className="bg-gradient-to-r from-sky-400 to-sky-100 rounded-2xl px-6 py-3 flex flex-col items-start w-full">
                <p className="text-2xl sm:text-4xl font-bold text-white">19°</p>
                <p className="text-sm sm:text-lg font-light text-white">
                  Delhi
                </p>
              </div>
              <div className="absolute -top-12 sm:-top-22 -right-8 sm:-right-13">
                <Image
                  src="/img/cloud.png"
                  alt="Weather"
                  width={200}
                  height={150}
                />
              </div>
            </div>

            <button 
            className="p-2 cursor-pointer" 
            onClick={toggleCategories}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="37" cy="37" r="37" fill="black" />
                <path
                  opacity="0.31"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.8499 32.9621C54.8499 32.352 54.6075 31.7669 54.1761 31.3355C53.7447 30.904 53.1596 30.6617 52.5495 30.6617H28.8369C28.2268 30.6617 27.6417 30.904 27.2103 31.3355C26.7789 31.7669 26.5365 32.352 26.5365 32.9621C26.5365 33.5722 26.7789 34.1573 27.2103 34.5887C27.6417 35.0201 28.2268 35.2625 28.8369 35.2625H52.5495C53.1596 35.2625 53.7447 35.0201 54.1761 34.5887C54.6075 34.1573 54.8499 33.5722 54.8499 32.9621ZM54.8499 23.7605C54.8499 23.1504 54.6075 22.5653 54.1761 22.1339C53.7447 21.7024 53.1596 21.4601 52.5495 21.4601H20.3439C19.7338 21.4601 19.1486 21.7024 18.7172 22.1339C18.2858 22.5653 18.0435 23.1504 18.0435 23.7605C18.0435 24.3706 18.2858 24.9557 18.7172 25.3871C19.1486 25.8185 19.7338 26.0609 20.3439 26.0609H52.5495C53.1596 26.0609 53.7447 25.8185 54.1761 25.3871C54.6075 24.9557 54.8499 24.3706 54.8499 23.7605ZM54.8499 42.1637C54.8499 41.5536 54.6075 40.9685 54.1761 40.5371C53.7447 40.1056 53.1596 39.8633 52.5495 39.8633H20.3439C19.7338 39.8633 19.1486 40.1056 18.7172 40.5371C18.2858 40.9685 18.0435 41.5536 18.0435 42.1637C18.0435 42.7738 18.2858 43.3589 18.7172 43.7903C19.1486 44.2217 19.7338 44.4641 20.3439 44.4641H52.5495C53.1596 44.4641 53.7447 44.2217 54.1761 43.7903C54.6075 43.3589 54.8499 42.7738 54.8499 42.1637ZM54.8499 51.3653C54.8499 50.7552 54.6075 50.1701 54.1761 49.7387C53.7447 49.3072 53.1596 49.0649 52.5495 49.0649H28.8369C28.2268 49.0649 27.6417 49.3072 27.2103 49.7387C26.7789 50.1701 26.5365 50.7552 26.5365 51.3653C26.5365 51.9754 26.7789 52.5605 27.2103 52.9919C27.6417 53.4233 28.2268 53.6657 28.8369 53.6657H52.5495C53.1596 53.6657 53.7447 53.4233 54.1761 52.9919C54.6075 52.5605 54.8499 51.9754 54.8499 51.3653Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M56 31.3518C56 31.0467 55.8788 30.7542 55.6631 30.5385C55.4474 30.3228 55.1549 30.2016 54.8498 30.2016H28.8369C28.5318 30.2016 28.2393 30.3228 28.0236 30.5385C27.8079 30.7542 27.6867 31.0467 27.6867 31.3518C27.6867 31.6569 27.8079 31.9494 28.0236 32.1651C28.2393 32.3808 28.5318 32.502 28.8369 32.502H54.8498C55.1549 32.502 55.4474 32.3808 55.6631 32.1651C55.8788 31.9494 56 31.6569 56 31.3518ZM56 22.1502C56 21.8451 55.8788 21.5526 55.6631 21.3369C55.4474 21.1212 55.1549 21 54.8498 21H20.3438C20.0388 21 19.7462 21.1212 19.5305 21.3369C19.3148 21.5526 19.1936 21.8451 19.1936 22.1502C19.1936 22.4553 19.3148 22.7478 19.5305 22.9635C19.7462 23.1792 20.0388 23.3004 20.3438 23.3004H54.8498C55.1549 23.3004 55.4474 23.1792 55.6631 22.9635C55.8788 22.7478 56 22.4553 56 22.1502ZM56 40.5534C56 40.2483 55.8788 39.9558 55.6631 39.7401C55.4474 39.5244 55.1549 39.4032 54.8498 39.4032H20.3438C20.0388 39.4032 19.7462 39.5244 19.5305 39.7401C19.3148 39.9558 19.1936 40.2483 19.1936 40.5534C19.1936 40.8584 19.3148 41.151 19.5305 41.3667C19.7462 41.5824 20.0388 41.7036 20.3438 41.7036H54.8498C55.1549 41.7036 55.4474 41.5824 55.6631 41.3667C55.8788 41.151 56 40.8584 56 40.5534ZM56 49.755C56 49.4499 55.8788 49.1574 55.6631 48.9417C55.4474 48.726 55.1549 48.6048 54.8498 48.6048H28.8369C28.5318 48.6048 28.2393 48.726 28.0236 48.9417C27.8079 49.1574 27.6867 49.4499 27.6867 49.755C27.6867 50.06 27.8079 50.3526 28.0236 50.5683C28.2393 50.784 28.5318 50.9052 28.8369 50.9052H54.8498C55.1549 50.9052 55.4474 50.784 55.6631 50.5683C55.8788 50.3526 56 50.06 56 49.755Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <CategoriesPanel
        isOpen={isCategoriesOpen}
        onClose={closeCategories}
        onOpen={openCategories}
        onToggle={toggleCategories}
      />
    </header>
  );
}
