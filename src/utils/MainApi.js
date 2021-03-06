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

class MainApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
    this.headers = {
      'content-type': 'application/json',
    };
  }

  setToken(token) {
    if (!token) {
      this.headersWithAuth = undefined;
      return;
    }

    this.headersWithAuth = {
      ...this.headers,
      authorization: `Bearer ${token}`,
    };
  }

  register(email, password, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password, name }),
    })
      .then(handleResponse);
  }

  login(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    })
      .then(handleResponse);
  }

  getMyUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headersWithAuth,
    })
      .then(handleResponse);
  }

  getMyArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: this.headersWithAuth,
    })
      .then(handleResponse);
  }

  saveArticle(keyword, title, description, date, source, link, image) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: this.headersWithAuth,
      body: JSON.stringify({ keyword, title, description, date, source, link, image }),
    })
      .then(handleResponse);
  }

  unsaveArticle(articleId) {
    return fetch(`${this.baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: this.headersWithAuth,
    })
      .then(handleResponse);
  }
}

export default new MainApi({
  baseUrl: 'https://api.munich.students.nomoreparties.xyz',
});
