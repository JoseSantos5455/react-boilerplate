import Profile from "./Profile";

// we are destructuring the props object
// please never do
// 1. function Gallery({props}) {}

export default function Gallery({ person }) {
  // const { a, b, c, person } = props;

  return (
    <section>
      <h3>{person.name}'s Todos</h3>
      <div>Amazing scientists</div>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
