import { useEffect, useState } from "react"
import axios from "axios";
import { Modal, Grid, Card, Button, Text, Row, Input, Container } from "@nextui-org/react";
import React from "react";
export const Todo = () => {

  const [todoList, setTodoList] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const getTodos = () => {
    axios.get("http://localhost:3001/todos").then((response) => {
      console.log(response.data)
      setTodoList(response.data)
    })
  }

  useEffect(() => {
    getTodos()
  }, [])

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
    getTodos()
    window.location.reload()
  }


  const updateTodo = (id) => {
    axios.put(`http://localhost:3001/update/${id}`, {
      title: newTitle,
      description: newDescription,
      
    })
    getTodos()
    window.location
  }

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  

  return (
    <Container lg>
      <div justify="center" >

        <Grid.Container gap={2}>

          {todoList.map((val, key) => (
            <Grid key={key} lg={4} sm={4} md={4}>
              <Card css={{ padding: "$13" }}>
                <Card.Header>
                  Title: <Text b>{val.title}</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>

                  <Text>
                    Description: {val.description}
                  </Text>

                </Card.Body>
              




                    <Modal
                      closeButt
                      aria-labelledby="modal-title"
                      open={visible}
                      onClose={closeHandler}
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
                            setNewTitle(e.target.value)
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
                            setNewDescription(e.target.value);
                          }}
                        />

                      </Modal.Body>
                      <Modal.Footer>
                        <Button color="primary" auto flat size="xs" onPress={() => updateTodo(val._id)}>
                          update
                        </Button>

                      </Modal.Footer>
                    </Modal>
                 
                 



                <Card.Footer>
                  <Row justify="flex-end">

                    <Button auto color="primary" flat size="xs" shadow onPress={handler}>
                      update
                    </Button>
                    <Button color="error" flat size="xs" onPress={() => deleteTodo(val._id)}>delete</Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>

            
          ))}

        </Grid.Container>

      </div>
    </Container>
  )
}


