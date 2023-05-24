const Secondblob = () => {
  return (
    <div className="w-full bg-white py-36">
      <div className="flex justify-evenly m-16">
        <div className="text-gray-800 w-40">
          <img src="/src/images/icon1.png" alt="Icon 1" />
          <h2 className="text-2xl font-bold">Declarative</h2>
          <p> React makes it painless to create interactive UIs. </p>
        </div>
        <div className="text-gray-800 w-40">
          <img src="/src/images/icon2.png" alt="Icon 1" />
          <h2 className="text-2xl font-bold">Components</h2>
          <p>Build encapsulated components manage their state. </p>
        </div>
        <div className="text-gray-800 w-40">
          <img src="/src/images/icon3.png" alt="Icon 1" />
          <h2 className="text-2xl font-bold">Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="text-gray-800 w-40">
          <img src="/src/images/icon4.png" alt="Icon 1" />
          <h2 className="text-2xl font-bold">JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
};

export default Secondblob;
