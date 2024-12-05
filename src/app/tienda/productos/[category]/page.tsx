import { Block } from "@components/index";
import { ReactNode } from "react";

export default async function ProductCategory({
    params,
}: {
    params: { category: string }
}): Promise<ReactNode> {
    const { category } = await params;
    return (
        <main >
            <Block mt="l">
                <h1>Products of category: {category}</h1>
            </Block>
        </main>
    );
  }
  