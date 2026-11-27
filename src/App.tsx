import React, { useState, useEffect, useMemo } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Search,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Headphones,
  Banknote,
  Server,
  Network,
  Cctv,
  Printer,
  Wrench,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  MessageCircle,
  Sparkles,
  Award,
  Building2,
  Clock,
  ChevronDown,
  ExternalLink,
  Check,
  Laptop,
  Wifi,
  BatteryCharging,
  HardDrive
} from 'lucide-react';

// ============================================================================
// CUSTOM SVG BRAND LOGO (Matching the uploaded interlocking A + P + Arrow mark)
// ============================================================================
const APlusTechLogo = ({ lightText = false, size = 'md' }) => {
  const scale = size === 'sm' ? 'h-9' : size === 'lg' ? 'h-14' : 'h-11';
  return (
    <div className="inline-flex items-center gap-3 select-none group">
      <svg
        viewBox="0 0 120 110"
        className={`${scale} w-auto max-w-[64px] shrink-0 transition-transform duration-300 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="A Plus Tech Logo"
      >
        <defs>
          <linearGradient id="cyanGrad" x1="15" y1="95" x2="62" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B192C" />
            <stop offset="35%" stopColor="#0088B4" />
            <stop offset="100%" stopColor="#00D2F7" />
          </linearGradient>
          <linearGradient id="orangeGrad" x1="45" y1="68" x2="105" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF5722" />
            <stop offset="100%" stopColor="#FF8243" />
          </linearGradient>
        </defs>

        {/* Left Ascendant Cyan Arrow Leg forming the 'A' */}
        <path
          d="M14 96 L48 26 L36 26 L58 8 L76 28 L64 28 L32 96 Z"
          fill="url(#cyanGrad)"
        />

        {/* Right Diagonal Leg of 'A' in Coral Orange */}
        <path
          d="M58 26 L71 26 L102 96 L85 96 L58 36 Z"
          fill="url(#orangeGrad)"
        />

        {/* Upper 'P' Loop in Deep Midnight Navy */}
        <path
          d="M64 12 L86 12 C104 12 114 23 114 39 C114 52 106 62 92 66 L87 52 C95 50 99 45 99 39 C99 30 93 25 84 25 L70 25 Z"
          fill={lightText ? '#38BDF8' : '#0B192C'}
        />

        {/* Sweeping Coral Swoosh & Integrated Plus (+) Crossbar */}
        <path
          d="M26 78 C36 62 50 58 66 58 L89 53 L93 66 L66 71 C53 72 44 76 37 86 Z"
          fill="url(#orangeGrad)"
        />
        {/* Vertical Bar of the Plus (+) Symbol */}
        <rect x="53" y="47" width="11" height="33" rx="2" fill="#FF6B35" />
      </svg>

      <div className="flex flex-col leading-none">
        <div className="font-display font-extrabold tracking-tight text-xl sm:text-2xl flex items-center gap-1.5">
          <span className={lightText ? 'text-white' : 'text-[#0B192C]'}>A PLUS</span>
          <span className="text-[#0096C7]">TECH</span>
        </div>
        <span
          className={`text-[10px] sm:text-[11px] font-medium tracking-[0.14em] mt-1 ${
            lightText ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Innovate • Support • Grow
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// CUSTOM HARDWARE SVG ARTWORK FOR ENTERPRISE PRODUCTS
// ============================================================================
const HardwareVisual = ({ type, accent = '#00B4D8' }) => {
  switch (type) {
    case 'server':
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[240px] h-36 object-contain mx-auto">
          <rect x="24" y="26" width="192" height="32" rx="4" fill="#0B192C" />
          <rect x="32" y="34" width="60" height="16" rx="2" fill="#1E293B" stroke="#334155" />
          <circle cx="198" cy="42" r="4" fill="#00B4D8" />
          <circle cx="184" cy="42" r="4" fill="#10B981" />
          <path d="M110 35H165M110 42H165M110 49H165" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

          <rect x="24" y="64" width="192" height="32" rx="4" fill="#0F233C" />
          <rect x="32" y="72" width="60" height="16" rx="2" fill="#1E293B" stroke="#334155" />
          <circle cx="198" cy="80" r="4" fill="#00B4D8" />
          <circle cx="184" cy="80" r="4" fill="#FF6B35" />
          <path d="M110 73H165M110 80H165M110 87H165" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />

          <rect x="24" y="102" width="192" height="32" rx="4" fill="#0B192C" />
          <rect x="32" y="110" width="60" height="16" rx="2" fill="#1E293B" stroke="#334155" />
          <circle cx="198" cy="118" r="4" fill="#10B981" />
          <circle cx="184" cy="118" r="4" fill="#10B981" />
          <path d="M110 111H165M110 118H165M110 125H165" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'switch':
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[240px] h-36 object-contain mx-auto">
          <rect x="18" y="54" width="204" height="52" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="28" y="64" width="184" height="32" rx="3" fill="#0B192C" />
          {Array.from({ length: 12 }).map((_, idx) => (
            <g key={idx} transform={`translate(${36 + idx * 12}, 69)`}>
              <rect width="8" height="9" rx="1" fill="#1E293B" stroke="#00B4D8" strokeWidth="0.8" />
              <rect y="13" width="8" height="9" rx="1" fill="#1E293B" stroke="#10B981" strokeWidth="0.8" />
            </g>
          ))}
          <rect x="186" y="70" width="18" height="20" rx="2" fill="#00B4D8" fillOpacity="0.2" stroke="#00B4D8" />
          <circle cx="195" cy="80" r="3" fill="#00B4D8" />
        </svg>
      );
    case 'cctv':
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[240px] h-36 object-contain mx-auto">
          {/* Dome Camera */}
          <ellipse cx="88" cy="48" rx="44" ry="14" fill="#CBD5E1" />
          <path d="M44 48 C44 92 132 92 132 48 Z" fill="#0B192C" />
          <circle cx="88" cy="64" r="15" fill="#1E293B" stroke="#00B4D8" strokeWidth="2.5" />
          <circle cx="88" cy="64" r="6" fill="#00B4D8" />
          <circle cx="91" cy="61" r="2" fill="#FFFFFF" />
          {/* Bullet Camera */}
          <rect x="135" y="78" width="66" height="32" rx="8" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
          <rect x="188" y="82" width="16" height="24" rx="3" fill="#0B192C" />
          <circle cx="196" cy="94" r="6" fill="#FF6B35" />
          <path d="M155 110 L145 130 H175" stroke="#64748B" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'printer':
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[240px] h-36 object-contain mx-auto">
          <rect x="64" y="24" width="112" height="28" rx="3" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
          <rect x="42" y="48" width="156" height="68" rx="10" fill="#0B192C" />
          <rect x="54" y="58" width="132" height="16" rx="3" fill="#1E293B" />
          <rect x="150" y="61" width="28" height="10" rx="2" fill="#00B4D8" />
          <rect x="66" y="92" width="108" height="44" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <path d="M78 104H162M78 114H148M78 124H132" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'laptop':
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[240px] h-36 object-contain mx-auto">
          <rect x="48" y="26" width="144" height="90" rx="8" fill="#0B192C" stroke="#334155" strokeWidth="2" />
          <rect x="56" y="34" width="128" height="74" rx="4" fill="#0F294A" />
          <path d="M72 88 L98 62 L120 76 L156 46" stroke="#00B4D8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="156" cy="46" r="4.5" fill="#FF6B35" />
          <path d="M28 116 H212 L202 128 H38 Z" fill="#CBD5E1" />
          <rect x="102" y="116" width="36" height="4" rx="2" fill="#94A3B8" />
        </svg>
      );
    case 'nas':
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[240px] h-36 object-contain mx-auto">
          <rect x="64" y="24" width="112" height="112" rx="10" fill="#0B192C" />
          {[0, 1, 2, 3].map((bay) => (
            <g key={bay} transform={`translate(${76 + bay * 22}, 38)`}>
              <rect width="18" height="84" rx="3" fill="#1E293B" stroke="#334155" />
              <circle cx="9" cy="12" r="2.5" fill={bay === 3 ? '#FF6B35' : '#10B981'} />
              <rect x="4" y="24" width="10" height="48" rx="1.5" fill="#0F172A" />
            </g>
          ))}
        </svg>
      );
    case 'wifi':
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[240px] h-36 object-contain mx-auto">
          <ellipse cx="120" cy="92" rx="72" ry="34" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
          <ellipse cx="120" cy="88" rx="64" ry="28" fill="#FFFFFF" />
          <circle cx="120" cy="88" r="14" fill="none" stroke="#00B4D8" strokeWidth="3" />
          <circle cx="120" cy="88" r="4" fill="#0B192C" />
          <path d="M88 46 C106 32 134 32 152 46" stroke="#00B4D8" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M100 58 C112 49 128 49 140 58" stroke="#FF6B35" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 240 160" className="w-full max-w-[240px] h-36 object-contain mx-auto">
          <rect x="74" y="22" width="92" height="116" rx="8" fill="#0B192C" />
          <rect x="88" y="36" width="64" height="36" rx="4" fill="#1E293B" stroke="#00B4D8" strokeWidth="1.5" />
          <text x="120" y="59" textAnchor="middle" fill="#00B4D8" fontSize="14" fontWeight="bold" fontFamily="monospace">
            230V OK
          </text>
          <circle cx="120" cy="98" r="12" fill="#FF6B35" fillOpacity="0.2" stroke="#FF6B35" strokeWidth="2" />
          <path d="M122 90 L115 99 H121 L118 107 L126 97 H120 Z" fill="#FF6B35" />
        </svg>
      );
  }
};

