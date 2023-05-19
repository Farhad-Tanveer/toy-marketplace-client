import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>DinoToy|Blog</title>
      </Helmet>
      <div className="grid grid-col-1 lg:grid-cols-2 w-3/4 mb-10 mx-auto gap-2 space-y-3">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>

            <p>
              An access token is a credential that is used to authenticate and
              authorize a user in a system. It is typically issued by a server
              or an authentication provider after the user successfully logs in
              or grants permissions. On the other hand, a refresh token is a
              credential that is used to obtain a new access token when the
              current one expires. Access tokens are used for authentication and
              authorization, while refresh tokens are used to obtain new access
              tokens. Access tokens can be stored in memory or secure storage
              mechanisms on the client-side, while refresh tokens are best
              stored securely on the server-side.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
            <p>
              SQL (Structured Query Language) databases are relational databases
              that store data in tables with predefined schemas. SQL databases
              use a fixed schema, meaning the structure of the data must be
              defined in advance, and any changes require altering the schema.{" "}
              <br />
              On the other hand, NoSQL (Not Only SQL) databases are
              non-relational databases that provide flexibility and scalability.
              They can handle unstructured and semi-structured data, such as
              JSON, XML, or key-value pairs. NoSQL databases don't rely on fixed
              schemas, allowing for easy and dynamic data model changes
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What is express js? What is Nest JS?</h2>
            <p>
              Express.js is a minimal and flexible web application framework for
              Node.js. It provides a simple and intuitive API for building web
              applications and APIs. With Express.js, developers can handle HTTP
              requests and responses, define routes, and implement middleware to
              enhance functionality.
              <br />
              Nest.js is a progressive, extensible, and opinionated framework
              for building efficient and scalable server-side applications. It
              is built with TypeScript and leverages modern JavaScript features
              and design patterns.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p>
              The aggregate method in MongoDB provides a versatile and powerful
              way to perform advanced data analysis and manipulation operations
              on collections by applying a series of pipeline stages to the
              data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
