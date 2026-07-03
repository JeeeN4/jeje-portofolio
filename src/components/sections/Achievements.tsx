"use client";

import Image from "next/image";
import { achievements } from "@/data/achievements";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-(--section-alt)">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center md:mb-12">
            <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
              ACHIEVEMENTS
            </p>
            <h2 className="headline-md">Certifications & Milestones</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative px-4 md:px-14">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3500,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {achievements.map((item, index) => (
                  <CarouselItem
                    key={item.title}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    {/* OPTIMASI MOBILE: Tambahkan active:-translate-y-1 agar merespons saat digeser/di-tap di HP */}
                    <div className="card-retro overflow-hidden h-full flex flex-col group transition-transform duration-300 sm:hover:-translate-y-1 active:-translate-y-1 cursor-grab active:cursor-grabbing">
                      {/* Gambar Sertifikat - Tinggi (h-48 di HP, h-52 di PC) agar tidak kebesaran di layar sentuh */}
                      <div className="relative border-b-2 border-border overflow-hidden bg-background/50">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          /* OPTIMASI MOBILE: Ditambahkan group-active:scale-105 untuk feedback sentuhan jari */
                          className="h-48 sm:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
                          priority={index <= 2}
                        />

                        {/* Badge Nomor Urut Solid Green */}
                        <div className="absolute top-2 right-2 border-2 border-border bg-primary px-2.5 py-0.5 text-[11px] font-bold text-mono tracking-widest text-primary-foreground shadow-[2px_2px_0px_0px_var(--border)]">
                          #0{index + 1}
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 grow flex flex-col justify-between bg-card/40">
                        <div>
                          <p className="text-primary text-mono text-xs mb-2 font-bold tracking-wider uppercase flex items-center gap-1.5">
                            <span>★</span>
                            <span>{item.issuer || "DICODING"}</span>
                          </p>

                          {/* OPTIMASI MOBILE: Ditambahkan group-active:text-primary */}
                          <h3 className="heading-primary text-lg leading-snug group-hover:text-primary group-active:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex -left-12 h-11 w-11 rounded-none border-2 border-border bg-card text-foreground shadow-[3px_3px_0px_0px_var(--border)] hover:bg-primary hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer" />
              <CarouselNext className="hidden md:flex -right-12 h-11 w-11 rounded-none border-2 border-border bg-card text-foreground shadow-[3px_3px_0px_0px_var(--border)] hover:bg-primary hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer" />
            </Carousel>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
