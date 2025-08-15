import React from "react";
import MyNavbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <MyNavbar />

      <div className="text-center">
        <Jumbotron />

        <div className="d-flex justify-content-center gap-4 flex-wrap my-5">
          <Card
            img="https://static.wikia.nocookie.net/sis2-mitologia/images/e/ef/Atenea.png/revision/latest?cb=20241211111600&path-prefix=es"
            title="Atenea"
            text={`Diosa griega de la sabiduría y la estrategia. Nació del pensamiento de Zeus, armada y lista para defender con inteligencia.
Atenea no solo lucha, piensa. Protege ciudades, inspira conocimiento y guía a quienes buscan verdad.`}
            buttonText="Más sobre los griegos"
            buttonUrl="#"
          />

          <Card
            img="https://orientaldanceonline.com/wp-content/uploads/2025/03/dioses-egipcios-isis-diosa-de-la-magia-la-maternidad-y-la-fertilidad.jpg"
            title="Isis"
            text={`Diosa egipcia de la magia, la maternidad y la protección.
Isis fue sanadora y hechicera, protectora de la vida eterna.
Con su sabiduría y amor reconstruyó lo imposible, guiando a quienes transforman con compasión y poder.`}
            buttonText="Más sobre los egipcios"
            buttonUrl="#"
          />

          <Card
            img="https://cdn.shopify.com/s/files/1/0261/4181/8954/files/freyja-magia.jpg?v=1652716233"
            title="Freya"
            text={`Diosa nórdica del amor, la magia y la guerra. Freya cabalga entre los vivos y los muertos, entre el deseo y el acero.
Dueña del seidr, la magia más profunda, guarda secretos de vida, muerte y placer.
Su mirada es fuego, su alma un templo de poder indomable.`}
            buttonText="Más sobre los nórdicos"
            buttonUrl="#"
          />

          <Card
            img="https://portalmitologia.com/sites/default/files/styles/twitter/public/img-mitologia/brigid-diosa-celta.jpg.webp"
            title="Brigid"
            text={`Diosa celta del fuego sagrado, la poesía y la curación. Su llama no quema, transforma.
Brígida es la chispa que da forma a la palabra, la forja y la medicina.
Donde ella pasa, florece el arte y se enciende el alma.`}
            buttonText="Más sobre los celtas"
            buttonUrl="#"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
