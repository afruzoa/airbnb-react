function Where({
  onRegionSelect,
}: {
  onRegionSelect: (region: string) => void;
}) {
  const handleSelectRegion = (region: string) => {
    onRegionSelect(region);
  };
  return (
    <div className="region-select">
      <div className="region-text">Search by region</div>
      <div className="continents">
        {Region.map((region) => (
          <div
            key={region.id}
            className="region-item"
            onClick={() => handleSelectRegion(region.name)}
          >
            <img className="region-flex" alt={region.name} src={region.image} />
            <div className="country-text">{region.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Where;
export const Region = [
  {
    id: 1,
    name: "Im flexible",
    image: "/src/assets/country/flexible.jpg",
  },
  { id: 2, name: "UnitedState", image: "../" },
  { id: 3, name: "Spain", image: "/src/assets/country/spain.webp" },
  { id: 4, name: "Southeast Asia", image: "/src/assets/country/asia.webp" },
  { id: 5, name: "Italy", image: "/src/assets/country/italy.webp" },
  { id: 6, name: "Africa", image: "/src/assets/country/Africa.jpg" },
];
