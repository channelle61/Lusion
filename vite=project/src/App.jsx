import { useEffect, useMemo, useState } from 'react'

const utilityLinks = ['Our Policy', 'Track Order', 'Help Center']
const navLinks = ['Home', 'Shop', 'Product', 'Pages', 'Blog', 'Contact']

const slides = [
  {
    id: 1,
    eyebrow: 'Latest collection',
    titleTop: 'Enjoy This',
    titleBottom: 'Winter Trend',
    cta: 'Discover now',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    eyebrow: 'Minimal wardrobe',
    titleTop: 'Quiet Luxe',
    titleBottom: 'For Daily Wear',
    cta: 'Shop now',
    image:
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    eyebrow: 'New season edit',
    titleTop: 'Soft Shapes',
    titleBottom: 'Modern Layers',
    cta: 'View collection',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop',
  },
]

const collections = [
  {
    title: 'New Arrivals',
    subtitle: 'Fresh silhouettes and clean tailoring',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Women Collection',
    subtitle: 'Fluid forms for elevated everyday dressing',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Decor Collection',
    subtitle: 'Objects that calm and soften the room',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Men Collection',
    subtitle: 'Relaxed pieces with structure and ease',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Dynamic Collection',
    subtitle: 'Active basics for travel and movement',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
  },
]

const products = [
  {
    title: 'Short straight coat',
    price: '$416.00',
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Long sleeve checked shirt',
    price: '$96.00',
    category: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Joggers with mesh detail',
    price: '$146.00',
    category: 'Bottoms',
    image:
      'https://images.unsplash.com/photo-1506629905607-c7ec01b20522?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: "Men's smart white shoes",
    price: '$146.00',
    category: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Zebra print midi skirt',
    price: '$106.00',
    category: 'Skirts',
    image:
      'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Short dress',
    price: '$133.00',
    category: 'Dresses',
    image:
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Pleated shirt dress',
    price: '$144.00',
    category: 'Dresses',
    image:
      'https://images.unsplash.com/photo-1503342452485-86b7f54527ef?q=80&w=1200&auto=format&fit=crop',
  },
]

const recommendedProducts = [
  {
    title: 'Joggers with mesh detail',
    price: '$146.00',
    category: 'Bottoms',
    image:
      'https://images.unsplash.com/photo-1506629905607-c7ec01b20522?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Long sleeve checked shirt',
    price: '$96.00',
    category: 'Shirts',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Short straight coat',
    price: '$416.00',
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
  },
]

const notices = [
  {
    shopper: 'Alex',
    location: 'New York',
    product: 'Short straight coat',
    time: '15 minutes ago',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=300&auto=format&fit=crop',
  },
  {
    shopper: 'Jony',
    location: 'USA',
    product: 'Long sleeve checked shirt',
    time: '50 minutes ago',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&auto=format&fit=crop',
  },
  {
    shopper: 'Anna',
    location: 'Japan',
    product: 'Joggers with mesh detail',
    time: '55 minutes ago',
    image:
      'https://images.unsplash.com/photo-1506629905607-c7ec01b20522?q=80&w=300&auto=format&fit=crop',
  },
]

const socialLinks = ['Facebook-f', 'X-twitter', 'Instagram']

function IconButton({ label, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-stone-300/80 text-stone-700 transition duration-300 hover:-translate-y-0.5 hover:border-stone-900 hover:text-stone-950"
    >
      {children}
    </button>
  )
}

