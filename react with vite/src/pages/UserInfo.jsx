import React from "react";
import UserIfoCard from "../components/UserIfoCard";
import { useParams } from "react-router-dom";
import { Users } from "../assets/Data";

export default function UserInfo() {
  let userId = useParams();
  const currentUser = Users.filter((user) => user.id == userId.id);
  return (
    <div>
      <UserIfoCard User={currentUser[0]} />
    </div>
  );
}
