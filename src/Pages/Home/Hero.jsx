import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "../../@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../@/components/ui/carousel";
import { Button } from "../../@/components/ui/button";
import { Link } from "react-router-dom";
import heroimg1 from "../../assets/heroimg1.png"
import heroimg2 from "../../assets/heroimg2.png"
import heroimg3 from "../../assets/heroimg3.png"
import heroimg4 from "../../assets/heroimg4.jpeg"
import heroimg5 from "../../assets/heroimg5.png"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  //Defining array of images for carousel
  const images = [heroimg1, heroimg2, heroimg3, heroimg4, heroimg5]

  //Slide will change after every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full justify-center gap-10">
        <Card className="w-full md:w-1/2 flex flex-col items-center justify-center md:mx-0 p-10">
          <CardContent className="text-left">
            <h2 className="text-4xl font-bold">Explore Trending Fashion!</h2>
            <p className="mt-2 text-lg">
              Discover your style with our latest collection
            </p>
            <Button className="mt-4 px-4 py-2">
              <Link to={'/products'}>Shop Now</Link>
            </Button>
          </CardContent>
        </Card>
        <Carousel className="w-full md:w-1/2 max-w-sm mx-auto md:mx-0">
          <CarouselContent className="object-cover">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={index === currentSlide ? "block" : "hidden"}
              >
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex aspect-square items-center justify-center  p-0">
                      <img className="rounded-sm" src={image} alt="Image Slider" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
