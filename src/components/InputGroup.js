import React from "react";

const InputGroup = ({ total, name, setID }) => {
  return (
    <div class="input-group mb-3">
    
    {/* mapping over the different pages received from the api and setting the ID to the current page chosen by the user */}

      <select
        onChange={(e) => setID(e.target.value)}
        class="form-select"
        id={name}
      >
        <option value="1" selected>
          Choose...
        </option>
        {[...Array(total).keys()].map((i) => {
          return (
            <option value={i + 1}>
              {name} - {i + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
