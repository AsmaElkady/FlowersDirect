import { editCategory, fetchCategory } from "../../../redux/slices/category";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { AddCategorySchemaType } from "../../../utils/schema";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import type { AppDispatch } from "../../../redux/store";
// import { useNavigate } from "react-router";
import { addCategorySchema } from "../../../utils/schema/addCategorySchema";

interface prop {
  id: number;
  name: string;
  des: string;
  img: string | undefined;
}
export default function EditCategoryDB({ id, name, des, img }: prop) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  // const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddCategorySchemaType>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      name: name,
      description: des,
      image: img,
    },
    mode: "onBlur",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = async (data: AddCategorySchemaType) => {
    try {
      await dispatch(editCategory({ id, category: data })).unwrap();

      Swal.fire({
        title: "Edit!",
        text: "Category has been edit successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        dispatch(fetchCategory());
        // navigation("/dashboard/category");
        reset();
      });
      handleClose();
    } catch {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while adding the category.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Button
        title="Edit"
        className="text-primary bg-transparent border-0 m-0 p-0"
        onClick={handleShow}
      >
        <i className="bi bi-pencil-square"></i>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Rose"
                {...register("name")}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write a short description..."
                {...register("description")}
              />
              {errors.description && (
                <small className="text-danger">
                  {errors.description.message}
                </small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.com/image.png"
                {...register("image")}
              />
              {errors.image && (
                <small className="text-danger">{errors.image.message}</small>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
