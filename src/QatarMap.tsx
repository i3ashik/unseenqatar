
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

type MapPlace = {
  name: string;
  arabic: string;
  lat: number;
  lng: number;
};

const places: MapPlace[] = [
  {
    name: "Souq Waqif",
    arabic: "سوق واقف",
    lat: 25.2867,
    lng: 51.5333
  },
  {
    name: "Katara Cultural Village",
    arabic: "الحي الثقافي كتارا",
    lat: 25.3601,
    lng: 51.5269
  },
  {
    name: "The Pearl Qatar",
    arabic: "اللؤلؤة قطر",
    lat: 25.3700,
    lng: 51.5500
  },
  {
    name: "Al Wakrah Old Souq",
    arabic: "سوق الوكرة القديم",
    lat: 25.1715,
    lng: 51.6034
  },
  {
    name: "Purple Island",
    arabic: "جزيرة البنفسج",
    lat: 25.7167,
    lng: 51.5500
  },
  {
    name: "Al Zubarah Fort",
    arabic: "قلعة الزبارة",
    lat: 25.9764,
    lng: 51.0453
  },
  {
    name: "Lusail",
    arabic: "لوسيل",
    lat: 25.4200,
    lng: 51.4900
  },
  {
    name: "Al Shaqab",
    arabic: "الشقب",
    lat: 25.3150,
    lng: 51.4350
  },
  {
    name: "Inland Sea",
    arabic: "البحر الداخلي",
    lat: 24.6300,
    lng: 51.2000
  }
];

type QatarMapProps = {
  language?: "en" | "ar";
  onSelect?: (name: string) => void;
};

export default function QatarMap({
  language = "en",
  onSelect
}: QatarMapProps) {
  const isArabic = language === "ar";

  return (
    <section className="qatar-map-section">
      <div className="qatar-map-heading">
        <span className="section-label">
          {isArabic ? "اكتشف قطر" : "EXPLORE QATAR"}
        </span>

        <h2>
          {isArabic
            ? "اكتشف الأماكن على الخريطة"
            : "Explore Qatar on the Map"}
        </h2>

        <p>
          {isArabic
            ? "اضغط على أي موقع لمعرفة المزيد."
            : "Tap any location marker to explore the place."}
        </p>
      </div>

      <div className="qatar-map-container">
        <MapContainer
          center={[25.35, 51.25]}
          zoom={8}
          scrollWheelZoom={false}
          className="qatar-leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {places.map((place) => (
            <CircleMarker
              key={place.name}
              center={[place.lat, place.lng]}
              radius={9}
              pathOptions={{
                color: "#721c35",
                fillColor: "#a83255",
                fillOpacity: 0.9,
                weight: 2
              }}
            >
              <Popup>
                <div className="qatar-map-popup">
                  <strong>
                    {isArabic ? place.arabic : place.name}
                  </strong>

                  <button
                    type="button"
                    onClick={() => onSelect?.(place.name)}
                  >
                    {isArabic ? "استكشف المكان" : "Explore Place"}
                  </button>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
