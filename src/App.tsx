
import { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Compass,
  Search,
  ArrowRight,
  Globe,
  Camera,
  Utensils,
  Sparkles,
  Mountain,
  Waves,
  ChevronRight,
  ArrowLeft,
  Clock,
  Map,
  Landmark,
} from "lucide-react";
import "./App.css";

type Destination = {
  name: string;
  arabic: string;
  category: string;
  location: string;
  municipality: string;
  image: string;
  description: string;
  arabicDescription: string;
  highlights: string[];
  arabicHighlights: string[];
  mapQuery: string;
};

const municipalities = [
  {
    name: "Doha",
    arabic: "الدوحة",
    description: "Discover Qatar's capital, with its museums, traditional markets, waterfront and modern skyline.",
    arabicDescription: "اكتشف عاصمة قطر بما فيها من متاحف وأسواق تقليدية وواجهة بحرية وأفق عمراني حديث.",
  },
  {
    name: "Al Rayyan",
    arabic: "الريان",
    description: "Explore cultural attractions, sports landmarks and traditional experiences.",
    arabicDescription: "استكشف المعالم الثقافية والرياضية والتجارب التقليدية.",
  },
  {
    name: "Al Wakrah",
    arabic: "الوكرة",
    description: "Enjoy coastal heritage, traditional architecture and peaceful seaside experiences.",
    arabicDescription: "استمتع بالتراث الساحلي والهندسة المعمارية التقليدية والتجارب البحرية الهادئة.",
  },
  {
    name: "Al Khor and Al Thakhira",
    arabic: "الخور والذخيرة",
    description: "Discover mangroves, islands and beautiful natural landscapes.",
    arabicDescription: "اكتشف غابات المانغروف والجزر والمناظر الطبيعية الجميلة.",
  },
  {
    name: "Al Shamal",
    arabic: "الشمال",
    description: "Explore northern Qatar's history, archaeological sites and coastal scenery.",
    arabicDescription: "استكشف تاريخ شمال قطر والمواقع الأثرية والمناظر الساحلية.",
  },
  {
    name: "Umm Salal",
    arabic: "أم صلال",
    description: "Discover historic towers, traditional heritage and local surroundings.",
    arabicDescription: "اكتشف الأبراج التاريخية والتراث التقليدي والمناطق المحلية.",
  },
  {
    name: "Al Daayen",
    arabic: "الظعاين",
    description: "Explore modern urban destinations and coastal attractions.",
    arabicDescription: "استكشف الوجهات الحضرية الحديثة والمعالم الساحلية.",
  },
  {
    name: "Al Shahaniya",
    arabic: "الشحانية",
    description: "Experience Qatar's desert landscapes, farms and camel racing heritage.",
    arabicDescription: "استمتع بالمناظر الصحراوية والمزارع وتراث سباقات الهجن في قطر.",
  },
];

