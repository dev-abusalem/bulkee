"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sort from "@/public/icons/sort.svg";
import Search from "@/public/icons/Search.svg";
import { Input } from "@/components/ui/input";
import { TableData } from "@/app/data/TableData";
import NoCart from "@/app/Shared/NoCart";
import Paginations from "@/app/Shared/Paginations";
import MarquesModel from "./MarquesModel";
import { Button } from "@/components/ui/button";
const MarquesTable = () => {
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

  useEffect(() => {
    setData(TableData);
  }, []);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
      const tdata = TableData.filter((item) =>
        item.Nomdelamarque.toLowerCase().includes(v)
      );
      setData(tdata);
    } else {
      setData(TableData);
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
  const sortData = (data, sortConfig) => {
    if (!sortConfig.key) return data;

    const sortedData = [...data].sort((a, b) => {
      const keyA = a[sortConfig.key];
      const keyB = b[sortConfig.key];

      if (sortConfig.direction === "ascending") {
        return keyA.localeCompare(keyB);
      } else {
        return keyB.localeCompare(keyA);
      }
    });

    return sortedData;
  };

  // show selected item and store
  function setSingleData(item) {
    setShowModel(true);
    setSelectedItem(item);
    setModelType("update");
  }

  // delete button
  function addMarqueData(item) {
    setShowModel(true);
    setModelType("add");
  }
  return (
    <section>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Marques</h1>
          <Button className="text-white w-[300px]" onClick={addMarqueData}>
            Add
          </Button>
          <div className=" relative">
            <Input
              type="email"
              placeholder="Rechercher"
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
          <NoCart onClick={addMarqueData} />
        ) : (
          <div className="mt-5">
            <div className="relative overflow-x-auto border">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs font-normal text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Nom de la marque
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex gap-1 items-center">
                        Color
                        <Image
                          src={sort}
                          alt="sort"
                          className=" cursor-pointer"
                          onClick={() => makeSortArr("Color")}
                        />
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex gap-1 items-center">
                        Propriétaire
                        <Image
                          src={sort}
                          alt="sort"
                          className=" cursor-pointer"
                          onClick={() => makeSortArr("Propriétaire")}
                        />
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex gap-1 items-center">
                        Revendeurs
                        <Image
                          src={sort}
                          alt="sort"
                          className=" cursor-pointer"
                          onClick={() => makeSortArr("Revendeurs")}
                        />
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex gap-1 items-center">
                        Comptes équipe
                        <Image
                          src={sort}
                          alt="sort"
                          className=" cursor-pointer"
                          onClick={() => makeSortArr("Compteséquipe")}
                        />
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex gap-1 items-center">
                        Statut{" "}
                        <Image
                          src={sort}
                          alt="sort"
                          className=" cursor-pointer"
                          onClick={() => makeSortArr("Statut")}
                        />
                      </div>
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
                        <td className="px-6 py-3">{item.Nomdelamarque}</td>
                        <td className="px-6 py-3">{item.Color}</td>
                        <td className="px-6 py-3">{item.Compteséquipe}</td>
                        <td className="px-6 py-3">{item.Propriétaire}</td>
                        <td className="px-6 py-3">{item.Revendeurs}</td>
                        <td className="px-6 py-3">
                          <button
                            className={
                              item.Statut === "Actif"
                                ? "bg-green-100 w-full text-green-700 py-1 px-2.5 rounded-md"
                                : "bg-red-100 w-full text-red-700 py-1 px-2.5 rounded-md"
                            }
                          >
                            {item.Statut}
                          </button>
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex gap-4 items-center">
                            <button
                              onClick={() => setSingleData(item)}
                              className="bg-yellow-100 w-full text-yellow-700 py-1 px-2.5 rounded-md"
                            >
                              Modifier
                            </button>
                            <button className="bg-red-100 w-full text-red-700 py-1 px-2.5 rounded-md">
                              Supprimer
                            </button>
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
        <MarquesModel
          showModel={showModel}
          setShowModel={setShowModel}
          data={selectedItem}
          type={modelType}
        />
      </div>
    </section>
  );
};

export default MarquesTable;
