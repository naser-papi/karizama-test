import React, { useState } from "react";
import { ListItemButton, Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useSelector, useDispatch } from "react-redux";
import List from "./List";
import { toggleSelected } from "../state";
import { IAppState, SelectedItemType } from "../models/GeneralTypes";

const UserList = () => {
  const list = useSelector((state: IAppState) => state.general.users);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const handleFilterChange = (event) => {
    setFilter(event.target.value?.toLowerCase());
  };
  const handleSelect = (id: number) => {
    dispatch(toggleSelected({ id, type: "User" } as SelectedItemType));
  };
  const items = list.map((x) => {
    if (
      filter &&
      x.email.toLowerCase().indexOf(filter) == -1 &&
      x.usename.toLowerCase().indexOf(filter) == -1
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
        <ListItemText primary={`${x.usename}`} secondary={x.email} />
      </ListItemButton>
    );
  });
  return (
    <List title={"User List"} filterHandler={handleFilterChange}>
      {items}
    </List>
  );
};

export default UserList;
