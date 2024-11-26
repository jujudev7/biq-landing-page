import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-yellow-300 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4 transform -rotate-12">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative">
                    <Image
                      src="/placeholder.svg"
                      alt="Book mockup"
                      width={300}
                      height={400}
                      className="shadow-lg rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold mb-6">
                LOREM IPSUM LOREM IPSUM
              </h2>
              <form className="space-y-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  GRATUIT
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Banner */}
      <div className="bg-purple-600 text-white py-4 text-center">
        <p className="text-lg font-semibold">
          OFFRE LIMITÉE -{" "}
          <span className="underline">SEULEMENT AUJOURD&apos;HUI</span>
        </p>
      </div>

      {/* Product Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Biq Book"
              width={400}
              height={500}
              className="shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              NOUS VOUS AIDONS A ÉCRIRE VOTRE FUTUR DU MIEUX POSSIBLE.
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex gap-4">
              <Button className="bg-pink-500 hover:bg-pink-600">
                PURCHASE NOW
              </Button>
              <Button variant="outline">DÉCOUVRIR PLUS</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "LOREM IPSUM LOREM IPSUM",
                gradient: "from-yellow-300 to-blue-400",
              },
              {
                title: "LOREM IPSUM LOREM IPSUM",
                gradient: "from-yellow-300 to-yellow-400",
              },
              {
                title: "LOREM IPSUM LOREM IPSUM",
                gradient: "from-orange-300 to-red-400",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className={`p-8 bg-gradient-to-r ${feature.gradient}`}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 text-center container mx-auto px-4">
        <h2 className="text-3xl font-bold max-w-3xl mx-auto">
          WE&apos;RE CRAZY ABOUT INNOVATIONS AND IMPROVING LIFE WITH TECHNOLOGY.
          WE POUR OUR SKILLS AND PASSION INTO CREATING A DIGITAL PRODUCT.
        </h2>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-teal-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            CLIENTS QUI NOUS FONT CONFIANCE
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 bg-white">
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Client"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">JOHN DOE</p>
                    <p className="text-sm text-gray-500">CEO</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Image
                key={i}
                src="/placeholder.svg"
                alt="Partner logo"
                width={120}
                height={40}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            CHANGEZ VOTRE VIE
            <br />
            AUJOURD&apos;HUI
          </h2>
          <div className="flex gap-4 justify-center">
            <Button className="bg-pink-500 hover:bg-pink-600">
              ACHETER MAINTENANT
            </Button>
            <Button variant="outline">DÉCOUVRIR PLUS</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BIQ 🖋️</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT</h3>
              <Button variant="link" className="text-pink-500 p-0 text-base">
                hello@biq.com
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">BUREAU</h3>
              <p className="text-gray-400">
                12 boulevard Victor Hugo
                <br />
                Clichy Cedex - FRANCE
                <br />
                (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

