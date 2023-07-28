import axios from "axios";
import { Cart, IResponse } from "../models";
import { setProducts } from "../store/slice/productSlice";
import { useDispatch } from "react-redux";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const getProduct = async (setData: Function) => {

  try {
    const res = await axios<IResponse>({
      url: "https://dummyjson.com/carts",
      method: "GET",
    });

    setData(res.data.carts)

  } catch (error) {
    console.log(error);
  }
};


