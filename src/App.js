import "./App.css";
import { useState } from "react";

function App() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="d-flex ">
      <table
        className="table table-striped table-bordered"
        style={{ width: "1%" }}
      >
        <thead>
          <tr>
            <th className="table-dark">Project</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Padu</th>
          </tr>
          <tr>
            <th>Sanskar</th>
          </tr>
          <tr>
            <th>Yash</th>
          </tr>
          <tr>
            <th>Aniket</th>
          </tr>
        </tbody>
      </table>

      <div className="table-responsive">
        <table className="table table-striped table-bordered mb-auto">
          <thead>
            <tr>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Html,CSS,JS Crud
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Crud With Localstorage
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Crud With Rest API
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Crud With Angular
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Crud With React
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Crud With MEAN and SQL/NoSQL
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Crud With MERN and SQL/NoSQL
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Crud With MEAN(Ionic) and SQL/NoSQL
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Crud With MERN(Native) and SQL/NoSQL
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Java Springboot Hybernate Crud with SQL/NoSQL
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                PHP with Larvel Crud with SQL/NoSQL
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Python with Django Crud with SQL/NoSQL
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                C# with .NET Crud with SQL/NoSQL
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                DSA with C
              </th>
              <th
                scope="col"
                className={`dot_txt ${"hover-ellipsis"} table-dark`}
              >
                Oops with C++/Java
              </th>
            </tr>
          </thead>
          {/* Padu */}
          <tbody>
            <tr className="text-center">
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
            </tr>
            {/*  Sanskar */}
            <tr className="text-center">
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">--</td>
              <td scope="col">✔</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
            </tr>
            {/*  Yash */}
            <tr className="text-center">
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">--</td>
              <td scope="col">✔</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
            </tr>
            {/*  Aniket */}
            <tr className="text-center">
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">✔</td>
              <td scope="col">--</td>
              <td scope="col">✔</td>
              <td scope="col">--</td>
              <td scope="col">✔</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
              <td scope="col">--</td>
            </tr>{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
