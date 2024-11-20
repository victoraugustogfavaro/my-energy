import FormularioEditarContaDeLuz from "@/components/Formulario/FormularioEditarConta";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

function EditarContas({ params }: { params: { id: string } }) {
  return (
    <ProtectedRoute>
      <main>
        <FormularioEditarContaDeLuz params={params} />
      </main>
    </ProtectedRoute>
  );
}

export default EditarContas;
