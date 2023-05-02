import Calculator from "../../features/calculator/Calculator";
import ContactUS from "../../pages/ContactUS";
import OurShop from "../../pages/OurShop";
import ProductDetail from "../../pages/ProductDetail";

export const publicRoutes = [
    { path:"our-shop", element:< OurShop/>},
    { path:"product-details", element:<ProductDetail />},
    { path:"contact-us", element:<ContactUS />},
    { path:"calculator", element:<Calculator />},
]