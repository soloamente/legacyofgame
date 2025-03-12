export type TeamPerson = {
  name: string;
  role: string;
  img: string;
  color: string;
};

export function TeamSlides({ images }: { images: string[] }) {
  if (images.length < 4) return <p>Carica almeno 4 immagini!</p>;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Immagine principale (titolo) - torna alla dimensione originale */}
      <img
        src={images[0]}
        className="w-64 h-auto object-contain"
        style={{ opacity: 0.2 }}
        alt="Titolo"
      />

      {/* Tre immagini sotto, una accanto all'altra - dimensioni aumentate */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-=18xl">
        <img
          src={images[1]}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          style={{ opacity: 0.2 }}
          alt="Membro 1"
        />
        <img
          src={images[2]}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          style={{ opacity: 0.4 }}
          alt="Membro 2"
        />
        <img
          src={images[3]}
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          style={{ opacity: 0.4 }}
          alt="Membro 3"
        />
      </div>
    </div>
  );
}
