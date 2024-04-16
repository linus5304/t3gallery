import Link from "next/link";
import { db } from "../server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/a969b305-2709-49c9-8f5b-b1bcd01d2238-uspbdk.png",
  "https://utfs.io/f/be871ffb-be68-4633-bb45-4b121e626e27-1d.png",
  "https://utfs.io/f/4765bab7-eee0-404d-bb4b-f427c56b06e8-1e.png",
  "https://utfs.io/f/efc6d006-270e-4e8c-8087-07b5911eadb8-1f.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map(post => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
