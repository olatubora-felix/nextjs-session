"use client";
import { User } from "@/types/users";
import Link from "next/link";


interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  if (!users?.length) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <p className="text-gray-600">No users found.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <article
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <h2 className="text-lg font-semibold mb-1 text-blue-950">{user.firstName} {user.lastName}</h2>
              <p className="text-sm text-gray-500 mb-2">@{user.username}</p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Phone:</span> {user.phone}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Website:</span> {user.company.name}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-medium">Company:</span> {user.company.name}
              </p>
              <p className="text-xs text-gray-500">
                {user.address.city}, {user.address.address} {user.address.state}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
