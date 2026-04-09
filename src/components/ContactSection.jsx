import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Open to opportunities and always happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
              <div className="flex items-center gap-4 justify-center lg:justify-start w-full">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail size={22} />
                </div>

                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="break-all">saumyaverma1609@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start w-full">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin size={22} />
                </div>

                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Kanpur, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/verma-saumya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-primary/10 hover:text-primary transition"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://github.com/saumya1694"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-primary/10 hover:text-primary transition"
              >
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-card/60 backdrop-blur-md border border-border rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl w-full">
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <button className="w-full cosmic-button py-3 rounded-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};