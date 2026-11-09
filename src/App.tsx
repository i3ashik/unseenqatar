
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
} from "lucide-react";

type Language = "en" | "ar";

type Municipality = {
  name: string;
  arabic: string;
  description: string;
  arabicDescription: string;
};

type Destination = {
  name: string;
  arabic: string;
  category: string;
  arabicCategory: string;
  location: string;
  municipality: string;
  image: string;
};

const municipalities: Municipality[] = [
  {
    name: "Doha",
    arabic: "الدوحة",
    description: "Discover Qatar's vibrant capital, where modern architecture meets traditional culture.",
    arabicDescription: "اكتشف عاصمة قطر النابضة بالحياة، حيث تلتقي العمارة الحديثة بالثقافة التقليدية.",
  },
  {
    name: "Al Rayyan",
    arabic: "الريان",
    description: "Explore cultural attractions, sporting landmarks and beautiful landscapes.",
    arabicDescription: "اكتشف المعالم الثقافية والرياضية والمناظر الطبيعية الجميلة.",
  },
  {
    name: "Al Wakrah",
    arabic: "الوكرة",
    description: "Experience coastal charm, traditional markets and historic neighbourhoods.",
    arabicDescription: "استمتع بسحر الساحل والأسواق التقليدية والأحياء التاريخية.",
  },
  {
    name: "Al Khor and Al Thakhira",
    arabic: "الخور والذخيرة",
    description: "Discover mangroves, beaches and peaceful natural escapes.",
    arabicDescription: "اكتشف أشجار القرم والشواطئ والوجهات الطبيعية الهادئة.",
  },
  {
    name: "Al Shamal",
    arabic: "الشمال",
    description: "Explore northern Qatar's historic sites, beaches and hidden gems.",
    arabicDescription: "استكشف المواقع التاريخية والشواطئ والجواهر المخفية في شمال قطر.",
  },
  {
    name: "Umm Salal",
    arabic: "أم صلال",
    description: "Discover historic forts, traditional heritage and quiet local places.",
    arabicDescription: "اكتشف الحصون التاريخية والتراث التقليدي والأماكن المحلية الهادئة.",
  },
  {
    name: "Al Daayen",
    arabic: "الظعاين",
    description: "Explore modern Lusail and the growing northern coastal area.",
    arabicDescription: "استكشف لوسيل الحديثة والمناطق الساحلية الشمالية المتنامية.",
  },
  {
    name: "Al Shahaniya",
    arabic: "الشحانية",
    description: "Experience desert landscapes, farms and traditional Qatari heritage.",
    arabicDescription: "استمتع بالمناظر الصحراوية والمزارع والتراث القطري التقليدي.",
  },
];

const destinations: Destination[] = [
  {
    name: "Souq Waqif",
    arabic: "سوق واقف",
    category: "Culture & Heritage",
    arabicCategory: "الثقافة والتراث",
    location: "Doha",
    municipality: "Doha",
    image: "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Katara Cultural Village",
    arabic: "الحي الثقافي كتارا",
    category: "Culture",
    arabicCategory: "الثقافة",
    location: "Doha",
    municipality: "Doha",
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "The Pearl Qatar",
    arabic: "اللؤلؤة قطر",
    category: "Lifestyle",
    arabicCategory: "أسلوب الحياة",
    location: "Doha",
    municipality: "Doha",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Purple Island",
    arabic: "جزيرة البنفسج",
    category: "Nature",
    arabicCategory: "الطبيعة",
    location: "Al Khor",
    municipality: "Al Khor and Al Thakhira",
    image: "https://images.unsplash.com/photo-1500530851580-8c17a3a630ca?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Al Thakhira Mangroves",
    arabic: "غابات الذخيرة",
    category: "Nature",
    arabicCategory: "الطبيعة",
    location: "Al Thakhira",
    municipality: "Al Khor and Al Thakhira",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Al Wakrah Old Souq",
    arabic: "سوق الوكرة القديم",
    category: "Heritage",
    arabicCategory: "التراث",
    location: "Al Wakrah",
    municipality: "Al Wakrah",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Al Zubarah Fort",
    arabic: "قلعة الزبارة",
    category: "History",
    arabicCategory: "التاريخ",
    location: "Al Zubarah",
    municipality: "Al Shamal",
    image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Heenat Salma Farm",
    arabic: "مزرعة حينة سالمة",
    category: "Nature",
    arabicCategory: "الطبيعة",
    location: "Al Shahaniya",
    municipality: "Al Shahaniya",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Al Shaqab",
    arabic: "الشقب",
    category: "Culture & Heritage",
    arabicCategory: "الثقافة والتراث",
    location: "Al Rayyan",
    municipality: "Al Rayyan",
    image: "https://images.unsplash.com/photo-1534307671665-3b3b3b3b3b3b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Lusail",
    arabic: "لوسيل",
    category: "Lifestyle",
    arabicCategory: "أسلوب الحياة",
    location: "Lusail",
    municipality: "Al Daayen",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85",
  },
];

