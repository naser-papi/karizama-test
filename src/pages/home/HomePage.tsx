import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUsers, setProducts } from "../../state";
import { IAppState, ProductType, UserType } from "../../models/GeneralTypes";
import UserList from "../../components/UserList";
import ProductList from "../../components/ProductList";
import SelectedList from "../../components/SelectedList";

//TODO: move this info to the config.json

const USERS_URL = { address: "https://fakestoreapi.com/users", method: "GET" };
const PRODUCT_URL = { address: "https://fakestoreapi.com/products", method: "GET" };

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //app initialization
    //TODO: define a service util
    axios
      .get(USERS_URL.address)
      .then((resp) => {
        if (resp.status == 200) {
          //normalization:
          const list: UserType[] = [];
          resp.data.map((x) => list.push({ usename: x.username, id: x.id, email: x.email }));

          dispatch(setUsers(list));
        }
      })
      .catch((ex) => {
        console.error("Error on fetch users: ", ex);
      });

    axios
      .get(PRODUCT_URL.address)
      .then((resp) => {
        if (resp.status == 200) {
          //normalization:
          const list: ProductType[] = [];
          resp.data.map((x) => {
            const { id, title, description } = x;
            list.push({ id, title, description });
          });

          dispatch(setProducts(list));
        }
      })
      .catch((ex) => {
        console.error("Error on fetch products: ", ex);
      });
  }, []);
  return (
    <Grid container spacing={2} mt={1}>
      <Grid item md={4}>
        <UserList />
      </Grid>
      <Grid item md={4}>
        <ProductList />
      </Grid>
      <Grid item md={4}>
        <SelectedList />
      </Grid>
    </Grid>
  );
};

export default HomePage;
