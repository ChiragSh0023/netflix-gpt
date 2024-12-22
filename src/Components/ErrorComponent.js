const ErrorComponent = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div>
        <img
          src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
          alt="something-is-lost"
          className="h-[50vh]"
        />
      </div>
      <div className="font-metropolis">
        <h1 className="text-xl md:text-3xl text-center m-3">
          Oops, looks like the page is lost.
        </h1>
        <div className="text-lg text-center md:text-[22px]">
          <p className="w-[80%] md:w-[60%] m-auto">
            It seems that access to our movie database is restricted on your
            current network. Please try using a different internet service
            provider or a VPN to continue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
