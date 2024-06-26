import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import Image from "next/image";
import { LuMoreVertical } from "react-icons/lu";
import { MdOutlineVerified } from "react-icons/md";
import { GoUnverified } from "react-icons/go";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../../../../components/ui/dropdown-menu";
import {
  DeleteUser,
  EditUser,
  MakeAdmin,
  ToggleUserActive,
} from "./UserActions";
import { notFound } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { IUser } from "@/lib/database/models/user.model";
import { imgBaseUrl } from "@/lib/utils";

const UsersTableView = ({ users }: { users: UserType[] }) => {
  if (users.length <= 0) return notFound();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S/N</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Image</TableHead>
          {/* <TableHead>Posts</TableHead> */}
          <TableHead className="w-0">
            <span className="sr-only">Verified</span>
          </TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Action</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, i) => {
          let sn = i + 1;
          return (
            <TableRow key={user.name}>
              <TableCell>{sn}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <div className="size-10 border border-grad-1/20 overflow-hidden rounded-full relative">
                  <Image
                    src={
                      user.imageUrl?.includes("Liquity")
                        ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1717120816/${user.imageUrl}`
                        : (user.imageUrl as string)
                    }
                    fill
                    alt="user"
                    className="object-cover"
                  />
                </div>
              </TableCell>
              {/* <TableCell>{user.posts.length}</TableCell> */}

              {/* <TableCell>
                  {user.isVerified ? (
                    <MdOutlineVerified className="size-6 text-green-600 " />
                  ) : (
                    <GoUnverified className="size-6 text-red-500" />
                  )}
                </TableCell> */}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <>
                      <LuMoreVertical />
                      <span className="sr-only">Action</span>
                    </>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <ToggleUserActive
                      userId={user._id as string}
                      // verify={user.isVerified as boolean}
                    />
                    <EditUser userId={user._id!} />
                    <MakeAdmin
                      userId={user._id!}
                      isAdmin={user?.role === "admin"}
                    />

                    <DropdownMenuSeparator />
                    <DeleteUser userId={user._id!} />
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default UsersTableView;
