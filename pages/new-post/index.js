import React from "react";

import classes from "./Contact.module.sass";

import info from "../assets/database/info";
import axios from "axios";

const contact = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector("#form-post"));

    axios({
      url: "http://localhost:8080/post",
      method: "post",
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTMyMzA1NjEsImRhdGEiOnsiaWQiOiJkOGMzNTU3MC0zNGEzLTRlYTctODBiMS1hMTRkNjYxODhiNDkiLCJuYW1lIjoicmVxLmJvZHkubmFtZS4iLCJzdXJuYW1lIjoicmVxLmJvZHkuc3VybmFtZSIsImVtYWlsIjoiZG9taW5nby5jYXN0aWxsb0Bqb2JhbmR0YWxlbnQuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkZ0JjQkdvUmk0RnFkaEU3Sm9qRUw0LjIyR3M1azYyQVpBYlJQMjdKeENFd0FJUS5RdDZzcm0iLCJwaG9uZSI6IjAwMzQ2ODg5MDE1MDciLCJhZGRyZXNzIjoicmVxLmJvZHkuYWRkcmVzcyIsInJvbGUiOiJ3b3JrZXIifSwiaWF0IjoxNjUzMjI2OTYxfQ.gg_5fHbRJ0jO-WgXCsTrE6ZjGLZlM72J4ka2s7ErV-Q",
      },
      data: formData,
    });
  };
  return (
    <form id="form-post" onSubmit={handleSubmit}>
      <label for="title">Title:</label>
      <input type="text" id="title" name="title"></input>
      <label for="description">description:</label>
      <input type="description" id="description" name="description"></input>
      <label for="collection">collection:</label>
      <input type="collection" id="collection" name="collection"></input>
      <input type="file" id="thumbnail" name="thumbnail"></input>

      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default contact;
