const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  //   {
  //     id: 1,
  //     name: "Mario José Molina-Pasquel Henríquez",
  //     profession: "chemist",
  //     accomplishment: "discovery of Arctic ozone hole",
  //     imageId: "mynHUSa",
  //   },
  //   {
  //     id: 2,
  //     name: "Mohammad Abdus Salam",
  //     profession: "physicist",
  //     accomplishment: "electromagnetism theory",
  //     imageId: "bE7W1ji",
  //   },
  //   {
  //     id: 3,
  //     name: "Percy Lavon Julian",
  //     profession: "chemist",
  //     accomplishment:
  //       "pioneering cortisone drugs, steroids and birth control pills",
  //     imageId: "IOjWm71",
  //   },
  //   {
  //     id: 4,
  //     name: "Subrahmanyan Chandrasekhar",
  //     profession: "astrophysicist",
  //     accomplishment: "white dwarf star mass calculations",
  //     imageId: "lrWQx8l",
  //   },
];

function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

export default function List() {
  // in map, always use explicit return, with a function body and a "return" keyword

  const listItems = people.map((person) => {
    // key is a special prop that React uses to keep track of lists
    // key should be unique
    // most of the time, shouldn't use index as key
    // because indexes change if order changes => keys change

    // you could only use index as key if
    // you have no other unique identifier && the list order never changes

    const { id, name, profession, accomplishment, imageId } = person;
    return (
      <li
        // we should never use Math.random() or call a function to generate the key
        // because every time the component rerenders, the functions will be triggered again
        // we will never do this
        // key={(() => {
        //   const id = uuidv4();
        //   console.log(id);
        //   return id;
        // })()}

        key={id}
      >
        {/* here we can do this, because we need the return value from the function */}
        <img src={getImageUrl(person)} alt={name} />
        <p>
          <b>{name}:</b>
          {" " + profession + " "}
          known for {accomplishment}
        </p>
      </li>
    );
  });
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

const arrFunc = () => ({
  a: "a",
});
