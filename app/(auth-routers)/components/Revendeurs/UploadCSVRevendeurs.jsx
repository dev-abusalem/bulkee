"use client";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import Model from "@/app/Layouts/Model";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import sort from "@/public/icons/sort.svg";
import Search from "@/public/icons/Search.svg";
import Paginations from "@/app/Shared/Paginations";
import { HashLoader } from "react-spinners";
import Loader from "@/app/Shared/Loader";
import noimage from "@/public/images/no-photo.svg";

function UploadCSVRevendeurs() {
  const [columnArr, setColumnArr] = useState([]);
  const [valueArr, setValueArr] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // parse CSV data & store it in the component state
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const colArr = [];
        const valArr = [];

        results.data.map((d) => {
          colArr.push(Object.keys(d));
          valArr.push(Object.values(d));
        });

        setData(results.data);
        setColumnArr(colArr[0]);
        setValueArr(valArr);
      },
    });
  };

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="pb-4">
        <h1 className="font-semibold text-xl mb-2">Upload Your CSV File</h1>
        <div className="md:flex justify-between items-center">
          <div>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="bg-green-100 py-1.5 px-2 text-green-800 rounded-md border border-green-700 cursor-pointer"
            />
          </div>
          <Button className="text-white md:w-[300px] w-full  mb-2 md:mb-0">
            Save To Database
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
      </div>
      {data.length ? (
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
                  <div className="flex gap-1 items-center">Brand</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-1 items-center">
                    Category
                    {/* <Image
                      src={sort}
                      alt="sort"
                      className=" cursor-pointer"
                      onClick={() => makeSortArr("category")}
                    /> */}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-1 items-center">
                    Price
                    {/* <Image
                      src={sort}
                      alt="sort"
                      className=" cursor-pointer"
                      onClick={() => makeSortArr("price")}
                    /> */}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-1 items-center">
                    Rating
                    {/* <Image
                      src={sort}
                      alt="sort"
                      className=" cursor-pointer"
                      onClick={() => makeSortArr("rating")}
                    /> */}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-1 items-center">
                    Stock
                    {/* <Image
                      src={sort}
                      alt="sort"
                      className=" cursor-pointer"
                      onClick={() => makeSortArr("stock")}
                    /> */}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex gap-1 items-center">Image</div>
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {valueArr?.map((item) => {
                return (
                  <tr
                    key={item[0]}
                    className="bg-white dark:border-b  dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-3">{item[1]}</td>
                    <td className="px-6 py-3">{item[2]}</td>
                    <td className="px-6 py-3">{item[7]}</td>
                    <td className="px-6 py-3">{item[8]}</td>
                    <td className="px-6 py-3">{item[3]}$</td>
                    <td className="px-6 py-3">{item[5]}</td>
                    <td className="px-6 py-3">{item[6]}</td>
                    <td className="px-6 py-3">
                      <Image
                        alt="image"
                        width={80}
                        height={80}
                        src={item[9] || noimage}
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
          <div className="flex justify-end items-center pt-4">
            <Paginations
              data={data}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default UploadCSVRevendeurs;
