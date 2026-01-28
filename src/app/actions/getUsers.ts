import "server-only";
import { UsersResponse } from "@/types/users";

// Get all users
const getUsers = async (): Promise<UsersResponse> => {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await res.json();
  return data;
};

// Get a user by ID
const getUserById = async (userId: number) => {
  const res = await fetch(`https://dummyjson.com/users/${userId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  const data = await res.json();
  console.log(data);
  return data;
};

export { getUserById, getUsers };
