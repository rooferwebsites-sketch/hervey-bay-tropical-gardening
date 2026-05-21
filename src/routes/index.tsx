import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <OurWork />
        <Reviews />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Navigation({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (val: boolean) => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-jungle/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <LeafIcon className="w-8 h-8 text-jungle" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-black text-jungle uppercase tracking-tighter">Hervey Bay</span>
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Tropical Gardening</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Our Work', 'Reviews', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-sm font-semibold text-jungle hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:0468544943" className="text-sm font-bold text-jungle hover:text-gold transition-colors">
              0468 544 943
            </a>
            <a
              href="#contact"
              className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-md"
            >
              Free Quote →
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-jungle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-jungle/10 py-4 px-4 space-y-4">
          {['Services', 'About', 'Our Work', 'Reviews', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="block text-lg font-bold text-jungle"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="tel:0468544943" className="block text-lg font-bold text-gold">0468 544 943</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/605897915_1453896156745980_1944828072646753613_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ChCydKrq4hAQ7kNvwEjgnUK&_nc_oc=Adq_mPkcGXrUV93Y4NlqOpnwo3lNfajX_n-bt5fD58AeR0NUoMeBOLmbj5oxQ6Ul5Jw&_nc_zt=23&se=-1&_nc_ht=scontent-xxc1-1.xx&_nc_gid=TtbSCMHHXufk61W-JdbWIw&_nc_ss=7b2a8&oh=00_Af5HN9r0CfylM85rjlU-dXSK2B7KIQZoFomlrVVtEXovHw&oe=6A1533F7"
          alt="Hervey Bay Tropical Garden Installation"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-jungle/40 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle/90 via-jungle/20 to-jungle/60 md:bg-gradient-to-r md:from-jungle/90 md:via-jungle/40 md:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left">
        <div className="reveal space-y-6 max-w-3xl">
          <div className="inline-flex items-center bg-gold/20 backdrop-blur-sm border border-gold/30 px-4 py-1.5 rounded-full">
            <span className="text-xs font-bold text-gold tracking-widest uppercase">🌿 Hervey Bay · Fraser Coast</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1]">
            Hervey Bay's Premier <span className="text-gold">Tropical Garden</span> Specialists
          </h1>
          
          <p className="text-base md:text-xl text-white/90 font-medium leading-relaxed">
            Transform your outdoor space into a lush tropical paradise. Custom design, full installation and expert maintenance for resort style results from a Hervey Bay local team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="tel:0468544943"
              className="bg-gold text-white px-8 py-4 rounded-full text-base md:text-lg font-extrabold hover:brightness-110 transition-all shadow-xl text-center flex items-center justify-center gap-2"
            >
              <PhoneIcon size={20} />
              Call Kevin
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-base md:text-lg font-extrabold hover:bg-white hover:text-jungle transition-all text-center"
            >
              Get Free Quote →
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="reveal stagger-1 mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 border-t border-white/10 pt-10">
          {[
            { icon: <CheckIcon />, text: 'Licensed & Insured' },
            { icon: <CalendarIcon />, text: '10+ Years Experience' },
            { icon: <MapIcon />, text: 'Hervey Bay Local' },
            { icon: <StarIcon />, text: 'Free Consultations' },
            { icon: <StarIcon />, text: '5 Star Rated' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white/80">
              <span className="text-gold">{item.icon}</span>
              <span className="text-sm font-bold tracking-tight uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      title: 'Garden Design & Consulting',
      desc: 'Professional design and expert consulting for custom tropical landscape projects',
    },
    {
      title: 'Garden & Softscaping Builds',
      desc: 'Full installation of tropical planting schemes and garden structures by specialists',
    },
    {
      title: 'Garden Clean Ups',
      desc: 'Professional clearing and restoration services for overgrown or neglected gardens',
    },
    {
      title: 'Garden Maintenance Services',
      desc: 'Comprehensive care to keep your tropical garden healthy and lush year round',
    },
    {
      title: 'Lawn Mowing & Garden Care',
      desc: 'Quality lawn mowing and expert care for all your residential garden needs',
    },
    {
      title: 'Greenwall Specialist',
      desc: 'Tropical gardening experts specializing in stunning vertical greenwall installations',
    },
  ]

  return (
    <section id="services" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16 space-y-4">
          <span className="text-sm font-black text-gold tracking-[0.3em] uppercase">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-black text-jungle">Tropical garden services, end to end.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal stagger-1 bg-cream p-8 rounded-2xl border-2 border-transparent hover:border-gold hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-jungle rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LeafIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-jungle mb-4">{s.title}</h3>
              <p className="text-jungle/70 font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-cream py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <img
            src="https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/596390175_1438080318327564_9000114967092268268_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CEyMVVO3ud4Q7kNvwG3WBUa&_nc_oc=AdrMyfO0DT4vuZrom7kW7AXeQuFIiyLkwm46iHmbWio86Emq0jzp8iiCuK43l_B79-k&_nc_zt=23&_nc_ht=scontent-xxc1-1.xx&_nc_gid=eEl2tqt7gcwDvuSyvLsygw&_nc_ss=792a8&oh=00_Af7ZmeRposTA1Q8wgal7cRUZ3ygVEw0iqaduuU-DcfNNAg&oe=6A155149"
            alt="Kevin Burness Owner of Hervey Bay Tropical Gardening"
            className="rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none aspect-square object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Floating badges */}
          <div className="absolute -right-4 top-10 bg-white p-4 rounded-2xl shadow-xl border border-gold/20 flex flex-col items-center">
            <span className="text-2xl font-black text-jungle">3,700+</span>
            <span className="text-[10px] font-bold text-gold uppercase tracking-wider">Facebook Followers</span>
          </div>
          <div className="absolute -left-4 bottom-20 bg-jungle p-4 rounded-2xl shadow-xl flex flex-col items-center">
            <span className="text-2xl font-black text-white">10+</span>
            <span className="text-[10px] font-bold text-gold uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="absolute right-10 -bottom-6 bg-gold p-4 rounded-2xl shadow-xl flex flex-col items-center">
            <span className="text-2xl font-black text-white">100s</span>
            <span className="text-[10px] font-bold text-jungle uppercase tracking-wider">Gardens Transformed</span>
          </div>
        </div>

        <div className="reveal space-y-8">
          <div className="space-y-4">
            <span className="text-sm font-black text-gold tracking-[0.3em] uppercase">About Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-jungle leading-[1.1]">
              A decade of tropical garden craft on the Fraser Coast.
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-jungle/80 font-medium leading-relaxed">
            Hervey Bay Tropical Gardening has been transforming outdoor spaces across Hervey Bay and the Fraser Coast for over 10 years. We specialise in creating lush, resort style tropical gardens that bring the beauty of the tropics to your home.
          </p>
          <p className="text-base md:text-lg text-jungle/80 font-medium leading-relaxed">
            From initial design consultation through to full installation and ongoing maintenance, we handle every aspect of your garden transformation. Our deep knowledge of tropical plants including bromeliads, cordylines, elephant ears, palms and more means we select species perfectly suited to Hervey Bay's climate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="bg-jungle text-white px-8 py-4 rounded-full text-base md:text-lg font-extrabold hover:brightness-125 transition-all text-center"
            >
              Start Your Project →
            </a>
            <a
              href="tel:0468544943"
              className="border-2 border-jungle text-jungle px-8 py-4 rounded-full text-base md:text-lg font-extrabold hover:bg-jungle hover:text-white transition-all text-center flex items-center justify-center gap-2"
            >
              <PhoneIcon size={20} />
              Call Kevin
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-jungle">
      {/* Subtle overlay */}
      <img
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=20&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="reveal text-center mb-16 space-y-4">
          <span className="text-sm font-black text-gold tracking-[0.3em] uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">Specialists, not generalists.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <MapIcon />, title: 'Local Hervey Bay Experts' },
            { icon: <LeafIcon />, title: 'Tropical Plant Specialists' },
            { icon: <CheckIcon />, title: 'Full Service' },
            { icon: <StarIcon />, title: 'Resort Style Results' },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal stagger-1 bg-white/5 border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center gap-6 hover:border-gold transition-colors group"
            >
              <div className="text-gold group-hover:scale-125 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white leading-tight">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OurWork() {
  const works = [
    {
      img: 'https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/701708444_1588723513263243_4371098180754463925_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpegr_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=p_OrM9YnU8wQ7kNvwFQrEAQ&_nc_oc=AdqG1qy3KQJbSd0JnntHc7amm62k6v60a5stBqa51IU6-12WEnyfHrpq0H_Y06eSIGE&_nc_zt=23&se=-1&_nc_ht=scontent-xxc1-1.xx&_nc_gid=T_kNgcDBcYvQdkexG_J8EQ&_nc_ss=7b2a8&oh=00_Af57dbuc3sXHY97NN8Rt62hoUAzUhurvGhi3Gd6JKced7A&oe=6A154278',
      title: 'Resort Style Garden Build',
      suburb: 'Torquay',
    },
    {
      img: 'https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/701538043_1588436296625298_2445353559854851520_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpegr_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=V1tHBMlf7HkQ7kNvwExIt66&_nc_oc=Adpnh7tobJg3ngSxponSWcA-CMVcDfCUuSzPHYyN88cCiL1GYmKY1OmoVvM-DMtv79A&_nc_zt=23&se=-1&_nc_ht=scontent-xxc1-1.xx&_nc_gid=9v7OLIFF3cBlIYWsy9HjVA&_nc_ss=7b2a8&oh=00_Af7CVIxgYO8SbbfxJ1FDbcsaWkJHqgqPnDABRA5dwryRtQ&oe=6A1543A0',
      title: 'Lush Tropical Oasis',
      suburb: 'Pialba',
    },
    {
      img: 'https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/672288977_1557361103066151_5996938459572439629_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpegr_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=HiOHXlCIFSYQ7kNvwFSXq6E&_nc_oc=AdqciMPjE_CuoVvMQqlVvmruj28PK-LxPJuvyto1vNTtxgIhZZKcj3PeKyjtYF-vJGo&_nc_zt=23&se=-1&_nc_ht=scontent-xxc1-1.xx&_nc_gid=ZCk_i812iwB9M3-oh489Uw&_nc_ss=792a8&oh=00_Af41xOY_RvTfr5p9oDzwuHsmppN2MYIrOFIM_NnE8EdP1Q&oe=6A152E3F',
      title: 'Garden Bed Transformation',
      suburb: 'Point Vernon',
    },
    {
      img: 'https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/659113187_1541778771291051_7552489322039216338_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpegr_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=vfMicHhhX2gQ7kNvwGGEuGZ&_nc_oc=Adpyju-q3afg5JIgmcnojHaZ3n4jdBWOXCy99sCMtUuJxc_8E_gGDUBSOzNE4-oaSgA&_nc_zt=23&se=-1&_nc_ht=scontent-xxc1-1.xx&_nc_gid=jaZx4esXWX38DD-XfOtlgw&_nc_ss=792a8&oh=00_Af6Z-qgTv2Kyen4yItOk-h8ef5xSNOACa7HbYZQsFn_4Kw&oe=6A1535FF',
      title: 'Custom Tropical Landscaping',
      suburb: 'Nikenbah',
    },
    {
      img: 'https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/649919144_1522411499894445_4411509510744966460_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpegr_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=G0mbxbwW-BoQ7kNvwHq2o4J&_nc_oc=Adq0R-0L-HE9W3HAzG4ugwQkirndTYccwVQi6ZhGN3_iCO4MqBEcFWrRxuATKn4mH0A&_nc_zt=23&se=-1&_nc_ht=scontent-xxc1-1.xx&_nc_gid=_nLjEWVm-C-IA98vXT3waA&_nc_ss=792a8&oh=00_Af6lirOJqSIwvXZV_nI3cRpT5R_JX85yf5WfF7FU7Nc7lw&oe=6A15303A',
      title: 'Poolside Tropical Design',
      suburb: 'Urraween',
    },
    {
      img: 'https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/621826627_1481685537300375_1377416752193261927_n.jpg?stp=c0.84.768.768a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_ohc=BphkEcuGgO0Q7kNvwEYNQpN&_nc_oc=AdqLzN4iW7MiAUc-YJGpkdCiF72ms6oeog6NXr3Q4cCYmctQJfF3aAaUs51gkjonFxI&_nc_zt=23&_nc_ht=scontent-xxc1-1.xx&_nc_gid=E_R5QHJxbaRiFsJbtx7hRw&_nc_ss=792a8&oh=00_Af77biMJaUStONM3grY2P9GfbbO1hHeH9qZMohrsdyklZA&oe=6A154ADF',
      title: 'Feature Palm Installation',
      suburb: 'Torquay',
    },
  ]

  return (
    <section id="ourwork" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16 space-y-4">
          <span className="text-sm font-black text-gold tracking-[0.3em] uppercase">Our Recent Work</span>
          <h2 className="text-3xl md:text-5xl font-black text-jungle">Gardens we've brought to life.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <a
              key={i}
              href="https://facebook.com/herveybaytropicalgardening"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal stagger-1 group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl block"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle/90 via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-gold font-bold text-sm tracking-widest uppercase mb-2">{work.suburb}</span>
                <h3 className="text-white text-2xl font-black leading-tight mb-6">{work.title}</h3>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-gold text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                    View on Facebook →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    {
      name: 'Karen Baker',
      location: 'Hervey Bay',
      text: 'So happy that I found this business!!! Very approachable professional and friendly guy but also an incredible amount of knowledge and experience in his profession!!! Investing in Kevin for a garden consult is the best investment for your garden.',
    },
    {
      name: 'Josh Aung',
      location: 'Hervey Bay',
      text: "Kevin's expertise and extensive knowledge on tropical gardening and everything maintenance is amazing. A very down to earth guy. Recommend his services to everyone!",
    },
    {
      name: 'Michelle Wright',
      location: 'Fraser Coast',
      text: 'Absolutely thrilled with our garden transformation. Kevin has an eye for detail and a deep understanding of what plants thrive here. Our backyard feels like a private resort now.',
    },
    {
      name: 'David Thompson',
      location: 'Torquay',
      text: 'Professional, reliable, and hardworking. Kevin transformed our overgrown mess into a stunning tropical entrance. Highly recommend for anyone wanting high quality garden work.',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reviews.length])

  return (
    <section id="reviews" className="bg-cream py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="reveal text-center mb-16 space-y-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-jungle font-black text-xs tracking-widest uppercase">Verified Client Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-jungle">
            Client Testimonials
          </h2>
        </div>

        <div className="reveal relative min-h-[450px] md:min-h-[350px] flex flex-col">
          <div className="relative flex-1">
            {reviews.map((r, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center text-center px-4 md:px-12 ${
                  i === activeIndex 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="text-gold mb-8 opacity-30">
                  <QuoteIcon size={56} />
                </div>
                <p className="text-xl md:text-2xl text-jungle/90 italic font-medium leading-relaxed mb-10">
                  "{r.text}"
                </p>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-black text-jungle">{r.name}</span>
                  <span className="text-sm font-bold text-gold uppercase tracking-widest">{r.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-jungle/20 hover:bg-jungle/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    {
      num: '01',
      title: 'Free Consultation',
      desc: 'We visit your property and discuss your vision lifestyle and budget, no obligation',
    },
    {
      num: '02',
      title: 'Custom Design & Quote',
      desc: 'We create a tailored tropical garden plan with detailed plant list and full quote',
    },
    {
      num: '03',
      title: 'Installation & Aftercare',
      desc: 'We build your dream garden and provide ongoing maintenance and plant support',
    },
  ]

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16 space-y-4">
          <span className="text-sm font-black text-gold tracking-[0.3em] uppercase">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-black text-jungle">Building your tropical paradise.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal stagger-1 bg-cream p-10 rounded-3xl group hover:bg-jungle transition-all duration-500"
            >
              <span className="text-5xl font-black text-gold/30 group-hover:text-gold/50 transition-colors block mb-6">
                {step.num}
              </span>
              <h3 className="text-2xl font-black text-jungle group-hover:text-white transition-colors mb-4">
                {step.title}
              </h3>
              <p className="text-jungle/70 group-hover:text-white/70 transition-colors font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formState, setFormState] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('success')
  }

  return (
    <section id="contact" className="bg-jungle py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16 space-y-4">
          <span className="text-sm font-black text-gold tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">Let's design your tropical paradise.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="reveal lg:col-span-3">
            {formState === 'success' ? (
              <div className="bg-white/10 p-10 rounded-3xl border border-gold/30 text-center space-y-4">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckIcon size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-black text-white">Request Sent!</h3>
                <p className="text-white/70 text-lg font-medium">Thank you. Kevin will be in touch shortly to discuss your tropical garden project.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-gold font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Phone</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Type of Service</label>
                  <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors [&>option]:text-jungle">
                    <option>Garden Design & Consulting</option>
                    <option>Garden & Softscaping Build</option>
                    <option>Garden Clean Up</option>
                    <option>Garden Maintenance</option>
                    <option>Lawn Mowing & Care</option>
                    <option>Greenwall Installation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Property Size</label>
                  <select className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors [&>option]:text-jungle">
                    <option>Small courtyard townhouse</option>
                    <option>Medium standard backyard</option>
                    <option>Large 800m²+</option>
                    <option>Acreage</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="md:col-span-2 bg-gold text-white py-5 rounded-xl text-lg font-black hover:brightness-110 transition-all shadow-xl mt-4 uppercase tracking-widest">
                  Send My Free Quote Request →
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="reveal lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-3xl space-y-8">
              <h3 className="text-2xl font-black text-jungle">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-gold mt-1"><MapIcon size={20} /></div>
                  <div>
                    <span className="block text-sm font-bold text-gold uppercase tracking-widest mb-1">Our Base</span>
                    <span className="text-lg font-black text-jungle">14 Robert Street Torquay QLD 4655</span>
                  </div>
                </div>
                <a href="tel:0468544943" className="flex gap-4 group">
                  <div className="text-gold mt-1"><PhoneIcon size={20} /></div>
                  <div>
                    <span className="block text-sm font-bold text-gold uppercase tracking-widest mb-1">Phone</span>
                    <span className="text-lg font-black text-jungle group-hover:text-gold transition-colors">0468 544 943</span>
                  </div>
                </a>
                <a href="mailto:info@herveybaytropicalgardening.com.au" className="flex gap-4 group">
                  <div className="text-gold mt-1"><MailIcon size={20} /></div>
                  <div>
                    <span className="block text-sm font-bold text-gold uppercase tracking-widest mb-1">Email</span>
                    <span className="text-lg font-black text-jungle group-hover:text-gold transition-colors text-break">info@herveybaytropicalgardening.com.au</span>
                  </div>
                </a>
              </div>

              <div className="flex gap-4 pt-4 border-t border-jungle/10">
                <a href="https://facebook.com/herveybaytropicalgardening" className="w-12 h-12 bg-jungle text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                  <FacebookIcon />
                </a>
                <a href="https://instagram.com/herveybaytropicalgardening" className="w-12 h-12 bg-jungle text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div className="bg-gold p-10 rounded-3xl">
              <h3 className="text-2xl font-black text-jungle mb-6">Service Area</h3>
              <div className="flex flex-wrap gap-2">
                {['Torquay', 'Pialba', 'Scarness', 'Urraween', 'Kawungan', 'Eli Waters', 'Point Vernon', 'Wondunna', 'Nikenbah', 'Maryborough'].map(tag => (
                  <span key={tag} className="bg-jungle text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative bg-jungle text-white pt-20 overflow-hidden">
      {/* Background Image for Footer */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://scontent-xxc1-1.xx.fbcdn.net/v/t39.30808-6/605897915_1453896156745980_1944828072646753613_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ChCydKrq4hAQ7kNvwEjgnUK&_nc_oc=Adq_mPkcGXrUV93Y4NlqOpnwo3lNfajX_n-bt5fD58AeR0NUoMeBOLmbj5oxQ6Ul5Jw&_nc_zt=23&se=-1&_nc_ht=scontent-xxc1-1.xx&_nc_gid=TtbSCMHHXufk61W-JdbWIw&_nc_ss=7b2a8&oh=00_Af5HN9r0CfylM85rjlU-dXSK2B7KIQZoFomlrVVtEXovHw&oe=6A1533F7"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <LeafIcon className="w-8 h-8 text-gold" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-black text-white uppercase tracking-tighter">Hervey Bay</span>
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Tropical Gardening</span>
            </div>
          </div>
          <p className="text-white/60 font-medium">Transforming Hervey Bay yards into lush tropical escapes for over a decade.</p>
          <div className="flex gap-4">
             <a href="https://facebook.com/herveybaytropicalgardening" className="text-white/40 hover:text-gold transition-colors"><FacebookIcon /></a>
             <a href="https://instagram.com/herveybaytropicalgardening" className="text-white/40 hover:text-gold transition-colors"><InstagramIcon /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-black text-gold uppercase tracking-widest">Services</h4>
          <ul className="space-y-3 text-white/60 font-bold">
            <li><a href="#services" className="hover:text-white transition-colors">Design</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Installation</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Maintenance</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Consulting</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-black text-gold uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-white/60 font-bold">
            <li><a href="#about" className="hover:text-white transition-colors">About Kevin</a></li>
            <li><a href="#ourwork" className="hover:text-white transition-colors">Our Portfolio</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Get A Quote</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-black text-gold uppercase tracking-widest">Contact</h4>
          <ul className="space-y-3 text-white/60 font-bold">
            <li>14 Robert St Torquay</li>
            <li><a href="tel:0468544943" className="hover:text-white transition-colors">0468 544 943</a></li>
            <li className="break-all">info@herveybaytropicalgardening.com.au</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            © 2026 Hervey Bay Tropical Gardening. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
            Owned by Kevin Burness · ABN held · Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}

// Icons
function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 7a7 7 0 0 1-12 5z" />
      <path d="M11 20c-1.7 0-3-1.5-3-2.5 0-1 1-1.5 3-2.5" />
      <path d="M11 14.5c0-1.5 1.5-2 2-4" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function CheckIcon({ size = 16, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function CalendarIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function MapIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function StarIcon({ size = 16, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
}

function PhoneIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function QuoteIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V6C11.017 4.89543 11.9124 4 13.017 4H19.017C20.1216 4 21.017 4.89543 21.017 6V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V6C0.017 4.89543 0.912429 4 2.017 4H8.017C9.12157 4 10.017 4.89543 10.017 6V15C10.017 18.3137 7.33071 21 4.017 21H3.017Z" />
    </svg>
  )
}
