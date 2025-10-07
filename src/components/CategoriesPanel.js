import React from "react";
import { RxCross2 } from "react-icons/rx";

const categories = [
  {
    name: "Climate Science And Research",
    bg: "bg-red-500",
    text: "text-white",
  },
  {
    name: "Environmental Policies And Regulations",
    bg: "bg-yellow-400",
    text: "text-black",
  },
  { name: "Extreme Weather Events", bg: "bg-orange-500", text: "text-white" },
  {
    name: "Climate Solutions And Adaptation",
    bg: "bg-blue-500",
    text: "text-white",
  },
  {
    name: "Biodiversity And Ecosystems",
    bg: "bg-teal-400",
    text: "text-black",
  },
  { name: "Education And Awareness", bg: "bg-purple-500", text: "text-white" },
  {
    name: "Renewable Energy And Technology",
    bg: "bg-green-500",
    text: "text-white",
  },
  { name: "Opinion And Commentary", bg: "bg-gray-400", text: "text-black" },
  { name: "Climate Justice And Equity", bg: "bg-sky-400", text: "text-black" },
];

export default function CategoriesPanel({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-[1px] z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={
          "fixed top-0 right-0 h-full bg-white z-50 w-80 max-w-[85vw] shadow-2xl " +
          "transform transition-transform duration-300 ease-in-out " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
        role="dialog"
        aria-modal="true"
        aria-label="Categories"
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-gray-100"
            aria-label="Close categories"
          >
            <RxCross2 className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-3 overflow-y-auto h-full pb-24">
          {categories.map((c) => (
            <button
              key={c.name}
              className={`w-full px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md active:scale-95 ${c.bg} ${c.text}`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
