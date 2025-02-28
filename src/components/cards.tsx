import { useEffect, useRef, useState } from "react";
import Filter from "./modals/filter";

const Cards = () => {
  const [icons, setIcons] = useState<any[]>();
  const [rooms, setRooms] = useState<any[]>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const getCategories = () => {
    fetch("http://localhost:3000/api/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIcons(data);
        setSelectedIcon(data[0]?.id);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  // fetch room data
  const getCategoryRooms = (id: number) => {
    fetch(`http://localhost:3000/api/rooms/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setRooms(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    if (selectedIcon) {
      getCategoryRooms(selectedIcon);
    }
  }, [selectedIcon]);
  const openFilter = () => {
    setIsFilterOpen(true);
  };
  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  return (
    <div>
      {" "}
      <div className="category-icon">
        <div className="icon-slider">
          <div
            className="prev-next-btn"
            onClick={() => {
              iconsRef?.current?.scrollBy({
                left: -iconsRef?.current?.clientWidth,
                behavior: "smooth",
              });
            }}
          >
            <img src="src/assets/icon/prev.svg" alt="" className="prev-img" />
          </div>
          <div className="icon-section" ref={iconsRef} id="icon-section">
            {icons?.map(
              (category: { name: string; id: number; iconUrl: string }) => (
                <div
                  key={category.id}
                  className="icon-item"
                  onClick={() => setSelectedIcon(category.id)}
                >
                  <img
                    className="icon"
                    src={category.iconUrl}
                    alt={category.name}
                    width="24"
                    height="24"
                  />
                  <span className="icon-text">{category.name}</span>
                </div>
              )
            )}
          </div>
          <div
            className="prev-next-btn"
            onClick={() => {
              iconsRef?.current?.scrollBy({
                left: iconsRef?.current?.clientWidth,
                behavior: "smooth",
              });
            }}
          >
            <img src="src/assets/icon/next.svg" alt="" className="next-img" />
          </div>
        </div>
        <div className="filter-button" onClick={openFilter}>
          <div className="filter-icon">
            <img
              src="src/assets/icon/filter.svg"
              alt=""
              width="16"
              height="16"
            />
            <span className="filter-text">Filters</span>
          </div>
        </div>
      </div>
      {isFilterOpen && (
        <div className="modal-filter">
          <div className="modal-filter-content">
            <Filter closeFilter={closeFilter} />
          </div>
          <div className="modal-filter-overlay" onClick={closeFilter}></div>
        </div>
      )}
      {/* // <!--center section  --> */}
      <div className="main-container">
        <div className="main">
          <div className="main-header">Past experiences</div>
          <div className="main-pic" id="main-pic">
            {rooms?.map(
              (room: {
                name: string;
                id: number;
                location: string;
                pricePerNight: number;
                images: string;
              }) => (
                <div className="pic-one pics">
                  <a href="">
                    <img src={JSON.parse(room.images)[0]} alt="{room.name}" />
                    <div className="text">
                      <h5>{room.name}</h5>
                      <p>{room.location}</p>
                      <span>{room.pricePerNight}</span>
                    </div>
                  </a>
                  <button className="share-btn">
                    <img src="src/assets/icon/share.svg" alt="Share" />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
