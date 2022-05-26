import React from "react";

import { useRouter } from "next/router";
import axios from "axios";

const contact = () => {
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response: any = await axios({
      url: "http://localhost:8080/login",
      method: "post",
      data: {
        email: (document.querySelector("#email") as any).value,
        password: (document.querySelector("#password") as any).value,
      },
    });
    console.log(response);
    // if (response.status === 200) router.push("/user/" + response.data.id);
  };
  return (
    <form
      id="login-form"
      onSubmit={handleSubmit}
      action={process.env.API_URL + "/login"}
      method="POST"
    >
      <input
        type="text"
        id="email"
        name="email"
        value="domingo.castillo@jobandtalent.com"
      ></input>
      Password:
      <input
        type="password"
        id="password"
        name="password"
        value="adminadmin"
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default contact;
