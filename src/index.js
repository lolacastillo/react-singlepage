import ReactDOM from 'react-dom/client';
import Character from './components/List'

function App(){
    return (<div>
        <h1>Rick and Morty</h1>
            <h2>Characters</h2>
            <Character />
            <Character />
</div>
    );
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App/>);