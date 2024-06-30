import Header from "@/components/globals/Header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="fixed -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#270c6e_100%)]"></div>
      <Header />
      <>
      <section className="flex flex-col align-center text-center mt-6">
        <p className="text-muted-foreground">Todo lo que necesita tu restaurante</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[200px]" >GLASSY</h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-40px]">
          <Image
            src="/preview.png"
            alt="Hero Image"
            width={1200}
            height={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-10 md:mt-20 mb-10">
        <h2 className="text-4xl text-center">Escoge el plan que se ajuste a tus necesidades</h2>
        <p className="text-center text-muted-foreground">
          Si no te convencio ninguno de los planes, puedes empezar con el plan gratuito.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {
            pricingCards.map((card, index) => (
              <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {
                "border-2 border-primary": card.title === "Unlimited Saas"
              })}>
                <CardHeader>
                  <CardTitle className={clsx('', {
                    'text-muted-foreground': card.title === "Unlimited Saas"
                  })}>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold">
                    {card.price}
                  </span>
                  <span className="text-muted-foreground">
                    /m
                  </span>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div>
                    {
                      card.features.map((feature) => (
                        <div key={feature} className="flex gap-2 items-center">
                          <Check className="text-muted-foreground" />
                          <p>{feature}</p>
                        </div>
                      ))
                    }
                  </div>
                </CardFooter>
              </Card>
            ))
          }

        </div>
      </section>
    </>
    </section>
  )
}
