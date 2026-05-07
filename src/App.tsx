import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, ChevronLeft, Phone, MapPin, 
  Mail, Ruler, Warehouse, Scaling, 
  ArrowRight, Search, Instagram, Facebook, Twitter,
  Layers, Box, ShieldCheck, Star,
  Truck, Building2, History, CheckCircle2
} from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- WhatsApp ---
const WHATSAPP_NUMBER = "541172023171";
const waLink = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// --- Types ---
interface Product {
  id: number;
  name: string;
  category: string;
  dimensions: string;
  price: string;
  stock: string;
  image: string;
}

// --- Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Tirante Pino Premium",
    category: "Tirantes",
    dimensions: "2\" x 6\" x 4m",
    price: "$12.500",
    stock: "Disponible",
    image: "/images/productos/tirantes/tirante-madera-pino-elliotis-2x4-550-m-cepillado-techos-D_NQ_NP_725355-MLA25768055508_072017-F.jpg"
  },
  {
    id: 2,
    name: "Deck Eucaliptos Grandis",
    category: "Decks",
    dimensions: "1\" x 4\" x 3.05m",
    price: "$18.200",
    stock: "Stock limitado",
    image: "/images/productos/decks/decks-madera.jpeg"
  },
  {
    id: 3,
    name: "Chapa Cincalum Trapezoidal",
    category: "Chapas",
    dimensions: "C-25 x 1.10m",
    price: "$9.800/m",
    stock: "Disponible",
    image: "/images/productos/chapas/Chapa-negra.jpg"
  },
  {
    id: 4,
    name: "Fenólico Euca Industrial",
    category: "Tableros",
    dimensions: "18mm x 1.22m x 2.44m",
    price: "$24.500",
    stock: "Disponible",
    image: "/images/productos/tableros/tablero-madera.jpeg"
  },
  {
    id: 5,
    name: "Machimbre Pino",
    category: "Revestimientos",
    dimensions: "1/2\" x 4\" x 3.05m",
    price: "$7.200",
    stock: "Disponible",
    image: "/images/productos/revestimientos/revestimiento-madera.jpeg"
  }
];

const CATEGORIES = ["Todos", "Tirantes", "Tableros", "Chapas", "Decks", "Revestimientos", "Aislaciones"];

const HERO_IMAGES = [
  "/images/hero/hero-1.jpeg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg"
];

// --- Components ---

const FloatingWhatsApp = () => (
  <a
    href={waLink("Hola! Quiero hacer una consulta")}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-beige text-deep-black font-bold shadow-2xl shadow-beige/30 hover:scale-105 active:scale-95 transition-all duration-300"
  >
    <WhatsAppIcon />
    <span className="text-sm">WhatsApp</span>
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 sm:py-4' : 'py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`glass-dark relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-white/10 ${isScrolled ? 'rounded-full' : 'rounded-2xl sm:rounded-3xl'}`}>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Warehouse className="text-beige w-6 h-6 sm:w-8 sm:h-8" />
            <span className="font-display text-sm sm:text-xl font-bold tracking-tighter uppercase italic truncate max-w-[180px] sm:max-w-none">Maderera El Roble</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Productos', 'Calculadora', 'Sobre nosotros', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-white/70 hover:text-beige transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-white/70 hover:text-white">
              <Search size={20} />
            </button>
            <a href={waLink("Hola! Quiero solicitar un presupuesto")} target="_blank" rel="noopener noreferrer" className="premium-button premium-button-primary scale-90 text-sm">
              Presupuesto
            </a>
          </div>

          <button className="md:hidden p-1 text-white/70 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full px-4 sm:px-6 mt-2"
          >
            <div className="glass-dark p-5 sm:p-6 flex flex-col gap-3 rounded-2xl">
              {['Productos', 'Calculadora', 'Sobre nosotros', 'Contacto'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-base sm:text-lg font-medium text-white/70 hover:text-beige py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href={waLink("Hola! Quiero solicitar un presupuesto")} target="_blank" rel="noopener noreferrer" className="premium-button premium-button-primary w-full mt-2 text-sm inline-block text-center">
                Presupuesto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseRef.current = {
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    };
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center animate-kenburns"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentImage]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/40 to-deep-black" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-beige mb-4 sm:mb-6"
            >
              <ShieldCheck size={12} /> Materiales de construcción premium
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-[0.9]"
            >
              TODO EN <span className="text-beige italic">MADERA</span> & OBRA
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-sm sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-10 max-w-2xl mx-auto px-2"
            >
              Tirantes, chapas, decks, fenólicos y materiales seleccionados para arquitectos y constructores exigentes.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <a href="#productos" className="premium-button premium-button-primary w-full sm:w-auto flex items-center justify-center gap-2 group text-sm sm:text-base">
                Ver catálogo <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={waLink("Hola! Quiero pedir un presupuesto")} target="_blank" rel="noopener noreferrer" className="premium-button premium-button-secondary w-full sm:w-auto text-sm sm:text-base inline-block text-center">
                Pedir presupuesto
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-beige/40 to-transparent" />
      </motion.div>
    </section>
  );
};

