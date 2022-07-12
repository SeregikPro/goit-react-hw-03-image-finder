import axios from 'axios';

const API_KEY = '27753875-4818926c6f388dfe94d58e19a';
const API_BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = API_BASE_URL;

export async function fetchImages(searchParams, page) {
  const response = await axios.get(
    `/?q=${searchParams}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}
