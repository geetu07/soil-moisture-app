const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

let plant = {
  id: 1,
  name: "Aloe Vera",
  title: "Healing Plant",
  image: "",
  status: 1, // 1 = healthy, 0 = needs water
};

// Fetch digital moisture status from Pi
async function fetchMoisture() {
  console.log("fetchMoisture called");
  try {
    const response = await fetch("http://192.168.94.232:5000/moisture");
    if (!response.ok) throw new Error("Failed to fetch from Pi");
    const data = await response.json();

    // Example: threshold 3000
    plant.status = data.moisture=="Dry" ? 0 : 1;

    console.log("Digital status:", plant.status);
  } catch (err) {
    console.error("Error fetching moisture:", err.message);
  }
}

// Poll Raspberry Pi every 8s
setInterval(fetchMoisture, 4000);

// GET plant
app.get("/api/plant", (req, res) => {
  res.json(plant);
});

// UPDATE plant (edit name, image, title only)
app.put("/api/plant", (req, res) => {
  plant = { ...plant, ...req.body };
  res.json(plant);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
});
