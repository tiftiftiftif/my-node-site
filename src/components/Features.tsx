import { motion } from "motion/react";

const features = [
  {
    title: "Organic Integration",
    description: "Architecture that doesn't just sit on the land, but grows from it. Seamless transitions between indoor luxury and outdoor wildness.",
    image: "https://picsum.photos/seed/jungle/600/800",
    colSpan: "md:col-span-1",
    hasText: true
  },
  {
    title: "Visual Silence",
    description: "Spaces designed to quiet the mind. Minimalist palettes and natural textures create a canvas for thought.",
    image: "https://picsum.photos/seed/minimal/800/600",
    colSpan: "md:col-span-2",
    hasText: true
  },
  {
    title: "Sustainable Future",
    description: "Off-grid capabilities hidden within high design.",
    image: "https://picsum.photos/seed/solar/600/600",
    colSpan: "md:col-span-1",
    hasText: false
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-cream relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-ink/10 pb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-ink max-w-xl">
            Designed for the <br/><span className="italic text-forest">conscious observer.</span>
          </h2>
          <p className="text-ink/60 max-w-xs mt-6 md:mt-0 text-sm tracking-wide leading-relaxed">
            A COLLECTION OF SPACES DEDICATED TO THE ART OF LIVING WELL.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative ${feature.colSpan}`}
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4] md:aspect-auto md:h-[500px]">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              
              {feature.hasText && (
                <div className="pr-8">
                  <span className="text-xs font-bold tracking-widest uppercase text-forest mb-2 block">0{index + 1}</span>
                  <h3 className="text-2xl font-serif text-ink mb-3">{feature.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Geometric Accent */}
        <div className="mt-24 flex justify-center">
           <div className="w-24 h-24 bg-ink rounded-t-full"></div>
        </div>
      </div>
    </section>
  );
}