// ============================================================================
// PRODUCT & SERVICE DATA (UAE ENTERPRISE IT CATALOG IN AED)
// ============================================================================
const SERVICES_DATA = [
  {
    id: 'it-support',
    title: 'IT Support & Helpdesk',
    description: '24/7 SLA-backed remote & on-site AMC IT support across Dubai, Ajman & all UAE Emirates.',
    icon: Headphones,
    tag: 'AMC Contracts'
  },
  {
    id: 'networking',
    title: 'Networking Solutions',
    description: 'Structured Cat6A/Fiber cabling, enterprise Wi-Fi 6 mesh, firewalls & core routing.',
    icon: Network,
    tag: 'Cisco • UniFi'
  },
  {
    id: 'cctv',
    title: 'CCTV Installation',
    description: 'SIRA-compliant 4K IP surveillance, NVR storage, remote mobile monitoring & access control.',
    icon: Cctv,
    tag: 'SIRA Ready'
  },
  {
    id: 'printers',
    title: 'Printers & Peripherals',
    description: 'High-volume enterprise MFPs, managed print services, toners & workstation accessories.',
    icon: Printer,
    tag: 'HP • Canon'
  },
  {
    id: 'servers',
    title: 'Servers & NAS',
    description: 'Rackmount servers, RAID storage arrays, automated cloud backups & virtualization.',
    icon: Server,
    tag: 'Dell • Synology'
  }
];

