import React, { useState, useEffect } from "react";
import "./Table.scss";
import checkSvg from "../../assets/check.svg";

export const Table = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/unknown?per_page=12")
      .then((resp) => resp.json())
      .then((items) => setItems(items.data));
  }, []);

  const onChangeHandler = () => {};

  return (
    <div className="container">
      <header className="header">
        <h1>Pantone colors</h1>
        <div className="reset">
          <button className="reset__btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 1.17C13.3244 1.17 16.83 4.67561 16.83 9C16.83 13.3244 13.3244 16.83 9 16.83V18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C5.64428 0 2.71752 1.83656 1.17 4.55937C0.936352 4.97046 0.734144 5.40177 0.566648 5.85L1.72363 6.10242C1.88368 5.70084 2.07602 5.31564 2.29743 4.95C3.66943 2.68426 6.15788 1.17 9 1.17Z"
                fill="#888888"
              />
              <path
                d="M9 16.83V18C6.26811 18 3.8205 16.7828 2.16993 14.8611L3 14.0311C4.43633 15.7422 6.59113 16.83 9 16.83Z"
                fill="#888888"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.17 5.13H5.13H6.3V6.3H2.86102e-06V0H1.17V1.17V5.13Z"
                fill="#888888"
              />
            </svg>
            Reset
          </button>
        </div>
      </header>
      <main className="main">
        <table className="table">
          <thead>
            <tr>
              <th className="table__item table__item-id">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={onChangeHandler}
                  name="id"
                  id="id"
                />
                <label htmlFor="id">
                  <img src={checkSvg} alt="Check" /> Id
                </label>
              </th>
              <th className="table__item">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={onChangeHandler}
                  name="name"
                  id="name"
                />
                <label htmlFor="name">
                  <img src={checkSvg} alt="Check" /> Name
                </label>
              </th>
              <th className="table__item table__item-year">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={onChangeHandler}
                  name="year"
                  id="year"
                />
                <label htmlFor="year">
                  <img src={checkSvg} alt="Check" /> Year
                </label>
              </th>
              <th className="table__item table__item-color">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={onChangeHandler}
                  name="color"
                  id="color"
                />
                <label htmlFor="color">
                  <img src={checkSvg} alt="Check" /> Color
                </label>
              </th>
              <th className="table__item">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={onChangeHandler}
                  name="pantone"
                  id="pantone"
                />
                <label htmlFor="pantone">
                  <img src={checkSvg} alt="Check" /> Pantone value
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item, index) => (
                <tr key={item.id + index}>
                  <td className="table__item table__item-id">{item.id}</td>
                  <td className="table__item table__item-name">{item.name}</td>
                  <td className="table__item table__item-year">{item.year}</td>
                  <td className="table__item table__item-color">
                    <div className="color-wrap">
                      <span style={{ backgroundColor: item.color }} />
                      {item.color}
                    </div>
                  </td>
                  <td className="table__item">{item.pantone_value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
