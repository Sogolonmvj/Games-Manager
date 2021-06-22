import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import GameTable from '../../components/GameTable';
import { apiGet } from '../../helpers/api';

const ListGame = () => {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        apiGet('/games').then((response) => {
            setGames(response.data.data);
        });
    }, []);

    console.log(games);

    return (
        <div className="container">
            <h2>Game List</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/game/create" className="btn btn-primary">Create</Link>
            </div>
            <GameTable games={games} />
        </div>
    )
};

export default ListGame;