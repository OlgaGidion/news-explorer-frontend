const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json()
    .then((json) => {
      throw new Error(json.message);
    })
    .catch((error) => {
      throw error;
    });
};

class NewsApi {
  constructor({ baseUrl, key }) {
    this.baseUrl = baseUrl;
    this.key = key;
  }

  search(query, pageSize, page, from, to) {
    return fetch(`${this.baseUrl}/everything?q=${query}&pageSize=${pageSize}&page=${page}&from=${from}&to=${to}&apiKey=${this.key}`, {
      method: 'GET',
    })
      .then(handleResponse);
  }
}

export default new NewsApi({
  baseUrl: 'https://nomoreparties.co/news/v2',
  key: 'd371bc6a22d7414f9fdb907355ca0801',
});
