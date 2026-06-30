import aboutImg from "../../assets/about-sports.png";

import {
  FaFutbol,
  FaTrophy,
  FaUsers,
  FaRunning,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary">TalentTrack</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-base-content/70">
            TalentTrack is a modern sports talent discovery platform connecting
            aspiring football and cricket players with academies, clubs, and
            professional talent evaluators through a transparent recruitment
            process.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            <img
              src={aboutImg}
              alt="Sports"
              className="rounded-3xl shadow-xl w-full h-[480px] object-cover"
            />
          </div>

          {/* Right */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Empowering Future Champions
            </h3>

            <p className="text-base-content/70 leading-8 mb-8">
              TalentTrack provides aspiring athletes with the opportunity to
              showcase their skills through verified talent hunt programs.
              Players can apply online, connect with leading sports academies,
              receive professional feedback, and take confident steps toward
              building a successful sports career.
            </p>

            <div className="space-y-7">

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                  <FaFutbol />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    Football & Cricket Opportunities
                  </h4>

                  <p className="text-base-content/70">
                    Explore talent hunt programs organized by top academies
                    and sports clubs.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                  <FaUsers />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    Trusted Talent Evaluators
                  </h4>

                  <p className="text-base-content/70">
                    Receive fair evaluations and professional feedback from
                    experienced coaches and recruiters.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                  <FaRunning />
                </div>

                <div>
                  <h4 className="font-bold text-xl">
                    Build Your Sports Career
                  </h4>

                  <p className="text-base-content/70">
                    Participate in competitions, improve your skills, and
                    unlock opportunities to become a professional athlete.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-5">
              <FaRunning />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Our Mission
            </h3>

            <p className="text-base-content/70">
              To create equal opportunities for talented athletes by making
              sports talent discovery accessible, transparent, and efficient.
            </p>

          </div>

          <div className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-5">
              <FaTrophy />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Our Vision
            </h3>

            <p className="text-base-content/70">
              To become Bangladesh's leading sports recruitment platform,
              connecting talented players with academies, clubs, and
              professional scouts.
            </p>

          </div>

          <div className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300">

            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-5">
              <FaUsers />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Why TalentTrack
            </h3>

            <p className="text-base-content/70">
              Verified talent hunt programs, secure applications, trusted
              evaluations, and a modern platform designed to help future
              champions succeed.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;