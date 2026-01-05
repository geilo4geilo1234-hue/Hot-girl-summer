import { Sparkles, Music, Flame } from "lucide-react"

export function LifestyleSection() {
  const cards = [
    {
      icon: Flame,
      title: "Body",
      description: "Summer glow & self-expression",
      color: "text-primary",
    },
    {
      icon: Music,
      title: "Energy",
      description: "Sun, freedom, music",
      color: "text-secondary",
    },
    {
      icon: Sparkles,
      title: "Confidence",
      description: "Owning your presence",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 text-foreground text-balance">
          Your Summer Era
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-10 lg:p-12 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`inline-flex p-5 rounded-2xl bg-muted mb-6 group-hover:scale-110 transition-transform duration-300 ${card.color}`}
              >
                <card.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-card-foreground">{card.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
