'use client';

import { useQuery } from '@tanstack/react-query';

// This function fetches image data from a public API
export async function fetchImages() {
  const res = await fetch('https://api.allorigins.win/get?url=https://random-d.uk/api/v2/random');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
}

// This custom hook uses TanStack Query to manage the fetching and state
export function useImages() {
  return useQuery({
    queryKey: ['images'],
    queryFn: fetchImages,
  });
}