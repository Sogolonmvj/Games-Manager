import {useLocation} from 'react-router-dom';

export const usePage = () => {
    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const page = Number(query.get('page'));
    return isNaN(page) ? 1: page;
}