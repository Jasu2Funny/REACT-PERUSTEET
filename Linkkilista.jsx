const Linkkilista = ({ lista }) => {
  return (
    <ul>
      {lista.map(linkki => (
        <li key={linkki.id}>
          <a href={linkki.url}>
            {linkki.nimi}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Linkkilista;