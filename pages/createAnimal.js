import { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout2";
import axios from "axios";


export default function create() {
  const ref = useRef(null);
  const [animal, setAnimal] = useState("");
  const [description, setDescription] = useState("");

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
      animal: animal,
      description: description,
    };
    axios
      .post("http://localhost:9596/api/animals", details)
      .then((res) => {
        setAnimal("");
        setDescription("");
        setLoading(false);
      })
      .then(alert("Success!")).then(refreshPage())
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Layout>
        <div id="frame">
          <div className="heading">Create an animal</div>
          <div>
            <input
              type="text"
              id="animal"
              className="paragraph"
              placeholder="Animal.."
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="description"
              className="paragraph"
              placeholder="Description.."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
          <div id="string" ref={ref}></div>
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
