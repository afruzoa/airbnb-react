import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"

const Cards = () => {
    const [icons, setIcons] = useState<any[]>()
    const [rooms, setRooms] = useState<any[]>()
  const getCategories = ()=>{  fetch("http://localhost:3000/api/categories")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log({ data });
   setIcons(data)
      }
    )
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
}
useEffect(()=>{
    getCategories()
},[])
// fetch room data
const getCategoryRooms = (id:number) => {fetch(`http://localhost:3000/api/rooms/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log({ data });
      setRooms (data)
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

    return   (<div>  <div className="category-icon">
      <div className="icon-slider">
        {/* <img
          src="./images/prev.svg"
          alt=""
          className="prev-btn"
          width="16px"
          height="16px"
        /> */}
        <div className="icon-section" id="icon-section">
            {icons?.map((category: { name: string, id: number, iconUrl: string, } ) =>
                 <div key={category.id} className="icon-item" onClick={()=> getCategoryRooms(category.id)}>
              <img
                className="icon"
                src={category.iconUrl}
                alt={category.name}
                width="24"
                height="24"
              />
              <span className="icon-text">{category.name}</span>
            </div>)}
        </div>
        {/* <img
          src="./images/next.svg"
          alt=""
          className="next-btn"
          width="16px"
          height="16px"
        /> */}
        {/* <!-- filter button --> */}
      </div>
    </div>
    {/* // <!--center section  --> */}
    <div className="main-container">
      <div className="main">
        <div className="main-header">Past experiences</div>
        <div className="main-pic" id="main-pic">
            {rooms?.map((room: { name: string, id: number, location: string, pricePerNight:number,images:string } )=>
         <div className="pic-one pics">
              <a href=""
                ><img src={JSON.parse(room.images)[0]} alt="{room.name}" />
                <div className="text">
                  <h5>{room.name}</h5>
                  <p>{room.location}</p>
                  <span>{room.pricePerNight}</span>
                </div>
              </a>
                <button className="share-btn">
                <img src="./images/share.svg" alt="Share" />
              </button>
            </div>)}
        </div>
      </div>
    </div>
    </div>
    )
}

export default Cards