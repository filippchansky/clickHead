import axios from "axios";
import {IResponse } from "../models";

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


