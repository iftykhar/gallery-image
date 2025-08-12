'use client'

import React from 'react';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useImages } from '@/lib/useGallery';

type ImageType = {
  id: number;
  title?: string;
  thumbnailUrl?: string;
  url?: string;
};

const Slider = () => {
  const { data: images, isLoading, isError } = useImages() as { data: ImageType[]; isLoading: boolean; isError: boolean };

  if (isLoading) {
    return <div className="text-center p-5 text-xl">Loading images....</div>;
  }

  if (isError || !images) {
    return <div className="text-center p-5 text-red-500">Failed to load images.</div>;
  }

  return (
    <div className="w-full mx-auto my-6 flex justify-center">
      <Carousel className="w-full h-64">
        <CarouselContent>
          {images.map((image: ImageType) => {
            // Use thumbnailUrl first, then url as fallback
            const imgSrc = image.thumbnailUrl || image.url;

            // If no valid src, skip rendering this image
            if (!imgSrc) return null;

            return (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 border rounded-lg shadow-md bg-white text-center">
                  <h3 className="text-xl font-semibold mb-2">{image.title || 'Image'}</h3>
                  <Image
                    src={imgSrc}
                    alt={image.title || 'Image'}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    // Optional: priority or placeholder props
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default Slider;
