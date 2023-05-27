import React from "react";
import { List as MList, ListSubheader, TextField, Typography, useTheme } from "@mui/material";
import { IList } from "../models/GeneralTypes";

const List: React.FC<IList> = (props) => {
  const theme = useTheme();
  return (
    <MList
      sx={{
        width: "100%",
        padding: `0 ${theme.spacing(1)}`,
        bgcolor: "background.paper",
        height: "calc(100vh - 100px)",
        overflow: "auto"
      }}
      subheader={
        <ListSubheader
          component="div"
          id="list-subheader"
          sx={{ bgcolor: "background.paper", padding: `${theme.spacing(1)} 0` }}
        >
          {props.children.length ? (
            <>
              {props.filterHandler ? (
                <TextField
                  id="searchInput"
                  placeholder="Search"
                  variant="outlined"
                  fullWidth
                  onChange={props.filterHandler}
                />
              ) : (
                <Typography variant={"h4"}>{props.title}</Typography>
              )}
            </>
          ) : null}
        </ListSubheader>
      }
    >
      {props.children}
    </MList>
  );
};
export default List;
