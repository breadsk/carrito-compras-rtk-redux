
import ProductList from './Components/ProductList'
import ShoppingCart from './Components/ShoppingCart'
import SuperCoin from './Components/SuperCoin'
import './App.css'

function App() {
  
  return (
    <div>
      <h1 className='app-heading'>Carrito de Compras</h1>
      <ProductList />
      <ShoppingCart />
      <SuperCoin />
    </div>
  )
}

export default App
