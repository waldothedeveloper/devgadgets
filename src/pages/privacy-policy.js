import React from "react"
import Footer from "./Footer/Footer"
import Nav from "./Menu/Nav"
import { motion } from "framer-motion"
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

//
const PrivacyPolicy = () => {
  return (
    <>
      <Nav />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1.5 }}
        className="mt-24 relative py-16 bg-white overflow-hidden"
      >
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-teal-400 sm:text-4xl sm:leading-10">
              Privacy Policy
            </h1>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p>Last Updated: Wed, Jul 29, 2020.</p>
            <h3>Use of private information policy (GDPR)</h3>
            <h5>Summary:</h5>
            <p>
              We respect the EU’s General Data Protection Regulations (GDPR) and
              this policy explains how we collect and treat any information you
              give us.
            </p>
            <p className="font-mono font-medium text-orange-500">
              By using this website you consent to this policy.
            </p>
            <h3>About Us</h3>
            <p>
              Name: <span className="text-teal-500">DevGadgets</span>
            </p>
            <button href={`mailto:contact@devgadgets.io`}>
              <span className="text-gray-500">email: {` `}</span>
              <a
                style={{ color: "#0694a2" }}
                target="_blank"
                rel="noreferrer"
                href={`mailto:contact@devgadgets.io`}
                className="font-semibold hover:underline"
              >
                contact@devgadgets.io
              </a>
            </button>

            <h3>Why we value your privacy</h3>
            <p>
              We value your privacy as much as we do our own, so we are
              committed to keeping your personal and business information safe.
              We ask for the bare minimum information from our users. We will
              never use your personal information for any reason other than why
              you gave it, and we will never give anyone access to it unless we
              are forced to by law.
            </p>

            <h3>How we collect information</h3>
            <p>
              We ask for your email address on our website so that we can send
              you our newsletter. Our website uses cookies and Google analytics
              to provide statistical information about our visitors and how they
              use our website. We do not use native social media ‘like’ or
              ‘sharing’ buttons which can build profiles of your internet
              activity.
            </p>

            <h3>What information we hold</h3>
            <ul>
              <li>
                When you contact us by email or through our website, we collect
                your name and email address, a social media username, and the
                company you work for, if you have given us that{" "}
              </li>
              <li>
                If you sign up for a newsletter, we only collect your email
                address.
              </li>
              <li>
                If you do business with us, we also collect your business name
                and bank details and keep records of the invoices we send you
                and the payments you make.
              </li>
            </ul>

            <h3>Where we store your information</h3>
            <p>
              If you sign up for a newsletter, we store your email address in{" "}
              <a
                className="font-semibold hover:underline"
                style={{ color: "#0694a2" }}
                target="_blank"
                rel="noreferrer"
                href="https://mailchimp.com/"
              >
                MailChimp
              </a>
              , which is the marketing platform we use.
            </p>

            <h3>What we use your information for</h3>
            <p>
              We use your contact information to send you news about DevGadgets,
              our products and services. When we do, you have the option to
              unsubscribe from these communications and we will not send them to
              you again. We will use your information to send you invoices,
              statements, or reminders, should that be the nature of our
              relationship.
            </p>

            <h3>The steps we take to keep your information private</h3>
            <p>
              Where we store your information in third-party services, we
              restrict access only to people who need it. We store passwords in
              an encrypted password manager. The computers we use are protected
              by a passcode or fingerprint access. These computers ask for
              authentication whenever they are started or after 5 minutes of
              inactivity. Our mobile devices are also protected by a fingerprint
              or facial recognition.
            </p>

            <h3>Third party links</h3>
            <p>
              Our website and newsletter may include links to third-party
              websites or applications. We do our best to only link to reliable
              and high quality resources, however, we are not responsible for
              their privacy and cookie policies.
            </p>

            <h3>How to complain</h3>
            <p>
              We take complaints very seriously. If you have any reason to
              complain about the ways we handle your privacy, please contact us
              by email at{" "}
              <a
                style={{ color: "#0694a2" }}
                target="_blank"
                rel="noreferrer"
                href={`mailto:contact@devgadgets.io`}
                className="font-semibold hover:underline"
              >
                contact@devgadgets.io
              </a>
              .
            </p>

            <h3>Changes to the policy</h3>
            <p>
              If we change the contents of this policy, those changes will
              become effective the moment we publish them on our website.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
