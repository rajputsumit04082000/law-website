"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10 max-w-[1400px]">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Testimonials" 
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 px-0 md:px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {SITE_CONTENT.testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <motion.div variants={itemVariants} className="h-full py-4">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col relative group hover:shadow-md transition-shadow">
                      <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/10 group-hover:text-accent/20 transition-colors" />
                      <div className="flex space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-[15px] mb-8 italic relative z-10 flex-grow">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="mt-auto">
                        <div className="font-heading font-bold text-primary text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-accent text-sm font-medium mt-1">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 lg:-left-12 bg-white hover:bg-gray-100 hover:text-black border-gray-200" />
              <CarouselNext className="-right-4 lg:-right-12 bg-white hover:bg-gray-100 hover:text-black border-gray-200" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
