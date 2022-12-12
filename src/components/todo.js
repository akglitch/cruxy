import { useEffect, useState } from "react"
import axios from "axios";
import { Grid ,Card,Button,Text,Row} from "@nextui-org/react";

 export const Todo = () => {

    const [todoList, setTodoList] = useState([])

    const getTodos = () => {
      axios.get("http://localhost:3001/todos").then((response) =>{
        console.log(response.data)
          setTodoList(response.data)
      })
    }

    useEffect(()=> {
       getTodos()
    }, [])

    const deleteTodo = (id) =>{
      axios.delete(`http://localhost:3001/delete/${id}`)
      getTodos()
      window.location.reload()
    }


    return(
        <div>
           <Grid.Container gap={2}>
      
        {todoList.map((val,key) =>  ( 
          <Grid key={key} sm={6} md={6}>    
            <Card css={{ mw: "500px" }}>
          <Card.Header>
            <Text b>{val.title}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              {val.category}
            </Text>
            <Card.Divider />
            <Text>
              {val.description}
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
            update
              </Button>
              <Button size="sm" onPress={() => deleteTodo(val._id)}>delete</Button>
            </Row>
          </Card.Footer>
        </Card>
</Grid>
        ))}
        
        </Grid.Container>
        </div>
    )
}


