export function GallerySection() {
  const images = [
    {
      src: "/adult-woman-in-bikini-poolside-editorial-fashion-p.jpg",
      alt: "Poolside confidence",
    },
    {
      src: "/adult-woman-in-swimwear-beach-bed-sunglasses-miami.jpg",
      alt: "Beach bed luxury",
    },
    {
      src: "/tanned-woman-bikini-cocktail-poolside-instagram-ae.jpg",
      alt: "Summer cocktails",
    },
    {
      src: "/confident-woman-swimwear-sunset-beach-ibiza-vibes-.jpg",
      alt: "Sunset beach",
    },
    {
      src: "/adult-woman-bikini-pool-sunglasses-tanned-skin-edi.jpg",
      alt: "Pool fashion",
    },
    {
      src: "/woman-swimwear-tropical-beach-palm-trees-summer-bo.jpg",
      alt: "Tropical paradise",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 text-foreground text-balance">
          The Aesthetic
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 mb-6 break-inside-avoid animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
