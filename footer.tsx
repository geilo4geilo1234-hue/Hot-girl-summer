import { Send } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      icon: Send,
      href: "https://t.me/hotgirIsummer",
      label: "Telegram",
    },
  ]

  return (
    <footer className="py-12 px-4 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              >
                <social.icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Footer Text */}
          <p className="text-muted-foreground text-sm tracking-wide">Hot Girl Summer – aesthetic, bold, confident</p>
        </div>
      </div>
    </footer>
  )
}
