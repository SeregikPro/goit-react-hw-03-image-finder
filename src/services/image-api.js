import axios from 'axios';

const API_KEY = '27753875-4818926c6f388dfe94d58e19a';
const API_BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = API_BASE_URL;

export async function fetchImages(page) {
  return await axios.get(`${API_BASE_URL}?${searchParams}`);
}

// export default class imageApiService {
//     constructor() {
//         this.KEY = '27753875-4818926c6f388dfe94d58e19a';
//         this.URL = 'https://pixabay.com/api/';
//         this.page = 1;
//         this.searchString = '';
//     }

//     async fetchImages() {
//         const searchParams = new URLSearchParams({
//             key: this.KEY,
//             q: this.searchString,
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: 'true',
//             per_page: 40,
//             page: this.page,
//         });
//         const response = await axios.get(`${this.URL}?${searchParams}`);
//         this.incrementPage();
//         return response.data;
//     }
// }
