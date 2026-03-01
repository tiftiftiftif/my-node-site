import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Atelier",
    price: "2,500",
    description: "For the individual seeking sanctuary.",
    features: ["Private Garden Access", "Concierge Service", "Wellness Center", "Secure Parking"],
    highlight: false
  },
  {
    name: "Estate",
    price: "5,000",
    description: "Expansive living for the modern family.",
    features: ["Everything in Atelier", "Private Pool", "Guest House Access", "Chef's Kitchen", "Priority Events"],
    highlight: true
  },
  {
    name: "Penthouse",
    price: "Inquire",
    description: "The pinnacle of architectural living.",
    features: ["Everything in Estate", "Rooftop Terrace", "Private Elevator", "Helipad Access", "24/7 Security Detail"],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-clay/20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-ink/60 block mb-4">
            Membership
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-ink">
            Curated Living
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink/10 divide-y md:divide-y-0 md:divide-x divide-ink/10 bg-cream">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-12 flex flex-col hover:bg-white transition-colors duration-500 ${plan.highlight ? 'bg-white' : ''}`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-ink mb-2">{plan.name}</h3>
                <p className="text-ink/50 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif text-ink">{plan.price}</span>
                  {plan.price !== "Inquire" && <span className="text-ink/40 text-sm">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink/70 text-sm">
                    <div className="w-1 h-1 bg-forest rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 border border-ink text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                plan.highlight
                  ? "bg-ink text-white hover:bg-forest hover:border-forest"
                  : "bg-transparent text-ink hover:bg-ink hover:text-white"
              }`}>
                Select {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
