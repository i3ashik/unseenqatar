
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
  ChevronRight
} from "lucide-react";
import "./App.css";

const destinations = [
  {
    name: "Souq Waqif",
    arabic: "سوق واقف",
    category: "Culture & Heritage",
    image:
      "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?auto=format&fit=crop&w=900&q=85",
    location: "Doha"
  },
  {
    name: "Katara Cultural Village",
    arabic: "الحي الثقافي كتارا",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=900&q=85",
    location: "Doha"
  },
  {
    name: "Inland Sea",
    arabic: "خور العديد",
    category: "Nature & Adventure",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85",
    location: "Southern Qatar"
  },
  {
    name: "The Pearl Qatar",
    arabic: "اللؤلؤة قطر",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
    location: "Doha"
  }
];

const municipalities = [
  {
    name: "Doha",
    arabic: "الدوحة",
    description: "Explore Qatar's capital, landmarks and vibrant city life.",
    arabicDescription: "اكتشف عاصمة قطر ومعالمها وحياة المدينة النابضة."
  },
  {
    name: "Al Rayyan",
    arabic: "الريان",
    description: "Discover cultural attractions, nature and sporting landmarks.",
    arabicDescription: "اكتشف المعالم الثقافية والطبيعة والوجهات الرياضية."
  },
  {
    name: "Al Wakrah",
    arabic: "الوكرة",
    description: "Explore coastal heritage, beaches and traditional markets.",
    arabicDescription: "اكتشف التراث الساحلي والشواطئ والأسواق التقليدية."
  },
  {
    name: "Al Khor and Al Thakhira",
    arabic: "الخور والذخيرة",
    description: "Discover mangroves, coastal landscapes and local heritage.",
    arabicDescription: "اكتشف غابات المانغروف والمناظر الساحلية والتراث المحلي."
  },
  {
    name: "Al Shamal",
    arabic: "الشمال",
    description: "Explore northern Qatar, beaches and historic sites.",
    arabicDescription: "اكتشف شمال قطر وشواطئه ومواقعه التاريخية."
  },
  {
    name: "Umm Salal",
    arabic: "أم صلال",
    description: "Discover historic forts and peaceful local landscapes.",
    arabicDescription: "اكتشف الحصون التاريخية والمناظر المحلية الهادئة."
  },
  {
    name: "Al Daayen",
    arabic: "الظعاين",
    description: "Explore growing communities and beautiful coastal areas.",
    arabicDescription: "اكتشف المناطق الساحلية والمجتمعات المتنامية."
  },
  {
    name: "Al Shahaniya",
    arabic: "الشحانية",
    description: "Discover desert landscapes and traditional camel racing.",
    arabicDescription: "اكتشف المناظر الصحراوية وسباقات الهجن التقليدية."
  }
];

