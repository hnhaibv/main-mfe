import useStore from "src/redux/hooks/useStore";

const Home = () => {
  const { decrementCounter } = useStore();
  return (
    <div>
      <button onClick={decrementCounter}>Set Count --</button>
    </div>
  );
};

export default Home;
