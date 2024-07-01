const NoOrgnizationSelected = ({}) => {
  return (
    <div className="h-[350px] flex flex-col items-center justify-center col-span-3">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold text-center text-muted-foreground">
          No hay organización seleccionada
        </h2>
        <p className="text-center text-muted-foreground">
          Por favor selecciona una organización para continuar
        </p>
      </div>
    </div>
  )
}

export default NoOrgnizationSelected