const translations = {
  en: {
    home: "Home",
    explore: "Explore Qatar",
    destinations: "Destinations",
    hidden: "Hidden Gems",
    stories: "Travel Stories",
    municipalityNav: "Municipalities",

    heroTag: "YOUR JOURNEY STARTS HERE",
    heroTitle: "Discover Every Corner of Qatar",
    heroText:
      "Beyond the ordinary. Explore breathtaking places, rich heritage, local culture and unforgettable experiences across Qatar.",
    exploreBtn: "Explore Destinations",
    discover: "DISCOVER QATAR",

    featured: "Explore Amazing Places",
    featuredText:
      "From vibrant city streets to peaceful desert landscapes, discover the beauty of Qatar.",
    viewAll: "View All Places",

    municipalities: "Explore Qatar by Municipality",
    municipalityText:
      "Discover destinations, local culture and hidden gems across all eight municipalities of Qatar.",
    exploreMunicipality: "Explore Municipality",

    hiddenTitle: "Find the Hidden Qatar",
    hiddenText:
      "Discover the lesser-known places, secret corners and unforgettable experiences waiting to be explored.",

    storiesTitle: "Stories That Inspire You",
    storiesText:
      "Travel guides, local experiences and stories that bring Qatar closer to you.",

    food: "Taste Qatar",
    foodText:
      "Explore authentic Qatari food and local dining experiences.",

    culture: "Culture & Heritage",
    cultureText:
      "Discover Qatar's history, traditions and cultural treasures.",

    adventure: "Adventure",
    adventureText:
      "Experience deserts, beaches and outdoor adventures.",

    footer: "Discover Every Corner of Qatar.",
    search: "Where do you want to explore?",
    start: "START EXPLORING"
  },

  ar: {
    home: "الرئيسية",
    explore: "اكتشف قطر",
    destinations: "الوجهات",
    hidden: "أماكن مخفية",
    stories: "قصص السفر",
    municipalityNav: "البلديات",

    heroTag: "رحلتك تبدأ من هنا",
    heroTitle: "اكتشف كل زاوية في قطر",
    heroText:
      "اكتشف الأماكن الخلابة والتراث الغني والثقافة المحلية والتجارب التي لا تُنسى في جميع أنحاء قطر.",
    exploreBtn: "اكتشف الوجهات",
    discover: "اكتشف قطر",

    featured: "اكتشف أماكن رائعة",
    featuredText:
      "من شوارع المدينة النابضة بالحياة إلى هدوء الصحراء، اكتشف جمال قطر.",
    viewAll: "عرض جميع الأماكن",

    municipalities: "اكتشف قطر حسب البلدية",
    municipalityText:
      "اكتشف الوجهات والثقافة المحلية والأماكن المخفية في جميع بلديات قطر الثماني.",
    exploreMunicipality: "اكتشف البلدية",

    hiddenTitle: "اكتشف قطر الخفية",
    hiddenText:
      "اكتشف الأماكن الأقل شهرة والزوايا الجميلة والتجارب الفريدة.",

    storiesTitle: "قصص تلهمك",
    storiesText:
      "أدلة السفر والتجارب المحلية والقصص التي تقرب قطر إليك.",

    food: "تذوق قطر",
    foodText:
      "اكتشف المأكولات القطرية الأصيلة وتجارب الطعام المحلية.",

    culture: "الثقافة والتراث",
    cultureText:
      "اكتشف تاريخ قطر وتقاليدها وكنوزها الثقافية.",

    adventure: "المغامرة",
    adventureText:
      "استمتع بالصحراء والشواطئ والمغامرات الخارجية.",

    footer: "اكتشف كل زاوية في قطر.",
    search: "أين تريد أن تكتشف؟",
    start: "ابدأ الاستكشاف"
  }
};

