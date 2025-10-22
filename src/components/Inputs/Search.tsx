import type { ISearchProps } from "../../types/components/InputsProps";

const Search = ({ handleSearch, show }: ISearchProps) => {
  return (
    <input
      type="search"
      className={`form-control-md border ps-1 my-3 input-group w-auto rounded-2 ${
        show && "d-none"
      }`}
      placeholder="Search"
      onChange={handleSearch}
    />
  );
};

export default Search;
