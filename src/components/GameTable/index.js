import GameRow from '../GameRow';

const GameTable = ({games}) => {
    if(!games?.length) return null;

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th className="d-flex flex-horizontal justify-content-end" scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <GameRow game={game} key={game._id} />
                ))}
            </tbody>
        </table>
    );
}

export default GameTable;