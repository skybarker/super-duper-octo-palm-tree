const BASE_URL = "http://localhost:3001/users";

export default {
  async getAllUsers() {
    const response = await fetch(BASE_URL);

    return response.json();
  },
};
