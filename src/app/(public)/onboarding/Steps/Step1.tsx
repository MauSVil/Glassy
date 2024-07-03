'use client';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Restaurant } from "@/lib/mongo/types/Restaurant.type";

const formSchema = z.object({
  restaurant: z.string().min(3),
  logo: z.string(),
})

export interface StepProps {
  setStep: (step: number) => void;
  step: number;
  setData: (data: any) => void;
}

export default function CreateOrganization(props: StepProps){
  const [loading, setLoading] = useState(false);
  const { setData } = props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      restaurant: "",
      logo: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      setData((prevState: Partial<Restaurant>) => {
        return {
          ...prevState,
          name: values.restaurant,
          logo: values.logo,
        }
      })
      props.setStep(2);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="restaurant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del restaurante</FormLabel>
              <FormControl>
                <Input placeholder="Restaurante" {...field} />
              </FormControl>
              <FormDescription>
                El nombre de tu restaurante es como lo verán tus clientes.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
              <FormDescription>
                Sube el logo de tu restaurante.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>Siguiente</Button>
        </div>
      </form>
    </Form>
  );
}