import React from "react";

const Products = async ({searchParams}: {searchParams: any}) => {
  const searchParam = await searchParams;
  // console.log("searchParams....", searchParams);

  const catigory = searchParam?.catigory || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;

  return <div>category = {catigory} : sort = {sort} : page = {page}</div>;
};

export default Products;
