import React, { useState, useEffect } from "react";
import { ProductService  } from "../Services/DataService";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { classNames } from "primereact/utils";
import ButtonActions from "./ButtonActions.js";
import { InputSwitch } from "primereact/inputswitch";

export default function TableViewResponse() {
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState("grid");
  const setChkd = () => { 
    // Qui chiamata Api per cambiare lo stato is_active
    
    
};

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
  }, []);

  const getSeverity = (product) => {
    switch (product.is_active) {
      case true:
        return "on";

      case false:
        return "off";

      default:
        return null;
    }
  };

  const listItem = (product, index) => {
    return (
      <div className="col-12" key={product.device_name}>
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 }
          )}
        >
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-3">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">
                {product.device_name}
              </div>
              <div className="flex align-items-center gap-3">
                {product.vpn_protocol === "Wireguard" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="WireGuard"
                    role="img"
                    viewBox="0 0 512 512"
                    width="22px"
                    height="64px"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        width="512"
                        height="512"
                        rx="15%"
                        fill="#88171a"
                      ></rect>
                      <path
                        d="m238 53l35 8 0 2c-15 2-30-4-45-5 11 7 23 11 35 15-19 16-35-5-56 9 20 10 19 8 21 27-9 1-24 10-27 16 13 3 28 0 41 8-4 3-14 7-18 10 9 2 20-2 25 1 19 16 54 38 64 60 17 37-22 77-60 83-53 11-83 66-64 117 19 50 78 72 125 46 66-40 56-108 16-145-2-2-4-2-6 0-14 9-29 17-45 24 36 8 41 35 37 54-13 48-78 37-85-4-3-19 7-38 24-46 59-26 87-30 104-97 6-38-3-58-31-80-11-11-33-18-40-35-1-2 1-6 3-6 10-2 49-3 49-1 7 7 13-4 16-9-10-2-21-1-29-1-1 0-3-2-4-3 1 -1 3-2 4-2h41c0-7-9-17-18-19v3c-8 1-16-1-24-4-4-3-7-9-11-11-16-9-33-16-54-16-10 0-17 1-23 1zm74 30l3 3-4 2c-2 1-3 0-4-1-2-3 4-5 5-4zm-120 96c-54 33-51 109-3 139 4 2 6 2 8-1 12-15 23-22 36-30-25-4-38-16-37-33-4-60 83-54 74 2-2 10-8 19-16 25 27-6 47-21 55-48 2-8 2-19-2-26-30-44-75-53-115-28zm-62 195c16-7 33-10 49-13 1-13 5-26 13-36-30 0-55 20-62 49z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="OpenVPN"
                    role="img"
                    viewBox="0 0 512 512"
                    width="22px"
                    height="64px"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        width="512"
                        height="512"
                        rx="15%"
                        fill="#ffffff"
                      ></rect>
                      <path
                        fill="#036"
                        d="M315.9 261.2c0-33.6-27-60.7-60.7-60.7A60.6 60.6 0 0 0 233.8 318l-23.7 124.7h90.2l-23-124.7a61 61 0 0 0 38.6-56.7"
                      ></path>
                      <path
                        fill="#ea7e20"
                        d="M448 260.4C448 155.4 361.8 70 256 70S64 155.3 64 260.4c0 69.7 37.7 130.4 94.4 163.2l12.3-81.2A112.7 112.7 0 0 1 141 267c0-62.3 51-113.2 114-113.2 63.3 0 114.1 50.9 114.1 113.2 0 29.6-11.5 55.8-29.5 76.3l12.3 81.3c57.4-32.9 96-94.4 96-164.1"
                      ></path>
                    </g>
                  </svg>
                )}

                <span className="flex align-items-center gap-2">
                  <span className="font-semibold">{product.vpn_protocol}</span>
                </span>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center">
              <InputSwitch
                checked={product.is_active}
                onChange={(e) => setChkd(e.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (product) => {
    return (
      <div
        className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2"
        key={product.device_name}
      >
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-column align-items-center py-1">
            <div className="text-2xl font-bold text-900">
              {product.device_name}
            </div>
          </div>
          <div className="flex align-items-center justify-content-between">
            {product.vpn_protocol === "Wireguard" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="WireGuard"
                role="img"
                viewBox="0 0 512 512"
                width="22px"
                height="64px"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#88171a"></rect>
                  <path
                    d="m238 53l35 8 0 2c-15 2-30-4-45-5 11 7 23 11 35 15-19 16-35-5-56 9 20 10 19 8 21 27-9 1-24 10-27 16 13 3 28 0 41 8-4 3-14 7-18 10 9 2 20-2 25 1 19 16 54 38 64 60 17 37-22 77-60 83-53 11-83 66-64 117 19 50 78 72 125 46 66-40 56-108 16-145-2-2-4-2-6 0-14 9-29 17-45 24 36 8 41 35 37 54-13 48-78 37-85-4-3-19 7-38 24-46 59-26 87-30 104-97 6-38-3-58-31-80-11-11-33-18-40-35-1-2 1-6 3-6 10-2 49-3 49-1 7 7 13-4 16-9-10-2-21-1-29-1-1 0-3-2-4-3 1 -1 3-2 4-2h41c0-7-9-17-18-19v3c-8 1-16-1-24-4-4-3-7-9-11-11-16-9-33-16-54-16-10 0-17 1-23 1zm74 30l3 3-4 2c-2 1-3 0-4-1-2-3 4-5 5-4zm-120 96c-54 33-51 109-3 139 4 2 6 2 8-1 12-15 23-22 36-30-25-4-38-16-37-33-4-60 83-54 74 2-2 10-8 19-16 25 27-6 47-21 55-48 2-8 2-19-2-26-30-44-75-53-115-28zm-62 195c16-7 33-10 49-13 1-13 5-26 13-36-30 0-55 20-62 49z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="OpenVPN"
                role="img"
                viewBox="0 0 512 512"
                width="22px"
                height="64px"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
                  <path
                    fill="#036"
                    d="M315.9 261.2c0-33.6-27-60.7-60.7-60.7A60.6 60.6 0 0 0 233.8 318l-23.7 124.7h90.2l-23-124.7a61 61 0 0 0 38.6-56.7"
                  ></path>
                  <path
                    fill="#ea7e20"
                    d="M448 260.4C448 155.4 361.8 70 256 70S64 155.3 64 260.4c0 69.7 37.7 130.4 94.4 163.2l12.3-81.2A112.7 112.7 0 0 1 141 267c0-62.3 51-113.2 114-113.2 63.3 0 114.1 50.9 114.1 113.2 0 29.6-11.5 55.8-29.5 76.3l12.3 81.3c57.4-32.9 96-94.4 96-164.1"
                  ></path>
                </g>
              </svg>
            )}
            <span className="text-2xl font-semibold">
              {product.vpn_protocol}
            </span>
            <InputSwitch
              checked={product.is_active}
              onChange={(e) => setChkd(e.value)}
            />
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product, layout, index) => {
    if (!product) {
      return;
    }

    if (layout === "list") return listItem(product, index);
    else if (layout === "grid") return gridItem(product);
  };

  const listTemplate = (products, layout) => {
    return (
      <div className="grid grid-nogutter">
        {products.map((product, index) => itemTemplate(product, layout, index))}
      </div>
    );
  };

  const header = () => {
    return (
      <div className="flex justify-content-end">
        <DataViewLayoutOptions
          layout={layout}
          onChange={(e) => setLayout(e.value)}
        />
      </div>
    );
  };

  return (
    <div className="card">
      <ButtonActions />
      <DataView
        value={products}
        listTemplate={listTemplate}
        layout={layout}
        header={header()}
      />
    </div>
  );
}
