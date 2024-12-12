import './App.css'
import Card from './components/Card';
// import { data } from './assets/data';
import menu from './assets/data';
function App() {

  return (
    <>

      <div className="all-container">  
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>
        <div className="foods-container">
          {menu.map(({id,title,category,price,img,desc})=> {
            return (<Card 
              key = {id}
              img = {img}
              title = {title}
              category = {category}
              price = {price}
              desc = {desc}

            />)
          })}
        </div>
      </div>
    </>
  );
}

export default App