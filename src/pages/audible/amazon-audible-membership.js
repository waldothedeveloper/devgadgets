import React from "react"
import audible_banner from "../../images/GiftCenter_Holiday_Hero_Amazon_DW.jpg"
import Nav from "../menu/Nav"
import Footer from "../footer/Footer"

const AmazonAudibleMembership = () => {
  return (
    <>
      <Nav role="navigation" />
      <div className="my-32 mx-auto max-w-sm md:max-w-2xl lg:max-w-3xl">
        <article className="mt-12 text-lg prose max-w-sm md:max-w-none text-cool-gray-500">
          <div className="my-8 flex justify-center items-center">
            <img
              alt="the amazon audible membership"
              className="rounded-lg shadow-lg w-auto h-auto"
              src={audible_banner}
            />
          </div>

          {/* picture of article author */}
          <div className="mt-8 md:mt-0 flex flex-col md:w-3/4">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://res.cloudinary.com/devgadgets/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1605555049/devgadgets_cloudinary/trevis24.jpg"
                alt="Trevis Peters"
              />
            </div>
            <div>
              <p className="text-sm leading-5 font-medium text-gray-900">
                Trevis Peters
              </p>
              <div className="flex text-sm leading-5 text-gray-500">
                <time dateTime="2020-11-17">November 17th, 2020</time>
              </div>
            </div>
          </div>

          <h3>Why the Amazon Audible Membership is so worthy?</h3>
          <p>
            Do you love listening to audiobooks? Then you must take a look at
            the Amazon Audible membership. Along with this subscription, you
            will be able to gain access to a massive collection of audiobooks.
            All the people who have a membership will be able to access the
            audiobooks at a discounted rate. Hence, thousands of people who go
            through audiobooks have already signed up with the Amazon Audible
            subscription.
          </p>

          <h3>What exactly can I get with my Amazon Audible membership? </h3>

          <p>
            If you are a fan of audiobooks, obtaining Amazon Audible membership
            is one of the best decisions that you can take. Even if you are new
            to audiobooks but interested in exploring them, you can purchase the
            Amazon Audible subscription. Along with the subscription, you
            instantly gain access to more than 40,000 audiobook titles. There is
            something for everyone in this collection of audiobooks.
          </p>

          <p>
            You will also be able to get a quality audiobook listening
            experience with your Amazon Audible subscription. In other words,
            all the audiobooks will offer top-notch narration along with
            incredible music. Hence, you can end up receiving a premium
            audiobook listening experience with it.
          </p>

          <p>
            Apart from Audible Originals, Amazon Audible is offering free news
            subscriptions as well. You will be able to listen to the top news
            stories from the leading newspapers such as The Washington Post, The
            Wall Street Journal, and The New York Times. On top of that, Amazon
            Audible is offering Meditation and Fitness programs as well, so take
            a look at them. The content collection of Amazon Audible offers
            content for Spanish listeners as well.
          </p>

          <div className="my-16">
            <iframe
              src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=audiblegiftmemberships&banner=0N7MX06GEHZ8430X4N82&f=ifr&lc=pf4&linkID=75e2a4f2e5e550f5a676fb836bf6c81f&t=devgadgets06-20&tracking_id=devgadgets06-20"
              width="300"
              height="250"
              scrolling="no"
              border="0"
              marginWidth="0"
              style={{
                border: "none",
              }}
              frameBorder="0"
            ></iframe>
          </div>

          <h3>What about the bonuses?</h3>

          <p>
            The Amazon Audible subscription is offering some exciting bonuses as
            well. For example, you will be able to gain access to the Audible
            Origins and free news subscriptions. They add even more value to
            your subscription. Hence, the amount of $14.95 you spend on your
            Amazon Audible subscription is worth it.
          </p>

          <h3>How to get the most out of Amazon Audible?</h3>

          <p>
            If this is the very first time that you are planning to try Amazon
            Audible, you should sign up for the free trial. This is a 30-day
            trial, where you will be able to gain comprehensive access to Amazon
            Audible. You can pick any audiobook out of the collection and listen
            for free during this trial period. You will also be able to cancel
            the trial period whenever you want.
          </p>

          <p>
            If you wish to get the most out of your Amazon Audible membership,
            let me encourage you to take a look at the secret Silver membership
            plan. The most popular is, of course, the Gold plan, which is
            available for a price of $14.95 per month. However, there is a
            silver plan at Amazon Audible as well. This silver plan is{" "}
            <span className="text-red-500 underline">not advertised.</span> You
            will be able to get credits every other month along with the silver
            plan. You should pay <span className="text-teal-500">$14.98</span>{" "}
            for two months with this plan.
          </p>

          <p>
            There are Prime Day Audible Deals available for you to grab as well.
            You should never miss those offers as they can help you to get
            maximum benefits out of your Amazon Audible subscription. Keep these
            in mind and get your Audible membership today!
          </p>

          {/* FREE TRIAL BUTTON */}
          <div>
            <div className="max-w-screen-6xl mx-auto lg:flex lg:items-center">
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href="https://amzn.to/32SK6iq"
                className="rounded-full shadow-lg flex flex-col items-center text-center px-3 pt-1 pb-2 border border-transparent text-sm font-medium text-white leading-7 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Start your 30 day free trial
              </a>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default AmazonAudibleMembership
