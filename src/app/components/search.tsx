import Image from "next/image";
import { useState } from "react";
import SearchIcon from "../../../public/search.png"
export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e:any) => {
    e.preventDefault();
    console.log("Search query:", query);
  
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-[372px] h-[56px] flex items-center p-4 space-x-2 rounded-lg bg-gray-100"
    >
      <button type="submit" className="flex items-center justify-center">
        <Image src="/search.png" alt="search icon" width={16} height={16} />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-full bg-transparent text-gray-700 font-medium text-sm placeholder-gray-500 focus:outline-none"
      />
    </form>
  );
}
