//1. Maak een components map in src
//2. Maak een JS bestand met hoofdletters volgens de naam van jouw component
//3. schrijf een functie met hoofdletters die wat HTML returned
//4. schrijf direct de "export regel" voor die functie
//5. importeer jouw eigen component in App.js en geef deze weer al component
//6. Plak de originele HTML in jouw custom component
//7. Bekijk welke data dynamisch moet zijn en bedenk daar property-namen voor. Voeg die ook toe bovenaan de functie
//8. Geef de info door via App.js onder de juiste benamingen.

import React from 'react';
import './App.css';
import Product from './components/Product';
import Button from './components/Button';
import Tile from './components/Tile';

import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';



function App() {
  return (
      <>

      <h1>Handbags & Purses</h1>
      <nav>
          <button disabled={false}onClick={()=> console.log("to the collection")}>
              to the collection
          </button>
          <button disabled={false}onClick={()=> console.log("shop all bags")}>
              shop all bags
          </button>
          <button disabled={true}onClick={()=> console.log("pre-orders")}>
              pre-orders
          </button>
      </nav>
          <main>
              <Product
                  label="Best seller"
                  image={bag1}
                  title="image bag 1"
                  name="The handy bag"
                  price="&euro;400"
              />
              <Product
                  label="Best seller"
                  image={bag2}
                  title="image bag 2"
                  name="TThe stylish bag"
                  price="&euro;250"
              />
              <Product
                  label="Best seller"
                  image={bag3}
                  title="image bag 3"
                  name="The simple bag"
                  price="&euro;300"
              />
              <Product
                  label="Best seller"
                  image={bag4}
                  title="image bag 4"
                  name="The trendy bag"
                  price="&euro;150"
              />

          </main>
          <footer>
              <Tile
                  title={"The Brand"}
                  story={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
                      "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
                      "culpa qui officia deserunt mollit anim id est laborum."}
              />
              <Tile
                  image={brand}
                  text={'The Brand image'}

              />
              <Tile
                  image={story}
                  text={'our story image'}
              />
              <Tile
                  title={"our story"}
                  story={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit " +
                      "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in " +
                      "culpa qui officia deserunt mollit anim id est laborum."}
              />

          </footer>
      </>
  );
}

export default App;



