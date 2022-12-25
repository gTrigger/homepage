import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { Homepage } from 'pages/Homepage'
import { NotFound } from 'pages/NotFound'
import { Layout } from 'components/Layout'
import { createStore } from 'redux';
import reducer from 'store/reducer'

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </Provider>
    );
}

export const store = createStore(reducer);
export default App;
