"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PracticeAreas() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-12 max-w-[1400px]">
        <SectionHeading 
          title="Our Practice Areas" 
          subtitle="Specialized Expertise" 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12"
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {SITE_CONTENT.practiceAreas.map((area) => {
                const Icon = Icons[area.icon as keyof typeof Icons] as React.ElementType;
                const imageUrl = (area as any).image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800";
                
                return (
                  <CarouselItem key={area.id} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <motion.div variants={itemVariants} className="h-full py-4">
                      <Link href={`/practice-areas#${area.id}`} className="block h-full group">
                        <div className="bg-[#f0f0f0] rounded-xl overflow-hidden h-full flex flex-col group-hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
                          <div className="relative h-48 sm:h-52 bg-gray-200 shrink-0">
                            <div 
                              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                              style={{ backgroundImage: `url('${imageUrl}')` }} 
                            />
                            <div className="absolute -bottom-5 left-4">
                              <div className="w-10 h-10 rounded-full bg-[#051915] flex items-center justify-center border-[3px] border-[#f0f0f0] shadow-sm relative z-10">
                                {Icon && <Icon className="w-4 h-4 text-white" strokeWidth={2} />}
                              </div>
                            </div>
                          </div>
                          <div className="pt-8 pb-6 px-5 flex flex-col flex-grow bg-[#f0f0f0] relative z-10">
                            <h3 className="font-bold text-gray-900 mb-2 text-[15px]">{area.title}</h3>
                            <p className="text-[13px] text-gray-700 leading-relaxed mb-5 flex-grow line-clamp-4">
                              {area.description}
                            </p>
                            <div className="font-bold text-[12px] text-gray-900 flex items-center mt-auto">
                              View Detail <ChevronRight size={14} className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-white hover:bg-gray-100 hover:text-black border-gray-200" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-white hover:bg-gray-100 hover:text-black border-gray-200" />
          </Carousel>
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/practice-areas" className="inline-flex items-center justify-center font-bold text-white bg-[#051915] px-8 py-3.5 rounded-full hover:bg-[#0a2f28] transition-colors text-[13px] uppercase tracking-wider">
            View All Practice Areas <ChevronRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
