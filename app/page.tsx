/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover"> 
        <h1 className="title">(initial) D lovers</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/trueno.png" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Introduction</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Some more info</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/nsx.png" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Some text</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          incidunt! Eius iste omnis unde maxime ut quidem. Eos, dolore
          repellendus ipsum voluptas possimus et dicta at ad nihil sit officiis!
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="/fc.png" alt="image01" />
          <img className="gallery-image" src="/fd.png" alt="image01" />
          <img className="gallery-image" src="/nsx.png" alt="image01" />
          <img className="gallery-image" src="/preview_original.jpg" alt="image01" />
          <img className="gallery-image" src="/trueno.png" alt="image01" />
          <img className="gallery-image" src="/ugliest.png" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our clients</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/hojo.png" alt="avatar" />
            <h3 className="card-name">Go Hojo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/takumi.png" alt="avatar" />
            <h3 className="card-name">Fujiwara Takumi</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/takahashi.png" alt="avatar" />
            <h3 className="card-name">Takahashi Keisuke</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/takahashi1.png" alt="avatar" />
            <h3 className="card-name">Takahashi Ryosuke</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
