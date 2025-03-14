import sqlite3 from "sqlite3";
import { open } from "sqlite";

// آرایه categories
const categories = [
  {
    name: "Countryside",
    iconUrl: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
  },
  {
    name: "Icon",
    iconUrl: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png",
  },
  {
    name: "Treehouses",
    iconUrl: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
  },
  {
    name: "Cabins",
    iconUrl: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
  },
  {
    name: "Amazing views",
    iconUrl: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    name: "Farms",
    iconUrl: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
  },
  {
    name: "Ski in/out",
    iconUrl: "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
  },
  {
    name: "Beachfront",
    iconUrl: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
  },
  {
    name: "Lakefront",
    iconUrl: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
  },
  {
    name: "OMG!",
    iconUrl: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
  },
  {
    name: "Amazing pool",
    iconUrl: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
  },
  {
    name: "Castles",
    iconUrl: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
  },
  {
    name: "Tiny homes",
    iconUrl: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
  },
  {
    name: "Off the grid",
    iconUrl: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
  },
  {
    name: "Trending",
    iconUrl: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
  },
  {
    name: "Domes",
    iconUrl: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
  },
  {
    name: "Luxe",
    iconUrl: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
  },
  {
    name: "Boats",
    iconUrl: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
  },
  {
    name: "Design",
    iconUrl: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
  },
  {
    name: "play",
    iconUrl: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
  },
  {
    name: "Caves",
    iconUrl: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
  },
  {
    name: "Rooms",
    iconUrl: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
  },
  {
    name: "Yurts",
    iconUrl: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
  },
  {
    name: "Arctic",
    iconUrl: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
  },
  {
    name: "Camping",
    iconUrl: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
  },
  {
    name: "Trulli",
    iconUrl: "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg",
  },
];

