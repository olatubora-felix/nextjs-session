import { User } from "@/types/users";
import Link from "next/link";

interface UserDetailsProps {
  user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4"
      >
        <span className="mr-1">←</span> Back to users
      </Link>

      <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <header className="mb-4">
          <h1 className="text-3xl font-bold text-blue-950 mb-1">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 mb-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Contact
            </h2>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Website:</span>{" "}
              <a
                href={`https://${user.company.name}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {user.company.name}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Company
            </h2>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Name:</span> {user.company.name}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Catch phrase:</span>{" "}
              {user.company.title}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Business:</span> {user.company.department}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Address
          </h2>
          <p className="text-sm text-gray-700 mb-1">
            {user.address.address} {user.company.address.address}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            {user.address.city}, {user.address.postalCode}
          </p>
        </section>
      </article>
    </div>
  );
};

export default UserDetails;

