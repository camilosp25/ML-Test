import {AppRouter} from "./routers/AppRouter";
import {UserContext} from "./components/UserContext";
import {useState} from "react";

function MLTest() {

    const [response, setProducts] = useState({});

    return (
        <UserContext.Provider value={{
            response,
            setProducts
        }}>

            <AppRouter />

        </UserContext.Provider>
    );
}

export default MLTest;
