import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  'https://utfs.io/f/Gj6Se8vrspT3qgLkcF3dylueAsCvYn07LDzkZfqU1bNoPVtw',
  'https://utfs.io/f/Gj6Se8vrspT3qgLkcF3dylueAsCvYn07LDzkZfqU1bNoPVtw',
  'https://utfs.io/f/Gj6Se8vrspT3qgLkcF3dylueAsCvYn07LDzkZfqU1bNoPVtw',
  'https://utfs.io/f/Gj6Se8vrspT3qgLkcF3dylueAsCvYn07LDzkZfqU1bNoPVtw'
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