// آرایه rooms
const rooms = [
  {
    name: "Ocean View Suite",
    location: "Miami Beach, FL",
    pricePerNight: 200,
    images: [
      "",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51879539/original/0eb819e1-1805-4bb8-b93e-20a97e8aec02.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/1bda2679-cb38-4229-8354-407b828bf176.jpg?im_w=320",
    ],
  },
  {
    name: "Mountain Cabin",
    location: "Aspen, CO",
    pricePerNight: 150,
    images: [
      "https://a0.muscache.com/im/pictures/2e8dfff3-91c0-43f9-9e0e-d1c67057839e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/2e5550b5-628f-46a6-ae3b-93495384c15e.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/3a6a8b43-770d-4d1a-abc5-a98ecdbecbc8.jpg?im_w=720",
    ],
  },
  {
    name: "City Apartment",
    location: "New York, NY",
    pricePerNight: 300,
    images: ["https://a0.muscache.com/im/pictures/4cdc7dda-72a4-4fa3-b48c-3702b9a158e5.jpg?im_w=720"],
  },
  {
    name: "Lakefront Cottage",
    location: "Lake Tahoe, CA",
    pricePerNight: 180,
    images: ["https://a0.muscache.com/im/pictures/4f63e9c6-80d7-4799-a6c3-e6b2ccd6c3d5.jpg?im_w=320"],
  },
  {
    name: "Luxury Villa",
    location: "Beverly Hills, CA",
    pricePerNight: 500,
    images: ["https://a0.muscache.com/im/pictures/5c6666b3-2acf-49f2-8f68-7e4f100ab51e.jpg?im_w=320", "https://a0.muscache.com/im/pictures/8ea6c209-5d07-46a5-a623-ec371afd5327.jpg?im_w=320"],
  },
  {
    name: "Desert Retreat",
    location: "Sedona, AZ",
    pricePerNight: 120,
    images: [
      "https://a0.muscache.com/im/pictures/337fe2b7-417a-4784-a77b-26f4f19c6147.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/369f9a41-ed52-4938-97d6-5117781074fb.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/938a0c69-131e-4f30-a149-65f2b3cf463b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/4154c8da-2eeb-4ec4-bb19-2af4e1fe5a4b.jpg?im_w=320",
    ],
  },
  {
    name: "Beach Bungalow",
    location: "Honolulu, HI",
    pricePerNight: 250,
    images: ["https://a0.muscache.com/im/pictures/126898ec-9379-40f9-b116-5ed91deae5b2.jpg?im_w=720", "https://a0.muscache.com/im/pictures/a7c89410-007e-4509-b9eb-92026296b9ec.jpg?im_w=720"],
  },
  {
    name: "Ski Chalet",
    location: "Park City, UT",
    pricePerNight: 300,
    images: ["https://a0.muscache.com/im/pictures/a476e60a-225d-4320-8441-d82edaa21a88.jpg?im_w=320", "https://a0.muscache.com/im/pictures/aea8e8e8-ea18-4feb-82db-63e6612e8654.jpg?im_w=720"],
  },
  {
    name: "Historic Inn",
    location: "Charleston, SC",
    pricePerNight: 140,
    images: ["https://a0.muscache.com/im/pictures/b4e2cafe-c447-4a27-88fc-47d5a49806ce.jpg?im_w=720", "https://a0.muscache.com/im/pictures/c44cff6b-2c87-44aa-8136-d38dd75fd12c.jpg?im_w=720"],
  },
  {
    name: "Countryside Cottage",
    location: "Napa Valley, CA",
    pricePerNight: 160,
    images: ["https://a0.muscache.com/im/pictures/d2ea272b-2dd2-4d4d-b589-fb6713f96a62.jpg?im_w=720", "https://a0.muscache.com/im/pictures/d1886c93-f52f-46cd-8f05-4264c8a8de52.jpg?im_w=720"],
  },
  {
    name: "Modern Loft",
    location: "Seattle, WA",
    pricePerNight: 220,
    images: ["https://a0.muscache.com/im/pictures/ed353366-3046-4bc6-b36e-8239c1e48b46.jpg?im_w=320", "https://a0.muscache.com/im/pictures/efa4e407-602a-45f7-8a33-c3aed3912538.jpg?im_w=320"],
  },
  {
    name: "Rustic Barn",
    location: "Lancaster, PA",
    pricePerNight: 100,
    images: ["https://a0.muscache.com/im/pictures/f9489521-4498-4247-8e7c-bc48e1b957c6.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720&im_format=avif&im_origin=fuzzy"],
  },
  {
    name: "Ocean View Suite",
    location: "Miami Beach, FL",
    pricePerNight: 200,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-33646460/original/9ce19074-d960-4043-af31-f04c78bc8156.jpeg?im_w=320",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33646460/original/43a927ab-3cae-4080-9a17-33c57933ae57.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33646460/original/44c71b36-bee6-4fd6-8b2f-7095526fd8b5.png?im_w=320",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33646460/original/af8c6463-e5a2-4be9-9d0c-4e481cbb4d72.jpeg?im_w=320",
    ],
  },
  {
    name: "Mountain Cabin",
    location: "Aspen, CO",
    pricePerNight: 150,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-33646460/original/ef1ca819-b11c-4394-a7ef-0a3639a911e0.jpeg?im_w=480",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33646460/original/fb1be0ef-1352-4d02-86eb-6febc06836ff.jpeg?im_w=320",
      "https://a0.muscache.com/im/pictures/miso/Hosting-33737136/original/90778d03-5460-4e3a-bbb8-1d8d6fa08c1d.jpeg?im_w=320",
    ],
  },
  {
    name: "City Apartment",
    location: "New York, NY",
    pricePerNight: 300,
    images: ["https://a0.muscache.com/im/pictures/miso/Hosting-43919214/original/91abf5ed-1c65-4e7c-a0a6-de094d7919b9.jpeg?im_w=320"],
  },
  {
    name: "Lakefront Cottage",
    location: "Lake Tahoe, CA",
    pricePerNight: 180,
    images: ["https://a0.muscache.com/im/pictures/miso/Hosting-45730789/original/43ce5b2a-d459-4438-8ab0-b059af8b37e5.jpeg?im_w=720"],
  },
  {
    name: "Luxury Villa",
    location: "Beverly Hills, CA",
    pricePerNight: 500,
    images: ["https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720&im_format=avif&im_origin=fuzzy", "public/images/2-main.avif"],
  },
  {
    name: "Desert Retreat",
    location: "Sedona, AZ",
    pricePerNight: 120,
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-48926265/original/a27a68b1-c176-4a92-879f-271f0b58853d.jpeg?im_w=320",
      "https://a0.muscache.com/im/pictures/miso/Hosting-48926265/original/e494ff95-39bd-4529-92cc-d4455d9b79e9.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-49240684/original/4c30fb2d-8ea7-4542-ab95-4a853a9cf88b.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-54009931/original/2e9b4898-beb1-42a3-af5c-81178e41353a.jpeg?im_w=320",
    ],
  },
  {
    name: "Beach Bungalow",
    location: "Honolulu, HI",
    pricePerNight: 250,
    images: ["https://a0.muscache.com/im/pictures/miso/Hosting-853362041301927730/original/3a28594a-4c7a-45f6-82c1-8cf36103e8b6.jpeg?im_w=320", "https://a0.muscache.com/im/pictures/miso/Hosting-879438456671125017/original/00d370e6-d26a-4208-ad5f-85e0117242bb.jpeg?im_w=720"],
  },
  {
    name: "Ski Chalet",
    location: "Park City, UT",
    pricePerNight: 300,
    images: ["https://a0.muscache.com/im/pictures/miso/Hosting-879438456671125017/original/fe964f16-b8ee-447c-902b-76e1b381d13a.jpeg?im_w=720"],
  },
  {
    name: "Historic Inn",
    location: "Charleston, SC",
    pricePerNight: 140,
    images: ["https://a0.muscache.com/im/pictures/miso/Hosting-902615523412896574/original/824b6334-2649-4d9e-8b8d-ebec396cb7de.jpeg?im_w=720"],
  },
  {
    name: "Countryside Cottage",
    location: "Napa Valley, CA",
    pricePerNight: 160,
    images: ["https://a0.muscache.com/im/pictures/miso/Hosting-911346293170903022/original/114034a5-ee38-4aa3-8fb5-6d897dd31c23.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-902830602299927301/original/12f15679-1601-4e35-af3d-fd6396091264.jpeg?im_w=720"],
  },
  {
    name: "Modern Loft",
    location: "Seattle, WA",
    pricePerNight: 220,
    images: ["https://a0.muscache.com/im/pictures/airflow/Hosting-12224736/original/58f5a809-225b-4648-a940-df967b48cf1d.jpg?im_w=720", "https://a0.muscache.com/im/pictures/airflow/Hosting-894648105013245173/original/6de6f358-a026-4215-97e7-331d453a0fb0.jpg?im_w=1200"],
  },
  {
    name: "Rustic Barn",
    location: "Lancaster, PA",
    pricePerNight: 100,
    images: ["https://a0.muscache.com/im/pictures/miso/Hosting-33646460/original/fb1be0ef-1352-4d02-86eb-6febc06836ff.jpeg?im_w=320", "https://a0.muscache.com/im/pictures/22533822/c445bd79_original.jpg?im_w=720"],
  },
];

