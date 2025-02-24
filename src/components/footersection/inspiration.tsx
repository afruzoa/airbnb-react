import { useState } from "react";

const Tabs = [
  { id: "popular", label: "Popular" },
  { id: "historic", label: "Historic" },
  { id: "cosastal", label: "Coastal" },
  { id: "islands", label: "Islands" },
  { id: "lakes", label: "Lakes" },
  { id: "unique-stays", label: "Unique stays" },
  { id: "categories", label: "Categories" },
  { id: "things-to-do", label: "Things to do" },
];
const Contents = [
  {
    id: "popular",
    items: [
      { title: "Canmore", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Benalmádena", subtitle: "House rentals", link: "" },
      { title: "Marbella", subtitle: "Apartment rentals", link: "" },
      { title: "Maleny", subtitle: "Vacation rentals", link: "" },
      { title: "Mijas", subtitle: "Apartment rentals", link: "" },
      { title: "Prescott", subtitle: "Cabin rentals", link: "" },
      { title: "Scottsdale", subtitle: "House rentals", link: "" },
      { title: "Tucson", subtitle: "Condo rentals", link: "" },
      { title: "Jasper", subtitle: "Cabin rentals", link: "" },
      { title: "Mountain View", subtitle: "Cabin rentals", link: "" },
      { title: "Anaheim", subtitle: "Family-friendly rentals", link: "" },
      { title: "Devonport", subtitle: "Cottage rentals", link: "" },
      { title: "Mallacoota", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Ibiza", subtitle: "Vacation rentals", link: "" },
      { title: "Monterey", subtitle: "Apartment rentals", link: "" },
      { title: "Paso Robles", subtitle: "Cottage rentals", link: "" },
      { title: "Santa Barbara", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Sonoma", subtitle: "Rentals with pools", link: "" },
      { title: "Santa Fe", subtitle: "Condo rentals", link: "" },
      { title: "Lakeside", subtitle: "Lakehouse rentals", link: "" },
      { title: "La Serena", subtitle: "Beachfront rentals", link: "" },
      { title: "New Braunfels", subtitle: "Condo rentals", link: "" },
      { title: "Dubai", subtitle: "Villa rentals", link: "" },
      { title: "Birmingham", subtitle: "House rentals", link: "" },
    ],
  },
  {
    id: "historic",
    items: [
      { title: "Canmore", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Benalmádena", subtitle: "House rentals", link: "" },
      { title: "Marbella", subtitle: "Apartment rentals", link: "" },
      { title: "Maleny", subtitle: "Vacation rentals", link: "" },
      { title: "Mijas", subtitle: "Apartment rentals", link: "" },
      { title: "Prescott", subtitle: "Cabin rentals", link: "" },
      { title: "Scottsdale", subtitle: "House rentals", link: "" },
      { title: "Tucson", subtitle: "Condo rentals", link: "" },
      { title: "Jasper", subtitle: "Cabin rentals", link: "" },
      { title: "Mountain View", subtitle: "Cabin rentals", link: "" },
      { title: "Anaheim", subtitle: "Family-friendly rentals", link: "" },
      { title: "Devonport", subtitle: "Cottage rentals", link: "" },
      { title: "Mallacoota", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Ibiza", subtitle: "Vacation rentals", link: "" },
      { title: "Monterey", subtitle: "Apartment rentals", link: "" },
      { title: "Paso Robles", subtitle: "Cottage rentals", link: "" },
      { title: "Santa Barbara", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Sonoma", subtitle: "Rentals with pools", link: "" },
      { title: "New Braunfels", subtitle: "Condo rentals", link: "" },
      { title: "Lakeside", subtitle: "Condo rentals", link: "" },
      { title: "La Serena", subtitle: "Beachfront rentals", link: "" },
      { title: "Santa Fe", subtitle: "Condo rentals", link: "" },
      { title: "Dubai", subtitle: "Villa rentals", link: "" },
      { title: "Birmingham", subtitle: "House rentals", link: "" },
    ],
  },
  {
    id: "cosastal",
    items: [
      { title: "Canmore", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Benalmádena", subtitle: "House rentals", link: "" },
      { title: "Marbella", subtitle: "Apartment rentals", link: "" },
      { title: "Maleny", subtitle: "Vacation rentals", link: "" },
      { title: "Mijas", subtitle: "Apartment rentals", link: "" },
      { title: "Prescott", subtitle: "Cabin rentals", link: "" },
      { title: "Scottsdale", subtitle: "House rentals", link: "" },
      { title: "Tucson", subtitle: "Condo rentals", link: "" },
      { title: "Jasper", subtitle: "Cabin rentals", link: "" },
      { title: "Mountain View", subtitle: "Cabin rentals", link: "" },
      { title: "Anaheim", subtitle: "Family-friendly rentals", link: "" },
      { title: "Devonport", subtitle: "Cottage rentals", link: "" },
      { title: "Mallacoota", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Ibiza", subtitle: "Vacation rentals", link: "" },
      { title: "Monterey", subtitle: "Apartment rentals", link: "" },
      { title: "Paso Robles", subtitle: "Cottage rentals", link: "" },
      { title: "Santa Barbara", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Sonoma", subtitle: "Rentals with pools", link: "" },
      { title: "New Braunfels", subtitle: "Condo rentals", link: "" },
      { title: "Lakeside", subtitle: "Condo rentals", link: "" },
      { title: "La Serena", subtitle: "Beachfront rentals", link: "" },
      { title: "Santa Fe", subtitle: "Condo rentals", link: "" },
      { title: "Dubai", subtitle: "Villa rentals", link: "" },
      { title: "Birmingham", subtitle: "House rentals", link: "" },
    ],
  },
  {
    id: "islands",
    items: [
      { title: "Berlin", subtitle: "Flat rentals", link: "" },
      { title: "Cork", subtitle: "Flat rentals", link: "" },
      { title: "Hayling Island", subtitle: "Holiday rentals", link: "" },
      { title: "Ingoldmells", subtitle: "Holiday rentals", link: "" },
      { title: "La Rochelle", subtitle: "House rentals", link: "" },
      { title: "Windsor", subtitle: "Holiday rentals", link: "" },
    ],
  },
  {
    id: "lakes",
    items: [
      { title: "Ambleside", subtitle: "House rentals", link: "" },
      { title: "Bowness-on-Windermere", subtitle: "Flat rentals", link: "" },
      { title: "Coniston", subtitle: "House rentals", link: "" },
      { title: "Grasmere", subtitle: "Cottage rentals", link: "" },
      { title: "Hawkshead", subtitle: "Cottage rentals", link: "" },
      { title: "Keswick", subtitle: "Cottage rentals", link: "" },
      { title: "Kissimmee", subtitle: "Villa rentals", link: "" },
      { title: "Windermere", subtitle: "Cottage rentals", link: "" },
      { title: "Lakeside", subtitle: "Holiday rentals", link: "" },
      { title: "Morzine", subtitle: "Holiday rentals", link: "" },
      { title: "New York", subtitle: "Holiday rentals", link: "" },
      { title: "Orlando", subtitle: "Apartment rentals", link: "" },
      { title: "Tattershall", subtitle: "Cabin rentals", link: "" },
    ],
  },
  {
    id: "categories",
    items: [
      { title: "Amazing pools", subtitle: "", link: "" },
      { title: "Arctic", subtitle: "", link: "" },
      { title: "Camping", subtitle: "", link: "" },
      { title: "Campers", subtitle: "", link: "" },
      { title: "Castles", subtitle: "", link: "" },
      { title: "Containers", subtitle: "", link: "" },
      { title: "Countryside", subtitle: "", link: "" },
      { title: "Design", subtitle: "", link: "" },
      { title: "Earth homes", subtitle: "", link: "" },
      { title: "Vineyards", subtitle: "", link: "" },
      { title: "National parks", subtitle: "", link: "" },
      { title: "OMG!", subtitle: "", link: "" },
      { title: "Tiny homes", subtitle: "", link: "" },
      { title: "Towers", subtitle: "", link: "" },
      { title: "Windmills", subtitle: "", link: "" },
      { title: "Luxe", subtitle: "", link: "" },
    ],
  },
  {
    id: "things-to-do",
    items: [
      { title: "Canmore", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Benalmádena", subtitle: "House rentals", link: "" },
      { title: "Marbella", subtitle: "Apartment rentals", link: "" },
      { title: "Maleny", subtitle: "Vacation rentals", link: "" },
      { title: "Mijas", subtitle: "Apartment rentals", link: "" },
      { title: "Prescott", subtitle: "Cabin rentals", link: "" },
      { title: "Scottsdale", subtitle: "House rentals", link: "" },
      { title: "Tucson", subtitle: "Condo rentals", link: "" },
      { title: "Jasper", subtitle: "Cabin rentals", link: "" },
      { title: "Mountain View", subtitle: "Cabin rentals", link: "" },
      { title: "Anaheim", subtitle: "Family-friendly rentals", link: "" },
      { title: "Devonport", subtitle: "Cottage rentals", link: "" },
      { title: "Mallacoota", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Ibiza", subtitle: "Vacation rentals", link: "" },
      { title: "Monterey", subtitle: "Apartment rentals", link: "" },
      { title: "Paso Robles", subtitle: "Cottage rentals", link: "" },
      { title: "Santa Barbara", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Sonoma", subtitle: "Rentals with pools", link: "" },
      { title: "Santa Fe", subtitle: "Condo rentals", link: "" },
      { title: "New Braunfels", subtitle: "Condo rentals", link: "" },
      { title: "La Serena", subtitle: "Beachfront rentals", link: "" },
      { title: "Lakeside", subtitle: "Lakehouse rentals", link: "" },
      { title: "Dubai", subtitle: "Villa rentals", link: "" },
      { title: "Birmingham", subtitle: "House rentals", link: "" },
    ],
  },
  {
    id: "unique-stays",
    items: [
      { title: "Canmore", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Benalmádena", subtitle: "House rentals", link: "" },
      { title: "Marbella", subtitle: "Apartment rentals", link: "" },
      { title: "Maleny", subtitle: "Vacation rentals", link: "" },
      { title: "Mijas", subtitle: "Apartment rentals", link: "" },
      { title: "Prescott", subtitle: "Cabin rentals", link: "" },
      { title: "Scottsdale", subtitle: "House rentals", link: "" },
      { title: "Tucson", subtitle: "Condo rentals", link: "" },
      { title: "Jasper", subtitle: "Cabin rentals", link: "" },
      { title: "Mountain View", subtitle: "Cabin rentals", link: "" },
      { title: "Anaheim", subtitle: "Family-friendly rentals", link: "" },
      { title: "Devonport", subtitle: "Cottage rentals", link: "" },
      { title: "Mallacoota", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Ibiza", subtitle: "Vacation rentals", link: "" },
      { title: "Monterey", subtitle: "Apartment rentals", link: "" },
      { title: "Paso Robles", subtitle: "Cottage rentals", link: "" },
      { title: "Santa Barbara", subtitle: "Pet-friendly rentals", link: "" },
      { title: "Sonoma", subtitle: "Rentals with pools", link: "" },
      { title: "Santa Fe", subtitle: "Condo rentals", link: "" },
      { title: "New Braunfels", subtitle: "Condo rentals", link: "" },
      { title: "La Serena", subtitle: "Beachfront rentals", link: "" },
      { title: "Lakeside", subtitle: "Lakehouse rentals", link: "" },
      { title: "Dubai", subtitle: "Villa rentals", link: "" },
      { title: "Birmingham", subtitle: "House rentals", link: "" },
    ],
  },
];

function Inspiration() {
  const [activeTab, setActiveTab] = useState<string | null>("popular");
  console.log(activeTab);
  return (
    <div className="down-section">
      <div className="inspiration-container">
        <h6>Inspiration for future getaways</h6>
      </div>
      <div className="tab-list">
        {Tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`ins-btn tab-links ${
              activeTab === tab.id ? "active" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-wrapper">
        <div className="tab-content" id="popular-country">
          <ul>
            {Contents.find((content) => content.id === activeTab)?.items.map(
              (item) => {
                console.log(item);
                return (
                  <li>
                    <a href="">
                      <p>{item.title}</p>
                      <span>{item.subtitle}</span>
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Inspiration;
