import React from "react";
import { Button } from "./button";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { useDispatch } from "react-redux";
import { sortByPriceHighToLow, sortByPriceLowToHigh } from "../../../redux/ProductSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const handleHighToLow = () => {
    dispatch(sortByPriceHighToLow())
  };

  const handleLowToHigh = () => {
    dispatch(sortByPriceLowToHigh())
  };

  return (
    <div className="flex gap-2 m-2">
      <Button onClick={handleHighToLow}>
        <ArrowUpNarrowWide />
      </Button>
      <Button onClick={handleLowToHigh}>
        <ArrowDownNarrowWide />
      </Button>
    </div>
  );
};

export default Sort;
