import { ReactNode } from "react";
import ProductDetailPage from "./components/ProductDetail";
import { Product } from "@modules/product/domain/Product";
import container from "@modules/DiContainer";
import { ProductRepository } from "@modules/product/domain/ProductRepository";
import { headers } from "next/headers";

export default async function ProductDetail({
    params,
}: {
    params: { productName: string }
}): Promise<ReactNode> {
    const headersList = await headers();
    const currentUrl = headersList.get('referer') || '';
    const currentPath = new URL(currentUrl).pathname;
    const { productName } = await params;
    const productRepository = container.get<ProductRepository>('ProductRepository');
    const name = decodeURIComponent(productName).replace(/-/g, ' ');
    const { products } = await productRepository.getMany({
        field: 'name',
        value: name,
        operator: 'LIKE',
        limit: 1,
      });
    const product: Product = products[0];
    return (
        <main >
           <ProductDetailPage product={product} currentPath={currentPath}/>
        </main>
    );
  }
  