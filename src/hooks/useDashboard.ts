import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useMemo } from "react";

const useDashboard = () => {
  const { items: data } = useSelector((state: RootState) => state.products);
  const { category } = useSelector((state: RootState) => state.Category);
  const { users } = useSelector((state: RootState) => state.admin);
  const { orders } = useSelector((state: RootState) => state.orderSlice);
  //let noProd = [{}];
  //let noUsers = users.length;
  //let noCustomers = 0;
  const noOrders = orders.length;
  //const prodStock = [{}];
  //const revenue = 0;

  //   const { totalProds, prodStock, noUsers, noCustomers, noOrders } = useMemo(
  //     () => {
  //       const newData = new Map();
  //       data.forEach((prod) => {
  //         const val = newData.get(prod.category);
  //         newData.set(prod.category, val + 1 || 1);
  //       });
  //       //Array.from(newData.values()),
  //       //Array.from(newData.keys()),

  //       category.map((cat) =>
  //         noProd.push({
  //           name: cat.name,
  //           value: data.filter((prod) => prod.category == cat.name).length,
  //         })
  //       );

  //       data.map((prod) =>
  //         prodStock.push({ name: prod.name, value: prod.totalQuantity })
  //       );
  //     }
  //   );

  const { catProd, prodStock, noProds } = useMemo(() => {
    const newData = new Map();
    data.forEach((prod) => {
      const val = newData.get(prod.category);
      newData.set(prod.category, val + 1 || 1);
    });
    const catProd = category.map((cat) => ({
      name: cat.name,
      uv: data.filter((prod) => prod.category == cat.name).length,
    }));
    const prodStock = data.map((prod) => ({
      name: prod.name,
      category: prod.category,
      stock: prod.totalQuantity,
    }));
    const noProds = data.length;
    return { catProd, prodStock, noProds };
  }, [category, data]);

  const { noUsers, noCustomers } = useMemo(() => {
    const noUsers = users.length - 1;
    const noCustomers = new Set(orders.map((order) => order.id)).size;
    return { noUsers, noCustomers };
  }, [orders, users.length]);

  //   const getCustomerInfo = () => {
  //     //-1 for admin user
  //     noUsers = users.length - 1;
  //   };

  //   const { revenue } = useMemo(() => {
  //     //orders.map((order) => order.reduce(revenue + order.total));
  //     const revenue = orders.map((order) => order.reduce(revenue + order.total));
  //     return revenue;
  //   }, [orders]);

  //getProductsInfo();
  //getCustomerInfo();
  return {
    ProductsByCategory: catProd,
    productsStock: prodStock,
    totalCategories: category,
    totalProducts: noProds,
    totalUsers: noUsers,
    totalCustomer: noCustomers,
    orders: noOrders,
    //revenue: revenue,
  };
};
export default useDashboard;
