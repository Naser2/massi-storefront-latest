import { Region } from "@medusajs/medusa"

import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region

  
}) {
  console.log("FeaturedProducts --> COLLECTION", collections)
  console.log("CFeaturedProducts--> REGION", region)
  return collections.map((collection) => (
   collection.products.length ? <li key={collection.id}>
      <ProductRail collection={collection} region={region} />
    </li> : <li  key={collection.id}>
      NO COLLECTION YET
    </li> 
  ))
}
