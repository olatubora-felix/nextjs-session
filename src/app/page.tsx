
import { UsersResponse } from "@/types/users";
import UserList from "@/components/users/lists";
import { Metadata } from "next";
import { getUsers } from "./actions/getUsers";
export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};

const page = async ({ searchParams }: PageProps) => {
  const { searchTerm } = await searchParams;
  console.log(searchTerm);
  const users = await getUsers(searchTerm) as UsersResponse;
  return <UserList users={users?.users} />;
};

export default page;



interface PageProps {
  searchParams: Promise<{
    searchTerm: string;
  }>;
}



