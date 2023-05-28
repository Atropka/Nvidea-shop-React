import { useParams } from "react-router-dom";

function ProductPage(props) {
  const { id } = props.match.params.id;
  console.log("Lox");
  // Здесь вы можете использовать id для получения информации о товаре из вашего источника данных (например, из базы данных или API)

  return <div className="product-page">1111111111111111111111111111</div>;
}

export default ProductPage;
