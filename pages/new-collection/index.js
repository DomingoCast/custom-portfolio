import React from "react";

import classes from "./Contact.module.sass";

import info from "../assets/database/info";
import axios from "axios";

const contact = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.querySelector("#title").value;
    const description = e.target.querySelector("#description").value;
    const thumbnail = e.target.querySelector("#thumbnail").files[0];
    const fileInput = document.querySelector("#thumbnail");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTMyMTgyODAsImRhdGEiOnsiaWQiOiJkOGMzNTU3MC0zNGEzLTRlYTctODBiMS1hMTRkNjYxODhiNDkiLCJuYW1lIjoicmVxLmJvZHkubmFtZS4iLCJzdXJuYW1lIjoicmVxLmJvZHkuc3VybmFtZSIsImVtYWlsIjoiZG9taW5nby5jYXN0aWxsb0Bqb2JhbmR0YWxlbnQuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkZ0JjQkdvUmk0RnFkaEU3Sm9qRUw0LjIyR3M1azYyQVpBYlJQMjdKeENFd0FJUS5RdDZzcm0iLCJwaG9uZSI6IjAwMzQ2ODg5MDE1MDciLCJhZGRyZXNzIjoicmVxLmJvZHkuYWRkcmVzcyIsInJvbGUiOiJ3b3JrZXIifSwiaWF0IjoxNjUzMjE0NjgwfQ.GlEV0s7JT8igwwtGqonYZptu6p_tAzK8Y4iCGs4hRak"
    );
    const formData = new FormData(document.querySelector("#form-collection"));

    axios({
      url: "http://localhost:8080/collection",
      method: "post",
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTMyMjIyMzAsImRhdGEiOnsiaWQiOiJkOGMzNTU3MC0zNGEzLTRlYTctODBiMS1hMTRkNjYxODhiNDkiLCJuYW1lIjoicmVxLmJvZHkubmFtZS4iLCJzdXJuYW1lIjoicmVxLmJvZHkuc3VybmFtZSIsImVtYWlsIjoiZG9taW5nby5jYXN0aWxsb0Bqb2JhbmR0YWxlbnQuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkZ0JjQkdvUmk0RnFkaEU3Sm9qRUw0LjIyR3M1azYyQVpBYlJQMjdKeENFd0FJUS5RdDZzcm0iLCJwaG9uZSI6IjAwMzQ2ODg5MDE1MDciLCJhZGRyZXNzIjoicmVxLmJvZHkuYWRkcmVzcyIsInJvbGUiOiJ3b3JrZXIifSwiaWF0IjoxNjUzMjE4NjMwfQ.nEt2L8cRen1pd0d6QaqyIBezD0V2yq6Hurd5XMjvKRc",
      },
      data: formData,
    });
  };
  return (
    <form id="form-collection" onSubmit={handleSubmit}>
      <label for="title">Title:</label>
      <input type="text" id="title" name="title"></input>
      <label for="description">description:</label>
      <input type="description" id="description" name="description"></input>
      <input type="file" id="thumbnail" name="thumbnail"></input>

      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default contact;
