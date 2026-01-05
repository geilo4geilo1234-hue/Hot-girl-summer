import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-10 text-balance leading-tight animate-fade-in-up">
          Step into your Hot Girl Summer era
        </h2>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-7 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 animate-fade-in-up [animation-delay:200ms]"
          asChild
        >
          <a href="https://twitter.com/i/communities/2007612438330384824" target="_blank" rel="noopener noreferrer">
            Join the Community
          </a>
        </Button>
      </div>
    </section>
  )
}
