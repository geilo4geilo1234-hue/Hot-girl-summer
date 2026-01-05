export function PowerStatementSection() {
  return (
    <section className="relative py-32 md:py-40 px-4 overflow-hidden">
      {/* Background with subtle bikini image */}
      <div className="absolute inset-0 z-0">
        <img src="/blurred-abstract-summer-beach-bikini-aesthetic-sof.jpg" alt="" className="w-full h-full object-cover opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance animate-fade-in-up">
          This summer is about confidence, not permission.
        </h2>
      </div>
    </section>
  )
}
