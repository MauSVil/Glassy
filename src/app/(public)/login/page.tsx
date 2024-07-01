'use client';

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Formik } from "formik"
import APIService from "@/lib/services/APIService";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (values: { email: string, password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      await APIService.post('/api/sign-in', values);
      setSubmitting(false);
      router.replace('/dashboard');
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Error al iniciar sesión',
      })
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="w-full h-full flex items-center justify-center py-12 relative">
        <div className="fixed -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#270c6e_100%)]"></div>
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Escribe tu email y contraseña para acceder a tu cuenta.
            </p>
          </div>
          <Formik
            initialValues={{ email: "maujr10@hotmail.com", password: "Ditoys5535209307." }}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Contraseña</Label>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  Login
                </Button>
              </form>
            )}
          </Formik>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/restaurant.jpeg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.3]"
        />
      </div>
    </div>
  )
}

export default LoginPage
