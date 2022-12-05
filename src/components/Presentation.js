import "../stylesheets/Presentation.css";
import database from "./Database";

function Presentation() {
  return database.map((element, index) => {
    return (
      <div className="card_container">
        <img
          className="presentation_image"
          src={require(`../images/portrait${element.image}.jpg`)}
          alt={`imagen de ${element.name}`}
        />
        <div className="presentation_container">
          <p className="presentation_name">
            {element.name} - {element.country}
          </p>
          <p className="presentation_position">{element.position}</p>
          <p className="presentation_description">{element.description}</p>
        </div>
      </div>
    );
  });
}

export default Presentation;
