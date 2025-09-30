"use client";

import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  genre?: string;
};

export default function ArtistCard({
  id,
  name,
  genre
}: Props) {
  return (
    <article className="rounded-lg border border-gray-200 p-4">
      <h3 className="mb-1 text-lg font-semibold">
        <Link
          to={`/artists/${id}`}
          aria-label={`Ver detalle de ${name}`}
          className="text-pink-300 hover:underline"
        >
          {name}
        </Link>
      </h3>
      <p className="text-sm text-pink-800">{genre ?? "—"}</p>
    </article>
  );
}