import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchId } from "../../store/actions";
import { ActionA } from "../../store/reducer";
import "./Input.css";

const HeadInput = () => {
  const [productID, setProductId] = useState("");
  const useAppDispatch = () => useDispatch();
  const dispatch = useAppDispatch();
  const SearchData = () => {
    dispatch(searchId(productID) as ActionA);
    setProductId("");
  };


  return (
    <div className="HeadInput">
      <input
        value={productID}
        onChange={(e) => setProductId(e.target.value)}
        className="Input"
        placeholder="Search With ID"
        type='number'
        
      />
      <button onClick={SearchData}>Search</button>
    </div>
  );
};

export default HeadInput;
