// 1.Начальное состояние
const initialState = {
    user: null,
    cart: [],
    products: []
};

// 2.Подключение store к приложению с помощью провайдера Provider из react-redux. Это делает состояние доступным для всех компонентов.
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// 3.UI-компоненты читают состояние из Redux с помощью useSelector или connect
import { useSelector } from 'react-redux';

function Cart(){
    const cartItems = useSelector(state => state.cart);

    return (
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

// 4.Пользователь взаимодействует с UI
import { useDispatch } from 'react-redux';

function AddToCartButton({product}) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ 
            type: 'ADD_TO_CART', 
            payload: product
        });
    };

    return <button onClick={handleClick}>Add to Cart</button>
}

// 5.Action отправляется в store с помощью dispatch 
// {
//   type: 'ADD_TO_CART',
//   payload: { id: 1, name: 'Laptop' }
// }

// 6.Middleware обрабатывает action, пример с redux-thunk
const fetchProducts = () => {
    return async (dispatch) => {
        const response = await fetch ('/api/products');
        const data = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
    };
};

// 7.Редьюсер обновляет состояние
function cartReducer(state = [], action) {
    switch(action.type){
        case 'ADD_TO_CART': return [...state, action.payload]; // создаем новый массив
        default: return state;
    }
}

// 8.Store уведомляет подписчика
// После обновления состояния store уведомляет всех подписчиков. Компоненты перерисовываются с новыми данными.

// 9.UI обновляется
// Компоненты, которые зависят от состояния Redux, автоматически перерисовываются с  новыми данными.

// 10.Цикл завершен
// Процесс завершён: пользователь взаимодействовал с UI, данные были отправлены в Redux, состояние обновилось, и UI отразил изменения.

// Начальное состояние : Определяется в редьюсерах.
// Подключение store : Store подключается к приложению через Provider.
// Чтение состояния : Компоненты читают состояние с помощью useSelector.
// Пользовательское действие : Пользователь взаимодействует с UI, вызывая dispatch.
// Отправка action : Action отправляется в store.
// Middleware : Middleware может обработать action (например, выполнить запрос к API).
// Обновление состояния : Редьюсер создаёт новое состояние.
// Уведомление подписчиков : Store уведомляет компоненты об изменении состояния.
// Обновление UI : Компоненты перерисовываются с новыми данными.