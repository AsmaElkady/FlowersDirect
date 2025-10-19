import { Form } from "react-bootstrap"

function BasicDetails({ form, handleChange }: any) {
  return (
    <>
      <h4 className="mb-3">Basic Details</h4>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    name="name"
                                    value={form.name}
                                    className="w-50"
                                    placeholder="name"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="desc"
                                    value={form.desc}
                                    className="w-50"
                                    placeholder="description"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <hr />
    </>
  )
}

export default BasicDetails
