import React from "react";

export default function InfoCard({ name, link, cat }) {
  return (
    <div
      className="w-full rounded overflow-hidden shadow-lg mx-auto bg-light-400"
      style={{ minHeight: "120px" }}
    >
      <div className="px-6 py-4 text-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className=" text-primary-500 text-4xl mb-2 truncate">{name}</p>
        </a>
        <p className="text-gray-600 text-base">{cat}</p>
      </div>
    </div>
  );
}
