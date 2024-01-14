import React from "react";

function Aboutme() {
  return (
    <div>
      <section id="about" className="about">
        <h2 className="title">
          <span>About Me</span>
        </h2>

        <div className="container flex about-content">
          <div className="my-img flex">
            <img src="src/assets/my.png" alt="Bijay" />
          </div>
          <div className="my-bio">
            <h2>Bijay Dhakal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              alias, atque doloribus id commodi delectus dolorum voluptatum,
              reprehenderit fuga ducimus fugiat nemo consectetur officia dolor
              ipsam inventore, repellat aliquam magnam.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit
              provident libero autem adipisci veritatis eos excepturi quod
              architecto, illum ea! Iusto, repellendus mollitia! Distinctio
              perspiciatis non nobis incidunt pariatur?
            </p>

            <p>Sydney, Australia</p>
            <div>
              <div className="tag">Interest</div>
              <div className="flex">
                <span> Coding </span>
                <span> Football </span>
                <span> Movies </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
