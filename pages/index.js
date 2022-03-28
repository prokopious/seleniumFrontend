import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout2";

export default function Home() {
  return (
    <>
      <Layout>
        <div id="dent">
        <h3>Remote Selenium Test Playground</h3>
        <p>
          This project consists of a server, a frontend, and a MySQL database.
          The server is a Heroku Spring Boot Rest API for MySQL CRUD operations
          with an additional endpoint for running headless Selenium tests via
          HtmlUnitDriver. The tests themselves are written remotely <Link href="/createTest">
            <a>here</a></Link> (this site) and sent via POST request in the form of an
          object containing both the URL of the site we're testing and the Java
          test code itself. The code is evaluated serverside using BeanShell and
          the result is then sent back and displayed to the client. The MySQL
          live data is a list of animals and is displayed{" "}
          <Link href="/animals">
            <a>here</a>
          </Link>{" "}
          for testing dynamic content. I used Next.js to dynamically render the data. A form is provided  <Link href="/createAnimal">
            <a>here</a>
          </Link> for adding new animals to the database. 
        </p>

        <div id="z">
          <Link href="https://github.com/prokopious/spring">
            <a>Server repo</a>
          </Link>
        </div>
        <div id="z">
          <Link href="https://aqueous-ravine-03366.herokuapp.com/api/animals">
            <a>REST endpoint</a>
          </Link>
        </div></div>
      </Layout>
      <style jsx>{`
        #b {
          margin-right: 5px;
          width: 70px;
        }
        #h44 {
          padding-left 20px;
        }
        #oddBox {
          padding: 20px;
        }
        .email {
          margin-top: 5px;
        }
        .heading {
          padding-left: 20px;
        }
        .notes {
          color: #3B3B3B;
        }
        #dent {
          margin-left: 10px;
        }
     
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://aqueous-ravine-03366.herokuapp.com/api/animals`
  );
  const data = await res.json();
  return { props: { data } };
}
