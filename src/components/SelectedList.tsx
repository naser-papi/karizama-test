import React from "react";
import { Chip, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleSelected } from "../state";
import List from "./List";
import { IAppState } from "../models/GeneralTypes";

const SelectedList = () => {
  const { users, products, selectedItems } = useSelector((state: IAppState) => state.general);
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleRemoveItem = (autoKey: string) => {
    dispatch(toggleSelected(selectedItems.find((x) => x.autoKey === autoKey)));
  };
  const items = selectedItems.map((x) => {
    const label =
      x.type == "User"
        ? users.find((u) => u.id == x.id).usename
        : products.find((p) => p.id == x.id).title;
    return (
      <Chip
        key={x.autoKey}
        label={label}
        variant="outlined"
        sx={{
          margin: theme.spacing(1),
          bgcolor: theme.palette.primary.main,
          color: theme.palette.secondary.main
        }}
        onClick={() => handleRemoveItem(x.autoKey)}
      />
    );
  });
  return <List title={"Tap to delete"}>{items}</List>;
};

export default SelectedList;
