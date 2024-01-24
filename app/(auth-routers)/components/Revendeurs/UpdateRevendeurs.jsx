"use client";
import Model from "@/app/Layouts/Model";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import noimage from "@/public/images/no-photo.svg";

const UpdateRevendeurs = ({ showModel, setShowModel, data }) => {
  const [updateProduct, setUpdateProduct] = useState();

  useEffect(() => {
    if (data) {
      setUpdateProduct(data);
    }
  }, [data]);

  return (
    <Model
      showModel={showModel}
      setShowModel={setShowModel}
      title="Update Your Product"
    >
      <div>
        <form className="px-10 py-7 overflow-hidden">
          <div className=" w-full md:flex justify-between gap-6 items-start">
            <div className="md:w-1/2">
              <div className="mt-3">
                <label className="font-semibold" htmlFor="siret">
                  Name
                </label>
                <input
                  className="py-2 w-full px-3 outline-none border-2 transition-all rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="siret"
                  type="text"
                  value={updateProduct?.title}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      title: e.target.value,
                    })
                  }
                  placeholder="Entrez le numéro de SIRET de la marque..."
                />
              </div>
              <div className="mt-3">
                <label className="font-semibold" htmlFor="code">
                  Description
                </label>
                <textarea
                  className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="code"
                  type="text"
                  value={updateProduct?.description}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      description: e.target.value,
                    })
                  }
                  placeholder="Entrez le code NAF de la marque..."
                ></textarea>
              </div>
              <div className="mt-3">
                <label className="font-semibold" htmlFor="kbis">
                  Brand
                </label>
                <input
                  className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="kbis"
                  type="text"
                  placeholder="Télécharger le KBIS de la société..."
                  value={updateProduct?.brand}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      brand: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-3">
                <label className="font-semibold" htmlFor="tva">
                  Category
                </label>
                <input
                  className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="kbis"
                  type="text"
                  value={updateProduct?.category}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      category: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="mt-3 relative">
                <label className="font-semibold" htmlFor="code">
                  Price
                </label>
                <input
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      price: e.target.value,
                    })
                  }
                  value={updateProduct?.price}
                  className="py-2 w-full pl-10 pr-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="code"
                  type="text"
                  placeholder="47 boulevard saint germain"
                />
                <CircleDollarSign className=" absolute left-5  text-slate-600 mt-0.5 top-2/3 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="md:flex gap-4 w-full">
                <div className="mt-3">
                  <label className="font-semibold" htmlFor="tva">
                    Rating
                  </label>
                  <input
                    onChange={(e) =>
                      setUpdateProduct({
                        ...updateProduct,
                        rating: e.target.value,
                      })
                    }
                    value={updateProduct?.rating}
                    className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                    id="kbis"
                    type="text"
                    placeholder="91120"
                  />
                </div>
                <div className="mt-3">
                  <label className="font-semibold" htmlFor="Stock">
                    Stock
                  </label>
                  <input
                    onChange={(e) =>
                      setUpdateProduct({
                        ...updateProduct,
                        stock: e.target.value,
                      })
                    }
                    value={updateProduct?.stock}
                    className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                    id="Stock"
                    type="text"
                    placeholder="Palaiseau"
                  />
                </div>
              </div>
              <div className="mt-3 w-full ">
                <div>
                  <label className="font-semibold" htmlFor="tva">
                    Preview
                  </label>
                  <div className="flex gap-3 items-center mt-2">
                    <Image
                      width={60}
                      height={60}
                      src={data?.thumbnail || noimage}
                      alt="noimage"
                    />
                    <input
                      className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                      id="preview"
                      type="file"
                      multiple
                      accept=".jpg,.png"
                      placeholder="France"
                      onChange={(e) =>
                        setUpdateProduct({ ...addForm, images: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-4 text-center">
            <Button className="text-white px-8 rounded-lg">Submit</Button>
          </div>
        </form>
      </div>
    </Model>
  );
};

export default UpdateRevendeurs;
