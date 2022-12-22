import { useEffect, useState } from "react"
import axios from "axios";
import {  Grid, Card, Button, Text, Row, Container } from "@nextui-org/react";
import React from "react";
import MyModal from "./modal";
export const Todo = () => {

  const [todoList, setTodoList] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [id, setId] = useState('')

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
   
    closeHandler()
    axios.put(`http://localhost:3001/update/${id}`, {
      title: newTitle,
      description: newDescription,
    })
    getTodos()
    window.location.reload()
  }

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  function closeHandler() {
    setVisible(false);
    console.log("closed");
  };



  return (
    <Container lg>
    <MyModal updateTodo={updateTodo} handler={handler} visible={visible} closeHandler={closeHandler} setNewTitle={setNewTitle} setNewDescription={setNewDescription} id={id} />
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

                <Card.Footer>
                  <Row justify="flex-end">

                    <Button auto color="primary" flat size="xs" shadow onPress={() => { setId(val._id); handler() }}>
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


