// import DataTable from "react-data-table-component";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, RootState } from "../../../redux/store";
// import Button from "react-bootstrap/Button";
// import Swal from "sweetalert2";
// import {
//   AddCategory,
//   deleteCategory,
//   fetchCategory,
//   type ICategory,
// } from "../../../redux/slices/category";
// import { useEffect, useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import {
//   getSchemaData,
//   type AddCategorySchemaType,
// } from "../../../utils/schema";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Form from "react-bootstrap/Form";

// export default function CategoryDB() {
//   const dispatch = useDispatch<AppDispatch>();
//   const { category, loading } = useSelector(
//     (state: RootState) => state.Category
//   );

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   useEffect(() => {
//     dispatch(fetchCategory());
//   }, [dispatch]);

//   const { schema, defaultValues } = getSchemaData("addCategory");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<AddCategorySchemaType>({
//     resolver: zodResolver(schema),
//     defaultValues,
//   });

//   const onSubmit = async (data: AddCategorySchemaType) => {
//     try {
//       await dispatch(AddCategory({ category: data })).unwrap();
//       Swal.fire({
//         title: "Added!",
//         text: "Category has been added successfully.",
//         icon: "success",
//         timer: 1500,
//         showConfirmButton: false,
//       });
//       reset();
//       handleClose();
//     } catch {
//       Swal.fire({
//         title: "Error!",
//         text: "Something went wrong while adding the category.",
//         icon: "error",
//       });
//     }
//   };

//   const handleDelete = (id: number) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won’t be able to revert this action!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(deleteCategory(id))
//           .unwrap()
//           .then(() => {
//             Swal.fire({
//               title: "Deleted!",
//               text: "The category has been successfully deleted.",
//               icon: "success",
//               timer: 1500,
//               showConfirmButton: false,
//             });
//           })
//           .catch(() => {
//             Swal.fire({
//               title: "Error!",
//               text: "Something went wrong while deleting the category.",
//               icon: "error",
//             });
//           });
//       }
//     });
//   };

//   const columns = [
//     {
//       name: "ID",
//       selector: (row: ICategory) => row.id,
//       sortable: true,
//       width: "80px",
//     },
//     {
//       name: "Name",
//       selector: (row: ICategory) => row.name,
//       width: "150px",
//       sortable: true,
//     },
//     {
//       name: "Description",
//       selector: (row: ICategory) => row.description,
//       wrap: true,
//     },
//     {
//       name: "Image",
//       cell: (row: ICategory) => (
//         <img
//           src={row.image}
//           alt={row.name}
//           width={60}
//           height={60}
//           style={{ borderRadius: "8px", objectFit: "cover" }}
//         />
//       ),
//       width: "80px",
//     },
//     {
//       name: "Action",
//       cell: (row: ICategory) => (
//         <div className="d-flex gap-2">
//           <Button
//             variant="outline-primary"
//             size="sm"
//             onClick={() => console.log("Edit", row.id)}
//           >
//             <EditIcon fontSize="small" />
//           </Button>
//           <Button
//             variant="outline-danger"
//             size="sm"
//             onClick={() => handleDelete(row.id)}
//           >
//             <DeleteIcon fontSize="small" />
//           </Button>
//         </div>
//       ),
//       width: "150px",
//     },
//   ];

//   return (
//     <>
//       <div className="p-3">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h3 className="fw-bold text-primary">Categories</h3>
//           <Button variant="primary" onClick={handleShow}>
//             Add Category
//           </Button>
//         </div>

//         <DataTable
//           columns={columns}
//           data={category}
//           progressPending={loading}
//           pagination
//           highlightOnHover
//           striped
//           responsive
//           paginationPerPage={5}
//           paginationRowsPerPageOptions={[5, 10, 15]}
//         />
//       </div>

//       {/* Modal */}
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Category</Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Category Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="e.g., Rose"
//                 {...register("name")}
//               />
//               {errors.name && (
//                 <small className="text-danger">{errors.name.message}</small>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Write a short description..."
//                 {...register("description")}
//               />
//               {errors.description && (
//                 <small className="text-danger">
//                   {errors.description.message}
//                 </small>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Image URL</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="https://example.com/image.png"
//                 {...register("image")}
//               />
//               {errors.image && (
//                 <small className="text-danger">{errors.image.message}</small>
//               )}
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" type="submit">
//               Save
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </>
//   );
// }
