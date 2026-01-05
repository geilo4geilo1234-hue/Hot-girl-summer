import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hot.PNG" alt="Hot Girl Summer" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight text-balance animate-fade-in-up">
          Hot Girl Summer
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 font-light tracking-widest animate-fade-in-up [animation-delay:200ms]">
          Sun. Skin. Confidence.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 animate-fade-in-up [animation-delay:400ms]"
        >
          <a
            href="https://pump.fun/coin/2BckD3cuTxrSiY4d6uy2ictyeXFR1sHMpbeXKfihpump"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy the Vibe
          </a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}
