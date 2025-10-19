import { useSelector } from "react-redux";
import { useAppDispatch, type AppDispatch, type RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { Product } from "../../../../classes/productClass";
import { productColumns } from "./components/productColumns";
import DataTableComponent from "../../../../components/Table/SortTable/DataTableComponent";
import Swal from "sweetalert2";

function ProductListAdmin() {
  const dispatch = useAppDispatch<AppDispatch>();
  const { items: products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(Product.getProducts());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4e0629",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(Product.deleteProduct(id));
        Swal.fire({
          title: "Deleted!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <>
      <div className="p-3">
        <h3 className="mb-3">All Products</h3>

        {loading && <p>Loading products...</p>}
        {error && <p className="text-danger">Error: {error}</p>}

        <DataTableComponent
              columns={productColumns(handleDelete)}
              data={products}
              title="Products"
              loading={false}
            />
      </div>
    </>
  )
}

export default ProductListAdmin
