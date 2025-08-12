import React from 'react'
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Slider = () => {
  return (
    <div className='w-full mx-auto my-6 flex justify-center'>
       
    <Carousel className="w-full h-64">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-6 border rounded-lg shadow-md bg-white text-center">
                <h3 className="text-xl font-semibold mb-2">Item 4</h3>
                <p className="text-gray-600">And here is another item for demonstration.</p>
                <Image
                    src={"/public/images/background-desktop.png"}
                    alt="Slider Image 1"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>
            <CarouselNext className="absolute top-1/2 right-5 transform -translate-y-1/2">
                Next
            </CarouselNext>
            <CarouselPrevious className="absolute top-1/2 left-5 transform -translate-y-1/2">
                Previous
            </CarouselPrevious>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">    
            <div className="p-6 border rounded-lg shadow-md bg-white text-center">
                <h3 className="text-xl font-semibold mb-2">Item 4</h3>
                <p className="text-gray-600">And here is another item for demonstration.</p>
                <Image
                    src={"/public/images/background-desktop.png"}
                    alt="Slider Image 1"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div></CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 border rounded-lg shadow-md bg-white text-center">
                    <h3 className="text-xl font-semibold mb-2">Item 4</h3>
                    <p className="text-gray-600">And here is another item for demonstration.</p>
                    <Image
                        src={"/public/images/background-desktop.png"}
                        alt="Slider Image 1"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 border rounded-lg shadow-md bg-white text-center">
                    <h3 className="text-xl font-semibold mb-2">Item 4</h3>
                    <p className="text-gray-600">And here is another item for demonstration.</p>
                    <Image
                        src={"/public/images/background-desktop.png"}
                        alt="Slider Image 1"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
        </CarouselItem>
      
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default Slider