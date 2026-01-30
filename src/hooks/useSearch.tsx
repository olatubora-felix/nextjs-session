"use client";
import { useUpdateQuery } from "@/hooks/useUpdateQuery";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState, useCallback } from "react";
import { useDebounce } from "use-debounce";

export const useSearch = () => {
  const searchParams = useSearchParams();
  const urlSearchTerm = searchParams.get("searchTerm");
  const [query, setQuery] = useState(
    urlSearchTerm !== null ? urlSearchTerm : ""
  );

  const updateQueryParams = useUpdateQuery();
  const [searchTerm] = useDebounce(query, 1000);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    if (searchTerm !== "" && searchTerm !== undefined) {
      updateQueryParams({ searchTerm });
    }

    if (searchTerm === "") {
      updateQueryParams({ searchTerm: "" });
    }
  }, [searchTerm, updateQueryParams]);

  return {
    handleChange,
    query,
  };
};
