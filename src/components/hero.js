import { Input, Grid, Image, Button, Card, Spacer, Text, Row, Textarea, Container } from "@nextui-org/react"
import { useState } from "react"

import axios from "axios";



export const Hero = () => {




    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productDescription, setProductDescription] = useState('')

    const addToList = () => {
        axios.post("http://localhost:3001/post", {
            name: productName,
            category: productCategory,
            price: productPrice,
            description: productDescription,
        })
    }


    return (
        <Container>
            <Grid.Container>

                <Grid xs={12} sm={6} md={6} lg={6}>
                    <Image
                        src="form.svg"
                        css={{ borderRadius: "$2xl" }}
                        alt={"con"}
                    />
                </Grid>


                <Grid xs={12} sm={6} md={6} lg={6} justify={"center"} >

                    <Card css={{ p: "$6", padding: "$10", marginTop: "$28", mw: "650px" }}
                        variant={"bordered"}>

                        <Card.Header>
                            <Text b color="primary" id="Card-title" size={18} justify={"center"}>
                                Enter product details
                            </Text>
                        </Card.Header>
                        <Card.Body>
                            <Input
                                aria-label="name"
                                clearable
                                underlined
                                required
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Name"
                                name="product_name"
                                onChange={(e) => {
                                    setProductName(e.target.value);
                                }}
                            />
                            <Spacer y={3} />
                            <Input
                                aria-label="cagegory"
                                clearable
                                required
                                underlined
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Category"
                                name="product_category"
                                onChange={(e) => {
                                    setProductCategory(e.target.value);
                                }}
                            />
                            <Spacer y={3} />
                            <Input
                                aria-label="price"
                                clearable
                                required
                                underlined
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Price"
                                name="product_price"
                                onChange={(e) => {
                                    setProductPrice(e.target.value);
                                }}
                            />
                            <Spacer y={3} />
                            <Textarea
                                underlined
                                aria-label="description"
                                color="primary"
                                placeholder="productDescription"
                                name="description"
                                onChange={(e) => {
                                    setProductDescription(e.target.value);
                                }}
                            />
                            <Row></Row>
                        </Card.Body>
                        <Card.Footer>
                            <Button auto color="gradient" rounded bordered onClick={addToList}>Add to List</Button>
                        </Card.Footer>

                    </Card>


                </Grid>



            </Grid.Container>
        </Container>
    )
}