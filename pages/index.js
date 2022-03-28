import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout2";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const ref = useRef(null);
  const [url, setUrl] = useState("https://www.estes-express.com/");
  const [payload, setPayload] = useState("driver.getTitle();");
  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState([]);

  function refreshPage() {
    if (typeof window !== undefined) {
      window.location.reload(false);
    }
  }

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const details = {
      url: url,
      payload: payload,
    };
    axios
      .post("https://aqueous-ravine-03366.herokuapp.com/api/test", details)
      .then((res) => {
        setResult(res.data);
        setLoading(false);
      })

      .catch((err) => {
        setResult(err);
      });
  };

  return (
    <>
      <Layout>
        <div id="dent">
          <h3>Remote Selenium Test Playground</h3>
          <p>
            This project consists of a server, a frontend, and a MySQL database.
            The server is a Heroku Spring Boot Rest API for MySQL CRUD
            operations with an additional endpoint for running headless Selenium
            tests via HtmlUnitDriver. The tests themselves are written remotely
            below and sent via POST request in the form of an object containing
            both the URL of the site we're testing and the Java test code
            itself. The code is evaluated serverside using BeanShell and the
            result is then sent back and displayed to the client. The MySQL live
            data is a list of animals and is displayed{" "}
            <Link href="/animals">
              <a>here</a>
            </Link>{" "}
            for testing dynamic content. I used Next.js to dynamically render
            the data. A form is provided{" "}
            <Link href="/createAnimal">
              <a>here</a>
            </Link>{" "}
            for adding new animals to the database.
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
          </div>
          <div>
            <div className="run">Run a test</div>
            <p>
              Enter the url for the site you'd like to test. The driver will be
              initialized serverside, so you can immediately just use it as seen
              in the placeholder text below. Please do not omit the semicolon
              between lines in your test code.
            </p>
            <div>
              <input
                type="text"
                id="url"
                className="paragraph"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                id="payload"
                className="paragraph2"
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
              />
            </div>

            {isError && (
              <small className="mt-3 d-inline-block text-danger"></small>
            )}
            <button
              id="buttt"
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
            <h3 id="n">Result:</h3>
            <div id="r">{result}</div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        #b {
          margin-right: 5px;
          width: 70px;
        }
        #h44 {
          padding-left: 20px;
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
          color: #3b3b3b;
        }
        #dent {
          margin-left: 10px;
        }
        #h {
          margin-top: 4px;
          padding-top: 0px;
          margin-bottom: 30px;
          color: #3a3a3a;
          font-size: 20px;
          font-weight: 500;
        }
        .paragraph {
          width: 700px;
          margin-bottom: 5px;
          height: 35px;
          border-radius: 3px;
          border: transparent;
          box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
            5px 5px 12px rgba(49, 49, 49, 0.164);
          padding-left: 5px;
        }
        #string {
          white-space: pre-wrap;
          padding-top: 15px;
          margin-top: 20px;
          padding: 10px;
        }
        #buttt {
          background-color: rgb(255, 255, 255);
          padding: 5px 10px;
          border: transparent;
          box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
            5px 5px 12px rgba(49, 49, 49, 0.164);
          width: 70px;
          vertical-align: middle;
        }
        .run {
          font-size: 24px;
          margin-top: 30px;
        }
        .paragraph2 {
          width: 700px;
          margin-top: 2px;
          height: 200px;
          border-radius: 3px;
          color: #3a3a3a;
          border: transparent;
          padding: 5px;
          box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
            5px 5px 12px rgba(49, 49, 49, 0.164);
        }
        #frame {
          padding-left: 20px;
        }
        #n {
          padding-left: 8px;
        }
        #r {
          padding-bottom: 200px;
          padding-left: 8px;
        }
      `}</style>
    </>
  );
}
