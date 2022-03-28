import { useState } from "react";
import Layout from "../components/Layout2";

export default function Home({ data }) {
  const [filtered, setFiltered] = useState(
    data.sort((a, b) => {
      return a.createdAt > b.createdAt ? -1 : 1;
    })
  );
  const [toggle, setToggle] = useState(true);

  const filter = (e) => {
    setFiltered(
      data.filter((n) => {
        return JSON.stringify(n).search(e.target.value) != -1;
      })
    );
  };

  const sortArray = () => {
    setFiltered(
      [...filtered].sort((a, b) => {
        return b.createdAt + `${toggle ? ">" : "<"}` + a.createdAt ? -1 : 1;
      })
    );
    setToggle(!toggle);
  };
  return (
    <>
      <Layout>
        {data && (
          <div id="grid">
            <div id="all">
              <h3 className="heading">All animals</h3>
              <div id="in">
                <button id="b" onClick={sortArray}>
                  {toggle ? "oldest" : "newest"}
                </button>
                <input
                  type="text"
                  placeholder="filter by keyword.."
                  onChange={(e) => filter(e)}
                />
              </div>
            </div>
            {filtered.map((item) => (
              <div id={filtered.indexOf(item) % 2 === 0 ? "evenBox" : "oddBox"}>
                <div className="title">{item.animal}</div>
                <p className="notes">{item.description}</p>
              </div>
            ))}
          </div>
        )}
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
