import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a969b305-2709-49c9-8f5b-b1bcd01d2238-uspbdk.png",
  "https://utfs.io/f/be871ffb-be68-4633-bb45-4b121e626e27-1d.png",
  "https://utfs.io/f/4765bab7-eee0-404d-bb4b-f427c56b06e8-1e.png",
  "https://utfs.io/f/efc6d006-270e-4e8c-8087-07b5911eadb8-1f.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {mockImages.map(image => (
          <div key={image.id} className="w1/2 p-4">
             <img src={image.url} />
            </div>
        )) }
      </div>
    </main>
  );
}