function App() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const t = translations[language];
  const isArabic = language === "ar";

  const filteredDestinations = destinations.filter((place) => {
    const term = search.trim().toLowerCase();

    return (
      !term ||
      `${place.name} ${place.location} ${place.category} ${place.arabic}`
        .toLowerCase()
        .includes(term)
    );
  });

  return (
    <div
      className={isArabic ? "app arabic" : "app"}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">U</span>
          <span>
            <strong>UNSEEN</strong>
            <small>QATAR</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            {t.home}
          </a>

          <a href="#explore" onClick={() => setMenuOpen(false)}>
            {t.explore}
          </a>

          <a href="#municipalities" onClick={() => setMenuOpen(false)}>
            {t.municipalityNav}
          </a>

          <a href="#destinations" onClick={() => setMenuOpen(false)}>
            {t.destinations}
          </a>

          <a href="#hidden" onClick={() => setMenuOpen(false)}>
            {t.hidden}
          </a>

          <a href="#stories" onClick={() => setMenuOpen(false)}>
            {t.stories}
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="language-btn"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
          >
            <Globe size={17} />
            {isArabic ? "EN" : "العربية"}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="eyebrow">
              <Sparkles size={15} />
              {t.heroTag}
            </span>

            <h1>{t.heroTitle}</h1>

            <p>{t.heroText}</p>

            <div className="hero-search">
              <Search size={20} />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t.search}
              />

              <button
                onClick={() =>
                  document
                    .getElementById("destinations")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.start}
                <ArrowRight size={17} />
              </button>
            </div>

            <a className="hero-link" href="#destinations">
              {t.exploreBtn}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-bottom">
            <span>
              <MapPin size={16} />
              QATAR
            </span>

            <span>{t.discover}</span>
          </div>
        </section>

        <section className="intro-section" id="explore">
          <span className="section-label">{t.discover}</span>

          <h2>{t.featured}</h2>

          <p>{t.featuredText}</p>

          <div className="category-grid">
            <a href="#destinations" className="category-card">
              <span className="category-icon">
                <Compass />
              </span>
              <strong>{t.explore}</strong>
              <ChevronRight />
            </a>

            <a href="#stories" className="category-card">
              <span className="category-icon">
                <Camera />
              </span>
              <strong>{t.stories}</strong>
              <ChevronRight />
            </a>

            <a href="#food" className="category-card">
              <span className="category-icon">
                <Utensils />
              </span>
              <strong>{t.food}</strong>
              <ChevronRight />
            </a>

            <a href="#hidden" className="category-card">
              <span className="category-icon">
                <Mountain />
              </span>
              <strong>{t.adventure}</strong>
              <ChevronRight />
            </a>
          </div>
        </section>

        <section className="municipalities-section" id="municipalities">
          <div className="section-heading">
            <div>
              <span className="section-label">
                EXPLORE ALL OF QATAR
              </span>

              <h2>{t.municipalities}</h2>

              <p>{t.municipalityText}</p>
            </div>
          </div>

          <div className="category-grid municipality-grid">
            {municipalities.map((place) => (
              <a
                href="#destinations"
                className="category-card municipality-card"
                key={place.name}
              >
                <span className="category-icon">
                  <MapPin />
                </span>

                <strong>
                  {isArabic ? place.arabic : place.name}
                </strong>

                <p>
                  {isArabic
                    ? place.arabicDescription
                    : place.description}
                </p>

                <span className="municipality-link">
                  {t.exploreMunicipality}
                  <ArrowRight size={15} />
                </span>

                <ChevronRight />
              </a>
            ))}
          </div>
        </section>

        <section className="destinations-section" id="destinations">
          <div className="section-heading">
            <div>
              <span className="section-label">
                EXPLORE THE COUNTRY
              </span>

              <h2>{t.featured}</h2>

              <p>{t.featuredText}</p>
            </div>

            <a href="#explore" className="view-all">
              {t.viewAll}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="destination-grid">
            {filteredDestinations.map((place) => (
              <article className="destination-card" key={place.name}>
                <div className="destination-image">
                  <img
                    src={place.image}
                    alt={place.name}
                    loading="lazy"
                  />

                  <span className="place-category">
                    {place.category}
                  </span>
                </div>

                <div className="destination-info">
                  <span className="place-location">
                    <MapPin size={14} />
                    {place.location}
                  </span>

                  <h3>
                    {isArabic ? place.arabic : place.name}
                  </h3>

                  <a href="#stories">
                    {t.exploreBtn}
                    <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}

            {filteredDestinations.length === 0 && (
              <p>
                {isArabic
                  ? "لم يتم العثور على أماكن."
                  : "No destinations found. Try another search."}
              </p>
            )}
          </div>
        </section>

        <section className="hidden-section" id="hidden">
          <div className="hidden-content">
            <span className="section-label">
              BEYOND THE ORDINARY
            </span>

            <h2>{t.hiddenTitle}</h2>

            <p>{t.hiddenText}</p>

            <a href="#destinations" className="light-button">
              {t.exploreBtn}
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="hidden-icon">
            <Waves size={110} strokeWidth={1} />
          </div>
        </section>

        <section className="stories-section" id="stories">
          <span className="section-label">
            TRAVEL JOURNAL
          </span>

          <h2>{t.storiesTitle}</h2>

          <p>{t.storiesText}</p>

          <div className="story-feature">
            <div className="story-symbol">
              <Camera size={34} />
            </div>

            <div>
              <h3>{t.culture}</h3>
              <p>{t.cultureText}</p>
            </div>
          </div>

          <div className="story-feature" id="food">
            <div className="story-symbol">
              <Utensils size={34} />
            </div>

            <div>
              <h3>{t.food}</h3>
              <p>{t.foodText}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">U</span>

          <span>
            <strong>UNSEEN</strong>
            <small>QATAR</small>
          </span>
        </a>

        <p>{t.footer}</p>

        <span>
          © {new Date().getFullYear()} UNSEEN QATAR
        </span>
      </footer>
    </div>
  );
}

export default App;
