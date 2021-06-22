import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import GameTable from '../../components/GameTable';
import { apiGet } from '../../helpers/api';
import { usePage } from '../../hooks/UsePage/index';

const ListGame = () => {
    const [games, setGames] = useState([]);
    const page = usePage();
    
    useEffect(() => {
        apiGet(`/games?page=${page}`).then((response) => {
            setGames(response.data.data);
        });
    }, [page]);

    console.log(games);

    return (
        <div className="container">
            <h2>Game List</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/game/create" className="btn btn-primary">Create</Link>
            </div>
            <GameTable games={games} />
            <Pagination />
        </div>
    )
};

export default ListGame;