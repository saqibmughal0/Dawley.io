"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CourseTestimonials() {
  const testimonials = [
    {
      name: "Ali Raza",
      role: "Graphic Design Student",
      review:
        "This course completely changed my career. The practical work helped me get freelance clients.",
      rating: 5,
    },
    {
      name: "Ayesha Khan",
      role: "Web Development Student",
      review:
        "Highly recommended! Everything was explained clearly with real-world examples.",
      rating: 5,
    },
    {
      name: "Usman Ahmed",
      role: "Digital Marketing Student",
      review:
        "Best short course experience. I learned ads & analytics very easily.",
      rating: 4,
    },
    {
      name: "Fatima Noor",
      role: "Graphic Designer",
      review:
        "Amazing experience! I can now confidently design social media creatives.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Student Success Quotes</h2>
        </div>

        {/* SHADCN Carousel */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem
                key={i}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full">
                  <CardHeader>
                    {/* Stars */}
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <span key={idx}>⭐</span>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t.role}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-gray-600">
                      “{t.review}”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
