import React from "react";

const Hero = () => {
  return (
    <>
      <section className="seccion">
        <article>
          <time datetime="06-10-2020">Publicado 06-10-2020</time>

          <hgroup>
            <h2>Titulo uno</h2>
            <h3>Subtitulo uno</h3>
            <img className="imagenuno" src="streamsChafa.png" alt="img" />
          </hgroup>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            sequi odio animi incidunt modi esse pariatur nulla doloremque sunt
            repellat alias error ullam, adipisci fuga delectus totam! Saepe,
            reprehenderit autem?
          </p>

          <footer>
            <p>Comentarios (0)</p>
          </footer>
          <address></address>
        </article>

        <article>
          <time datetime="08-10-2020">Publicado 08-10-2020</time>

          <hgroup>
            <h2>Titulo dos</h2>
            <h3>Subtitulo dos</h3>
            <img className="imagendos" src="streamsChafa.png" alt="img" />
          </hgroup>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, officiis. Ipsa cupiditate mollitia numquam. Est quam
            odit alias nisi debitis similique porro, autem temporibus adipisci
            illo, possimus atque velit laboriosam!
          </p>
          <footer>
            <p>Comentario (0)</p>
          </footer>
        </article>
      </section>

      <aside className="columna">
        <blockquote cite="http://instagram.com/ElChafa">Mensaje 1</blockquote>
        <blockquote cite="http://twitch.com/ElChafa">Mensaje 2</blockquote>
      </aside>
    </>
  );
};

export default Hero;
