import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout2";
import axios from "axios";

export default function create() {
  const ref = useRef(null);
  const [url, setUrl] = useState("");
  const [payload, setPayload] = useState("");
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
      .post("http://localhost:9596/api/test", details)
      .then((res) => {
        setResult(res.data);
        setUrl("");
        setPayload("");
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Layout>
        <div id="frame">
          <div className="heading">Run a test</div>
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
              placeholder="https://toddhuyett.com/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="payload"
              className="paragraph"
              placeholder="driver.getTitle(); driver.getCurrentUrl();"
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
          <h3>Result:</h3>
          <div>{result}</div>
        </div>
      </Layout>
      <style jsx>{`
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
      `}</style>
    </>
  );
}
