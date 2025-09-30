export type Artist = {
  id: number;
  name: string;
  genre?: string;
};

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: "The Weeknd",
    genre: "R&B/Soul",
  },
  {
    id: 2,
    name: "Daft Punk",
    genre: "Electrónica/Funk/Disco/House/Techno/Rock",
  },
  {
    id: 3,
    name: "Dua Lipa",
    genre: "Pop",
  },
  {
    id: 4,
    name: "Bruno Mars",
    genre: "Pop/R&B/Funk/Reggae/Rock/hip-hop",
  },
  {
    id: 5,
    name: "Harry Styles",
    genre: "Pop/Glam Rock/Soft Rock",
  },
];

export function getArtists(search = ""): Artist[] {
  const query = search.toLowerCase().trim();

  if (!query) {
    return ARTISTS;
  }

  return ARTISTS.filter((artist) => {
    const searchableFields = [artist.name, artist.genre ?? ""];

    return searchableFields.some((field) =>
      field.toLowerCase().includes(query)
    );
  });
}

export function getArtistById(id: number): Artist | null {
  const artist = ARTISTS.find((artist) => artist.id === id);
  return artist ?? null;
}
