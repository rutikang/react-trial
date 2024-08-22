// import logo from './logo.svg';
import './App.css';


const data = [
  {fruit : 'mango',
     price : 20,
    desc : "Mangoes are nice " },

    {fruit : 'orange',
      price : 40,
     desc : "Oranges are nice " },

     {fruit : 'apple',
      price : 65,
     desc : "Mangoes are nice " }
];
const food = data.map((frut) =>{
const t_food =  `${frut.fruit} - ${frut.desc}`;
const t_price = frut.price;
  return (
    <>
    <li>{t_food}</li>
    <li>{t_price}</li>
    </>
  )
});

function App() {
return(
  <>
  <ul>
    {food}
  </ul>
  </>
)
  
}

export default App;
