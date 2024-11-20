import FormularioCadastroConta from "@/components/Formulario/FormularioCadConta";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

function CadastrarContas() {
  return (
    <ProtectedRoute>
      <main>
        <FormularioCadastroConta />
      </main>
    </ProtectedRoute>
  );
}

export default CadastrarContas;
