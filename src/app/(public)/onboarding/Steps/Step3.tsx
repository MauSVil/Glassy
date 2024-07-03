"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { StepProps } from "./Step1";
import { Restaurant } from "@/lib/mongo/types/Restaurant.type";
import APIService from "@/lib/services/APIService";

const formSchema = z.object({
  kitchenType: z.string().min(3),
  serviceHours: z.string().min(3),
  openingDates: z.string().min(3),
  tables: z.number().min(1),
})

interface Step3Props extends StepProps {
  data: Partial<Restaurant>;
}

const Step3 = (props: Step3Props) => {
  const [loading, setLoading] = useState(false);
  const { setData, data } = props;
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kitchenType: "",
      serviceHours: "",
      openingDates: "",
      tables: 5,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      data.kitchenType = values.kitchenType;
      data.schedule = values.serviceHours;
      data.operationDays = values.openingDates;
      data.tables = values.tables;

      await APIService.post('/api/restaurants', data);

      router.replace('/dashboard');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="kitchenType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de cocina</FormLabel>
              <FormControl>
                <Input placeholder="Mexicana" {...field} />
              </FormControl>
              <FormDescription>
                Proporciona el tipo de cocina que ofrece tu restaurante
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horarios de apertura y cierre</FormLabel>
              <FormControl>
                <Input placeholder="10:00 - 5:00" {...field} />
              </FormControl>
              <FormDescription>
                Proporciona el horario de servicio de tu restaurante
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="openingDates"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dias de operación</FormLabel>
              <FormControl>
                <Input placeholder="L-S" {...field} />
              </FormControl>
              <FormDescription>
                Proporciona los días en los que tu restaurante está abierto
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tables"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mesas</FormLabel>
              <FormControl>
                <Input placeholder="5" {...field} />
              </FormControl>
              <FormDescription>
                Proporciona el número de mesas en tu restaurante
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>Finalizar</Button>
        </div>
      </form>
    </Form>
  );
}

export default Step3;