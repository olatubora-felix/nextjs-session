
import { User, UsersResponse } from "@/types/users";
import UserList from "@/components/users/lists";
import { Metadata } from "next";
import { getUsers } from "./actions/getUsers";
export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};
const page = async () => {
  const users = await getUsers() as UsersResponse;
  return <UserList users={users?.users} />;
};

export default page;