const destinations: Destination[] = [
  {
    name: "Souq Waqif",
    arabic: "سوق واقف",
    category: "Culture & Heritage",
    location: "Doha",
    municipality: "Doha",
    image: "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?auto=format&fit=crop&w=1200&q=85",
    description: "Souq Waqif is one of Doha's best-known traditional markets. Explore its narrow streets, local shops, restaurants, spices and traditional architecture.",
    arabicDescription: "يعد سوق واقف من أشهر الأسواق التقليدية في الدوحة. استكشف أزقته ومحلاته ومطاعمه وتوابله وعماراته التراثية.",
    highlights: ["Traditional market streets", "Local restaurants and cafés", "Spices, crafts and souvenirs"],
    arabicHighlights: ["أزقة السوق التقليدي", "المطاعم والمقاهي المحلية", "التوابل والحرف والهدايا التذكارية"],
    mapQuery: "Souq Waqif Doha Qatar",
  },
  {
    name: "Katara Cultural Village",
    arabic: "الحي الثقافي كتارا",
    category: "Culture",
    location: "Doha",
    municipality: "Doha",
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=85",
    description: "Katara is a cultural destination featuring galleries, performance venues, restaurants and beautiful public spaces near the waterfront.",
    arabicDescription: "كتارا وجهة ثقافية تضم المعارض الفنية والمسارح والمطاعم والمساحات العامة الجميلة بالقرب من الواجهة البحرية.",
    highlights: ["Cultural exhibitions", "Amphitheatre and architecture", "Waterfront walks"],
    arabicHighlights: ["المعارض الثقافية", "المدرج والهندسة المعمارية", "التنزه على الواجهة البحرية"],
    mapQuery: "Katara Cultural Village Doha Qatar",
  },
  {
    name: "The Pearl Qatar",
    arabic: "اللؤلؤة قطر",
    category: "Lifestyle",
    location: "Doha",
    municipality: "Doha",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
    description: "The Pearl is a waterfront destination known for its marinas, shopping, restaurants and Mediterranean-inspired architecture.",
    arabicDescription: "اللؤلؤة وجهة بحرية تشتهر بالمراسي والتسوق والمطاعم والهندسة المعمارية المستوحاة من البحر الأبيض المتوسط.",
    highlights: ["Marina promenades", "Restaurants and cafés", "Shopping and waterfront views"],
    arabicHighlights: ["ممشى المارينا", "المطاعم والمقاهي", "التسوق والإطلالات البحرية"],
    mapQuery: "The Pearl Qatar Doha",
  },
  {
    name: "Inland Sea",
    arabic: "خور العديد",
    category: "Nature & Adventure",
    location: "Southern Qatar",
    municipality: "Al Wakrah",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=85",
    description: "Khor Al Adaid is a remarkable natural landscape where the desert meets the sea. It is known for its sand dunes and guided desert adventures.",
    arabicDescription: "خور العديد منطقة طبيعية مميزة حيث تلتقي الصحراء بالبحر، وتشتهر بالكثبان الرملية ورحلات المغامرات الصحراوية.",
    highlights: ["Desert safari with a licensed operator", "Sand dunes", "Scenic coastal views"],
    arabicHighlights: ["رحلات السفاري مع مشغل مرخص", "الكثبان الرملية", "الإطلالات الساحلية"],
    mapQuery: "Khor Al Adaid Inland Sea Qatar",
  },
  {
    name: "Purple Island",
    arabic: "جزيرة البنفسج",
    category: "Nature",
    location: "Al Khor",
    municipality: "Al Khor and Al Thakhira",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    description: "Purple Island is a nature destination near Al Khor, known for its mangroves, walking trails and birdlife.",
    arabicDescription: "جزيرة البنفسج وجهة طبيعية بالقرب من الخور، وتشتهر بأشجار المانغروف ومسارات المشي والطيور.",
    highlights: ["Nature walks", "Mangrove surroundings", "Birdwatching"],
    arabicHighlights: ["التنزه في الطبيعة", "مناطق أشجار المانغروف", "مراقبة الطيور"],
    mapQuery: "Purple Island Al Khor Qatar",
  },
  {
    name: "Al Thakhira Mangroves",
    arabic: "غابات الذخيرة",
    category: "Nature",
    location: "Al Thakhira",
    municipality: "Al Khor and Al Thakhira",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85",
    description: "The Al Thakhira mangroves offer a peaceful natural environment and an opportunity to discover Qatar's coastal ecosystem.",
    arabicDescription: "توفر غابات الذخيرة بيئة طبيعية هادئة وفرصة لاكتشاف النظام البيئي الساحلي في قطر.",
    highlights: ["Mangrove ecosystem", "Kayaking with suitable local operators", "Nature photography"],
    arabicHighlights: ["النظام البيئي للمانغروف", "التجديف مع المشغلين المحليين", "التصوير الطبيعي"],
    mapQuery: "Al Thakhira Mangroves Qatar",
  },
  {
    name: "Al Wakrah Old Souq",
    arabic: "سوق الوكرة القديم",
    category: "Heritage",
    location: "Al Wakrah",
    municipality: "Al Wakrah",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    description: "Al Wakrah Old Souq is a coastal heritage area with traditional-style buildings, restaurants and seaside views.",
    arabicDescription: "سوق الوكرة القديم منطقة تراثية ساحلية تضم مباني بطراز تقليدي ومطاعم وإطلالات بحرية.",
    highlights: ["Traditional architecture", "Seaside restaurants", "Coastal walking areas"],
    arabicHighlights: ["العمارة التقليدية", "مطاعم على البحر", "مناطق المشي الساحلية"],
    mapQuery: "Al Wakrah Old Souq Qatar",
  },
  {
    name: "Al Zubarah Fort",
    arabic: "قلعة الزبارة",
    category: "History",
    location: "Al Zubarah",
    municipality: "Al Shamal",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200&q=85",
    description: "Al Zubarah is a historic archaeological area that offers insight into Qatar's pearling and trading past.",
    arabicDescription: "الزبارة منطقة أثرية تاريخية تقدم لمحة عن تاريخ الغوص على اللؤلؤ والتجارة في قطر.",
    highlights: ["Historic fort", "Archaeological heritage", "Cultural history"],
    arabicHighlights: ["القلعة التاريخية", "التراث الأثري", "التاريخ الثقافي"],
    mapQuery: "Al Zubarah Fort Qatar",
  },
  {
    name: "Heenat Salma Farm",
    arabic: "مزرعة حينة سالمة",
    category: "Nature",
    location: "Al Shahaniya",
    municipality: "Al Shahaniya",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    description: "Heenat Salma is an agricultural and ecological destination focused on nature, sustainable living and local experiences. Check visitor access before travelling.",
    arabicDescription: "حينة سالمة وجهة زراعية وبيئية تركز على الطبيعة والاستدامة والتجارب المحلية. تحقق من إمكانية الزيارة قبل الذهاب.",
    highlights: ["Agricultural experiences", "Nature and sustainability", "Local food experiences"],
    arabicHighlights: ["التجارب الزراعية", "الطبيعة والاستدامة", "تجارب الطعام المحلي"],
    mapQuery: "Heenat Salma Farm Qatar",
  },
  {
    name: "Al Shaqab",
    arabic: "الشقب",
    category: "Culture & Heritage",
    location: "Al Rayyan",
    municipality: "Al Rayyan",
    image: "https://images.unsplash.com/photo-1534307671665-3b3b3b3b3b3b?auto=format&fit=crop&w=1200&q=85",
    description: "Al Shaqab is an equestrian centre that celebrates Qatar's Arabian horse heritage and equestrian culture. Check visiting arrangements before your trip.",
    arabicDescription: "الشقب مركز للفروسية يحتفي بتراث الخيول العربية وثقافة الفروسية في قطر. تحقق من ترتيبات الزيارة قبل الذهاب.",
    highlights: ["Arabian horse heritage", "Equestrian facilities", "Horse-related events"],
    arabicHighlights: ["تراث الخيول العربية", "مرافق الفروسية", "فعاليات الخيول"],
    mapQuery: "Al Shaqab Qatar",
  },
  {
    name: "Lusail",
    arabic: "لوسيل",
    category: "Lifestyle",
    location: "Lusail",
    municipality: "Al Daayen",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85",
    description: "Lusail is a modern city with contemporary architecture, waterfront areas, entertainment and shopping destinations.",
    arabicDescription: "لوسيل مدينة حديثة تضم عمارة معاصرة ومناطق بحرية ووجهات ترفيهية وتسوق.",
    highlights: ["Modern city architecture", "Waterfront areas", "Shopping and entertainment"],
    arabicHighlights: ["العمارة الحديثة", "المناطق البحرية", "التسوق والترفيه"],
    mapQuery: "Lusail City Qatar",
  },
];

