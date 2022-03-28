import Link from "next/link";


export default function AdminNav() {
  return (
    <>
      <div className="navigation">
        <div id="pad">
          <div id="linkGrid">
            <div id="z">
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div id="z">
              <Link href="/animals">
                <a>All</a>
              </Link>
            </div>
            <div id="z">
              <Link href="/createAnimal">
                <a>New</a>
              </Link>
            </div>
            <div id="z">
              <Link href="/createTest">
                <a>Test</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navigation {
          background-color: rgb(231, 231, 231);
          padding: 20px;
          padding-left: 20px;
          margin-top: 0;
          margin-right: auto;
          margin-left: auto;
        }
        a {
          text-decoration: none;
          color: black;
          padding-right: 8px;
        }
        #l {
          cursor: pointer;
        }
        #twin {
          margin-bottom: 5px;
          margin-top: 7px;
        }
        #pad {
          padding-left: 0px;
        }
        #linkGrid {
          display: flex;
        }

        @media (max-width: 700px) {
          #linkGrid {
          }
        }
      `}</style>
    </>
  );
}
