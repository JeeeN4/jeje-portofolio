import Image from "next/image";
import { achievements } from "@/data/achievements";

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
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
            ACHIEVEMENTS
          </p>
          <h2 className="headline-md">Certifications & Milestones</h2>
        </div>

        {/* Carousel Wrapper dengan padding agar tombol panah tidak terpotong */}
        <div className="relative px-4 md:px-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {achievements.map((item, index) => (
                <CarouselItem
                  key={item.title}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  {/* Kartu dengan animasi angkat ringan saat dihover */}
                  <div className="card-retro overflow-hidden h-full flex flex-col group transition-transform duration-300 hover:-translate-y-1 cursor-default">
                    {/* Gambar Sertifikat dengan efek zoom halus */}
                    <div className="relative border-b-2 border-border overflow-hidden bg-background/50">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index <= 2}
                      />

                      {/* Label nomor urut bergaya terminal di pojok kanan atas */}
                      <div className="absolute top-2 right-2 border border-border bg-background/90 px-2 py-0.5 text-[10px] font-bold text-mono tracking-widest text-muted-foreground">
                        #0{index + 1}
                      </div>
                    </div>

                    {/* Informasi Sertifikat */}
                    <div className="p-5 grow flex flex-col justify-between bg-card/40">
                      <div>
                        <p className="text-primary text-mono text-xs mb-2 font-bold tracking-wider uppercase flex items-center gap-1.5">
                          <span>★</span>
                          <span>{item.issuer || "DICODING"}</span>
                        </p>

                        <h3 className="heading-primary text-lg leading-snug group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Tombol Navigasi Bergaya Arcade Retro dengan Solid Shadow */}
            <CarouselPrevious className="hidden md:flex -left-12 h-11 w-11 rounded-none border-2 border-border bg-card text-foreground shadow-[3px_3px_0px_0px_var(--border)] hover:bg-primary hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer" />
            <CarouselNext className="hidden md:flex -right-12 h-11 w-11 rounded-none border-2 border-border bg-card text-foreground shadow-[3px_3px_0px_0px_var(--border)] hover:bg-primary hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