const translations = {
  en: {
    home: "Home",
    explore: "Explore",
    municipalities: "Municipalities",
    destinations: "Destinations",
    stories: "Stories",
    heroLabel: "EXPLORE THE EXTRAORDINARY",
    heroTitle: "Discover Every Corner of Qatar",
    heroText: "Go beyond the ordinary. Explore hidden gems, breathtaking landscapes and unforgettable experiences across Qatar.",
    searchPlaceholder: "Search destinations, places...",
    exploreButton: "Start Exploring",
    discoverTitle: "Discover Qatar",
    discoverText: "From beautiful coastlines to cultural treasures, find your next adventure.",
    municipalityTitle: "Explore by Municipality",
    municipalityText: "Discover all eight municipalities of Qatar and explore what makes each area special.",
    viewPlaces: "Explore Places",
    destinationTitle: "Popular Destinations",
    destinationText: "Explore some of the most fascinating places in Qatar.",
    hiddenTitle: "Find the Hidden Qatar",
    hiddenText: "There is more to Qatar than meets the eye. Discover peaceful escapes, local favourites and places waiting to be explored.",
    storiesTitle: "Stories & Experiences",
    storiesText: "Get inspired by the places, people and experiences that make Qatar unique.",
    culture: "Culture",
    nature: "Nature",
    food: "Food",
    adventure: "Adventure",
    footerText: "Discover the beauty, culture and hidden gems of Qatar.",
    back: "Back to Municipalities",
    placesToExplore: "Places to Explore",
    comingSoon: "More destinations coming soon.",
    noPlaces: "We're adding destinations for this municipality. Check back soon!",
    location: "Qatar",
  },
  ar: {
    home: "الرئيسية",
    explore: "استكشف",
    municipalities: "البلديات",
    destinations: "الوجهات",
    stories: "القصص",
    heroLabel: "اكتشف الأماكن الاستثنائية",
    heroTitle: "اكتشف كل زاوية في قطر",
    heroText: "اكتشف الجواهر المخفية والمناظر الطبيعية الخلابة والتجارب التي لا تُنسى في جميع أنحاء قطر.",
    searchPlaceholder: "ابحث عن الوجهات والأماكن...",
    exploreButton: "ابدأ الاستكشاف",
    discoverTitle: "اكتشف قطر",
    discoverText: "من السواحل الجميلة إلى الكنوز الثقافية، ابحث عن مغامرتك القادمة.",
    municipalityTitle: "استكشف حسب البلدية",
    municipalityText: "اكتشف البلديات الثماني في قطر وما يميز كل منطقة.",
    viewPlaces: "استكشف الأماكن",
    destinationTitle: "وجهات شهيرة",
    destinationText: "اكتشف بعضًا من أكثر الأماكن روعة في قطر.",
    hiddenTitle: "اكتشف قطر المخفية",
    hiddenText: "هناك الكثير لاكتشافه في قطر. استمتع بالأماكن الهادئة والمفضلة المحلية والوجهات المميزة.",
    storiesTitle: "القصص والتجارب",
    storiesText: "استلهم من الأماكن والأشخاص والتجارب التي تجعل قطر فريدة.",
    culture: "الثقافة",
    nature: "الطبيعة",
    food: "الطعام",
    adventure: "المغامرة",
    footerText: "اكتشف جمال قطر وثقافتها وجواهرها المخفية.",
    back: "العودة إلى البلديات",
    placesToExplore: "أماكن للاستكشاف",
    comingSoon: "المزيد من الوجهات قريبًا.",
    noPlaces: "نعمل على إضافة وجهات لهذه البلدية. يرجى العودة قريبًا!",
    location: "قطر",
  },
};

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState<string | null>(null);

  const isArabic = language === "ar";
  const t = translations[language];

  const selectedPlace = municipalities.find(
    (place) => place.name === selectedMunicipality
  );

  const filteredDestinations = destinations.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.location.toLowerCase().includes(search.toLowerCase()) ||
      place.category.toLowerCase().includes(search.toLowerCase());

    return matchesSearch;
  });

  const openMunicipality = (name: string) => {
    setSelectedMunicipality(name);
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById("municipality-details")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const backToMunicipalities = () => {
    setSelectedMunicipality(null);
    setTimeout(() => {
      document.getElementById("municipalities")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`app ${isArabic ? "arabic" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <header className="site-header">
        <a href="#home" className="logo" onClick={() => setSelectedMunicipality(null)}>
          <span className="logo-mark"><Compass size={27} /></span>
          <span className="logo-text">
            UNSEEN <strong>QATAR</strong>
            <small>DISCOVER EVERY CORNER</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => scrollTo("home")}>{t.home}</button>
          <button onClick={() => scrollTo("discover")}>{t.explore}</button>
          <button onClick={() => scrollTo("municipalities")}>{t.municipalities}</button>
          <button onClick={() => scrollTo("destinations")}>{t.destinations}</button>
          <button onClick={() => scrollTo("stories")}>{t.stories}</button>
        </nav>

        <div className="header-actions">
          <button
            className="language-button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            aria-label="Change language"
          >
            <Globe size={17} />
            {isArabic ? "EN" : "عربي"}
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-label"><Sparkles size={15} /> {t.heroLabel}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="hero-search">
              <Search size={20} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t.searchPlaceholder}
              />
              <button onClick={() => scrollTo("destinations")}>
                {t.exploreButton} <ArrowRight size={17} />
              </button>
            </div>
          </div>
          <div className="hero-bottom">
            <span><MapPin size={15} /> {t.location}</span>
            <span>01 / 08</span>
          </div>
        </section>

        <section className="discover-section" id="discover">
          <div className="section-heading">
            <span className="section-label">{t.heroLabel}</span>
            <h2>{t.discoverTitle}</h2>
            <p>{t.discoverText}</p>
          </div>
          <div className="category-grid">
            <article className="category-card">
              <span className="category-icon"><Camera size={25} /></span>
              <h3>{t.culture}</h3>
            </article>
            <article className="category-card">
              <span className="category-icon"><Mountain size={25} /></span>
              <h3>{t.nature}</h3>
            </article>
            <article className="category-card">
              <span className="category-icon"><Utensils size={25} /></span>
              <h3>{t.food}</h3>
            </article>
            <article className="category-card">
              <span className="category-icon"><Waves size={25} /></span>
              <h3>{t.adventure}</h3>
            </article>
          </div>
        </section>

        <section className="municipalities-section" id="municipalities">
          <div className="section-heading">
            <span className="section-label">EXPLORE QATAR</span>
            <h2>{t.municipalityTitle}</h2>
            <p>{t.municipalityText}</p>
          </div>

          <div className="municipality-grid">
            {municipalities.map((place, index) => (
              <button
                type="button"
                className="category-card municipality-card"
                key={place.name}
                onClick={() => openMunicipality(place.name)}
              >
                <span className="category-icon"><MapPin size={23} /></span>
                <strong>{isArabic ? place.arabic : place.name}</strong>
                <p>{isArabic ? place.arabicDescription : place.description}</p>
                <span className="municipality-link">
                  {t.viewPlaces} <ArrowRight size={15} />
                </span>
                <span className="municipality-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </section>

        {selectedPlace && (
          <section className="municipality-details" id="municipality-details">
            <button className="back-button" onClick={backToMunicipalities}>
              <ArrowLeft size={17} /> {t.back}
            </button>

            <span className="section-label">UNSEEN QATAR</span>
            <h2>{isArabic ? selectedPlace.arabic : selectedPlace.name}</h2>
            <p>
              {isArabic
                ? selectedPlace.arabicDescription
                : selectedPlace.description}
            </p>

            <div className="municipality-detail-info">
              <MapPin size={20} />
              <span>{isArabic ? "دولة قطر" : "Qatar"}</span>
            </div>

            <div className="municipality-places">
              <h3>{t.placesToExplore}</h3>

              <div className="destination-grid">
                {destinations
                  .filter((place) => place.municipality === selectedPlace.name)
                  .map((place) => (
                    <article className="destination-card" key={place.name}>
                      <div className="destination-image">
                        <img src={place.image} alt={place.name} loading="lazy" />
                        <span className="place-category">
                          {isArabic ? place.arabicCategory : place.category}
                        </span>
                      </div>
                      <div className="destination-info">
                        <span className="place-location">
                          <MapPin size={14} /> {place.location}
                        </span>
                        <h3>{isArabic ? place.arabic : place.name}</h3>
                      </div>
                    </article>
                  ))}
              </div>

              {destinations.filter(
                (place) => place.municipality === selectedPlace.name
              ).length === 0 && (
                <p className="municipality-empty">{t.noPlaces}</p>
              )}
            </div>
          </section>
        )}

        <section className="destinations-section" id="destinations">
          <div className="section-heading">
            <span className="section-label">MUST VISIT PLACES</span>
            <h2>{t.destinationTitle}</h2>
            <p>{t.destinationText}</p>
          </div>

          <div className="destination-grid">
            {filteredDestinations.map((place) => (
              <article className="destination-card" key={place.name}>
                <div className="destination-image">
                  <img src={place.image} alt={place.name} loading="lazy" />
                  <span className="place-category">
                    {isArabic ? place.arabicCategory : place.category}
                  </span>
                </div>
                <div className="destination-info">
                  <span className="place-location">
                    <MapPin size={14} /> {place.location}
                  </span>
                  <h3>{isArabic ? place.arabic : place.name}</h3>
                  <button
                    className="text-link"
                    onClick={() => openMunicipality(place.municipality)}
                  >
                    {t.viewPlaces} <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
            {filteredDestinations.length === 0 && (
              <p className="no-results">No destinations found. Try another search.</p>
            )}
          </div>
        </section>

        <section className="hidden-section">
          <div className="hidden-content">
            <span className="section-label">GO BEYOND THE ORDINARY</span>
            <h2>{t.hiddenTitle}</h2>
            <p>{t.hiddenText}</p>
            <button onClick={() => scrollTo("municipalities")} className="light-button">
              {t.exploreButton} <ArrowRight size={17} />
            </button>
          </div>
        </section>

        <section className="stories-section" id="stories">
          <div className="section-heading">
            <span className="section-label">TRAVEL INSPIRATION</span>
            <h2>{t.storiesTitle}</h2>
            <p>{t.storiesText}</p>
          </div>
          <div className="stories-grid">
            <article className="story-card">
              <img
                src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=900&q=85"
                alt="Qatar culture"
                loading="lazy"
              />
              <div><span> CULTURE </span><h3>Discover the cultural side of Qatar</h3></div>
            </article>
            <article className="story-card">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85"
                alt="Qatar nature"
                loading="lazy"
              />
              <div><span>NATURE</span><h3>Find your peaceful escape</h3></div>
            </article>
            <article className="story-card">
              <img
                src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85"
                alt="Qatar city"
                loading="lazy"
              />
              <div><span>EXPERIENCES</span><h3>See Qatar from a new perspective</h3></div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Compass size={30} />
          <span>UNSEEN <strong>QATAR</strong></span>
        </div>
        <p>{t.footerText}</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} UNSEEN QATAR. All rights reserved.</span>
          <span>Made to discover Qatar.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
