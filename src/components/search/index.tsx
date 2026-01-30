"use client";
import { useSearch } from '@/hooks/useSearch';
export const Search = () => {
  const { handleChange, query } = useSearch();
  return (
    <div className="w-1/2">
      <input type="search" placeholder="Search users..." className="w-full p-2 border border-gray-300 rounded-md bg-white placeholder:text-gray-900 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={query} onChange={handleChange} />
    </div>
  )
}
