export const ProductService = {
  getProductsData() {
    return [
      {
        device_name: "iPhone 14",
        vpn_protocol: "Wireguard",
        is_active: true,
      },
      {
        device_name: "iPhone 12",
        vpn_protocol: "OpenVPN",
        is_active: false,
      },
    ];
  },

  getProductsWithOrdersData() {
    return [
      {
        device_name: "iPhone 12",
        vpn_protocol: "Wireguard",
        is_active: true,
      },
      {
        device_name: "iPhone 14",
        vpn_protocol: "OpenVPN",
        is_active: false,
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};

export const UserService = {
  getUserData() {
    return {
      title: "Arnold Conap",
    };
  },
};

export const ServerService = {
  getServerData() {
    return {
      distro_name: "Ubuntu",
      distro_version: "22.04",
      kernel_version: "5",
      last_update: " 22-03-12 20:30",
    };
  },
};
