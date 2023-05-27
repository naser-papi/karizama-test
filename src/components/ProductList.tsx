import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListItemButton, Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import List from "./List";
import { IAppState, SelectedItemType } from "../models/GeneralTypes";
import { toggleSelected } from "../state";

const ProductList = () => {
  const list = useSelector((state: IAppState) => state.general.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const handleFilterChange = (event) => {
    setFilter(event.target.value?.toLowerCase());
  };
  const handleSelect = (id: number) => {
    dispatch(toggleSelected({ id, type: "Product" } as SelectedItemType));
  };
  const items = list.map((x) => {
    if (
      filter &&
      x.title.toLowerCase().indexOf(filter) == -1 &&
      x.description.toLowerCase().indexOf(filter) == -1
    ) {
      return null;
    }
    return (
      <ListItemButton key={x.id} onClick={() => handleSelect(x.id)}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={x.title} secondary={x.description} />
      </ListItemButton>
    );
  });
  return (
    <List title={"Product List"} filterHandler={handleFilterChange}>
      {items}
    </List>
  );
};

export default ProductList;
