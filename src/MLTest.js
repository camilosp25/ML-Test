import {AppRouter} from './routers/AppRouter';
import {ListContext} from './components/ListContext';
import {useState} from 'react';

function MLTest() {

    const [response, setProducts] = useState({});

    return (
        // Context provider para facilitar la comunicacion entre componentes
        <ListContext.Provider value={{
            response,
            setProducts
        }}>

            <AppRouter/>

        </ListContext.Provider>
    );
}

export default MLTest;