const PRODUCTS_DATA = [
  {
    id: 'prod-1',
    name: 'Dell PowerEdge R350 Rack Server',
    category: 'Servers & NAS',
    specs: 'Intel Xeon E-2336 • 32GB ECC RAM • 2x 960GB Enterprise SSD • iDRAC9',
    price: 7499,
    originalPrice: 8250,
    discount: '9% OFF',
    visual: 'server',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 'prod-2',
    name: 'Ubiquiti UniFi USW-24-PoE Switch',
    category: 'Networking',
    specs: '24x GbE RJ45 (16x PoE+) • 2x 1G SFP • Layer 2 Managed • LCM Touchscreen',
    price: 1680,
    originalPrice: 1890,
    discount: '11% OFF',
    visual: 'switch',
    badge: 'UAE Stock',
    inStock: true
  },
  {
    id: 'prod-3',
    name: 'Hikvision 8-Ch 4K AcuSense CCTV Kit',
    category: 'CCTV & Security',
    specs: '8x 8MP ColorVu IP Cameras • 8-Ch PoE NVR • 4TB Surveillance HDD • Night Vision',
    price: 2890,
    originalPrice: 3350,
    discount: '14% OFF',
    visual: 'cctv',
    badge: 'SIRA Approved',
    inStock: true
  },
  {
    id: 'prod-4',
    name: 'HP LaserJet Enterprise MFP M430f',
    category: 'Printers',
    specs: '42 ppm Monochrome • Auto Duplex Print/Scan/Copy • 50-Sheet ADF • Gigabit LAN',
    price: 2150,
    originalPrice: 2400,
    discount: '10% OFF',
    visual: 'printer',
    badge: 'Office Choice',
    inStock: true
  },
  {
    id: 'prod-5',
    name: 'Lenovo ThinkPad X1 Carbon Gen 12',
    category: 'Laptops',
    specs: 'Intel Core Ultra 7 • 32GB LPDDR5x • 1TB NVMe SSD • 14" WUXGA Anti-Glare • Win 11 Pro',
    price: 6299,
    originalPrice: 6899,
    discount: '9% OFF',
    visual: 'laptop',
    badge: 'Executive',
    inStock: true
  },
  {
    id: 'prod-6',
    name: 'Synology DiskStation DS923+ 4-Bay NAS',
    category: 'Servers & NAS',
    specs: 'AMD Ryzen R1600 • 4GB ECC (Up to 32GB) • Dual 1GbE + 10GbE Upgradeable • Btrfs',
    price: 2450,
    originalPrice: 2690,
    discount: '9% OFF',
    visual: 'nas',
    badge: 'Fast Delivery',
    inStock: true
  },
  {
    id: 'prod-7',
    name: 'Cisco Meraki MR44 Wi-Fi 6 Cloud AP',
    category: 'Networking',
    specs: '4x4:4 MU-MIMO • 3 Gbps Aggregate • Dedicated Security Radio • Cloud Managed',
    price: 3190,
    originalPrice: 3550,
    discount: '10% OFF',
    visual: 'wifi',
    badge: 'Enterprise',
    inStock: true
  },
  {
    id: 'prod-8',
    name: 'APC Smart-UPS 1500VA LCD RM 2U',
    category: 'Power & UPS',
    specs: '1500VA / 1000W Pure Sine Wave • AVR • SmartSlot • Rackmount 2U • UAE Plugs',
    price: 2390,
    originalPrice: 2650,
    discount: '10% OFF',
    visual: 'ups',
    badge: 'Essential',
    inStock: true
  }
];

const CATEGORIES = [
  'All Categories',
  'Servers & NAS',
  'Networking',
  'CCTV & Security',
  'Printers',
  'Laptops',
  'Power & UPS'
];

const UAE_EMIRATES = [
  'Dubai',
  'Ajman',
  'Sharjah',
  'Abu Dhabi',
  'Ras Al Khaimah',
  'Fujairah',
  'Umm Al Quwain'
];

