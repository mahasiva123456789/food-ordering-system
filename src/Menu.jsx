import React, { useState } from 'react';
import './Menu.css';
import Header from './components/Header';
import imageSrc from './menu.png';
import imageSrc1 from './foodtag green.png'
import img1 from './Dosa.avif'
import img2 from './Icecream.avif'
import img3 from './Noodles.avif'
import img4 from './Pureveg.avif'
import img5 from './southIndia.avif'
import img6 from './Pizza.avif'
import img7 from './Cakes.avif'
import img8 from './Burger.avif'
import food1 from './Dosa2.avif'
import food2 from './puttu.avif'
import food3 from './eggbiriyani.avif'
import food4 from  './Biriyani.avif'
import food5 from'./idly.avif'
import food6 from './muttonbiriyani.avif'
import food7 from './piz.jpg'
import food11 from'./bu.jpg'
import food12 from './Vegmeal.avif'
import axios from 'axios';


const Menu = () => {
  
  const [items, setItems] = useState([
    { name: "Idly", price: 10 },
    { name: "Dhosa", price: 50 },
    { name: "Puttu", price: 70 },
    { name: "Egg Biriyani", price: 110 },
    { name: "Chicken Biriyani", price: 140 },
    { name: "Mutton Biriyani", price: 220 },
    { name: "Burger", price: 90 },
    { name: "Veg Roll", price: 80 },
    { name: "Pizza", price: 150 },
    { name: "Chicken Fry", price: 100 },
    { name: "Chiken Fried Rice", price: 90 },
    { name: "chiken Noodles", price: 80 },
    { name: "Chocolate", price: 100 },
    { name: "Sundae", price: 200 },
    { name: "Cone", price: 50 },
    { name: "Paneer Tikka", price: 200 },
    { name: "Chole Bhature", price: 120 },
    { name: "Butter Chicken", price: 250 },
    { name: "Fruit cake", price: 1010 },
    { name: "Chocolate cake", price: 900 },
    { name: "Black Forest", price: 896 }
  ]);

  const [cartItemCount, setCartItemCount] = useState(0);

  const handleClick = async (itemName, itemPrice) => {
    try {
      await axios.post('http://localhost:5000/items', { name: itemName, price: itemPrice });
      alert('Item added to cart successfully');
      setCartItemCount(prevCount => prevCount + 1);
    } catch (error) {
      alert('Failed to add item');
    }
  };

  return (
    <>
        <Header cartItemCount={cartItemCount} />
      <div id='backgroundmenu'>
        <img src={imageSrc} alt="Your Image" />
      </div>
      <div id='menulist1'>
        <a href="#break"><img src={img1} alt="Dosa" /></a>
        <a href="#ice"><img src={img2} alt="Icecream" /></a>
        <a href="#chicken"><img src={img3} alt="Noodles" /></a>
        <a href="#vegies"><img src={img4} alt="Pureveg" /></a>
        <a href="#break"><img src={img5} alt="South India" /></a>
        <a href="#vegies"><img src={img6} alt="Pizza" /></a>
        <a href="#cakes"><img src={img7} alt="Cakes" /></a>
        <a href="#vegies"><img src={img8} alt="Burger" /></a>
      </div>
      <div id='categoryname'><p>CATEGORIES</p></div>
      <div id='categorybody'>
        <div id='cbodyleft'>
            <div className='cleftnames'><a href="#break"><h1>BreakFast</h1></a></div>
            <div className='cleftnames'> <a href="#biriyani"><h1>Biriyani</h1></a></div>
            <div className='cleftnames'><a href="#vegies" ><h1>Veg Items</h1></a></div>
            <div className='cleftnames'><a href="#chicken"><h1>Chicken Items</h1></a></div>
            <div className='cleftnames'><a href="#ice"><h1>Ice Creams</h1></a></div>
            <div className='cleftnames'><a href="#cakes"><h1>Cakes</h1></a></div>
            <div className='cleftnames'><a href="#north"><h1>North Indian</h1></a></div>
        </div>
        <div id='cbodyright' >
         <div className='categorynames'  id='break'><p>BREAKFAST</p></div>


          {/* 1st row of the food menu */}
            <div className='crightfoodcontainer'>
               <div className='crightfood'> 
                  <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                  </div>
                <div className='crightfoodimg'>
                  <img src={food5} alt="" />
                </div>
                {items.slice(0,1).map((item, index) => (
                <div key={index}>
               <h2>{item.name}</h2>  
               <h3><del>₹20</del> ₹{item.price} </h3>
                <h4>5% OFF</h4>
                 <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
               </div>
               ))}
               </div>

              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food1} alt="" />
                </div>
                {items.slice(1,2).map((item, index) => (
                <div key={index}>
               <h2>{item.name}</h2>  
               <h3><del>₹80</del> ₹{item.price} </h3>
                <h4>10% OFF</h4>
                 <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
               </div> 
              ))}
              </div>

              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src={food2} alt="" />
                </div>               
                {items.slice(2,3).map((item, index) => (
                <div key={index}>
               <h2>{item.name}</h2>  
               <h3><del>₹100</del> ₹{item.price} </h3>
                <h4>50% OFF</h4>    
                 <button  className='addfoodbtn' id='biriyani'  onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
               </div> 
              ))}
              </div>
             </div>

           {/* second row */}
           <div className='categorynames'  ><p>BIRIYANI</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food3} alt="" />
                </div>
                
                {items.slice(3, 4).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹120</del> ₹{item.price}</h3>
            <h4>5% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
             </div>
            ))}
              </div>

              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food4} alt="" />
                </div>
                {items.slice(4, 5).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹150</del> ₹{item.price}</h3>
            <h4>15% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
           </div>
            ))}
             </div>


              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src={food6} alt="" />
                </div>               
                {items.slice(5, 6).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹270</del> ₹{item.price}</h3>
            <h4>50% OFF</h4>
            <button className='addfoodbtn' id='vegies' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
           </div>
          ))}
              </div>
           </div> 


           {/* third row */}
            <div className='categorynames'  ><p>VEG ITEMS</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food11} alt="" />
                </div>
                {items.slice(6, 7).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹100</del> ₹{item.price}</h3>
            <h4>10% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
          </div>
        ))}
              </div>
              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food12} alt="" />
                </div>
                {items.slice(7, 8).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹90</del> ₹{item.price}</h3>
            <h4>30% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
          </div>
             ))}
              </div>

              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src={food7} alt="" />
                </div>
                {items.slice(8, 9).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹199</del> ₹{item.price}</h3>
            <h4>50% OFF</h4>
            <button className='addfoodbtn' id='chicken' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
          </div>
        ))}
              </div>
           
            </div>


            {/* fourth row */}
            <div className='categorynames'><p>CHICKEN ITEMS</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                {items.slice(9, 10).map((item, index) => (
              <div key={index}>
               <h2>{item.name}</h2> 
               <h3><del>₹110</del> ₹{item.price}</h3>
              <h4>10% OFF</h4>
              <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
            </div>
           ))}
              </div>

              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnopnhq0Y95Js15_7RpsBnS0iVk4ZWLM1I6Q&s" alt="" />
                </div>
                {items.slice(10, 11).map((item, index) => (
              <div key={index}>
               <h2>{item.name}</h2> 
              <h3><del>₹110</del> ₹{item.price}</h3>
            <h4>10% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
            </div>
             ))}
              </div>


              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCLkRqqay4hvOxR2zPu_jYOjUqCpADeyJRQ&s" alt="" />
                </div>              
                {items.slice(11, 12).map((item, index) => (
             <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹120</del> ₹{item.price}</h3>
            <h4>40% OFF</h4>
            <button className='addfoodbtn' id='ice' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
            </div>
             ))}
              </div>
           </div>

           {/* fifth row */}
           <div className='categorynames'><p>ICE CREAM</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsqrkspG2SfrwLJGcuJWcEoqrcaIdmnhC2A&s" alt="" />
                </div>
                {items.slice(12, 13).map((item, index) => (
              <div key={index}>
               <h2>{item.name}</h2> 
               <h3><del>₹110</del> ₹{item.price}</h3>
              <h4>10% OFF</h4>
              <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
            </div>
           ))}
              </div>

              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src="https://img.freepik.com/premium-photo/ice-cream-sundae-with-hot-fudge-nuts-generative-ai_887552-793.jpg" alt="" />
                </div>
                {items.slice(13, 14).map((item, index) => (
              <div key={index}>
               <h2>{item.name}</h2> 
              <h3><del>₹110</del> ₹{item.price}</h3>
            <h4>10% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
            </div>
             ))}
              </div>


              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src="https://img.freepik.com/premium-photo/ice-cream-cones-with-fruit-them_777078-69950.jpg?w=360" alt="" />
                </div>              
                {items.slice(14, 15).map((item, index) => (
             <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹120</del> ₹{item.price}</h3>
            <h4>40% OFF</h4>
            <button className='addfoodbtn' id='north' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
            </div>
             ))}
            
           </div>
           </div>

             {/* seventh row */}
             <div className='categorynames'><p>NORTH INDIAN</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rCqnqaM5jp_4G-E5lmCQWGl1cxvgfdJSxg&s" alt="" />
                </div>
                
                {items.slice(15, 16).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹120</del> ₹{item.price}</h3>
            <h4>5% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
             </div>
            ))}
              </div>

              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src="https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg" alt="" />
                </div>
                {items.slice(16, 17).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹150</del> ₹{item.price}</h3>
            <h4>15% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
           </div>
            ))}
             </div>


              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src="https://images.sbs.com.au/dims4/default/e705f54/2147483647/strip/true/crop/5556x3125+0+140/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2F99%2F41%2Fc115d56742dcaa822a1d61d5ed61%2Fgettyimages-1277362334.jpg" alt="" />
                </div>               
                {items.slice(17, 18).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹270</del> ₹{item.price}</h3>
            <h4>50% OFF</h4>
            <button className='addfoodbtn' id='cakes' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
           </div>
          ))}
              </div>
           </div> 
          
           {/* eight row */}
           <div className='categorynames'><p>CAKES</p></div>
            <div className='crightfoodcontainer'>
              <div className='crightfood'> 
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src="https://nourishingamy.com/wp-content/uploads/2021/04/vegan-fruit-cake-7.jpg" alt="" />
                </div>
                
                {items.slice(17, 18).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹1100</del> ₹{item.price}</h3>
            <h4>20% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
             </div>
            ))}
              </div>

              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                </div>
                <div className='crightfoodimg'>
                  <img src="https://thekatetin.com/wp-content/uploads/2017/11/20171108-IMG_0002WEB-2.jpg" alt="" />
                </div>
                {items.slice(18, 19).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹1000</del> ₹{item.price}</h3>
            <h4>15% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
           </div>
            ))}
             </div>


              <div className='crightfood'>
                <div className="icon-with-text"> 
                  <img src={imageSrc1} alt="Veg Icon" />
                  <h5>INDIAN</h5>
                 </div>
                <div className='crightfoodimg'>
                  <img src="https://www.bigbasket.com/media/uploads/recipe/w-l/3392_1_1.jpg" alt="" />
                </div>               
                {items.slice(19, 20).map((item, index) => (
           <div key={index}>
            <h2>{item.name}</h2> 
            <h3><del>₹986</del> ₹{item.price}</h3>
            <h4>10% OFF</h4>
            <button className='addfoodbtn' onClick={() => handleClick(item.name, item.price)}>Add to Cart</button>
           </div>
          ))}
              </div>
           </div> 


           </div>   
      </div>
    </>
  );
};

export default Menu;


