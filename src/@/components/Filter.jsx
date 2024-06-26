import { useState } from "react";
import { Button } from "../../@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../@/components/ui/sheet";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/ProductSlice";

export default function Filter() {

  const dispatch = useDispatch();
  
  //Clearing all the existing filters by reloading the screen
  const handleClear = () => {
    window.location.reload()
  }

  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const initialSelectedCategories = {
    "men's clothing": false,
    "jewelery": false,
    "electronics": false,
    "women's clothing": false,
  };

  const [selectedCategories, setSelectedCategories] = useState(
    initialSelectedCategories
  );

  //Assigning true when a category is checked
  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setSelectedCategories((prev) => ({ ...prev, [name]: checked }));
  };

  //Applying the selected filters
  const handleClick = () => {
    const selected = Object.keys(selectedCategories).filter(
      (category) => selectedCategories[category]
    );
    dispatch(filterByCategory(selected));
  };


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="m-2">Filter</Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Select Category</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4 capitalize">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories[category]}
                name={category}
                onChange={handleCategoryChange}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <span>
              <Button variant="outline" onClick={handleClear}>Clear</Button>
              <Button type="submit" onClick={handleClick}>
                Save changes
              </Button>
            </span>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
