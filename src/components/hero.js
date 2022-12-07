import { Input, Grid, Image, Card, Spacer, Text, Row, Textarea, Container } from "@nextui-org/react"

export const Hero = () => {
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
                        />
                        <Spacer y={3} />
                        <Textarea
                          underlined
                            aria-label="description"
                            color="primary"
                            placeholder="productDescription"
                            name="description"
                        />
                        <Row></Row>
                    </Card.Body>
                    <Card.Footer>

                    </Card.Footer>

                </Card>


            </Grid>



        </Grid.Container>
        </Container>
    )
}