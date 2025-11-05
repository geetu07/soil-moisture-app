# 🌱 Raspberry Pi Soil Moisture Monitoring App

A smart soil moisture monitoring system built using **Raspberry Pi**, **Soil Moisture Sensor**, and an **ADC converter**.  
The app visually indicates the soil status — **green** when the soil has enough water and **red** when it’s dry.  
Users can upload a plant photo, name it, and set a custom desired moisture level.

---

## 🧩 Features
- Real-time soil moisture monitoring via ADC and Raspberry Pi  
- Visual indicator:
  - 🟢 Green → sufficient moisture  
  - 🔴 Red → dry soil  
- Upload and display plant photo and name  
- Customize the required water level for each plant  
- Simple web/app interface for interaction  

---

## 🪴 Components Used
| Component | Description |
|------------|-------------|
| **Raspberry Pi (any model with GPIO)** | Main controller |
| **Soil Moisture Sensor** | Measures soil water level |
| **ADC (e.g., MCP3008)** | Converts analog sensor data to digital |
| **Jumper Wires** | For connections |
| **Breadboard** | For circuit setup |

---

## ⚙️ Circuit Connections
1. Connect the **Soil Moisture Sensor** output to the **ADC input**.  
2. Connect **ADC** to **Raspberry Pi GPIO** pins.  
3. Power the circuit using the Pi’s 3.3 V and GND pins.  
4. Ensure proper calibration by testing sensor output in dry and wet soil.

---

## 💻 Software Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/soil-moisture-monitor.git
   cd soil-moisture-monitor

