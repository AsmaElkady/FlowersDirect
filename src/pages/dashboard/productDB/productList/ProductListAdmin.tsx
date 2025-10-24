import { useSelector } from "react-redux";
import { useAppDispatch, type AppDispatch, type RootState } from "../../../../redux/store";
import { useEffect, useState} from "react";
import { Product } from "../../../../classes/productClass";
import { productColumns } from "./components/productColumns";
import DataTableComponent from "../../../../components/Table/SortTable/DataTableComponent";
import Swal from "sweetalert2";
import type { IProduct } from "../../../../Types/productType";
import EditProductModal from "./components/EditProductModal";

function ProductListAdmin() {
  const dispatch = useAppDispatch<AppDispatch>();
  const { items: products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const [data, setData] = useState<IProduct[]>([]);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  useEffect(() => {
    dispatch(Product.getProducts());
  }, [dispatch]);

  useEffect(() => {
    setData(products);
  }, [products]);

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

  const handleEdit = (product: IProduct) => {
    setSelectedProduct(product);
    setShowEdit(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchValue: boolean;
    let idValue: boolean;
    let nameValue: boolean;
    let categoryValue: boolean;
    let priceValue: boolean;
    let quantityValue: boolean;

    const newRows = products.filter((row) => {
      idValue = row.id?.toString().toLowerCase().includes(e.target.value.toLowerCase()) ?? false;
      nameValue = row.name?.toLowerCase().includes(e.target.value.toLowerCase()) ?? false;
      categoryValue = row.category?.toLowerCase().includes(e.target.value.toLowerCase()) ?? false;
      priceValue = row.price?.toString().toLowerCase().includes(e.target.value.toLowerCase()) ?? false;
      quantityValue = row.totalQuantity
        ?.toString()
        .toLowerCase()
        .includes(e.target.value.toLowerCase()) ?? false;

      if (idValue) searchValue = idValue;
      else if (nameValue) searchValue = nameValue;
      else if (categoryValue) searchValue = categoryValue;
      else if (priceValue) searchValue = priceValue;
      else searchValue = quantityValue;

      return searchValue;
    });

    setData(newRows);
  };

  return (
    <>
      <div className="p-3">
        <h3 className="mb-3">All Products</h3>

        {loading && <p>Loading products...</p>}
        {error && <p className="text-danger">Error: {error}</p>}

        <DataTableComponent
              columns={productColumns(handleDelete , handleEdit)}
              data={data}
              title="Products"
              loading={false}
              handleSearch={handleSearch}
            />

       {selectedProduct && (
        <EditProductModal
          show={showEdit}
          handleClose={() => setShowEdit(false)}
          product={selectedProduct}
        />
      )}    
      </div>
    </>
  )
}

export default ProductListAdmin
