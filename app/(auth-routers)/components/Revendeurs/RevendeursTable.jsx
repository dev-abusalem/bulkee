"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sort from "@/public/icons/sort.svg";
import Search from "@/public/icons/Search.svg";
import { Input } from "@/components/ui/input";
import { TableData } from "@/app/data/TableData";
import NoCart from "@/app/Shared/NoCart";
import Paginations from "@/app/Shared/Paginations";
import { Button } from "@/components/ui/button";
import product from "@/public/images/dash1.svg";
import { SquarePen, Trash2 } from "lucide-react";
import axios from "axios";
import Loader from "@/app/Shared/Loader";
import UpdateRevendeurs from "./UpdateRevendeurs";
import AddRevendeurs from "./AddRevendeurs";
import DeleteRevendeurs from "./DeleteRevendeurs";
import UploadCSVRevendeurs from "./UploadCSVRevendeurs";
import { useRouter } from "next/navigation";
const RevendeursTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [showModel, setShowModel] = useState(false);
  const [modelType, setModelType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sortedData = sortData(data, sortConfig);
    setCurrentData(sortedData.slice(startIndex, endIndex));
  }, [data, currentPage, sortConfig]);

  // filter data by search
  function filterData(value) {
    if (value) {
      const v = value.toLowerCase();
      const tdata = data?.filter((item) =>
        item?.title?.toLowerCase().includes(v)
      );
      setCurrentData(tdata);
    } else {
      setCurrentData(currentData);
    }
    // Reset to the first page when filtering
    setCurrentPage(1);
  }
  // Function to handle sorting
  const makeSortArr = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Function to sort the data
  const sortData = (currentData, sortConfig) => {
    if (!sortConfig.key) return currentData;

    const sortedData = [...currentData].sort((a, b) => {
      const keyA = String(a[sortConfig.key]);
      const keyB = String(b[sortConfig.key]);

      if (sortConfig.direction === "ascending") {
        return keyA.localeCompare(keyB);
      } else {
        return keyB.localeCompare(keyA);
      }
    });

    return sortedData;
  };

  useEffect(() => {
    async function getProductData() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setData(res.data.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    getProductData();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // show selected item and store
  function editSingleData(item) {
    setShowModel(true);
    setSelectedItem(item);
    setModelType("update");
  }

  // add data for marque button
  function addProductData() {
    setShowModel(true);
    setModelType("add");
  }
  // add data for marque button
  function deleteProductData(item) {
    setShowModel(true);
    setModelType("delete");
  }

  const router = useRouter();
  // add data for marque button
  function csvUpload() {
    router.push("/dashboard/admin/revendeurs/uploadcsv");
  }
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="md:flex justify-between items-center">
            <h1 className="font-semibold text-xl mb-2 md:mb-0">Revendeurs</h1>
            <Button
              className="text-white md:w-[300px] w-full  mb-2 md:mb-0"
              onClick={addProductData}
            >
              Add
            </Button>
            <Button
              className="text-white md:w-[300px] w-full  mb-2 md:mb-0"
              onClick={csvUpload}
            >
              CSV Upload
            </Button>
            <div className=" relative  mb-2 md:mb-0">
              <Input
                type="email"
                placeholder="Search products..."
                className="pl-10 pr-4 outline-none"
                onChange={(e) => filterData(e.target.value)}
              />
              <Image
                src={Search}
                alt="Search"
                className=" absolute top-1/2 left-4 -translate-x-2 -translate-y-1/2"
              />
            </div>
          </div>

          {currentData.length === 0 ? (
            <NoCart onClick={addProductData} />
          ) : (
            <div className="mt-5">
              <div className="relative overflow-x-auto border">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs font-normal text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Desc
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Brand
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("brand")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Category
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("category")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Price
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("price")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Rating
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("rating")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">
                          Stock
                          <Image
                            src={sort}
                            alt="sort"
                            className=" cursor-pointer"
                            onClick={() => makeSortArr("stock")}
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex gap-1 items-center">Image </div>
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData?.map((item) => {
                      return (
                        <tr
                          key={item.id}
                          className="bg-white dark:border-b  dark:bg-gray-800 dark:border-gray-700"
                        >
                          <td className="px-6 py-3">{item.title}</td>
                          <td className="px-6 py-3">{item.description}</td>
                          <td className="px-6 py-3">{item.brand}</td>
                          <td className="px-6 py-3">{item.category}</td>
                          <td className="px-6 py-3">{item.price}</td>
                          <td className="px-6 py-3">{item.rating}</td>
                          <td className="px-6 py-3">{item.stock}</td>
                          <td className="px-6 py-3">
                            <Image
                              alt="image"
                              width={80}
                              height={80}
                              src={item.thumbnail}
                            />
                          </td>
                          <td className="px-6 py-3">
                            <div className="flex justify-end gap-4 items-center">
                              <SquarePen
                                onClick={() => editSingleData(item)}
                                size={35}
                                className="text-yellow-800 shadow hover:shadow-sm cursor-pointer bg-yellow-200 p-2  rounded-sm"
                              />
                              <Trash2
                                onClick={() => deleteProductData(item)}
                                size={35}
                                className="text-red-800 hover:shadow-sm shadow cursor-pointer bg-red-200 p-2 rounded-sm"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end items-center pt-4">
                <Paginations
                  data={data}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          )}
          {modelType === "add" ? (
            <AddRevendeurs showModel={showModel} setShowModel={setShowModel} />
          ) : modelType === "update" ? (
            <UpdateRevendeurs
              showModel={showModel}
              setShowModel={setShowModel}
              data={selectedItem}
            />
          ) : (
            <DeleteRevendeurs
              showModel={showModel}
              setShowModel={setShowModel}
              data={selectedItem}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default RevendeursTable;
