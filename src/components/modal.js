import { Input, Modal, Text, Button } from "@nextui-org/react"
import React from "react"


export default function MyModal(props) {

    return (
        <div>
            <Modal
                closeButt
                aria-labelledby="modal-title"
                open={props.visible}
                onClose={props.closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        update Item
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="title"
                        onChange={(e) => {
                            e.preventDefault()
                            props.setNewTitle(e.target.value)
                        }}

                    />

                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="description"

                        onChange={(e) => {
                            e.preventDefault()
                            props.setNewDescription(e.target.value);
                        }}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" color="primary" auto flat size="xs" onPress={() => props.updateTodo(props.id)}>
                        update
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )

}