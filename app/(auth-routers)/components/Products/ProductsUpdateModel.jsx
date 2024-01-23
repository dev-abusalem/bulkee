import Model from "@/app/Layouts/Model";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import React from "react";

const ProductsUpdateModel = ({ showModel, setShowModel, data }) => {
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
                  SIRET
                </label>
                <input
                  className="py-2 w-full px-3 outline-none border-2 transition-all rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="siret"
                  type="text"
                  placeholder="Entrez le numéro de SIRET de la marque..."
                />
              </div>
              <div className="mt-3">
                <label className="font-semibold" htmlFor="code">
                  Code NAF
                </label>
                <input
                  className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="code"
                  type="text"
                  placeholder="Entrez le code NAF de la marque..."
                />
              </div>
              <div className="mt-3">
                <label className="font-semibold" htmlFor="kbis">
                  KBIS
                </label>
                <input
                  className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="kbis"
                  type="text"
                  placeholder="Télécharger le KBIS de la société..."
                />
              </div>
              <div className="mt-3">
                <label className="font-semibold" htmlFor="tva">
                  TVA souhaitée
                </label>
                <select
                  className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="kbis"
                  type="text"
                  // placeholder="Assujetti à la TVA..."
                >
                  <option value="">Assujetti à la TVA</option>
                  <option value="">Assujetti à la TVA</option>
                  <option value="">Assujetti à la TVA</option>
                </select>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="mt-3 relative">
                <label className="font-semibold" htmlFor="code">
                  Adresse du siège social
                </label>
                <input
                  className="py-2 w-full pl-10 pr-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                  id="code"
                  type="text"
                  placeholder="47 boulevard saint germain"
                />
                <MapPin className=" absolute left-6  text-slate-600 mt-0.5 top-2/3 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="md:flex gap-4 w-full">
                <div className="mt-3">
                  <label className="font-semibold" htmlFor="tva">
                    Code postal
                  </label>
                  <input
                    className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                    id="kbis"
                    type="text"
                    placeholder="91120"
                  />
                </div>
                <div className="mt-3">
                  <label className="font-semibold" htmlFor="tva">
                    Ville
                  </label>
                  <input
                    className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                    id="kbis"
                    type="text"
                    placeholder="Palaiseau"
                  />
                </div>
              </div>
              <div className="md:flex gap-4 w-full">
                <div className="mt-3">
                  <label className="font-semibold" htmlFor="tva">
                    Département
                  </label>
                  <input
                    className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                    id="kbis"
                    type="text"
                    placeholder="Ile-de-France"
                  />
                </div>
                <div className="mt-3">
                  <label className="font-semibold" htmlFor="tva">
                    Pays
                  </label>
                  <input
                    className="py-2 w-full px-3 outline-none border-2 transition-all  rounded-lg bg-gray-50 border-gray-200 mt-1 focus:border-primary"
                    id="kbis"
                    type="text"
                    placeholder="France"
                  />
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

export default ProductsUpdateModel;
