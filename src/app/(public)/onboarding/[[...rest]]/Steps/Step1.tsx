'use client';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useOrganizationList } from "@clerk/nextjs";
import { FormEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  restaurant: z.string().min(3),
})

export default function CreateOrganization(props: { setStep: (step: number) => void, step: number }){
  const { createOrganization, isLoaded, setActive } = useOrganizationList() || {};
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      restaurant: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      if (isLoaded) {
        const organization = await createOrganization({ name: values.restaurant })
        await setActive({ organization: organization.id });
        props.setStep(2);
      }
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
        <div className="flex justify-end">
          <Button type="submit">Siguiente</Button>
        </div>
      </form>
    </Form>
  );
}