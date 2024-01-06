import { useEffect } from 'react';
import { API_OPTIONS } from '../../utils/constants';
import BrowseHeader from '../BrowseHeader/BrowseHeader';
import './Browse.scss';

const Browse = () => {

    return (
        <div className="browse">
            <BrowseHeader />
        </div>
    )
}

export default Browse;