import React from "react";
import "../stylesheets/Presentation.css";

function Presentation() {
  const database = [
    {
      image: "1",
      name: "Antonio García",
      country: "Spain",
      position: "Ingeniero de Software",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus eu lacus tincidunt congue vel sit amet tellus. Duis venenatis massa ut vestibulum cursus. Cras ornare, libero sed laoreet congue, orci libero placerat orci, vel elementum nunc libero nec urna. Integer fringilla convallis sapien, at porttitor enim suscipit ac. Maecenas in ultrices nibh. Vestibulum dui ipsum, accumsan in nunc ac, blandit sollicitudin leo. Vestibulum feugiat ex vitae sem mollis, tincidunt congue ex pellentesque.",
    },
    {
      image: "2",
      name: "Miguel Tomás",
      country: "Andorra",
      position: "Agente de atención al cliente",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus eu lacus tincidunt congue vel sit amet tellus. Duis venenatis massa ut vestibulum cursus. Cras ornare, libero sed laoreet congue, orci libero placerat orci, vel elementum nunc libero nec urna. Integer fringilla convallis sapien, at porttitor enim suscipit ac. Maecenas in ultrices nibh. Vestibulum dui ipsum, accumsan in nunc ac, blandit sollicitudin leo. Vestibulum feugiat ex vitae sem mollis, tincidunt congue ex pellentesque.",
    },
    {
      image: "3",
      name: "Jesús Maldonado",
      country: "Argentina",
      position: "Futbolista",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus eu lacus tincidunt congue vel sit amet tellus. Duis venenatis massa ut vestibulum cursus. Cras ornare, libero sed laoreet congue, orci libero placerat orci, vel elementum nunc libero nec urna. Integer fringilla convallis sapien, at porttitor enim suscipit ac. Maecenas in ultrices nibh. Vestibulum dui ipsum, accumsan in nunc ac, blandit sollicitudin leo. Vestibulum feugiat ex vitae sem mollis, tincidunt congue ex pellentesque.",
    },
  ];
  return database.map((element, index) => {
    return (
      <div className="card_container">
        <img
          className="presentation_image"
          src={require(`../images/portrait${element.image}.jpg`)}
          alt="imagen presentacion"
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
