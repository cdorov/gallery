import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
