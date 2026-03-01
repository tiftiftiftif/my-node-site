import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 overflow-hidden bg-cream">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-ink"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-ink/60">
                  Architectural Living
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-ink leading-[0.9] mb-8">
                Green <br/>
                <span className="italic">Class</span>
              </h1>
              
              <p className="text-lg text-ink/70 mb-10 max-w-md font-light leading-relaxed">
                A surreal dialogue between organic forms and minimalist structures. 
                Experience living spaces that defy convention and embrace nature.
              </p>
              
              <div className="flex items-center gap-6">
                <button className="group flex items-center gap-3 text-ink font-medium border-b border-ink pb-1 hover:text-forest hover:border-forest transition-colors">
                  Explore The Estate
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Image Composition */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Main Image - Floating Pod */}
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/architecture/1200/900" 
                  alt="Surreal architectural pod" 
                  className="w-full h-full object-cover"
                />
                
                {/* Geometric Overlay - The "Flag" */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-ink mix-blend-multiply hidden md:block">
                   <div className="w-full h-full bg-cream rounded-bl-[100px]"></div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-12 -right-12 w-64 h-64 bg-forest z-0 hidden lg:block"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute -left-12 bottom-12 w-48 h-64 overflow-hidden hidden lg:block border-4 border-cream shadow-xl"
            >
               <img 
                  src="https://picsum.photos/seed/plants/400/600" 
                  alt="Detail texture" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-clay/20 -z-10"></div>
    </section>
  );
}
