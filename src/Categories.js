import React, { useState } from "react";

const Categories = ({ categories, filterItems }) => {
  const [checkedItems, setChecked] = useState([]);
  let catArr = [];
  const getValue = (e) => {
    let val = e.target.value;
    if (e.target.checked) {
      setChecked((p) => [...p, val]);
      catArr.push(...checkedItems, val);
      filterItems(catArr);
      console.log(checkedItems, "checked");
    } else {
      const res = checkedItems;
      const res_arr = [];
      res.map((ele) => {
        if (ele !== val) {
          res_arr.push(ele);
        }
      });
      setChecked(res_arr);
      filterItems(res_arr);
    }
  };

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <>
            {/* // <button
          //   type="button"
          //   className="filter-btn"
          //   key={index}
          //   onClick={() => filterItems(category)}
          // >
          //   {category}
          // </button> */}
            <label htmlFor={category}>{category}</label>

            <input
              type="checkbox"
              value={category}
              name={category}
              onChange={(e) => getValue(e)}
            />
          </>
        );
      })}
    </div>
  );
};

export default Categories;
