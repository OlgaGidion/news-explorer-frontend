const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`Ошибка: ${res.status} ${res.statusText}`));
};

class NewsApi {
  constructor({ baseUrl, key }) {
    this.baseUrl = baseUrl;
    this.key = key;
  }

  search(query, pageSize, page) {
    return fetch(`${this.baseUrl}/everything?q=${query}&pageSize=${pageSize}&page=${page}&apiKey=${this.key}`, {
      method: 'GET',
    })
      .then(handleResponse);
  }
}

export default new NewsApi({
  baseUrl: 'https://newsapi.org/v2',
  key: 'd371bc6a22d7414f9fdb907355ca0801',
});
