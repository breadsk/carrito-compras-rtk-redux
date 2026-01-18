import './ProductList.css'
import { useDispatch , useSelector } from 'react-redux'
import { addItemToCart } from './CartSlice'

const ProductList = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const products = [
        {id:1, name:'Megaman Legends 1', price:50000},
        {id:2, name:'Suikoden 2', price:150000},
        {id:3, name:'Megaman Legends 1', price:50000},
    ];

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    }

  return (
    <div className="product-list">
        <h2 className="product-list-title">Productos</h2>
        <ul className="product-list-items">
            {
                products.map((product) => {
                    return (
                        <li key={product.id} className="product-list-item">
                            <span>{product.name} - ${product.price}</span>
                            <button
                                className={
                                    `add-to-cart-btn 
                                    ${cartItems.some(item => item.id === product.id) ? 'disabled' : ''}`}
                                    onClick={()=> handleAddToCart(product)}
                                    disabled={cartItems.some(item => item.id === product.id)}
                            >Agregar al carrito</button>
                        </li>
                    )
                })
            }
        </ul>
        
    </div>
  )
}

export default ProductList;