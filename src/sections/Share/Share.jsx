import './Share.scss'

const Share = () => {
  return (
    <section className="share">
      <div className="share__info">
        <h2 className="share__title">
          Share your setup with
        </h2>
        <p className="share__description">
          #FuniroFurniture
        </p>
      </div>
      <div className="share__images">
        <div className="share__images-first">
          <div className="share__images-first-top">
            <img
              src="src/assets/images/share/first-column-1.jpg"
              alt=''

            />
            <img
              src="src/assets/images/share/first-column-2.jpg"
              alt=''
            />
          </div>
          <div className="share__images-first-bottom">
            <img
              src="src/assets/images/share/first-column-3.jpg"
              alt=''
            />
            <img
              src="src/assets/images/share/first-column-4.jpg"
              alt=''
            />
          </div>
        </div>
        <div className="share__images-second">
          <img
            src="src/assets/images/share/second-column.jpg"
            alt=''
          />
        </div>
        <div className="share__images-third">
          <div className="share__images-third-top">
            <img
              src="src/assets/images/share/third-column-1.jpg"
              alt=''
            />
            <img
              src="src/assets/images/share/third-column-2.jpg"
              alt=''
            />
          </div>
          <div className="share__images-third-bottom">
            <img
              src="src/assets/images/share/third-column-3.jpg"
              alt=''
            />
            <img
              src="src/assets/images/share/third-column-4.jpg"
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Share