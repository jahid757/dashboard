import React from "react";
import SelectInput from "../../components/form/SelectInput";
import Input from "../../components/form/Input";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'milk', label: 'Milk' }
  ]

const SearchFilter = () => {
  return (
    <div className="content mt-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="w-45">
            <p className="mb-2 title_text">Search</p>
            <Input placeholder="Enter token name or token symbol" type="text" />
        </div>
        <div className="d-flex align-items-center gap-2">

          <div>
            <p className="mb-2 title_text">Filter by</p>
            <SelectInput options={options} placeholder={'Select'} />
          </div>

          <div>
            <p className="mb-2 title_text">Sort by</p>
            <SelectInput options={options} placeholder={'Select'} />
          </div>

          <div>
            <p className="mb-2 title_text">Chain</p>
            <SelectInput options={options} placeholder={'Select'} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
