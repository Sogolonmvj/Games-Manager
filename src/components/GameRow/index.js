import { Link } from 'react-router-dom';

const GameRow = ({game}) => {
    return (
            <tr>
                <td className="col-md-6">{game.title}</td>
                <td className="d-flex flex-horizontal justify-content-end">
                    <Link to={`/game/edit/${game._id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                    <Link to={`/game/edit/${game._id}`} className="btn btn-danger btn-sm me-2">Delete</Link>
                </td>
            </tr>
    );
}

export default GameRow;