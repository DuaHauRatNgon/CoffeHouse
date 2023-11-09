import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../App/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardHeader
                title={product.name}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain' }}
                image={product.image}
                title={product.name}
            />
            <CardContent>
                ${(Number(product.originalPrice) / 100).toFixed(2)}
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}