const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="productos" className="py-16 md:py-24 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center md:text-left md:flex md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-8">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold tracking-tight mb-3 md:mb-4 uppercase">
              Materiales <br />
              <span className="text-beige italic">Seleccionados</span>
            </h2>
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-beige mx-auto md:mx-0 mb-4 md:mb-6" />
            <p className="text-white/60 text-sm sm:text-base">
              Contamos con el stock más grande de maderas tratadas y chapas de alta resistencia para todo tipo de obras.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
             <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-white/10 hover:bg-beige hover:text-deep-black transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-white/10 hover:bg-beige hover:text-deep-black transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex justify-center md:justify-start overflow-x-auto pb-6 md:pb-8 gap-2 md:gap-3 no-scrollbar mb-6 md:mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full border text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat 
                ? 'bg-beige border-beige text-deep-black' 
                : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-8 md:pb-12 snap-x snap-mandatory"
        >
          {PRODUCTS.filter(p => selectedCategory === "Todos" || p.category === selectedCategory).map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-[270px] md:min-w-[400px] snap-start"
            >
              <div className="glass h-full group overflow-hidden border-white/5 bg-white/[0.02]">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-deep-black/80 backdrop-blur-md text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-beige">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3 md:mb-4 gap-2">
                    <div className="min-w-0">
                      <h3 className="text-base md:text-xl font-bold mb-0.5 md:mb-1 truncate">{product.name}</h3>
                      <p className="text-white/40 text-xs md:text-sm flex items-center gap-1">
                        <Scaling size={12} /> {product.dimensions}
                      </p>
                    </div>
                    <div className="text-right tracking-tighter shrink-0">
                      <span className="block text-beige font-display font-bold text-sm md:text-lg">{product.price}</span>
                      <span className="text-[8px] md:text-[10px] text-white/30 uppercase">Precio base</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 md:mt-8">
                    <span className="inline-flex items-center gap-1 md:gap-1.5 text-[11px] md:text-xs text-green-400">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {product.stock}
                    </span>
                    <a href={waLink(`Hola! Quiero consultar sobre ${product.name}`)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-bold group">
                      CONSULTAR <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-beige" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface MaterialOption {
  key: string;
  label: string;
  icon: React.ReactNode;
  unit: string;
  formula: (area: number) => number;
  desc: string;
}

const MATERIAL_OPTIONS: MaterialOption[] = [
  { key: 'tirantes', label: 'Tirantes', icon: <Layers size={20} />, unit: 'unidades', desc: 'Estructural', formula: (a) => Math.ceil(a * 1.5) },
  { key: 'chapas', label: 'Chapas', icon: <Warehouse size={20} />, unit: 'm²', desc: 'Cubierta', formula: (a) => Math.ceil(a / 1.1) },
  { key: 'aislante', label: 'Aislante', icon: <Box size={20} />, unit: 'm²', desc: 'Térmico', formula: (a) => Math.ceil(a * 1.1) },
  { key: 'revestimiento', label: 'Revestimiento', icon: <Layers size={20} />, unit: 'm²', desc: 'Paredes', formula: (a) => Math.ceil(a * 1.3) },
  { key: 'tableros', label: 'Tableros', icon: <Scaling size={20} />, unit: 'placas', desc: 'Fenólico', formula: (a) => Math.ceil(a / 2.97 * 1.1) },
  { key: 'deck', label: 'Deck', icon: <Box size={20} />, unit: 'm²', desc: 'Piso exterior', formula: (a) => Math.ceil(a * 1.15) },
];

const PURPOSES = [
  { label: 'Techo', mats: ['tirantes', 'chapas', 'aislante'] },
  { label: 'Pared', mats: ['revestimiento', 'aislante'] },
  { label: 'Piso', mats: ['deck', 'tableros'] },
  { label: 'Todo', mats: ['tirantes', 'chapas', 'aislante', 'revestimiento', 'tableros', 'deck'] },
];

const Calculator = () => {
  const [width, setWidth] = useState(5);
  const [length, setLength] = useState(8);
  const [selected, setSelected] = useState<Set<string>>(new Set(['tirantes', 'chapas', 'aislante']));

  const toggleMaterial = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const selectPurpose = (mats: string[]) => {
    setSelected(new Set(mats));
  };

  const area = width * length;

  return (
    <section id="calculadora" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass-dark p-6 sm:p-8 md:p-12 border-white/10 relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige/10 border border-beige/20 text-[10px] font-bold uppercase tracking-widest text-beige mb-4">
              <Ruler size={14} /> Herramienta de cubicación
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
              CALCULADORA DE <span className="text-beige italic">MATERIALES</span>
            </h2>
            <p className="text-white/50 mt-3 max-w-lg mx-auto text-sm sm:text-base">
              Elegí qué vas a construir, ajustá las medidas y obtené al instante los materiales que necesitás.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Controls */}
            <div className="space-y-8">
              {/* Purpose quick-select */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">¿Qué vas a construir?</h4>
                <div className="flex flex-wrap gap-2">
                  {PURPOSES.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => selectPurpose(p.mats)}
                      className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                        p.mats.every((m) => selected.has(m)) && p.mats.length === selected.size
                          ? 'bg-beige border-beige text-deep-black'
                          : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label className="text-sm font-medium text-white/70">Ancho</label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-display font-bold text-beige">{width}</span>
                      <span className="text-xs text-white/30">m</span>
                    </div>
                  </div>
                  <input 
                    type="range" min="1" max="50" value={width} 
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-beige bg-white/10 h-1.5 rounded-full appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-1">
                    <span>1m</span><span>50m</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label className="text-sm font-medium text-white/70">Largo</label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-display font-bold text-beige">{length}</span>
                      <span className="text-xs text-white/30">m</span>
                    </div>
                  </div>
                  <input 
                    type="range" min="1" max="100" value={length} 
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full accent-beige bg-white/10 h-1.5 rounded-full appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/20 mt-1">
                    <span>1m</span><span>100m</span>
                  </div>
                </div>
              </div>

              {/* Area preview */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="shrink-0 w-14 h-14 rounded-lg bg-beige/20 flex items-center justify-center text-beige">
                  <Scaling size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Superficie total</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-display font-bold text-white">{area}</span>
                    <span className="text-xs text-white/30">m²</span>
                  </div>
                  <div className="mt-1 w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-beige/40 transition-all duration-300"
                      style={{ width: `${Math.min(area / 50 * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Presupuesto CTA */}
              <a href={waLink(`Hola! Quiero un presupuesto para un área de ${width}m x ${length}m (${width * length}m²)`)} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors group">
                <div className="shrink-0 w-10 h-10 rounded-full bg-beige/20 flex items-center justify-center text-beige group-hover:bg-beige/30 transition-colors">
                  <Mail size={18} />
                </div>
                <p className="text-xs text-white/40">
                  <span className="text-white font-bold">¿Necesitás un presupuesto formal?</span>
                  <br />Envianos las medidas y te respondemos en menos de 2 horas.
                </p>
              </a>

              {/* Material toggles */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Materiales a calcular</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {MATERIAL_OPTIONS.map((mat) => (
                    <button
                      key={mat.key}
                      onClick={() => toggleMaterial(mat.key)}
                      className={`flex flex-col items-center gap-1 p-3 rounded-xl border text-center transition-all ${
                        selected.has(mat.key)
                          ? 'bg-beige/10 border-beige/30 text-beige'
                          : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'
                      }`}
                    >
                      <span className={selected.has(mat.key) ? 'text-beige' : 'text-white/30'}>{mat.icon}</span>
                      <span className="text-xs font-bold leading-tight">{mat.label}</span>
                      <span className="text-[9px] opacity-60">{mat.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 text-center lg:text-left">Resultado estimado</h4>
              <div className="grid grid-cols-2 gap-3">
                {MATERIAL_OPTIONS.filter((m) => selected.has(m.key)).map((item, i) => (
                  <motion.div 
                    key={item.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="glass p-5 flex flex-col border-white/5 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-15 transition-opacity">
                      {item.icon}
                    </div>
                    <h5 className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-2">{item.label}</h5>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-bold text-beige">{item.formula(area)}</span>
                      <span className="text-[10px] text-white/30">{item.unit}</span>
                    </div>
                    <p className="mt-3 text-[9px] text-white/15 uppercase tracking-wider">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {[...MATERIAL_OPTIONS].filter((m) => !selected.has(m.key)).length === MATERIAL_OPTIONS.length && (
                <div className="text-center py-16 text-white/25 text-sm">
                  Seleccioná al menos un material
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Años de experiencia", value: "25+", icon: <History className="w-5 h-5 md:w-6 md:h-6" /> },
    { label: "M2 Entrega Anual", value: "150k", icon: <Truck className="w-5 h-5 md:w-6 md:h-6" /> },
    { label: "Proyectos Realizados", value: "4500+", icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" /> },
    { label: "Stock Permanente", value: "100%", icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> }
  ];

  return (
    <section className="py-16 md:py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-stats.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/50 to-deep-black/80" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 gap-y-12 md:gap-y-16">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center group relative z-10"
            >
              <div className="mb-4 md:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-beige text-deep-black group-hover:bg-white transition-all duration-500 shadow-lg md:shadow-xl shadow-black/10">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-5xl font-display font-bold mb-1 md:mb-2 tracking-tighter italic">
                {stat.value}
              </h3>
              <p className="text-white/50 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">{stat.label}</p>
              <div className="mt-3 md:mt-4 w-6 md:w-8 h-[2px] bg-beige mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-maps.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/50 to-deep-black/80" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-beige mb-3 md:mb-4">
            <MapPin size={14} /> Dónde nos ubicamos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold tracking-tight">
            ENCONTRANOS EN <span className="text-beige italic">BUENOS AIRES</span>
          </h2>
          <p className="text-white/40 mt-2 md:mt-4 max-w-lg mx-auto text-sm md:text-base">
            Estamos ubicados en el Parque Industrial de Avellaneda, con fácil acceso y playa de maniobras para camiones.
          </p>
        </div>

        <div className="glass-dark overflow-hidden border-white/5 rounded-xl md:rounded-2xl" style={{ aspectRatio: '4 / 3' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26252.227084911772!2d-58.36155191738281!3d-34.66266632101397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3333c3a0f3f0b%3A0x2e9e3c1c3b3f0f0b!2sAvellaneda%2C%20Buenos%20Aires%20Province%2C%20Argentina!5e0!3m2!1sen!2s!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Maderera El Roble"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contacto" className="bg-deep-black pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-6 md:mb-8">
              <Warehouse className="text-beige w-6 h-6 md:w-8 md:h-8 shrink-0" />
              <span className="font-display text-xl md:text-2xl font-bold tracking-tighter uppercase italic">Maderera <br/> El Roble</span>
            </div>
            <p className="text-white/40 mb-6 md:mb-8 max-w-xs mx-auto sm:mx-0 text-sm md:text-base">
              Líderes en provisión de madera y materiales de construcción para grandes obras en todo el país.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 md:gap-4">
              {[{ Icon: Instagram, href: 'https://instagram.com' }, { Icon: Facebook, href: 'https://facebook.com' }, { Icon: Twitter, href: 'https://twitter.com' }].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-beige hover:text-deep-black transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-beige mb-6 md:mb-8">Navegación</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Home', 'Productos', 'Calculadora', 'Sobre nosotros', 'Obras'].map((item) => (
                <li key={item}>
                  <a href={`#${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-white transition-colors text-sm md:text-base">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-beige mb-6 md:mb-8">Contacto</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-center sm:items-start justify-center sm:justify-start gap-3 md:gap-4">
                <MapPin className="text-beige shrink-0" size={18} />
                <span className="text-white/50 text-xs md:text-sm">Av. Industrial 2450, <br /> Parque Tecnológico, BA.</span>
              </li>
              <li className="flex items-center sm:items-start justify-center sm:justify-start gap-3 md:gap-4">
                <Phone className="text-beige shrink-0" size={18} />
                <span className="text-white/50 text-xs md:text-sm">+54 011 4567 8900</span>
              </li>
              <li className="flex items-center sm:items-start justify-center sm:justify-start gap-3 md:gap-4">
                <Mail className="text-beige shrink-0" size={18} />
                <span className="text-white/50 text-xs md:text-sm">info@maderaindustrial.com</span>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-beige mb-6 md:mb-8">Newsletter</h4>
            <p className="text-white/40 text-xs md:text-sm mb-4 md:mb-6">Recibí ofertas exclusivas y novedades de stock.</p>
            <div className="relative max-w-xs mx-auto sm:mx-0">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 md:py-3 px-5 md:px-6 text-xs md:text-sm focus:outline-none focus:border-beige transition-colors"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-beige text-deep-black flex items-center justify-center">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-white/20 text-[10px] md:text-xs">
            © 2026 Maderera El Roble. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-white/20 hover:text-white text-[10px] md:text-xs">Privacidad</a>
            <a href="#" className="text-white/20 hover:text-white text-[10px] md:text-xs">Términos</a>
            <a href="#" className="text-white/20 hover:text-white text-[10px] md:text-xs">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <FeaturedProducts />
        
        {/* About Section */}
        <section id="sobre-nosotros" className="py-16 md:py-24 bg-deep-black overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-center">
              <div className="flex-1 relative w-full max-w-lg mx-auto lg:mx-0">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="relative z-10"
                >
                  <div className="relative">
                    <img 
                      src="/images/nosotros/about-1.png" 
                      className="rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl w-full"
                      alt="Maderera El Roble"
                    />
                    <div className="absolute -bottom-6 -right-6 w-1/2">
                      <img 
                        src="/images/nosotros/about-2.png" 
                        className="rounded-xl md:rounded-2xl border border-white/10 shadow-2xl w-full"
                        alt="Maderera El Roble"
                      />
                    </div>
                  </div>
                  <div className="relative mt-8 md:mt-10 glass-dark p-4 md:p-8 border-white/10 max-w-xs mx-auto md:mx-0">
                    <p className="text-xs md:text-sm italic font-display text-beige mb-3 md:mb-4">"Nuestra misión es proveer la mejor materia prima para las construcciones del futuro."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-beige/20 shrink-0" />
                      <div>
                        <p className="text-xs font-bold">Roberto Domínguez</p>
                        <p className="text-[9px] md:text-[10px] text-white/40">Director General</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute top-20 -left-20 w-64 h-64 bg-beige/5 blur-[120px] pointer-events-none" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-beige mb-4 md:mb-6">
                  Trayectoria y Compromiso
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold tracking-tight mb-6 md:mb-8">
                  CALIDAD QUE <br />
                  <span className="text-beige italic">SOPORTA</span> TODO
                </h2>
                <div className="space-y-4 md:space-y-6 text-white/60 leading-relaxed text-sm md:text-base max-w-xl mx-auto md:mx-0">
                  <p>
                    Desde hace más de dos décadas, Maderera El Roble ha sido el socio estratégico de las constructoras más importantes de la región. No solo vendemos madera; ofrecemos soluciones estructurales certificadas.
                  </p>
                  <p>
                    Cada tirante, cada chapa y cada placa pasa por un riguroso proceso de control de calidad para asegurar que su obra sea eterna. Contamos con logística propia y entrega inmediata.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-8 text-left">
                    <div>
                      <h4 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Sustentabilidad</h4>
                      <p className="text-xs md:text-xs">Maderas provenientes de bosques con reforestación controlada y certificación FSC.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Tecnología</h4>
                      <p className="text-xs md:text-xs">Maquinaria de corte computarizado para una precisión milimétrica en sus pedidos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Stats />
        <Calculator />

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-deep-black">
          <div className="container mx-auto px-4 sm:px-6 text-center">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-10 md:mb-16 uppercase tracking-tighter">
              LA <span className="text-beige">OPINIÓN</span> DE NUESTROS CLIENTES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-lg md:max-w-none mx-auto">
              {[
                { name: "Carlos Arana", role: "Arquitecto", text: "La calidad de los tirantes de pino es inmejorable. El mejor stock de la zona." },
                { name: "Lucía Mendez", role: "Constructora", text: "La rapidez en la entrega de chapas nos salvó el cronograma de obra." },
                { name: "Pedro Soto", role: "Maestro Mayor", text: "Asesoramiento técnico de primer nivel. Entienden lo que uno necesita para obra." }
              ].map((test, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 md:p-8 border-white/5 hover:border-beige/20 transition-colors"
                >
                  <div className="flex justify-center gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-beige fill-beige" />)}
                  </div>
                  <p className="text-white/60 italic mb-6 md:mb-8 text-sm md:text-base">"{test.text}"</p>
                  <h4 className="font-bold text-sm md:text-base">{test.name}</h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30">{test.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <MapSection />
        <Footer />
      </main>
    </div>
  );
}
