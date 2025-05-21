import fs from "fs";
import path from "path";
import rootDir from "../utils/pathUtil.js";

let homeData = path.join(rootDir, "data", "homes.json");


class Home {
  constructor(houseName, price, location, rating, photoUrl) {
  
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    this.id = Math.floor(Math.random()* 1000);
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      fs.writeFile(homeData, JSON.stringify(registeredHomes), (error) => {
  if (error) {
    console.error("Error saving home:", error);
  }
});
    });
  }

  static fetchAll(callback) {
    
    fs.readFile(homeData, (error, data) => {
     
      callback(!error ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === parseInt(homeId));
      callback(homeFound);
    })
  }
  
}

export default Home;
