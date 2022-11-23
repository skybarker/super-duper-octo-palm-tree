import { useEffect, useState } from "react";
import apiService from "../services/api.service";

export default function useFetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiService.getAllUsers().then((users) => setUsers(users));
  }, []);

  return users;
}
