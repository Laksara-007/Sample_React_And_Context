import React from "react";

export default function UserIfoCard(User) {
  console.log(User);
  return (
    <div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        alt="book"
      />
      <h3>{User.User.name}</h3>
    </div>
  );
}
