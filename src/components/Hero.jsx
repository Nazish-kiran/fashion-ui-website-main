import React from "react";

const Hero = () => {
  const styles = {
    tag: {
      color: "#FE6216",
      fontWeight: "bold",
    },
    heading: {
      margin: "20px 0",
    },
    text: {
      color: "#555",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#FE6216",
      color: "white",
      border: "none",
      padding: "12px 24px",
      borderRadius: "6px",
      cursor: "pointer",
    },
    stats: {
      display: "flex",
      gap: "30px",
      marginTop: "30px",
    },
  };
  return (
    <section className="flex px-5 md:px-12 lg:px-17 flex-col lg:flex-row gap-7.5">
      {/* LEFT CONTENT */}
      <div
        style={styles.left}
        className="bg-[#E5F0EC] flex flex-col justify-center px-5 items-start rounded-2xl w-full lg:w-[50%] "
      >
        <span style={styles.tag}>— FASHION STORE</span>

        <h1
          style={styles.heading}
          className="text-[31px] md:text-[40px] lg:text-[47px]"
        >
          Designed For Movement. <br />
          Built For Bold Energy.
        </h1>

        <p style={styles.text}>
          Urban fashion that doesn't follow — it leads. Own your look, your
          story, your street. Express who you are with every layer you wear.
        </p>

        <button style={styles.button}>Explore Now</button>

        <div style={styles.stats}>
          <div>
            <h3>58K+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3>120+</h3>
            <p>New Arrivals</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src="src/assets/5b6d83fd64f7e3edaadfdfae3f8892ae.jpg"
          className="w-full rounded-2xl"
          alt="fashion"
        />
      </div>
    </section>
  );
};

export default Hero;
