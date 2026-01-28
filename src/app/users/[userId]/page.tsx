
import { getUserById } from "@/app/actions/getUsers";
import UserDetails from "@/components/users/userDetials";
import { User } from "@/types/users";

interface PageProps {
  params: Promise<{
    userId: string;
  }>;
}

const UserPage = async ({ params }: PageProps) => {
  const { userId } = await params;
  const user = await getUserById(Number(userId)) as User;
  console.log(user);
  return <UserDetails user={user} />;
};

export default UserPage;