// Create categories table
const createCategoriesTable = async (db) => {
  const tableExists = await db.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='categories';`
  );

  if (!tableExists) {
    await db.run(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        iconUrl TEXT NOT NULL
      );
    `);
    console.log("Categories table created.");
  }
};

// Create rooms table
const createRoomsTable = async (db) => {
  const tableExists = await db.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='rooms';`
  );

  if (!tableExists) {
    await db.run(`
      CREATE TABLE IF NOT EXISTS rooms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        location TEXT,
        pricePerNight INTEGER NOT NULL,
        images TEXT
      );
    `);
    console.log("Rooms table created.");
  }
};

// Create room_categories table
const createRoomCategoriesTable = async (db) => {
  const tableExists = await db.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='room_categories';`
  );

  if (!tableExists) {
    await db.run(`
      CREATE TABLE IF NOT EXISTS room_categories (
        room_id INTEGER,
        category_id INTEGER,
        FOREIGN KEY (room_id) REFERENCES rooms(id),
        FOREIGN KEY (category_id) REFERENCES categories(id),
        PRIMARY KEY (room_id, category_id)
      );
    `);
    console.log("Room categories table created.");
  }
};

// Open the database connection
const openDb = async () => {
  try {
    const db = await open({
      filename: "./database.db",
      driver: sqlite3.Database,
    });
    console.log("Connected to the database.");
    return db;
  } catch (err) {
    console.error("Failed to connect to the database:", err.message);
    process.exit(1);
  }
};