const translations = {
  en: {
    home: "Home",
    explore: "Explore Qatar",
    destinations: "Destinations",
    municipalities: "Municipalities",
    hidden: "Hidden Gems",
    stories: "Travel Stories",
    heroTag: "EXPLORE THE EXTRAORDINARY",
    heroTitle: "Discover Every Corner of Qatar",
    heroText: "Go beyond the ordinary. Explore hidden gems, breathtaking landscapes and unforgettable experiences across Qatar.",
    discover: "DISCOVER QATAR",
    featured: "Explore Amazing Places",
    featuredText: "From beautiful coastlines to cultural treasures, find your next adventure.",
    search: "Search destinations, places...",
    start: "Start Exploring",
    viewDetails: "Explore Details",
    back: "Back",
    location: "Location",
    municipality: "Municipality",
    highlights: "Things to Explore",
    map: "Open in Google Maps",
    hiddenTitle: "Find the Hidden Qatar",
    hiddenText: "Discover lesser-known places, secret corners and unforgettable experiences waiting to be explored.",
    storiesTitle: "Stories That Inspire You",
    storiesText: "Travel guides, local experiences and stories that bring Qatar closer to you.",
    food: "Taste Qatar",
    culture: "Culture & Heritage",
    adventure: "Adventure",
    footer: "Discover Every Corner of Qatar.",
    places: "Places to Explore",
    noPlaces: "More destinations are coming soon.",
    municipalityText: "Explore Qatar through its eight municipalities.",
    allPlaces: "All Destinations",
  },
  ar: {
    home: "الرئيسية",
    explore: "اكتشف قطر",
    destinations: "الوجهات",
    municipalities: "البلديات",
    hidden: "أماكن مخفية",
    stories: "قصص السفر",
    heroTag: "اكتشف ما هو استثنائي",
    heroTitle: "اكتشف كل زاوية في قطر",
    heroText: "اكتشف الأماكن الخفية والمناظر الطبيعية الخلابة والتجارب التي لا تُنسى في جميع أنحاء قطر.",
    discover: "اكتشف قطر",
    featured: "اكتشف أماكن رائعة",
    featuredText: "من السواحل الجميلة إلى الكنوز الثقافية، اكتشف مغامرتك القادمة.",
    search: "ابحث عن الوجهات والأماكن...",
    start: "ابدأ الاستكشاف",
    viewDetails: "اكتشف التفاصيل",
    back: "رجوع",
    location: "الموقع",
    municipality: "البلدية",
    highlights: "أنشطة يمكنك استكشافها",
    map: "افتح في خرائط جوجل",
    hiddenTitle: "اكتشف قطر الخفية",
    hiddenText: "اكتشف الأماكن الأقل شهرة والزوايا الجميلة والتجارب الفريدة.",
    storiesTitle: "قصص تلهمك",
    storiesText: "أدلة السفر والتجارب المحلية والقصص التي تقرب قطر إليك.",
    food: "تذوق قطر",
    culture: "الثقافة والتراث",
    adventure: "المغامرة",
    footer: "اكتشف كل زاوية في قطر.",
    places: "أماكن للاستكشاف",
    noPlaces: "سيتم إضافة المزيد من الوجهات قريباً.",
    municipalityText: "اكتشف قطر من خلال بلدياتها الثماني.",
    allPlaces: "جميع الوجهات",
  },
};

