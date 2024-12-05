import { useParams } from "next/navigation";

export default function ProductCategory() {
  const params = useParams();
  const { category } = params
    return (
      <div >
        <h1>Products of category: {category}</h1>
      </div>
    );
  }
  