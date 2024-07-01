import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  address: z.string().min(3),
  phone: z.string().min(3),
  email: z.string().email(),
})

const Step2 = (props: { setStep: (step: number) => void, step: number }) => {
  const { setStep } = props;
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      phone: "",
      email: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      console.log(values);
      setStep(3);
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
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Direccion</FormLabel>
              <FormControl>
                <Input placeholder="Cd. de Mexico" {...field} />
              </FormControl>
              <FormDescription>
                La dirección de tu restaurante es importante para que tus clientes sepan donde encontrarte
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefono</FormLabel>
              <FormControl>
                <Input placeholder="5545239405" {...field} />
              </FormControl>
              <FormDescription>
                Proporciona un número de teléfono para que tus clientes puedan contactarte
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@email.com" {...field} />
              </FormControl>
              <FormDescription>
                Proporciona un correo electrónico para que tus clientes puedan contactarte
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

export default Step2;