const WHATSAPP_NUMBER = '97161234567';

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================
export default function App() {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Shopping Cart State
  const [cart, setCart] = useState([
    {
      ...PRODUCTS_DATA[1],
      quantity: 1
    }
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(null);

  // Checkout Modal State
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' | 'card'
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [checkoutForm, setCheckoutForm] = useState({
    fullName: '',
    phone: '+971 ',
    emirate: 'Dubai',
    address: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  const [checkoutError, setCheckoutError] = useState('');

  // Get a Quote / Consultation Modal State
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '+971 ',
    serviceType: 'IT Support & Helpdesk',
    requirements: ''
  });

  // Inject Google Fonts ('Space Grotesk' & 'Plus Jakarta Sans') cleanly
  useEffect(() => {
    const linkId = 'aplustech-google-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.specs.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Cart Calculations
  const totalCartItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const subtotalAED = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const vatAED = useMemo(() => Math.round(subtotalAED * 0.05), [subtotalAED]);
  const shippingAED = subtotalAED > 1500 || subtotalAED === 0 ? 0 : 35;
  const grandTotalAED = subtotalAED + vatAED + shippingAED;

  // Cart Actions
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setAddedToast(product.name);
    setTimeout(() => setAddedToast(null), 2600);
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // WhatsApp Direct Order Generator
  const getProductWhatsAppUrl = (product) => {
    const message = `Hello A Plus Tech UAE! I would like to order:\n• Product: ${product.name}\n• Price: AED ${product.price.toLocaleString()}\nPlease confirm availability and delivery timeline.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  // Quote Trigger with Preselected Service
  const openServiceQuote = (serviceTitle) => {
    setQuoteForm((prev) => ({ ...prev, serviceType: serviceTitle }));
    setQuoteSubmitted(false);
    setQuoteModalOpen(true);
  };

  // Format Card Inputs
  const handleCardNumberChange = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 16);
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCheckoutForm((prev) => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    const formatted = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    setCheckoutForm((prev) => ({ ...prev, expiry: formatted }));
  };

  // Submit Checkout Order
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setCheckoutError('');

    if (!checkoutForm.fullName.trim() || !checkoutForm.phone.trim() || !checkoutForm.address.trim()) {
      setCheckoutError('Please fill in your Full Name, UAE Phone Number, and Delivery Address.');
      return;
    }

    if (paymentMethod === 'card') {
      if (
        checkoutForm.cardNumber.replace(/\s/g, '').length < 16 ||
        checkoutForm.expiry.length < 5 ||
        checkoutForm.cvv.length < 3
      ) {
        setCheckoutError('Please enter valid 16-digit Card Number, Expiry (MM/YY), and CVV.');
        return;
      }
    }

    const orderId = `APT-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderSuccess({
      orderId,
      customerName: checkoutForm.fullName,
      emirate: checkoutForm.emirate,
      address: checkoutForm.address,
      phone: checkoutForm.phone,
      method: paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Online Card Payment (Paid)',
      total: grandTotalAED,
      itemsCount: totalCartItems
    });
    setCart([]);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-[#F8FAFC] text-[#0B192C] antialiased selection:bg-[#00B4D8]/20 selection:text-[#0B192C]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Inline typography helper styles */}
      <style>{`
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ====================================================================
          TOAST NOTIFICATION WHEN ITEM ADDED TO CART
      ==================================================================== */}
      {addedToast && (
        <div className="fixed top-24 right-4 z-50 flex items-center gap-3 bg-[#0B192C] text-white px-4 py-3 rounded-xl shadow-2xl border border-[#00B4D8]/40 animate-bounce">
          <div className="w-7 h-7 rounded-full bg-[#00B4D8]/20 flex items-center justify-center text-[#00B4D8]">
            <Check className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-white">Added to Cart</p>
            <p className="text-slate-300 truncate max-w-[210px]">{addedToast}</p>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="ml-2 text-xs font-bold text-[#FF6B35] hover:underline"
          >
            View
          </button>
        </div>
      )}

      {/* ====================================================================
          1. TOP UTILITY BAR (#0B192C)
      ==================================================================== */}
      <div className="bg-[#0B192C] text-slate-200 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6">
            <a
              href="tel:+97161234567"
              className="inline-flex items-center gap-1.5 hover:text-[#00B4D8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>+971 6 123 4567</span>
            </a>
            <a
              href="mailto:info@aplustech.com"
              className="inline-flex items-center gap-1.5 hover:text-[#00B4D8] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>info@aplustech.com</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Ajman Free Zone, UAE</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Same-Day Dispatch in Dubai, Sharjah & Ajman
            </span>
            <div className="flex items-center gap-3 pl-2 border-l border-white/15">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#00B4D8] transition-colors font-medium"
              >
                WhatsApp
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="hover:text-[#00B4D8] transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                aria-label="Instagram"
                className="hover:text-[#00B4D8] transition-colors font-medium"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. STICKY NAVIGATION HEADER
      ==================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Brand Logo */}
            <a href="#home" className="shrink-0">
              <APlusTechLogo />
            </a>

            {/* Center Search & Category Filter (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-4">
              <div className="flex w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] focus-within:border-[#00B4D8] focus-within:ring-2 focus-within:ring-[#00B4D8]/20 transition-all overflow-hidden">
                <div className="relative flex items-center border-r border-[#E2E8F0] bg-white">
                  <select
                    aria-label="Product Category"
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="appearance-none bg-transparent pl-3.5 pr-8 py-2.5 text-xs font-semibold text-[#0B192C] focus:outline-none cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
                </div>

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search servers, CCTV, switches, laptops..."
                  className="w-full px-3.5 py-2.5 text-sm bg-transparent text-[#0B192C] placeholder:text-slate-400 focus:outline-none"
                />

                <a
                  href="#products"
                  aria-label="Search Products"
                  className="px-4 bg-[#0B192C] hover:bg-[#00B4D8] text-white flex items-center justify-center transition-colors"
                >
                  <Search className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Navigation & Actions */}
            <div className="flex items-center gap-3 xl:gap-5">
              <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-[#0B192C]">
                <a href="#home" className="hover:text-[#00B4D8] transition-colors">
                  Home
                </a>
                <a href="#services" className="hover:text-[#00B4D8] transition-colors">
                  Services
                </a>
                <a href="#products" className="hover:text-[#00B4D8] transition-colors">
                  Products
                </a>
                <a href="#about" className="hover:text-[#00B4D8] transition-colors">
                  About Us
                </a>
                <a href="#contact" className="hover:text-[#00B4D8] transition-colors">
                  Contact
                </a>
              </nav>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setCartOpen(true)}
                aria-label="Open Shopping Cart"
                className="relative p-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#00B4D8] text-[#0B192C] transition-all cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#FF6B35] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {totalCartItems}
                </span>
              </button>

              {/* Get a Quote CTA */}
              <button
                onClick={() => {
                  setQuoteSubmitted(false);
                  setQuoteModalOpen(true);
                }}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#00B4D8] text-white text-sm font-semibold shadow-sm transition-all cursor-pointer"
              >
                <span>Get a Quote</span>
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="xl:hidden p-2.5 rounded-xl border border-[#E2E8F0] text-[#0B192C] hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Search & Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="xl:hidden pb-4 pt-2 border-t border-[#E2E8F0] space-y-3">
              <div className="flex rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search IT hardware..."
                  className="w-full px-3.5 py-2.5 text-sm bg-transparent focus:outline-none"
                />
                <a
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 bg-[#0B192C] text-white flex items-center"
                >
                  <Search className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  Home
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  Services
                </a>
                <a
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  Products
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100"
                >
                  Contact
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteSubmitted(false);
                    setQuoteModalOpen(true);
                  }}
                  className="px-3 py-2 rounded-lg bg-[#FF6B35] text-white text-left font-bold"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ====================================================================
          3. HERO SECTION (SPLIT 60/40 LAYOUT WITH UAE TECH SHOWCASE)
      ==================================================================== */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#0B192C] via-[#0F233F] to-[#0B192C] text-white"
      >
        {/* Subtle Tech Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#00B4D8 1px, transparent 1px), radial-gradient(#FF6B35 1px, #0B192C 1px)',
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0, 18px 18px'
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00B4D8]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-[#FF6B35]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left 60% (7 of 12 cols on lg) */}
            <div className="lg:col-span-7 min-w-0 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00B4D8]/40 text-xs sm:text-sm font-semibold text-[#00B4D8]">
                <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                <span>UAE’s Trusted B2B & Enterprise IT Hardware Partner</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12]">
                Powering UAE Businesses with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#38BDF8]">
                  Next-Gen IT Infrastructure
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                From enterprise Dell servers, Cisco & UniFi networking, and SIRA-compliant CCTV
                systems to 24/7 managed IT support—delivered fast across Dubai, Ajman, Sharjah &
                Abu Dhabi with Cash on Delivery & corporate credit options.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FF6B35] hover:bg-[#ff5719] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF6B35]/25 transition-all"
                >
                  <span>Explore Hardware Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    setQuoteSubmitted(false);
                    setQuoteModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-[#00B4D8] text-white border border-[#00B4D8]/50 font-bold text-sm sm:text-base transition-all cursor-pointer"
                >
                  <span>Book IT Consultation</span>
                </button>
              </div>

              {/* Hero Key Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#00B4D8]">
                    500+
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300">UAE Corporate Clients</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    24 Hrs
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300">Emirates-Wide Delivery</p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF6B35]">
                    100%
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300">Official UAE Warranty</p>
                </div>
              </div>
            </div>

            {/* Right 40% (5 of 12 cols on lg) - Interactive UAE Skyline & Hardware Showcase */}
            <div className="lg:col-span-5 min-w-0">
              <div className="relative rounded-2xl bg-gradient-to-b from-[#132847] to-[#091424] border border-white/15 p-5 sm:p-6 shadow-2xl">
                {/* UAE Skyline Silhouette Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B4D8]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-300 ml-1">
                      APT-UAE-INFRASTRUCTURE
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    All Systems Online
                  </span>
                </div>

                {/* Stylized UAE Skyline + Hardware Ecosystem SVG */}
                <div className="relative rounded-xl bg-[#081220] border border-white/10 p-4 overflow-hidden">
                  <svg viewBox="0 0 360 155" className="w-full h-36">
                    {/* Subtle Glow */}
                    <circle cx="290" cy="40" r="45" fill="#00B4D8" fillOpacity="0.14" />
                    {/* Dubai/UAE Skyline Silhouette */}
                    <path
                      d="M10 145 H350 M25 145 V105 H48 V145 M55 145 V88 H82 V145 M90 145 V70 H112 V145 M125 145 V95 H150 V145 M225 145 V80 H252 V145 M285 145 V62 L292 14 L299 62 V145 M310 145 V92 H338 V145"
                      stroke="#1E3A5F"
                      strokeWidth="2"
                      fill="#0D1F38"
                    />
                    {/* Connected Hardware Nodes */}
                    <line x1="70" y1="54" x2="180" y2="38" stroke="#00B4D8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="180" y1="38" x2="265" y2="62" stroke="#FF6B35" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Server Node */}
                    <rect x="35" y="34" width="70" height="40" rx="6" fill="#0B192C" stroke="#00B4D8" strokeWidth="1.5" />
                    <text x="70" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                      DELL RACK
                    </text>
                    <text x="70" y="64" textAnchor="middle" fill="#00B4D8" fontSize="8">
                      99.99% Uptime
                    </text>

                    {/* Cloud Switch Node */}
                    <rect x="142" y="18" width="76" height="40" rx="6" fill="#0B192C" stroke="#FF6B35" strokeWidth="1.5" />
                    <text x="180" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                      UNIFI PoE+
                    </text>
                    <text x="180" y="48" textAnchor="middle" fill="#FF6B35" fontSize="8">
                      10G Fiber Core
                    </text>

                    {/* CCTV Node */}
                    <rect x="230" y="44" width="72" height="40" rx="6" fill="#0B192C" stroke="#38BDF8" strokeWidth="1.5" />
                    <text x="266" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                      4K CCTV
                    </text>
                    <text x="266" y="74" textAnchor="middle" fill="#38BDF8" fontSize="8">
                      SIRA Certified
                    </text>
                  </svg>
                </div>

                {/* Quick Hardware Category Pills inside Showcase */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#00B4D8]/20 text-[#00B4D8] flex items-center justify-center shrink-0">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Enterprise Servers</p>
                      <p className="text-[11px] text-slate-400">Dell • HPE • Synology</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center shrink-0">
                      <Cctv className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">CCTV & Security</p>
                      <p className="text-[11px] text-slate-400">Hikvision • Dahua</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#00B4D8]/20 text-[#00B4D8] flex items-center justify-center shrink-0">
                      <Wifi className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Wi-Fi & Switching</p>
                      <p className="text-[11px] text-slate-400">Cisco • Ubiquiti</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Business Laptops</p>
                      <p className="text-[11px] text-slate-400">Lenovo • HP • Dell</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. OUR SERVICES SECTION (5 EQUAL-WIDTH, UNIFORM-HEIGHT CARDS)
      ==================================================================== */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#00B4D8]/10 text-[#0096C7] text-xs font-bold uppercase tracking-wider mb-3">
            End-to-End IT Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Enterprise IT Services Built for Growth
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Certified engineers in Ajman & Dubai delivering turnkey installation, annual
            maintenance contracts (AMC), and rapid on-site troubleshooting.
          </p>
        </div>

        {/* 5 Equal-Width Cards on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch">
          {SERVICES_DATA.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E2E8F0] p-6 text-center shadow-sm hover:shadow-xl hover:border-[#00B4D8] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0096C7] bg-[#00B4D8]/10 px-2.5 py-0.5 rounded-full mb-4">
                    {service.tag}
                  </span>

                  <div className="w-14 h-14 rounded-2xl bg-[#0B192C] group-hover:bg-[#00B4D8] text-[#00B4D8] group-hover:text-white flex items-center justify-center mb-4 transition-colors shadow-md">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0B192C] mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => openServiceQuote(service.title)}
                  className="mt-6 w-full py-2.5 px-3 rounded-xl border border-[#E2E8F0] group-hover:border-[#0B192C] group-hover:bg-[#0B192C] text-xs font-bold text-[#0B192C] group-hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ====================================================================
          5. FEATURED PRODUCTS E-COMMERCE GRID (4-COL DESKTOP / 2 / 1)
      ==================================================================== */}
      <section id="products" className="py-16 lg:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Category Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-bold uppercase tracking-wider mb-3">
                Ready-to-Ship UAE Inventory
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Featured IT Hardware & Equipment
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                100% genuine hardware with official UAE distributor warranty. Order online or
                directly via WhatsApp.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      active
                        ? 'bg-[#0B192C] text-white shadow-sm'
                        : 'bg-[#F8FAFC] text-slate-600 border border-[#E2E8F0] hover:border-[#00B4D8] hover:text-[#0B192C]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Grid: 4-col desktop, 2-col tablet, 1-col mobile, uniform height */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
              <p className="font-display text-xl font-bold text-[#0B192C]">
                No matching hardware found
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Try clearing your search filter or request a custom B2B sourcing quote.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Categories');
                }}
                className="mt-4 px-5 py-2.5 rounded-xl bg-[#00B4D8] text-white text-sm font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch min-w-0">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#00B4D8] transition-all duration-300"
                >
                  {/* Top Visual & Badges */}
                  <div>
                    <div className="relative bg-[#F8FAFC] border-b border-[#E2E8F0] p-4 flex items-center justify-center h-44 overflow-hidden">
                      {/* Discount Badge in Vibrant Coral Orange */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#FF6B35] text-white text-[11px] font-extrabold tracking-wide shadow-sm">
                        {product.discount}
                      </span>

                      {/* Stock/Feature Badge */}
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#0B192C]/90 text-[#00B4D8] text-[10px] font-bold">
                        {product.badge}
                      </span>

                      <div className="w-full transform group-hover:scale-105 transition-transform duration-300">
                        <HardwareVisual type={product.visual} />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5 pb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0096C7]">
                        {product.category}
                      </span>
                      <h3 className="font-display text-base font-bold text-[#0B192C] mt-1 line-clamp-2 min-h-[44px]">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 min-h-[32px] leading-relaxed">
                        {product.specs}
                      </p>
                    </div>
                  </div>

                  {/* Price & Dual Action Buttons */}
                  <div className="p-5 pt-2 mt-auto">
                    <div className="flex items-baseline gap-2 mb-4 pt-3 border-t border-[#E2E8F0]">
                      <span className="font-display text-xl font-extrabold text-[#0B192C]">
                        AED {product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        AED {product.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#FF6B35] hover:bg-[#f25822] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </button>

                      <a
                        href={getProductWhatsAppUrl(product)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-600 text-xs font-bold flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Order via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ====================================================================
          6. ABOUT & TRUST STRIP SECTION
      ==================================================================== */}
      <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Overview */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-[#00B4D8]/10 text-[#0096C7] text-xs font-bold uppercase tracking-wider">
              Why Businesses Choose A Plus Tech
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Your Strategic IT Procurement & Infrastructure Partner in the UAE
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Headquartered in Ajman Free Zone and serving enterprises across all seven Emirates,{' '}
              <strong className="text-[#0B192C]">A Plus Tech</strong> bridges the gap between
              fast e-commerce hardware procurement and certified on-site IT engineering.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Authorized partner pricing on Dell, HP, Lenovo, Cisco, Ubiquiti & Hikvision',
                'Same-day express courier delivery across Dubai, Sharjah & Ajman',
                'Dedicated corporate account managers & official UAE VAT tax invoices',
                'Flexible Cash on Delivery (COD), bank transfer & secure card payments'
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-[#0B192C]">
                  <CheckCircle2 className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <button
                onClick={() => {
                  setQuoteSubmitted(false);
                  setQuoteModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-[#00B4D8] text-white text-sm font-bold transition-all cursor-pointer"
              >
                <span>Request Corporate Account Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 4 Trust Badges Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:border-[#00B4D8] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/15 text-[#0096C7] flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#0B192C]">UAE-Wide Delivery</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Fast insured shipping to Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah & UAQ.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:border-[#FF6B35] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/15 text-[#FF6B35] flex items-center justify-center mb-4">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#0B192C]">
                Cash on Delivery Available
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Inspect your sealed hardware at your office or doorstep and pay via COD in AED.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:border-[#00B4D8] transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#0B192C]">
                100% Genuine Hardware
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Factory-sealed units sourced directly from authorized UAE & MEA distributors.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm hover:border-[#00B4D8] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0B192C]/10 text-[#0B192C] flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#0B192C]">24/7 Tech Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                Round-the-clock remote helpdesk and rapid on-site engineer dispatch across UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. MULTI-COLUMN FOOTER (#0B192C)
      ==================================================================== */}
      <footer id="contact" className="bg-[#0B192C] text-slate-300 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Brand & Tagline */}
            <div className="space-y-4">
              <APlusTechLogo lightText />
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                Leading UAE provider of enterprise IT hardware, structured networking, SIRA CCTV
                surveillance, and managed IT support services.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#00B4D8] font-semibold">
                <Award className="w-4 h-4 text-[#FF6B35]" />
                <span>UAE TRN Registered Enterprise Supplier</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-display text-white font-bold text-base mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#home" className="hover:text-[#00B4D8] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#00B4D8] transition-colors">
                    IT Services & AMC
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#00B4D8] transition-colors">
                    Hardware Store (AED)
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#00B4D8] transition-colors">
                    About A Plus Tech
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setQuoteSubmitted(false);
                      setQuoteModalOpen(true);
                    }}
                    className="hover:text-[#FF6B35] transition-colors cursor-pointer"
                  >
                    Request Bulk Quote
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: IT Solutions */}
            <div>
              <h4 className="font-display text-white font-bold text-base mb-4">IT Solutions</h4>
              <ul className="space-y-2.5 text-sm">
                {SERVICES_DATA.map((srv) => (
                  <li key={srv.id}>
                    <button
                      onClick={() => openServiceQuote(srv.title)}
                      className="hover:text-[#00B4D8] transition-colors text-left cursor-pointer"
                    >
                      {srv.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: UAE Contact Info */}
            <div>
              <h4 className="font-display text-white font-bold text-base mb-4">Contact UAE HQ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0 mt-1" />
                  <span>Office C1-408, Ajman Free Zone, Ajman, United Arab Emirates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  <a href="tel:+97161234567" className="hover:text-white">
                    +971 6 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  <a href="mailto:info@aplustech.com" className="hover:text-white">
                    info@aplustech.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mon – Sat: 8:30 AM – 7:00 PM GST</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Payment Badges & Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              © 2026 A Plus Tech. All rights reserved. Innovate • Support • Grow.
            </p>

            {/* Payment Method Icons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-bold tracking-wider">
                VISA
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-bold tracking-wider">
                MASTERCARD
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-bold tracking-wider">
                APPLE PAY
              </span>
              <span className="px-2.5 py-1 rounded bg-[#FF6B35]/20 border border-[#FF6B35]/40 text-[#FF6B35] text-[11px] font-bold">
                CASH ON DELIVERY
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          7. INTERACTIVE SLIDE-OVER SHOPPING CART DRAWER
      ==================================================================== */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-[#0B192C]/60 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="relative z-10 w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between">
            {/* Drawer Header */}
            <div className="px-6 py-5 bg-[#0B192C] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="w-5 h-5 text-[#00B4D8]" />
                <h3 className="font-display text-lg font-bold">
                  Your Hardware Cart ({totalCartItems})
                </h3>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                aria-label="Close Cart"
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-slate-400 mb-4">
                    <ShoppingCart className="w-8 h-8" />
                  </div>
                  <p className="font-display text-lg font-bold text-[#0B192C]">
                    Your cart is empty
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xs">
                    Browse our UAE enterprise IT catalog to add servers, switches, CCTV kits, or
                    laptops.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-5 px-5 py-2.5 rounded-xl bg-[#00B4D8] text-white text-sm font-bold cursor-pointer"
                  >
                    Browse Hardware
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3.5 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]"
                  >
                    <div className="w-20 h-20 rounded-xl bg-white border border-[#E2E8F0] p-1.5 flex items-center justify-center shrink-0">
                      <HardwareVisual type={item.visual} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display text-sm font-bold text-[#0B192C] line-clamp-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          aria-label="Remove item"
                          className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs font-extrabold text-[#0096C7] mt-1">
                        AED {(item.price * item.quantity).toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2.5">
                        <button
                          onClick={() => handleUpdateQty(item.id, -1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#0B192C] flex items-center justify-center text-[#0B192C] cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQty(item.id, 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#0B192C] flex items-center justify-center text-[#0B192C] cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Totals & Checkout CTA */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] space-y-3">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#0B192C]">
                      AED {subtotalAED.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>UAE VAT (5%)</span>
                    <span className="font-semibold text-[#0B192C]">
                      AED {vatAED.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>UAE Courier Delivery</span>
                    <span className="font-semibold text-emerald-600">
                      {shippingAED === 0 ? 'FREE' : `AED ${shippingAED}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-[#0B192C] pt-2 border-t border-[#E2E8F0]">
                    <span>Total (Incl. VAT)</span>
                    <span className="font-display text-lg text-[#FF6B35]">
                      AED {grandTotalAED.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCartOpen(false);
                    setOrderSuccess(null);
                    setCheckoutError('');
                    setCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#FF6B35] hover:bg-[#f25822] text-white font-bold text-sm shadow-lg shadow-[#FF6B35]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ====================================================================
          8. DUAL-OPTION CHECKOUT MODAL (CASH ON DELIVERY & CARD PAYMENT)
      ==================================================================== */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            onClick={() => setCheckoutOpen(false)}
            className="fixed inset-0 bg-[#0B192C]/70 backdrop-blur-xs"
          />

          <div className="relative z-10 w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-8">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold">Secure UAE Checkout</h3>
                <p className="text-xs text-slate-300">
                  Official UAE Tax Invoice • Fast Dispatch from Ajman/Dubai
                </p>
              </div>
              <button
                onClick={() => setCheckoutOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {orderSuccess ? (
              /* Order Confirmation Receipt */
              <div className="p-6 sm:p-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="px-3 py-1 rounded-full bg-[#00B4D8]/15 text-[#0096C7] text-xs font-bold">
                    Order ID: {orderSuccess.orderId}
                  </span>
                  <h4 className="font-display text-2xl font-extrabold text-[#0B192C] mt-3">
                    Order Confirmed!
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Thank you, <strong>{orderSuccess.customerName}</strong>. Our UAE logistics team
                    is preparing your hardware dispatch.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-4 text-left text-xs sm:text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Payment Method:</span>
                    <span className="font-bold text-[#0B192C]">{orderSuccess.method}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Delivery Emirate:</span>
                    <span className="font-semibold text-[#0B192C]">{orderSuccess.emirate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Phone:</span>
                    <span className="font-semibold text-[#0B192C]">{orderSuccess.phone}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#E2E8F0]">
                    <span className="font-bold text-[#0B192C]">Total Amount (AED):</span>
                    <span className="font-display font-extrabold text-[#FF6B35]">
                      AED {orderSuccess.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#0B192C] hover:bg-[#00B4D8] text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              /* Checkout Form with COD & Card Tabs */
              <form onSubmit={handlePlaceOrder} className="p-6 space-y-5">
                {/* Dual Payment Selector Tabs */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3.5 rounded-xl border-2 text-left flex items-center gap-3 transition-all cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'border-[#FF6B35] bg-[#FF6B35]/5'
                        : 'border-[#E2E8F0] hover:border-slate-300'
                    }`}
                  >
                    <Banknote
                      className={`w-5 h-5 shrink-0 ${
                        paymentMethod === 'cod' ? 'text-[#FF6B35]' : 'text-slate-400'
                      }`}
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#0B192C]">
                        Cash on Delivery
                      </p>
                      <p className="text-[11px] text-slate-500">Pay in AED upon arrival</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3.5 rounded-xl border-2 text-left flex items-center gap-3 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#00B4D8] bg-[#00B4D8]/5'
                        : 'border-[#E2E8F0] hover:border-slate-300'
                    }`}
                  >
                    <CreditCard
                      className={`w-5 h-5 shrink-0 ${
                        paymentMethod === 'card' ? 'text-[#00B4D8]' : 'text-slate-400'
                      }`}
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#0B192C]">Card Payment</p>
                      <p className="text-[11px] text-slate-500">Visa • Mastercard • Apple Pay</p>
                    </div>
                  </button>
                </div>

                {checkoutError && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {checkoutError}
                  </div>
                )}

                {/* Customer UAE Delivery Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1">
                      Full Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.fullName}
                      onChange={(e) =>
                        setCheckoutForm({ ...checkoutForm, fullName: e.target.value })
                      }
                      placeholder="e.g. Tariq Al Mansoori"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#00B4D8] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1">
                      UAE Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={checkoutForm.phone}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#00B4D8] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1">Emirate *</label>
                    <select
                      value={checkoutForm.emirate}
                      onChange={(e) =>
                        setCheckoutForm({ ...checkoutForm, emirate: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm bg-white focus:border-[#00B4D8] focus:outline-none"
                    >
                      {UAE_EMIRATES.map((em) => (
                        <option key={em} value={em}>
                          {em}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1">
                      Office / Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.address}
                      onChange={(e) =>
                        setCheckoutForm({ ...checkoutForm, address: e.target.value })
                      }
                      placeholder="Building, Area, Landmark"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#00B4D8] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Card Payment Inputs when Tab 2 selected */}
                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0B192C]">
                        Encrypted Card Gateway (Stripe / PayTabs Ready)
                      </span>
                      <span className="text-[11px] font-bold text-[#0096C7]">256-Bit SSL</span>
                    </div>

                    <div>
                      <input
                        type="text"
                        value={checkoutForm.cardNumber}
                        onChange={(e) => handleCardNumberChange(e.target.value)}
                        placeholder="Card Number (0000 0000 0000 0000)"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm font-mono focus:border-[#00B4D8] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        value={checkoutForm.cardName}
                        onChange={(e) =>
                          setCheckoutForm({ ...checkoutForm, cardName: e.target.value })
                        }
                        placeholder="Name on Card"
                        className="col-span-1 px-3 py-2 rounded-xl border border-[#E2E8F0] bg-white text-xs focus:border-[#00B4D8] focus:outline-none"
                      />
                      <input
                        type="text"
                        value={checkoutForm.expiry}
                        onChange={(e) => handleExpiryChange(e.target.value)}
                        placeholder="MM/YY"
                        className="px-3 py-2 rounded-xl border border-[#E2E8F0] bg-white text-xs font-mono focus:border-[#00B4D8] focus:outline-none"
                      />
                      <input
                        type="password"
                        maxLength={4}
                        value={checkoutForm.cvv}
                        onChange={(e) =>
                          setCheckoutForm({
                            ...checkoutForm,
                            cvv: e.target.value.replace(/\D/g, '')
                          })
                        }
                        placeholder="CVV"
                        className="px-3 py-2 rounded-xl border border-[#E2E8F0] bg-white text-xs font-mono focus:border-[#00B4D8] focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Order Total Bar & Submit */}
                <div className="pt-3 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Payable Total (Incl. 5% UAE VAT)</p>
                    <p className="font-display text-xl font-extrabold text-[#0B192C]">
                      AED {grandTotalAED.toLocaleString()}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FF6B35] hover:bg-[#f25822] text-white font-bold text-sm shadow-lg shadow-[#FF6B35]/20 transition-all cursor-pointer"
                  >
                    {paymentMethod === 'cod'
                      ? 'Confirm COD Order'
                      : `Pay AED ${grandTotalAED.toLocaleString()}`}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ====================================================================
          9. "GET A QUOTE" / IT CONSULTATION MODAL
      ==================================================================== */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            onClick={() => setQuoteModalOpen(false)}
            className="fixed inset-0 bg-[#0B192C]/70 backdrop-blur-xs"
          />

          <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden my-8">
            <div className="px-6 py-4 bg-[#0B192C] text-white flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-bold">
                  Request B2B Quote / IT Consultation
                </h3>
                <p className="text-xs text-[#00B4D8]">
                  Response within 2 business hours from our Ajman/Dubai engineers
                </p>
              </div>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {quoteSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#00B4D8]/15 text-[#0096C7] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-xl font-extrabold text-[#0B192C]">
                  Quote Request Received!
                </h4>
                <p className="text-sm text-slate-600">
                  Our UAE solutions architect will contact{' '}
                  <strong>{quoteForm.contactPerson || 'you'}</strong> shortly with a tailored
                  proposal for <strong>{quoteForm.serviceType}</strong>.
                </p>
                <button
                  onClick={() => setQuoteModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0B192C] text-white text-sm font-bold cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteForm.companyName}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, companyName: e.target.value })
                      }
                      placeholder="Your Company LLC"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#00B4D8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteForm.contactPerson}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, contactPerson: e.target.value })
                      }
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#00B4D8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      placeholder="name@company.ae"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#00B4D8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] mb-1">
                      UAE Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#00B4D8] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B192C] mb-1">
                    Solution / Service Required
                  </label>
                  <select
                    value={quoteForm.serviceType}
                    onChange={(e) => setQuoteForm({ ...quoteForm, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm bg-white focus:border-[#00B4D8] focus:outline-none"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Bulk IT Hardware Procurement">
                      Bulk IT Hardware Procurement
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B192C] mb-1">
                    Project Scope or Hardware List
                  </label>
                  <textarea
                    rows={3}
                    value={quoteForm.requirements}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, requirements: e.target.value })
                    }
                    placeholder="Tell us about your office size, number of cameras/workstations, or hardware models..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] text-sm focus:border-[#00B4D8] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#FF6B35] hover:bg-[#f25822] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ====================================================================
          FLOATING STICKY WHATSAPP BUTTON (BOTTOM-RIGHT)
      ==================================================================== */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          'Hello A Plus Tech UAE! I need assistance with IT hardware / services.'
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with A Plus Tech on WhatsApp"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-3.5 rounded-full shadow-2xl shadow-emerald-900/30 transition-all hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden sm:inline text-xs font-extrabold tracking-wide pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}