function ProductCard({ product, compact = false }) {
  return (
    <article data-reveal className="reveal group">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-[#ebe4da]">
        <img
          src={product.image}
          alt={product.title}
          className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
            compact ? 'h-80' : 'h-[26rem]'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-4 bottom-4 translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-full bg-white/92 p-2 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.24em] text-stone-700">
              <button type="button" className="rounded-full px-3 py-2 transition hover:bg-stone-100">
                Add to cart
              </button>
              <button type="button" className="rounded-full px-3 py-2 transition hover:bg-stone-100">
                Quick View
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-1 pt-5">
        <p className="text-[11px] uppercase tracking-[0.32em] text-stone-500">
          {product.category}
        </p>
        <h3 className="mt-2 font-medium text-stone-950">{product.title}</h3>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-stone-700">{product.price}</p>
          <button
            type="button"
            className="text-[11px] uppercase tracking-[0.28em] text-stone-500 transition hover:text-stone-950"
          >
            Add Wishlist
          </button>
        </div>
      </div>
    </article>
  )
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [visibleProducts, setVisibleProducts] = useState(6)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNotice, setActiveNotice] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    const nodes = document.querySelectorAll('[data-reveal]')
    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [visibleProducts])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveNotice((current) => (current + 1) % notices.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  const currentSlide = useMemo(() => slides[activeSlide], [activeSlide])
  const currentNotice = notices[activeNotice]
  const shownProducts = products.slice(0, visibleProducts)

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-stone-900">
      <div className="border-b border-stone-200/80 bg-[#f2ece3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <div className="flex flex-wrap gap-4">
            {utilityLinks.map((item) => (
              <a key={item} href="#footer" className="transition hover:text-stone-950">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <span>English</span>
            <span>USD, $</span>
            <span>Cart 0</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#f7f4ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
          <button
            type="button"
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-stone-700 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="space-y-1">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
            Menu
          </button>

          <a href="#home" className="font-display text-3xl uppercase tracking-[0.32em] text-stone-950">
            Lusion
          </a>

          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.28em] text-stone-700 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                className="transition hover:text-stone-950"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <IconButton label="Search">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                <circle cx="11" cy="11" r="6" />
                <path d="m20 20-4.2-4.2" />
              </svg>
            </IconButton>
            <IconButton label="Wishlist">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
              </svg>
            </IconButton>
            <IconButton label="Cart">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                <path d="M3 5h2l2 10h10l2-7H7" />
                <circle cx="10" cy="19" r="1.3" />
                <circle cx="17" cy="19" r="1.3" />
              </svg>
            </IconButton>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-stone-200/70 px-4 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[11px] uppercase tracking-[0.28em] text-stone-700">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="border-b border-stone-200/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-16">
            <div
              data-reveal
              className="reveal relative overflow-hidden rounded-[2rem] bg-[#ece4d8] px-6 py-10 sm:px-10 sm:py-14 lg:min-h-[44rem]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-stone-900/5" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-stone-600">
                  <span>{String(activeSlide + 1).padStart(2, '0')}</span>
                  <span>Shop now</span>
                </div>

                <div key={currentSlide.id} className="hero-copy-enter">
                  <p className="hero-line-rise text-xs uppercase tracking-[0.36em] text-stone-600">
                    {currentSlide.eyebrow}
                  </p>
                  <div className="hero-line-rise mt-5 h-px w-20 bg-stone-400/60" />
                  <h1 className="mt-5 font-display text-5xl uppercase leading-[0.92] tracking-[0.08em] text-stone-950 sm:text-7xl xl:text-[5.75rem]">
                    <span className="hero-line-rise block">{currentSlide.titleTop}</span>
                    <span className="hero-line-rise mt-2 block">{currentSlide.titleBottom}</span>
                  </h1>
                  <div className="hero-line-rise mt-8 flex flex-wrap gap-4">
                    <a
                      href="#product"
                      className="rounded-full bg-stone-950 px-7 py-3 text-xs uppercase tracking-[0.28em] text-white transition hover:bg-stone-800"
                    >
                      {currentSlide.cta}
                    </a>
                    <button
                      type="button"
                      className="rounded-full border border-stone-400 px-7 py-3 text-xs uppercase tracking-[0.28em] text-stone-800 transition hover:border-stone-900 hover:text-stone-950"
                    >
                      Latest collection
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-1.5 rounded-full transition ${
                        index === activeSlide ? 'w-16 bg-stone-950' : 'w-8 bg-stone-400/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div data-reveal className="reveal relative overflow-hidden rounded-[2rem] bg-stone-200">
              <img
                key={currentSlide.image}
                src={currentSlide.image}
                alt={`${currentSlide.titleTop} ${currentSlide.titleBottom}`}
                className="hero-image-enter h-full min-h-[28rem] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/10 via-transparent to-white/10" />
              <div className="float-card absolute left-6 top-6 rounded-full border border-white/60 bg-white/35 px-4 py-2 text-[10px] uppercase tracking-[0.34em] text-stone-800 backdrop-blur-md">
                Lusion edit
              </div>
              <div className="float-card-delayed absolute bottom-6 right-6 rounded-[1.4rem] bg-white/80 px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-stone-700 shadow-lg backdrop-blur">
                New season arrival
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="border-b border-stone-200/70 bg-white/40">
          <div className="mx-auto grid max-w-7xl gap-px bg-stone-200/70 px-4 sm:px-6 lg:grid-cols-5 lg:px-10">
            {collections.map((collection) => (
              <article
                key={collection.title}
                data-reveal
                className="reveal group relative isolate overflow-hidden bg-[#f7f4ee]"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/10 to-transparent transition duration-500 group-hover:from-stone-950/65" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.34em] text-white/65">
                    Collection
                  </p>
                  <h2 className="font-display text-2xl uppercase tracking-[0.1em] transition duration-300 group-hover:-translate-y-1">
                    {collection.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/75 transition duration-300 group-hover:text-white/90">
                    {collection.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="product" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div
              data-reveal
              className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-stone-500">
                  Featured products
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.12em] text-stone-950 sm:text-5xl">
                  Curated Minimal Picks
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-stone-600">
                A closer recreation of the Lusion minimalist storefront with animated
                hero transitions, section reveals, elevated product interactions, and
                a more cinematic editorial feel.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {shownProducts.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </div>

            {visibleProducts < products.length ? (
              <div data-reveal className="reveal mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleProducts(products.length)}
                  className="rounded-full border border-stone-300 px-8 py-3 text-xs uppercase tracking-[0.3em] text-stone-800 transition hover:-translate-y-0.5 hover:border-stone-900 hover:text-stone-950"
                >
                  Load more
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <section id="pages" className="border-y border-stone-200/70 bg-[#efe7dc] px-4 py-16 sm:px-6 lg:px-10">
          <div
            data-reveal
            className="reveal mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Newsletter</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase tracking-[0.12em] text-stone-950 sm:text-5xl">
                Sign up to receive information about new products
              </h2>
            </div>

            <form className="flex w-full flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="min-h-14 flex-1 rounded-full border border-stone-300 bg-white/90 px-6 text-sm text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-stone-950"
              />
              <button
                type="submit"
                className="min-h-14 rounded-full bg-stone-950 px-8 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-stone-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <section id="blog" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                  Recommended products
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.12em] text-stone-950">
                  Maybe This Will Help
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.title} product={product} compact />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-stone-200/70 px-4 py-14 sm:px-6 lg:px-10">
          <div
            data-reveal
            className="reveal mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.28em] text-stone-600">
              {socialLinks.map((link) => (
                <a key={link} href="#footer" className="transition hover:text-stone-950">
                  {link}
                </a>
              ))}
            </div>
            <p className="text-sm text-stone-600">The New Essentials to Always Have On Hand</p>
          </div>
        </section>
      </main>

      <footer id="footer" className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase tracking-[0.22em] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <span>©2026 Lusion Inspired Store. All right reserved.</span>
          <span>Minimalist Demo</span>
        </div>
      </footer>

      <div className="pointer-events-none fixed bottom-5 left-5 z-50 hidden sm:block">
        <div
          key={`${currentNotice.shopper}-${currentNotice.product}`}
          className="purchase-toast rounded-[1.5rem] border border-stone-200/80 bg-white/95 p-3 shadow-[0_18px_50px_rgba(28,25,23,0.14)] backdrop-blur"
        >
          <div className="flex items-center gap-3">
            <img
              src={currentNotice.image}
              alt={currentNotice.product}
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <div className="min-w-0">
              <p className="text-xs text-stone-500">
                {currentNotice.shopper} ({currentNotice.location}) purchased
              </p>
              <p className="mt-1 truncate text-sm font-medium text-stone-950">
                {currentNotice.product}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-stone-400">
                {currentNotice.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
