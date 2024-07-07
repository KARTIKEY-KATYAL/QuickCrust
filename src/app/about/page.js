// pages/about.js

import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - QuickCrust</title>
        <meta
          name="description"
          content="Learn more about QuickCrust, your go-to pizza delivery service for fast, fresh, and delicious pizzas."
        />
      </Head>
      <div className="max-w-3xl mx-auto p-6 font-sans">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
          About Us - QuickCrust Pizza Delivery
        </h1>
        <p className="mb-4">
          Welcome to QuickCrust, where the art of pizza meets the convenience of
          technology. Founded with a passion for delivering hot, fresh, and
          delicious pizzas straight to your door, QuickCrust is redefining the
          pizza delivery experience.
        </p>
        <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-4">
          Our Mission
        </h2>
        <p className="mb-4">
          At QuickCrust, our mission is simple: to bring the best pizza to you,
          quickly and reliably. We believe that enjoying a great pizza should be
          effortless, and we are dedicated to making that a reality. Our focus
          is on quality ingredients, speedy delivery, and exceptional customer
          service, ensuring that every slice you enjoy is perfect.
        </p>
        <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-4">
          What Sets Us Apart
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong className="text-red-600">Quality Ingredients:</strong> We
            source the freshest and finest ingredients to create pizzas that are
            not only tasty but also wholesome. From the hand-tossed dough to our
            signature sauces and premium toppings, every bite is a testament to
            our commitment to quality.
          </li>
          <li>
            <strong className="text-red-600">Speedy Delivery:</strong>{" "}
            QuickCrust leverages cutting-edge technology and a streamlined
            delivery process to ensure your pizza arrives hot and on time. Our
            user-friendly app allows you to track your order in real-time, so
            you know exactly when to expect your delicious meal.
          </li>
          <li>
            <strong className="text-red-600">Customization:</strong> We
            understand that everyone has their unique pizza preferences. That’s
            why we offer a wide range of customization options. From gluten-free
            crusts to vegan cheese and a variety of toppings, you can create
            your perfect pizza with just a few taps.
          </li>
          <li>
            <strong className="text-red-600">Sustainability:</strong> We care
            about our planet as much as we care about our pizzas. QuickCrust is
            committed to sustainable practices, from eco-friendly packaging to
            partnering with local farmers and suppliers who share our values.
          </li>
          <li>
            <strong className="text-red-600">Community Focus:</strong>{" "}
            QuickCrust is more than just a pizza delivery service; we are a part
            of your community. We actively participate in local events and
            support initiatives that make our neighborhoods better places to
            live and eat.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-4">
          Our Story
        </h2>
        <p className="mb-4">
          QuickCrust was founded by a group of pizza enthusiasts who were
          frustrated with the lack of high-quality, fast pizza delivery options.
          Combining their culinary expertise with a passion for technology, they
          set out to create a service that offers the best of both worlds. Since
          our inception, we have grown rapidly, thanks to our loyal customers
          who appreciate our dedication to excellence.
        </p>
        <h2 className="text-2xl font-semibold text-orange-500 mt-8 mb-4">
          Join the QuickCrust Family
        </h2>
        <p className="mb-4">
          Whether you’re hosting a party, craving a late-night snack, or simply
          want a hassle-free dinner, QuickCrust is here to serve you. Download
          our app today and experience the difference of pizza delivery done
          right.
        </p>
        <p className="font-semibold mt-6">
          Thank you for choosing QuickCrust. Here’s to many delicious moments
          ahead!
        </p>
        <p className="text-lg font-bold text-center text-red-600 mt-6">
          QuickCrust - Fast. Fresh. Delicious.
        </p>
      </div>
    </>
  );
};

export default About;