function App() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const isArabic = language === "ar";
  const t = translations[language];

  const filteredDestinations = destinations.filter((place) => {
    const term = search.trim().toLowerCase();
    return (
      !term ||
      `${place.name} ${place.arabic} ${place.location} ${place.category} ${place.municipality}`
        .toLowerCase()
        .includes(term)
    );
  });

  const municipalityPlaces = selectedMunicipality
    ? destinations.filter((place) => place.municipality === selectedMunicipality)
    : [];

  function showDestination(place: Destination) {
    setSelectedDestination(place);
    setSelectedMunicipality(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showMunicipality(name: string) {
    setSelectedMunicipality(name);
    setSelectedDestination(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    setSelectedDestination(null);
    setSelectedMunicipality(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={isArabic ? "app arabic" : "app"} dir={isArabic ? "rtl" : "ltr"}>
      <header className="site-header">
        <a href="#home" className="logo" onClick={goHome}>
          <span className="logo-mark"><Compass size={27} /></span>
          <span className="logo-text">
            UNSEEN <strong>QATAR</strong>
            <small>DISCOVER EVERY CORNER</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <button onClick={() => { goHome(); setMenuOpen(false); }}>{t.home}</button>
          <button onClick={() => { goHome(); setMenuOpen(false); document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" }); }}>{t.explore}</button>
          <button onClick={() => { goHome(); setMenuOpen(false); document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" }); }}>{t.destinations}</button>
          <button onClick={() => { goHome(); setMenuOpen(false); document.getElementById("municipalities")?.scrollIntoView({ behavior: "smooth" }); }}>{t.municipalities}</button>
          <button onClick={() => { goHome(); setMenuOpen(false); document.getElementById("hidden")?.scrollIntoView({ behavior: "smooth" }); }}>{t.hidden}</button>
          <button onClick={() => { goHome(); setMenuOpen(false); document.getElementById("stories")?.scrollIntoView({ behavior: "smooth" }); }}>{t.stories}</button>
        </nav>

        <div className="header-actions">
          <button className="language-button" onClick={() => setLanguage(isArabic ? "en" : "ar")}>
            <Globe size={18} />
            {isArabic ? "English" : "عربي"}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </header>

      <main>
        {selectedDestination ? (
          <section className="destination-details">
            <button className="back-button" onClick={goHome}>
              <ArrowLeft size={17} /> {t.back}
            </button>

            <div className="destination-detail-hero">
              <img src={selectedDestination.image} alt={selectedDestination.name} />
              <div className="destination-detail-overlay">
                <span className="section-label">{selectedDestination.category}</span>
                <h1>{isArabic ? selectedDestination.arabic : selectedDestination.name}</h1>
                <span className="detail-location"><MapPin size={17} /> {selectedDestination.location}</span>
              </div>
            </div>

            <div className="destination-detail-content">
              <div className="detail-main">
                <span className="section-label">{t.discover}</span>
                <h2>{isArabic ? selectedDestination.arabic : selectedDestination.name}</h2>
                <p>
                  {isArabic ? selectedDestination.arabicDescription : selectedDestination.description}
                </p>

                <h3>{t.highlights}</h3>
                <ul className="highlight-list">
                  {(isArabic ? selectedDestination.arabicHighlights : selectedDestination.highlights).map((item) => (
                    <li key={item}><Sparkles size={17} /> {item}</li>
                  ))}
                </ul>
              </div>

              <aside className="detail-sidebar">
                <div className="detail-info-card">
                  <span><MapPin size={18} /> {t.location}</span>
                  <strong>{selectedDestination.location}</strong>
                  <span><Landmark size={18} /> {t.municipality}</span>
                  <strong>
                    {isArabic
                      ? municipalities.find((m) => m.name === selectedDestination.municipality)?.arabic
                      : selectedDestination.municipality}
                  </strong>
                  <span><Compass size={18} /> Category</span>
                  <strong>{selectedDestination.category}</strong>
                  <a
                    className="map-button"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedDestination.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Map size={18} /> {t.map} <ArrowRight size={16} />
                  </a>
                </div>
              </aside>
            </div>

            <section className="related-section">
              <div className="section-heading">
                <span className="section-label">{t.explore}</span>
                <h2>{t.places}</h2>
              </div>
              <div className="destination-grid">
                {destinations
                  .filter((place) => place.name !== selectedDestination.name && place.municipality === selectedDestination.municipality)
                  .map((place) => (
                    <article className="destination-card" key={place.name} onClick={() => showDestination(place)}>
                      <div className="destination-image">
                        <img src={place.image} alt={place.name} loading="lazy" />
                        <span className="place-category">{place.category}</span>
                      </div>
                      <div className="destination-info">
                        <span className="place-location"><MapPin size={14} /> {place.location}</span>
                        <h3>{isArabic ? place.arabic : place.name}</h3>
                        <span className="text-link">{t.viewDetails} <ArrowRight size={15} /></span>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          </section>
        ) : selectedMunicipality ? (
          <section className="municipality-details">
            <button className="back-button" onClick={goHome}>
              <ArrowLeft size={17} /> {t.back}
            </button>
            <span className="section-label">{t.municipalities}</span>
            <h2>
              {isArabic
                ? municipalities.find((m) => m.name === selectedMunicipality)?.arabic
                : selectedMunicipality}
            </h2>
            <p>
              {isArabic
                ? municipalities.find((m) => m.name === selectedMunicipality)?.arabicDescription
                : municipalities.find((m) => m.name === selectedMunicipality)?.description}
            </p>

            <div className="municipality-detail-info">
              <MapPin size={18} />
              {selectedMunicipality}, Qatar
            </div>

            <div className="municipality-places">
              <h3>{t.places}</h3>
              <div className="destination-grid">
                {municipalityPlaces.length > 0 ? municipalityPlaces.map((place) => (
                  <article className="destination-card" key={place.name} onClick={() => showDestination(place)}>
                    <div className="destination-image">
                      <img src={place.image} alt={place.name} loading="lazy" />
                      <span className="place-category">{place.category}</span>
                    </div>
                    <div className="destination-info">
                      <span className="place-location"><MapPin size={14} /> {place.location}</span>
                      <h3>{isArabic ? place.arabic : place.name}</h3>
                      <span className="text-link">{t.viewDetails} <ArrowRight size={15} /></span>
                    </div>
                  </article>
                )) : (
                  <p className="municipality-empty">{t.noPlaces}</p>
                )}
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="hero-section" id="home">
              <div className="hero-overlay" />
              <div className="hero-content">
                <span className="hero-label"><Sparkles size={17} /> {t.heroTag}</span>
                <h1>{t.heroTitle}</h1>
                <p>{t.heroText}</p>
                <div className="hero-search">
                  <Search size={22} />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={t.search}
                  />
                  <button onClick={() => document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })}>
                    {t.start} <ArrowRight size={19} />
                  </button>
                </div>
              </div>
              <div className="hero-bottom">
                <span><MapPin size={17} /> Qatar</span>
                <span>Discover Every Corner</span>
              </div>
            </section>

            <section className="discover-section" id="explore">
              <div className="section-heading">
                <span className="section-label">{t.discover}</span>
                <h2>{t.featured}</h2>
                <p>{t.featuredText}</p>
              </div>

              <div className="category-grid">
                <a href="#destinations" className="category-card">
                  <span className="category-icon"><Compass /></span>
                  <h3>{t.explore}</h3>
                </a>
                <a href="#stories" className="category-card">
                  <span className="category-icon"><Camera /></span>
                  <h3>{t.stories}</h3>
                </a>
                <a href="#food" className="category-card">
                  <span className="category-icon"><Utensils /></span>
                  <h3>{t.food}</h3>
                </a>
                <a href="#hidden" className="category-card">
                  <span className="category-icon"><Mountain /></span>
                  <h3>{t.adventure}</h3>
                </a>
              </div>
            </section>

            <section className="municipalities-section" id="municipalities">
              <div className="section-heading">
                <span className="section-label">{t.discover}</span>
                <h2>{t.municipalities}</h2>
                <p>{t.municipalityText}</p>
              </div>

              <div className="municipality-grid">
                {municipalities.map((place, index) => (
                  <button
                    className="category-card municipality-card"
                    key={place.name}
                    onClick={() => showMunicipality(place.name)}
                  >
                    <span className="municipality-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="category-icon"><MapPin /></span>
                    <strong>{isArabic ? place.arabic : place.name}</strong>
                    <p>{isArabic ? place.arabicDescription : place.description}</p>
                    <span className="municipality-link">{t.viewDetails} <ChevronRight size={15} /></span>
                  </button>
                ))}
              </div>
            </section>

            <section className="destinations-section" id="destinations">
              <div className="section-heading">
                <span className="section-label">{t.discover}</span>
                <h2>{t.featured}</h2>
                <p>{t.featuredText}</p>
              </div>

              <div className="destination-grid">
                {filteredDestinations.length > 0 ? filteredDestinations.map((place) => (
                  <article className="destination-card" key={place.name} onClick={() => showDestination(place)}>
                    <div className="destination-image">
                      <img src={place.image} alt={place.name} loading="lazy" />
                      <span className="place-category">{place.category}</span>
                    </div>
                    <div className="destination-info">
                      <span className="place-location"><MapPin size={14} /> {place.location}</span>
                      <h3>{isArabic ? place.arabic : place.name}</h3>
                      <span className="text-link">{t.viewDetails} <ArrowRight size={15} /></span>
                    </div>
                  </article>
                )) : (
                  <p className="no-results">{t.noPlaces}</p>
                )}
              </div>
            </section>

            <section className="hidden-section" id="hidden">
              <div className="hidden-content">
                <span className="section-label">{t.discover}</span>
                <h2>{t.hiddenTitle}</h2>
                <p>{t.hiddenText}</p>
                <a href="#destinations" className="light-button">{t.start} <ArrowRight size={17} /></a>
              </div>
            </section>

            <section className="stories-section" id="stories">
              <div className="section-heading">
                <span className="section-label">TRAVEL JOURNAL</span>
                <h2>{t.storiesTitle}</h2>
                <p>{t.storiesText}</p>
              </div>
              <div className="stories-grid">
                <article className="story-card">
                  <img src="https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?auto=format&fit=crop&w=900&q=85" alt="Qatar heritage" loading="lazy" />
                  <div><span>HERITAGE</span><h3>{t.culture}</h3></div>
                </article>
                <article className="story-card">
                  <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85" alt="Qatar desert" loading="lazy" />
                  <div><span>ADVENTURE</span><h3>{t.adventure}</h3></div>
                </article>
                <article className="story-card">
                  <img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85" alt="Qatar waterfront" loading="lazy" />
                  <div><span>FOOD & LIFESTYLE</span><h3>{t.food}</h3></div>
                </article>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Compass size={28} />
          <span>UNSEEN <strong>QATAR</strong></span>
        </div>
        <p>{t.footer}</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} UNSEEN QATAR</span>
          <span>Discover Every Corner of Qatar</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
