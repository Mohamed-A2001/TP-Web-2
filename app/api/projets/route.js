export async function GET() {
  const projets = [
    {
      id: 1,
      titre: "Titre du projet 1",
      description: "Description du projet 1",
      lien: "https://projet1.fr",
      image: "/image/projet.png",
    },
    {
      id: 2,
      titre: "Titre du projet 2",
      description: "Description du projet 2",
      lien: "https://projet2.fr",
      image: "/image/projet.png",
    },
  ];

  return new Response(JSON.stringify(projets), {
    headers: { "Content-Type": "application/json" },
  });
}
