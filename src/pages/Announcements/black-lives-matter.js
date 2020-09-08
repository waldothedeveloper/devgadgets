import React from "react"
import black_lives_matter from "../../images/black-lives-matter.jpeg"
import Transition from "../../components/Transition"
import devgadgetslogo from "../../images/logo-teal-3.svg"
import keyboard from "../../images/keyboard.gif"
import headphones from "../../images/headphones.gif"
import computer_display from "../../images/computer-display.gif"
import robot from "../../images/robot.gif"
import truck from "../../images/truck.gif"
import plug from "../../images/plug.gif"
import { Link } from "gatsby"
import useOnClickOutside from "../../hooks/use-on-click-outside"

//
const BlackLivesMattter = () => {
  const [openGadgets, setOpenGadgets] = React.useState(false)
  const [openMore, setopenMore] = React.useState(false)
  const [menuMobile, setMenuMobile] = React.useState(false)
  const ref = React.createRef()
  const ref2 = React.createRef()
  useOnClickOutside(ref, () => setOpenGadgets(false))
  useOnClickOutside(ref2, () => setopenMore(false))

  const handleGadgets = () => {
    setOpenGadgets(!openGadgets)
  }

  const handleMore = () => {
    setopenMore(!openMore)
  }

  const handleMenuMobile = () => {
    setMenuMobile(!menuMobile)
  }
  return (
    <div className="bg-cool-gray-900">
      {/* Duplicated Nav but just for this page only, once this page will not be needed, this dup navigation component will not be of any issue */}
      <div className="z-30 fixed w-full top-0 bg-cool-gray-900">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <Link to="/" className="flex">
              <img
                className="h-8 w-auto sm:h-10"
                src={devgadgetslogo}
                alt="Workflow"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={handleMenuMobile}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-teal-500 hover:bg-teal-100 focus:outline-none focus:bg-teal-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
            <nav className="flex space-x-10">
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                <button
                  ref={ref}
                  onClick={handleGadgets}
                  type="button"
                  className="group text-gray-100 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-50 focus:outline-none focus:text-gray-50 transition ease-in-out duration-150"
                >
                  <span>Gadgets</span>
                  <svg
                    className="text-gray-100 h-5 w-5 group-hover:text-gray-50 group-focus:text-gray-50 transition ease-in-out duration-150"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <Transition
                  show={openGadgets}
                  enter="transition ease-out duration-500"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div className="absolute -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                    <div className="rounded-lg shadow-lg">
                      <div className="rounded-lg shadow-xs overflow-hidden">
                        <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                            <img
                              src={keyboard}
                              alt="smart watch"
                              className="h-12 w-auto"
                            />
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                Keyboards
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                From the mechanical era to the silent
                                perfectionists.
                              </p>
                            </div>
                          </button>
                          <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                            <img
                              src={headphones}
                              alt="headphones"
                              className="h-12 w-auto"
                            />
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                Headphones
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                Can you hear me now?...Good, I was worried with
                                those headphones
                              </p>
                            </div>
                          </button>
                          <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                            <img
                              src={computer_display}
                              alt="computer display"
                              className="h-12 w-auto"
                            />
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                Monitors
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                From the iluminati visioners to the do-the-work
                                budget tight.
                              </p>
                            </div>
                          </button>
                          <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                            <img
                              src={robot}
                              alt="robot"
                              className="h-12 w-auto"
                            />
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                IOT Devices
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                Feeling lonely?...Talk to Alexa, ask Google,
                                meet Siri at the park?
                              </p>
                            </div>
                          </button>
                          <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                            <img
                              src={truck}
                              alt="truck"
                              className="h-12 w-auto"
                            />
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                Office Desk & Chairs
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                You back hurts, your elbows, your neck, your
                                body....ouch! We&apos;ve got you.
                              </p>
                            </div>
                          </button>
                          <button className="focus:outline-none -m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-teal-100 transition ease-in-out duration-150">
                            <img
                              src={plug}
                              alt="electrical plug"
                              className="h-12 w-auto"
                            />
                            <div className="space-y-1">
                              <p className="text-base leading-6 font-medium text-gray-900">
                                USB Devices
                              </p>
                              <p className="text-sm leading-5 text-gray-500">
                                In a hurry? Charge it all at once, even your hot
                                girlfriend or boyfriend.
                              </p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
              <button className="text-base leading-6 font-medium text-gray-100 hover:text-gray-50 focus:outline-none focus:text-gray-50 transition ease-in-out duration-150">
                Books
              </button>
              <button className="text-base leading-6 font-medium text-gray-100 hover:text-gray-50 focus:outline-none focus:text-gray-50 transition ease-in-out duration-150">
                Courses
              </button>
              <button className="text-base leading-6 font-medium text-gray-100 hover:text-gray-50 focus:outline-none focus:text-gray-50 transition ease-in-out duration-150">
                Lifestyle
              </button>

              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                <button
                  ref={ref2}
                  onClick={handleMore}
                  type="button"
                  className="group text-gray-100 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-50 focus:outline-none focus:text-gray-50 transition ease-in-out duration-150"
                >
                  <span>More</span>
                  {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
                  <svg
                    className="text-gray-100 h-5 w-5 group-hover:text-gray-50 group-focus:text-gray-50 transition ease-in-out duration-150"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <Transition
                  show={openMore}
                  enter="transition ease-out duration-500"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg">
                      <div className="rounded-lg shadow-xs overflow-hidden">
                        <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Blog
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Learn about tips, product updates and company
                              culture.
                            </p>
                          </button>
                          <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Help Center
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Get all of your questions answered in our forums
                              of contact support.
                            </p>
                          </button>
                          <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Guides
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Learn how to maximize our platform to get the most
                              out of it.
                            </p>
                          </button>
                          <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Events
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Check out webinars with experts and learn about
                              our annual conference.
                            </p>
                          </button>
                          <button className="-m-3 p-3 block space-y-1 rounded-md hover:bg-cool-gray-50 transition ease-in-out duration-150">
                            <p className="text-base leading-6 font-medium text-gray-900">
                              Security
                            </p>
                            <p className="text-sm leading-5 text-gray-500">
                              Understand how we take your privacy seriously.
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </nav>
          </div>
        </div>
        <Transition
          show={menuMobile}
          enter="duration-500 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg">
              <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={devgadgetslogo}
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={handleMenuMobile}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-teal-400 hover:text-teal-500 hover:bg-teal-100 focus:outline-none focus:bg-teal-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <nav className="grid gap-6">
                      <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-cool-gray-50 transition ease-in-out duration-150">
                        {/* keyboard mobile */}
                        <img
                          src={keyboard}
                          alt="smart watch"
                          className="h-12 w-auto"
                        />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Keyboards
                        </div>
                      </button>
                      <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-cool-gray-50 transition ease-in-out duration-150">
                        {/* headphones mobile */}
                        <img
                          src={headphones}
                          alt="headphones"
                          className="h-12 w-auto"
                        />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Headphones
                        </div>
                      </button>
                      <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-cool-gray-50 transition ease-in-out duration-150">
                        {/* monitors mobile */}
                        <img
                          src={computer_display}
                          alt="computer display"
                          className="h-12 w-auto"
                        />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Monitors
                        </div>
                      </button>
                      <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-cool-gray-50 transition ease-in-out duration-150">
                        {/*  IOT Devices mobile */}
                        <img src={robot} alt="robot" className="h-12 w-auto" />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          IOT Devices
                        </div>
                      </button>
                      <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-cool-gray-50 transition ease-in-out duration-150">
                        {/* Desk Chairs mobile */}
                        <img src={truck} alt="truck" className="h-12 w-auto" />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          Office Desk & Chairs
                        </div>
                      </button>
                      <button className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-cool-gray-50 transition ease-in-out duration-150">
                        {/* USB devices mobile */}
                        <img
                          src={plug}
                          alt="electrical plug"
                          className="h-12 w-auto"
                        />
                        <div className="text-base leading-6 font-medium text-gray-900">
                          USB Devices
                        </div>
                      </button>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                      Books
                    </button>
                    <button className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                      Courses
                    </button>
                    <button className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                      Lifestyle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      {/* End of Navigation component */}
      <div className="pt-16 md:pt-32 max-w-xs md:max-w-md mx-auto lg:max-w-3xl">
        <h2 className="pt-24 pb-20 text-4xl tracking-tight leading-10 font-extrabold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
          Racial <span className="text-red-600">injustice</span> should be&nbsp;
          <span className="text-blue-500">erased</span> from our nation.
        </h2>
        <div>
          <img
            className="w-full h-full object-fill"
            src={black_lives_matter}
            alt="Freedom, responsibility and a good father figure. A Seattle man
            takes to the streets to protest injustices and poor leadership
            displayed by President Trump. Taken in Seattle, WA. USA by Jose M."
          />
          <p className="mt-4 text-gray-400 text-xs">
            Freedom, responsibility and a good father figure. A Seattle man
            takes to the streets to protest injustices. &nbsp;
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://unsplash.com/@vote4jose"
            >
              Picture taken in Seattle, WA. USA by Jose M.
            </a>
          </p>
        </div>

        <p className="pt-12 text-lg text-gray-50 sm:text-md md:mt-5">
          As I shared in our Employee Town Hall last month, and in my email
          earlier this month, we are committed to take action to help address
          racial injustice and inequity, and unequivocally believe that Black
          lives matter. Below you will see many of the steps we are taking. Over
          the past several weeks, the senior leadership team, board of
          directors, and I have spent time reflecting, listening, learning, and
          discussing what role the company – and all of us collectively – must
          play in helping to drive change, both within Microsoft and in our
          communities. With significant input from employees and leaders who are
          members of the Black and African American community, we have developed
          a set of actions that we believe are both meaningful to improving the
          lived experience at Microsoft, as well as driving change in the
          communities in which we live and work. Today, we are making
          commitments to address racial injustice and inequity for the Black and
          African American community in the United States. We will additionally
          take important steps to address the needs of other communities,
          including the Hispanic and Latinx community, across the company in the
          next five years. We are focused on three multiyear, sustained efforts:
          Increasing our representation and culture of inclusion. We will build
          on our diversity and inclusion (D&I) momentum from the past five years
          by adding an additional $150M of D&I investment, and will double the
          number of Black and African American people managers, senior
          individual contributors, and senior leaders in the United States by
          2025. Engaging our ecosystem. We will use our balance sheet and
          engagement with suppliers and partners to extend the vision for
          societal change throughout our ecosystem, creating new opportunities
          for them and the communities they serve. Strengthening our
          communities. We will use the power of data, technology, and
          partnership to help improve the lives of Black and African American
          citizens across our country, including to address the safety and
          well-being of our own employees in the communities in which they live.
          Below are key details on how we will accomplish this. Our Culture We
          need to ensure that our culture of inclusion is a top priority for
          everyone. It starts with our values of respect, integrity, and
          accountability. Each of us must be able to thrive in diverse teams.
          Every manager must be able to attract, retain, and grow employees of
          all backgrounds. This is certainly true at Microsoft, and also more
          broadly. It is the new baseline for manager excellence across
          industries across the globe. We will meet this new goal in three key
          ways: We will accelerate our cultural transformation through further
          investment in inclusion. Managers who have a deep understanding and
          commitment to building inclusive culture are key to our company’s
          success. Starting in FY21, our training on allyship, covering, and
          privilege in the workplace will be required for all employees, with
          additional new content on understanding the experience of the Black
          and African American community. Because leadership sets the tone, we
          will have required live sessions for CVPs and EVPs to ensure they
          better understand the lived experience of these specific communities.
          We will strengthen our intentional career planning and talent
          development efforts. This will apply across our workforce, beginning
          with Black and African American employees. These programs will expand
          to include other employee groups as we learn and grow. We will expand
          on our leadership development programs for select Black and African
          American midlevel employees and their managers, to help prepare for
          promotion to Director/Principal. For Director/Principal level, we will
          create a new development opportunity to expose them to the leadership
          expectations of the Partner/GM level and match them with senior-level
          sponsors and mentors. For Partner/GMs, we are continuing to invest in
          the dedicated leadership development programs. We will further
          strengthen company accountability for progress on representation. We
          will deepen our practice of evaluating each CVP/GM’s progress on
          diversity and inclusion when determining their impact and rewards, as
          well as promotion considerations. We will provide CVPs with dedicated
          D&I coaches to confront and resolve systemic obstacles within their
          organizations. We will expand our global, quarterly promotion process
          to ensure we build diverse leadership teams at all levels. This will
          include direct engagement with business leaders on review of all
          candidates for people management, Director/Principal level, and
          Partner/GM level. Our Ecosystem A vast business ecosystem surrounds
          Microsoft from our supply chain to our partner community. We recognize
          that a stronger and more productive ecosystem requires better
          representation of the diversity in our communities. We will evolve our
          engagement with our supply chain, banking partners, and the broad
          Microsoft partner ecosystem in this effort. We will double the number
          of Black- and African American-owned approved suppliers over the next
          three years and spend an incremental $500M with those existing and new
          suppliers. We’ll do this by ensuring our existing guidance to include
          diverse minority-owned suppliers in all RFPs is well understood,
          evaluate supplier portfolio composition, and enhance the weighting of
          diversity characteristics (both in ownership and in broad workforce)
          during the supplier evaluation and selection process. We will also
          encourage Black and African American representation progress in our
          top 100 suppliers, which account for over 50 percent of our indirect
          spend, by requesting annual disclosure of their diversity profile
          information (e.g., workforce diversity, goals) that we will
          incorporate into our RFP evaluations. We will use our own banking
          needs to grow our portfolio investment activity with Black- and
          African American-owned financial institutions. Over the next three
          years, we will double the percentage of our transaction volumes
          through these Black- and African-American owned banks and external
          managers where we have existing strong banking relationships and look
          to grow that base, which provides an increased opportunity for these
          firms to attract more capital. We will create a $100M program that
          will make its initial investment in collaboration with the FDIC to
          target Minority Owned Depository Institutions (MDIs), which directly
          enables an increase of funds into local communities (businesses,
          restaurants, housing, etc.). And, we will establish a $50M investment
          fund focused on supporting Black- and African American-owned small
          businesses. The fund will initially focus on investing to improve
          access to capital, increase skill development, and reduce the
          technology gaps that exist today. We know how important partners are
          to the growth of our business. We look forward to investing to
          increase the number of Black- and African American-owned partners in
          our US partner community by 20 percent over the next three years. A
          new $50M partner fund will help with access to capital providing loans
          to support these partners through their startup phase with the loans
          recovered over time as their business grows. We will provide $20M of
          financing to existing and new partners to support their cashflow
          needs. And, we will invest an additional $3M in training programs
          covering financial management, tech solutions, and go-to-market
          readiness. Our Communities No company can change the world by itself.
          But we believe that Microsoft can put the power of data, technology,
          and partnership to work to help improve the lives of Black and African
          American citizens across our country. That’s what we’re committed to
          doing, through a four-part effort. We will strengthen and expand our
          existing justice reform initiative with a five-year, $50 million
          sustained effort. Since starting this work in 2017, we’ve come to
          appreciate the importance of this issue not only to the nation, but to
          the personal lives of our employees and their families. No one should
          have to live with the fear of being stopped by the police, harassed
          while shopping, or bullied in school because of the color of their
          skin. This conviction has led us to do increasing work advocating both
          in the Puget Sound and nationally, including in the communities where
          our employees live.We will build on this foundation by using data and
          digital technology toward increased transparency and accountability in
          our justice system. All this work will be backed by public policy
          advocacy that will increase access to data to identify racial
          disparities and improve policing. We’ll also use our technology and
          expertise to support evidenced-based and unbiased diversion programs
          that direct people into treatment alternatives instead of
          incarceration. We’ll also use data to promote racial equity in the
          decisions made by prosecutors, including decisions about who to charge
          with a crime, the nature of the charge, plea offers, and sentencing
          recommendations. We will expand our skills work to help Black and
          African American students and adults develop the skills needed to
          succeed in the digital economy. Over the next five years, we will
          expand in 13 states and the District of Columbia the Microsoft TEALS
          industry volunteer program to bring computer science education to an
          additional 620 high schools primarily serving Black and African
          American students. We will also strengthen Microsoft’s support for
          Historically Black Colleges and Universities, including in computer
          and data science programs, campus initiatives and partnerships, and
          curriculum development. Finally, we’ll offer digital skills training
          to Black and African American adults seeking new jobs. As part of a
          global skilling initiative, we will provide $5 million in cash grants
          to community-based nonprofit organizations led by and serving
          communities of color, enabling them to better support digital skills
          programs. We will help expand access to broadband and devices for
          communities of color and the key institutions that support them in
          major urban centers, by working with carriers, OEMs, our own hardware
          team, refurbishers, and nonprofits to enrich low-cost broadband access
          by providing affordable PCs and Microsoft software. We’ll work to
          ensure these services can be put to effective use to improve people’s
          lives, with a focus on telehealth services and educational offerings.
          Backed by public advocacy, we’ll start by focusing on six cities that
          currently confront the largest urban broadband gaps. Finally, we will
          increase technology support for nonprofits that support and are led by
          people of color. We will help support the digital transformation that
          we know from experience can make nonprofits more effective. We’ll
          provide access to Azure and Dynamics credits and financial grants that
          will enable these organizations to add the IT staff needed to better
          deploy and maximize technology. We look forward to tapping into the
          knowledge and expertise of our own employees as we identify effective
          groups we can support more strongly. Change begins by looking inward.
          We expect this change in ourselves. Employees expect this change from
          their leaders. Our customers and partners expect this change from
          Microsoft. And the world demands this change. This is not a one-time
          event. It will require real work and focus. We will listen and learn.
          We will take feedback and we will adjust. But it starts with each of
          us making a commitment to do the work, to help drive change, and to
          act with intention. Satya Learn more about on our ongoing commitment
          to Diversity & Inclusion in our 2019 D&I Report.
        </p>
        <p className="mt-12 text-lg text-gray-50 sm:text-md md:mt-5">Satya</p>
      </div>
    </div>
  )
}
export default BlackLivesMattter
