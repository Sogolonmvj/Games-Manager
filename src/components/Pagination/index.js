import { Link } from 'react-router-dom';
import { usePage } from '../../hooks/UsePage';

const Pagination = () => {
    const page = usePage();

    const disabled = (page <= 1) ? 'disabled' : '';

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className={`page-item ${disabled}`}><Link to={`?page=${page-1}`} className="page-link">Previous</Link></li>
                <li className="page-item"><Link to={`?page=${page+1}`}  className="page-link">Next</Link></li>
            </ul>
        </nav>
    )
}

export default Pagination;