// Seed categories (insert or update)
const seedCategories = async (db) => {
  for (const category of categories) {
    try {
      const exists = await db.get(`SELECT id FROM categories WHERE name = ?`, [category.name]);
      if (exists) {
        await db.run(`UPDATE categories SET iconUrl = ? WHERE id = ?`, [
          category.iconUrl,
          exists.id,
        ]);
        console.log(`Category "${category.name}" updated.`);
      } else {
        await db.run(`INSERT INTO categories (name, iconUrl) VALUES (?, ?)`, [
          category.name,
          category.iconUrl,
        ]);
        console.log(`Category "${category.name}" added.`);
      }
    } catch (err) {
      console.error(`Error processing category "${category.name}":`, err.message);
    }
  }
};

// Seed rooms (insert or update)
const seedRooms = async (db) => {
  const uniqueRooms = Array.from(
    new Map(rooms.map((room) => [`${room.name}-${room.location}`, room])).values()
  );

  for (const room of uniqueRooms) {
    try {
      const filteredImages = room.images.filter((img) => img !== "");
      const exists = await db.get(`SELECT id FROM rooms WHERE name = ? AND location = ?`, [
        room.name,
        room.location,
      ]);
      if (exists) {
        await db.run(
          `UPDATE rooms SET pricePerNight = ?, images = ? WHERE id = ?`,
          [room.pricePerNight, JSON.stringify(filteredImages), exists.id]
        );
        console.log(`Room "${room.name}" updated.`);
      } else {
        await db.run(
          `INSERT INTO rooms (name, location, pricePerNight, images) VALUES (?, ?, ?, ?)`,
          [room.name, room.location, room.pricePerNight, JSON.stringify(filteredImages)]
        );
        console.log(`Room "${room.name}" added.`);
      }
    } catch (err) {
      console.error(`Error processing room "${room.name}":`, err.message);
    }
  }
};

// Seed room_categories (randomly assign rooms to categories)
const seedRoomCategories = async (db) => {
  const rooms = await db.all(`SELECT id FROM rooms`);
  const categories = await db.all(`SELECT id FROM categories`);

  if (rooms.length === 0 || categories.length === 0) {
    console.error(
      "Cannot assign room categories: Ensure both rooms and categories exist."
    );
    return;
  }

  for (const room of rooms) {
    await db.run(`DELETE FROM room_categories WHERE room_id = ?`, [room.id]);
    const numberOfCategories = Math.floor(Math.random() * 4) + 1;
    const shuffledCategories = categories.sort(() => Math.random() - 0.5);
    const selectedCategories = shuffledCategories.slice(0, numberOfCategories);

    for (const category of selectedCategories) {
      await db.run(
        `INSERT INTO room_categories (room_id, category_id) VALUES (?, ?)`,
        [room.id, category.id]
      );
      console.log(`Room ${room.id} assigned to category ${category.id}.`);
    }
  }
};

// Main function to run seeding
const main = async () => {
  const db = await openDb();

  try {
    await createCategoriesTable(db);
    await createRoomsTable(db);
    await createRoomCategoriesTable(db);

    await seedCategories(db);
    await seedRooms(db);
    await seedRoomCategories(db);
  } catch (err) {
    console.error("Error during seeding:", err.message);
  } finally {
    await db.close();
    console.log("Database connection closed.");
  }
};

main();