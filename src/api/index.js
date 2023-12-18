import {requests} from '../utils/requests';

// endpoints

export const getTrendingMovies = () => requests.get('/trending/all/day');

export const getUpcomingMovies = () => requests.get('/movie/upcoming');

export const getTopRatedMovies = () => requests.get('/movie/top_rated');
